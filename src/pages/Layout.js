import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer"

const Layout = ({ user, signOut }) => {
    return (<>

        <div className='w3-theme-d1'>
            <header className='w3-bar w3-theme'>
                <a href="/"><h2 className="w3-bar-item ">Shunting Puzzle generator</h2></a>
                <a href="#" onClick={signOut} className="w3-bar-item w3-button w3-right">Sign out {user.username}</a>
            </header>
            {/* < nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/update">Update</Link>
                    </li>

                </ul>
            </nav */}
            <div >
                <Outlet />
            </div>

        </div>

        <Footer />
    </>
    )
};

export default Layout;
