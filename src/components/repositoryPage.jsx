import { Link, Outlet } from "react-router-dom";
import Pagination from "./pagination";

export default function Repos({
  loading,
  currentUsers,
  prev,
  next,
  paginate,
  pageNumbers,
  currentPage,
}) {
  // function getName(e){
  //     console.log(e.target)
  // }

  // let {itemId} = useParams();
  // console.log(itemId)

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
      {loading ? reps : <p>Loading...</p>}
      <Pagination
        prev={prev}
        next={next}
        paginate={paginate}
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        loading={loading}
      />
      <Outlet />
    </section>
  );
}
