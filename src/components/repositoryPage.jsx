import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import Pagination from "./pagination";
import Loading from "./loading";
import Profile from "./profile";
import star from './images/star.png';
import shinyStar from './images/star (1).png';
import "./repositorys.css";

export default function Repos({
  loading,
  currentUsers,
  prev,
  next,
  paginate,
  pageNumbers,
  currentPage,
  disabled,
  disabled2,
  setRepos,
}) {
  const reps = currentUsers.map((item) => {
    return (
      <>
          <hr />
        <article key={item.id} className="listItem">
          <aside>
            <p><Link to={`/${item.name}`}>{item.full_name}</Link> <small className="privacy">{item.private === false ? "public" : "private"}</small></p>
            

            <p>
              <b>
                {item.language === "CSS"
                  ? "CSS"
                  : item.language === "JavaScript"
                  ? "JavaScript"
                  : item.language === null
                  ? "Oops"
                  : ""}
              </b>
              <small>updated on {item.updated_at}</small>
            </p>
          </aside>
          <button className="gazers">{item.stargazers_count === 0 ? <small><img src={shinyStar} alt='shinyStar'/>Starred</small> : <small><img src={star}  alt="star"/>Star</small>}</button>
        </article>
      </>
    );
  });

  return (
    <section>
      <Helmet>
        <meta name="description" content="Get info for my repository" />
      </Helmet>

      <main>
        <section className="repsOverview">
          <Profile />
          <section className="afterProfile">
            {loading ? <aside className="reps">{reps}</aside> : <Loading />}
          </section>
        </section>

        <Pagination
          prev={prev}
          next={next}
          paginate={paginate}
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          loading={loading}
          disabled={disabled}
          disabled2={disabled2}
        />
        <Outlet />
      </main>
    </section>
  );
}
