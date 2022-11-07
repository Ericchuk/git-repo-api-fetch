import { Link, Outlet } from "react-router-dom";
import { Helmet } from 'react-helmet'
import Pagination from "./pagination";
import Logo from './images/github.png';
import css from './images/css-3.png';
import js from './images/js.png';
import error from './images/error.png';
import Loading from './loading';
import ErrorCall from './errorCall'



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
  setRepos
}) {
  const reps = currentUsers.map((item) => {
    return (
      <>
      <Link to={`/${item.name}`} key={item.id} className="listItem">
        {/* <p key={item.id} > */}
          {/* <Link to={`/${item.id}`} > */}
            <p>{item.full_name}</p>
          {/* </Link> */}
          <span>
            <b>Language: {item.language === "CSS" ? <img src={css} alt={item.language} /> : item.language === "JavaScript" ? <img src={js} alt={item.language}/> : item.language === null ? "Oops" : ''}</b>
            <b>Watchers: {item.watchers === 0 ?  "1" : 1 + item.watchers}</b>
          </span>
          
        {/* </p> */}
      </Link>
        
      </>
    );
  });

  function boundary(){
    setRepos("efede")
  }

  return (
    <section>
      <Helmet>
          <meta name="description" content="Get info for my repository" />
        </Helmet>
      <header>
        <Link to="/">
          <img src={Logo} alt="Logo" />
          <h1>Git-Repo</h1>
        </Link>
        <ErrorCall boundary={boundary} error={error} setRepos={setRepos} />
      </header>
      <main>
        {loading ? reps : <Loading /> }
        
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
