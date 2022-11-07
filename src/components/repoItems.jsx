import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function RepoItems({ handleError }) {
  const params = useParams();

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/repos/Ericchuk/${params.repoId}`
        );
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setLoading(false);
        handleError(err);
      }
    }
    getData();
  }, [params]);

  return (
    <section>
      <Helmet>
        <title>Item.full_name</title>
        <meta
          name="description"
          content="Repository content, various files containing different language and readMe file."
        />
      </Helmet>
      <main>
        {loading ? (
          <div className="listItem reposItem">
            <li>
              <p><b>Name: </b> {user.full_name}</p>
              <a href={user.forks_url}><b>Forked-Url:</b>  {user.forks_url}</a>
              <br />
              <a href={user.html_url}><b>Html-Url</b>  {user.html_url}</a>
              <div>
                <p>
                  <b>Created:</b> {user.created_at}
                </p>
                <p>
                  <b>Updated:</b> {user.updated_at}
                </p>
                <p>
                  <b>Pushed:</b> {user.pushed_at}
                </p>
              </div>
            </li>
          </div>
        ) : (
          <Loading />
        )}
      </main>
    </section>
  );
}
