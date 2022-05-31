import React, {useEffect, useState} from 'react';
import './header.css';
import { nav } from './navbarComponents'
import { Link } from 'react-router-dom';
import { constants } from '../../Utils/constants'
import { useLocation } from 'react-router-dom';

function Header(props) {
    const location = useLocation();
    const [navElements, setNavElements] = useState(nav);

    useEffect(() => {
        const routeName = location.pathname;
        setNavElements(
            navElements.map((ne) => ne.active = false)
        );
        nav.map((ne) => {
            if(ne.url === routeName) {
                ne.active = true;
            }
        })
    },[])

    return (
        <div className='base'>
            <div className='container-head'>
                <div style={{ width: "10px" }}></div>
                <div className="logo-container">
                    <img className="logo" src={constants?.logo} />
                </div>
                {/* <div style={{ width: "60px" }}></div> */}
                <div className='navbar'>
                    <nav className='navbar-body'>
                        {nav.map((ne) => {
                            return (
                                <Link key={ne.id} className={ne.active ? 'nav-elements-active' : "nav-elements" } to={ne.url}>{ne.label}</Link>
                            )
                        })}
                        {/* <label className='dropdown'>More <AiOutlineDown style={{ paddingTop: "6px" }} />
                            <div className='dropdown-content'>
                                {nav.slice(10).map((ne) => {
                                    return (
                                        <Link className='dropdown-elements' key={ne.id} to={ne.url}>{ne.label}</Link>
                                    )
                                })}
                            </div>
                        </label> */}
                        {/* <div style={{ width: "80px" }}></div>
                        <div style={{border: "2px solid #027ef8", cursor: "pointer", width: "24px", height: "24px", borderRadius: "15px"}}>
                            <constants.AiOutlineUser style={{height: "22px", width: "24px"}} />
                        </div> */}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;