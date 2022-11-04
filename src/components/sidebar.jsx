import { Link } from 'react-router-dom';
import repo from './images/repository.png';
import Yours from './images/git.png'

export default function SideBar(){
    const icons = [
        {id:1, name: "Repos", icon:repo},
        {id:2, name: "Yours", icon:Yours},
    ]
    const iconsItem = icons.map((item) => {
        return(
            <li key={item.id}>
                <Link to={`/${item.name}`}>
                    <img src={item.icon} alt={item.name} />
                    <span>{item.name}</span>
                </Link>
            </li>
        )
    })

    return(
        <nav>   
            {iconsItem}
        </nav>  
    )
}