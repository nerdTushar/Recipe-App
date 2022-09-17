import { useState } from "react"
import Sidebar from "./Sidebar"
import { Link , useLocation} from "react-router-dom"
import { faHome, faList } from "@fortawesome/free-solid-svg-icons"

function Navbar(){
    const [showSidebar, setShowSidebar] = useState(false);
    const location = useLocation();
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        }
    ]

    function closeSidebar(){
        setShowSidebar(false)
    }
    return (
        <>
            <div className="navbar container">
                <Link to='/' className="logo">F<span>oo</span>diesHub</Link>
                <div className="nav-links">
                    { links.map(link => (
                        <Link  to={link.path} className={(location.pathname === link.path)?'active':''} key={link.name}>{link.name}</Link>
                    )) }
                </div>
                <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            { showSidebar && <Sidebar close={closeSidebar} link={links} /> }
        </>
    )
}

export default Navbar;
