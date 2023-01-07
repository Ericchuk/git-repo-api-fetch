import ErrorCall from './errorCall'
import error from './images/error.png';
import Logo from './images/github.png';
import hamburger from './images/hamburger.png';
import close from './images/close.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({setRepos}){ 
    const [openMenu,setOpenMenu] = useState(true);

    function boundary(){
        setRepos("efede")
    }

    function openNav(){
      setOpenMenu(!openMenu)
    }

    function closeNav(){
      setOpenMenu(!openMenu)
    }


    return(
        <header>
         {openMenu ? <img src={hamburger} alt="menu" className="open" onClick={openNav}/> : <img src={close} alt="close" className="close" onClick={closeNav}/>}
        
        <Link to="/">
          <img src={Logo} alt="Logo" />
          <h1>Git-Repo</h1>
        </Link>
        <nav className={openMenu ? "unav" : "nav"}>
          <Link to="/"><li>Overview </li></Link>
          <Link to=""><li>Repository <b>20</b></li></Link>
          <Link to=""><li>Stars <b>10</b></li></Link>
        </nav>
        <ErrorCall boundary={boundary} error={error} setRepos={setRepos} />

        
      </header>
    )
}

