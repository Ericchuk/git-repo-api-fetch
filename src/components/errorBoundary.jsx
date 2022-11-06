import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

export default function ErrorFallback({ error }) {
    return (
      <div role="alert">
        <Helmet>
          <title>Error Boundary</title>
          <meta name="description" content="This page shows up when error occur in any component."/>
        </Helmet>

        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <Link to='/'>Home</Link>
      </div>
    );
  }