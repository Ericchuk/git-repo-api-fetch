import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
export default function RepoItems({setLoading,handleError}) {
  const params = useParams();

  const [user,setUser] = useState([]);

  useEffect(() => {
    async function getData() {
        try {
          setLoading(true);
          const response = await fetch(
            `https://api.github.com/users/ericchuk/repos/${params.repoId}`
          );
          const data = await response.json();
          setUser(data);
        } catch (err) {
          setLoading(false);
          handleError(err)
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
        {/* {loading ? <div>
            
        </div>: <p>Loading...</p>} */}
        <div className='listItem'>
            <li>{user.full_name}</li>
        </div> 
        {/* {console.log(repos)} */}
        {console.log(user)}
      </main>
      
    </section>
  );
}
