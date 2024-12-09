import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className='Navbar'>
                <h1>Brand</h1>
                <div className='Navbar-links'>
                    <Link to="/">Home</Link>
                    <Link to="/create">New Blog</Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;
