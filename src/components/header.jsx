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
          <a><li>Overview </li></a>
          <a><li>Repository <b>20</b></li></a>
          <a><li>Stars <b>10</b></li></a>
        </nav>
        <ErrorCall boundary={boundary} error={error} setRepos={setRepos} />

        
      </header>
    )
}

