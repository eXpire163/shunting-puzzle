import { Outlet, Link } from "react-router-dom";

const Layout = ({ user, signOut }) => {
    return (
        <>
            <header className='w3-bar w3-theme'>
                <h2 className="w3-bar-item ">Shunting Puzzle generator</h2>
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

            <Outlet />
        </>
    )
};

export default Layout;
