import Noroute from "./404page";
import ErrorBoundaryFallback from "./errorBoundary";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import Repos from "./repositoryPage";
import RepoItems from "./repoItems";
import Home from "./home";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary, useErrorHandler } from "react-error-boundary";

export default function LandingPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleError = useErrorHandler();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.github.com/users/ericchuk/repos"
        );
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setLoading(false);
        handleError(err)
      }
    }
    getData();
  }, []);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentUsers = repos.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];


  for(let i = 1; i < Math.ceil(repos.length  / postsPerPage + 1); i++){
      pageNumbers.push(i);
  }

  // change page 
  function paginate(pageNumber){
      setCurrentPage(pageNumber);
  }

  // prev 
  function prev(e){
      if(currentPage > 1){
          setCurrentPage(currentPage - 1);
          e.target.disabled = false;
      }else{
          e.target.disabled = true;
      }
  }

  // next 
  function next(e){
      if(currentPage < pageNumbers.length){
          setCurrentPage(currentPage + 1);
          e.target.disabled = false;
      }else{
          e.target.disabled = true;
      }
  }


  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
      <article>
        <Helmet>
          <title>Git Repo</title>
          <meta name="description" content="Get info for my repository" />
        </Helmet>

        {/* <Noroute /> */}
        {/* <ErrorBoundary /> */}
        <Repos repos={repos} loading={loading} currentUsers={currentUsers} prev={prev} next={next} paginate={paginate} pageNumbers={pageNumbers} currentPage={currentPage} />
        {/* <RepoItems /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repositoryPage" element={<Repos />} />
          <Route path="/repository/:repoId" element={<RepoItems />} />
          <Route path="*" element={<Noroute />} />
        </Routes>
      </article>
    </ErrorBoundary>
  );
}
