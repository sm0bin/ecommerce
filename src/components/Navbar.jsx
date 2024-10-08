import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 fixed top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink></li>
                        <li><NavLink to='/signup'>Sign Up</NavLink></li>
                        <li><NavLink to='/products'>Products</NavLink></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl font-bold">Ecommerce</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/signup'>Sign Up</NavLink></li>
                    <li><NavLink to='/products'>Products</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to='/login' className="btn btn-primary">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;