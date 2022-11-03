import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer"

const Layout = ({ user, signOut }) => {
    return (<>

        <div className='w3-theme-d1'>
            <header className='w3-bar w3-theme'>
                <a href="/"><h2 className="w3-bar-item ">Shunting Puzzle generator</h2></a>
                <a href="#" onClick={signOut} className="w3-bar-item w3-button w3-right">Sign out {user.username}</a>
            </header>
            < nav className='w3-bar'>
                <Link to="/stock/favorites" className="w3-bar-item w3-button">Favorites</Link>
                <Link to="/stock/all" className="w3-bar-item w3-button">All</Link>
                <Link to="/stock/3" className="w3-bar-item w3-button">3</Link>
                <Link to="/stock/5" className="w3-bar-item w3-button">5</Link>
                <Link to="/newstock/" className="w3-bar-item w3-button">New</Link>

            </nav >
            <div >
                <Outlet />
            </div>

        </div>

        <Footer />
    </>
    )
};

export default Layout;
