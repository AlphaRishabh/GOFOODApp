import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('userEmail', credentials.email);
      localStorage.setItem('token', json.authToken);
      navigate("/");
    } else {
      alert("Enter Valid Credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container" style={{ marginTop:"10px",opacity:"0.8", marginRight: "790px", width: "120vh", height: "89vh", backgroundImage: 'url("https://w.forfun.com/fetch/df/df264a9f328aca05e8f79ec059122daa.jpeg")', backgroundSize: "100%", border: "inset 4px" }}>
      </div>
      <div className='container' style={{width: "40%", marginLeft: "122vh", paddingLeft: "220px", marginTop: "-89vh", paddingTop: "20vh", backgroundImage: "url('https://wallpaper.dog/large/17155514.jpg')", height: "89vh", border: "inset 4px" }}>
        <form onSubmit={handleSubmit}>
          <div className="m-3" style={{ width: "40vh" }}>
            <label htmlFor="exampleInputEmail1" className="form-label text-light">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone.</div>
          </div>
          <div className="m-3" style={{ width: "40vh" }}>
            <label htmlFor="exampleInputPassword1" className="form-label text-light">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/" className="m-3 mx-1 btn btn-danger">New User</Link>
        </form>
      </div>
    </>
  );
}

