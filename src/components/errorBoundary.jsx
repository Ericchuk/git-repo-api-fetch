import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';

export default function ErrorFallback({ error}) {
    const nav = useNavigate()
    const handleClick = e => {
        e.preventDefault()
        nav('/')
        window.location.reload(false);
    }
    return (
      <div role="alert">
        <Helmet>
          <title>Error Boundary</title>
          <meta name="description" content="This page shows up when error occur in any component."/>
        </Helmet>

        <p>Something went wrong:</p>
        <pre>{error.message}</pre>

        <button onClick={handleClick} >Try Again </button>
      </div>
    );
  }