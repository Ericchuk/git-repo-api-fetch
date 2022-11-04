import { Link, Outlet } from "react-router-dom";
import Pagination from "./pagination";
import Logo from './images/github.png';

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
        <p key={item.id}>
          <Link to={`/repositoryPage/${item.id}`} >
            {item.full_name}
          </Link>
        </p>
      </>
    );
  });
  return (
    <section>
      <Link to='/'>
                    <img src={Logo} alt="Logo" />
                </Link>
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
    </section>
  );
}
