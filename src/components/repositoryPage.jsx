import { Link, Outlet } from "react-router-dom";
import Pagination from "./pagination";
import Logo from './images/github.png';
import css from './images/css-3.png';
import js from './images/js.png';


export default function Repos({
  loading,
  currentUsers,
  prev,
  next,
  paginate,
  pageNumbers,
  currentPage,
  disabled,
  disabled2
}) {
  const reps = currentUsers.map((item) => {
    return (
      <>
        <p key={item.id} className="listItem">
          <Link to={`/repositoryPage/${item.id}`} >
            {item.full_name}
          </Link>
          <span>
            <b>Language: {item.language === "CSS" ? <img src={css} alt={item.language} /> : item.language === "JavaScript" ? <img src={js} alt={item.language}/> : item.language === null ? "Oops" : ''}</b>
            <b>Watchers: {item.watchers === 0 ?  "1" : 1 + item.watchers}</b>
          </span>
          
        </p>
      </>
    );
  });
  return (
    <section>
      <header>
        <Link to="/">
          <img src={Logo} alt="Logo" />
          <h1>Git-Repo</h1>
        </Link>
      </header>
      <main>
        {loading ? reps : <p>Loading...</p>}
        
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
