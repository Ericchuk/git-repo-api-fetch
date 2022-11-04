import { Helmet } from 'react-helmet';
import html from './images/html-5.png';
import css from './images/css-3.png';
import javascript from './images/js.png';
import react from './images/atom.png';


export default function Home(){
    const circle = [
        {id:1, name:'HTML',img:html},
        {id:2, name:'CSS',img:css},
        {id:3, name:'JavaScript',img:javascript},
        {id:4, name:'React', img:react}
    ]
    const circleItem = circle.map((item) => {
        return(
            <div key={item.id}>
                <div>
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                </div>
                
            </div>
        )
    })

    return(
        <section className="homepage">
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content='The home page section' />
            </Helmet>
            <aside>
                <h3>GIT-REPO</h3>
                <h1>WELCOME</h1>
                <p>This is a simple app that fetches data from the github api and displays it on the page.</p>
            </aside>
            <div>
                {circleItem}
            </div>
        </section>
    )
}