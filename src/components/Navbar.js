import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('userEmail');
        if (user) {
            const capitalizedUserName = user.charAt(0).toUpperCase() + user.slice(1);
            setUserName(capitalizedUserName.split('@gmail.com'));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userEmail');
        navigate("/login");
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary position-sticky"
                style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-5 mx-3" aria-current="page" to="/">Home</Link>
                            </li>
                            {userName && (
                                <li className="nav-item">
                                    <Link className="nav-link fs-5 mx-3" aria-current="page" to="/myorder">My Orders</Link>
                                </li>
                            )}
                        </ul>
                        {userName ? (
                            <div>
                                <span className="text-white mx-2" style={{ paddingRight: "80vh", fontSize: "40px" }}><i>Welcome {userName}</i></span>
                                <button onClick={handleLogout} className="btn bg-white text-success">Logout</button>
                            </div>
                        ) : (
                            <form className="d-flex">
                                <Link className="btn bg-white text-success mx-1 " to="/login">Login</Link>
                                <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>
                            </form>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}
