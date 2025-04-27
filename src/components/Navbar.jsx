import logo from '../assets/walled-logo.png';
import dayNightIcon from '../assets/walled-icon-daynight.png'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white mb-4">
                <div className="container">
                    <a href="#" className="navbar-brand">
                        <img src={logo} alt="Walled Logo" width="163.2" height="40"/>
                    </a>
                    <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id='navbarSupportedContent'>
                        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a href="#" className='nav-link active' aria-current="page">Dashboard</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#" className='nav-link'>Transfer</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#" className='nav-link'>Topup</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#" className='nav-link'>Sign Out</a>
                            </li>
                        </ul>
                    </div>

                    <div className="vr mx-2"></div>

                    <button className="btn">
                        <img src={ dayNightIcon } alt="Icon" width="24" height="24" />
                    </button>


                </div>
            </nav>
        </>
    );
};

export default Navbar;