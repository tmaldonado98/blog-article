import './styles/globals.css';
import { GrFacebook, GrTwitter, GrInstagram, GrPinterest } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';


export default function NavBar() {
    
    const [menu, setMenu] = useState(true);

    const openedMenuStyle = { transform: 'translateX(0%)', transition: '350ms ease-in-out', color:'ivory' };
    const closedMenuStyle = { transform: 'translateX(100%)', transition: '350ms ease-in-out'};

    const openedHambStyle = { color: 'ivory' };
    const closedHambStyle = { color: 'black' };

    function handleHamburgerMenu() {
        setMenu(prevState => !prevState)
    }

    return (
        <>
            <button onClick={handleHamburgerMenu} style={menu === true ? openedHambStyle : closedHambStyle}
                    className='mobile-nav-toggle' aria-controls='primary-navigation'
                aria-expanded='false'>
                
                <span className='sr-only'>Menu  </span>
                <GiHamburgerMenu />
            </button>
            
        
        <nav className="navbar" style={menu === true ? openedMenuStyle : closedMenuStyle}>
            {/* <div className="container-nav-buttons"> */}
                <div>
                    <button className="buttonNav">Home</button>
                    <button className="buttonNav">About</button>
                    <button className="buttonNav">Contact</button>
                    <button className="buttonNav">Shop</button>
                </div>
                <div>
                    <button className="buttonNav"><GrFacebook /> <br/> Facebook</button>
                    <button className="buttonNav"><GrTwitter /> <br/> Twitter</button>
                    <button className="buttonNav"><GrInstagram /> <br/> Instagram</button>
                    <button className="buttonNav"><GrPinterest /> <br/> Pinterest</button>
                </div>
            {/* </div> */}
            </nav>
        </>
    )
}