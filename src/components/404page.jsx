import { Helmet } from "react-helmet";

export default function Noroute(){
    return(
        <section>
            <Helmet>
                <title>404 Page</title>
                <meta name="description" content="This page shows up when the user navigate to a route that does not exist in the routes."/>
            </Helmet>
            <h1>404</h1>
            <p>We apologies, no route of such exist here</p>
            <a href="/">Home</a>
        </section>
    )
}