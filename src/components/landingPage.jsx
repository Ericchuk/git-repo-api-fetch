import Noroute from "./404page";
import ErrorBoundaryFallback from "./errorBoundary";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import Repos from "./repositoryPage";
import RepoItems from "./repoItems";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary, useErrorHandler } from "react-error-boundary";
import Home from './homePage';


export default function LandingPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleError = useErrorHandler();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [disabled, setDisabled] = useState(true);
  const [disabled2, setDisabled2] = useState(false);
  const [show, setShow] = useState(true);

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

  useEffect(() => {
    const timer = setTimeout(() => {
        setShow(false)
      }, 10000);
      return () => clearTimeout(timer);
}, [show])


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
          setDisabled2(false)
      }else{
          setDisabled(true)
          setDisabled2(false)
      }
  }

  // next 
  function next(e){
      if(currentPage < pageNumbers.length){
          setCurrentPage(currentPage + 1);
          setDisabled(false)
      }else{
          setDisabled2(true)
      }
  }
 

  return (
    <ErrorBoundary setRepos={setRepos} FallbackComponent={ErrorBoundaryFallback}>
      <article>
        <Helmet>
          <title>Git Repo</title>
          <meta name="description" content="Get info for my repository" />
        </Helmet>
        
        {show ? <Home /> : ''}
      {!show ?  <Routes>      
          <Route path="/" element={<Repos repos={repos} loading={loading} currentUsers={currentUsers} prev={prev} next={next} paginate={paginate} pageNumbers={pageNumbers} currentPage={currentPage} disabled={disabled} disabled2={disabled2} setRepos={setRepos} />} />
          <Route path="/:repoId" element={<RepoItems setLoading={setLoading} setRepos={setRepos} handleError={handleError} />} />
          <Route path="*" element={<Noroute />} />
        </Routes> : ""}
      </article>
    </ErrorBoundary>
  );
}
 