import React from 'react'
import './About.css';
import { TopNav } from './TopNav';
import { Link } from 'react-router-dom';

//Import Images
import logoshesha from './images/logoshesha.png';


export const About = () => {
  return (<>
    <TopNav />
    {/* Header Section */}
    <header className="masthead_About">
      <div className="container h-100">
        <div className="col-12 text-center">
          <h4 className="fw-light" style={{ position: "relative", top: "250px", fontSize: "60px", fontWeight: "600 ", }}>About Us</h4>
        </div>
      </div>
    </header>
    {/*End Header Section */}

    <h4 className="text-center text-dark my-5" style={{ position: "relative", left: "15%", top: "10px", fontSize: "30px", }}>Less time cooking</h4>
    <h1 className="text-center text-dark my-5" style={{ position: "relative", left: "15%", top: "-5px", fontSize: "50px", }}>More time with loved ones.</h1>


    <p className="text-center text-dark my-5" style={{ position: "relative", left: "15%", top: "-5px", fontSize: "25px", }}>Shesha Foods has taken the best of home cooking and packaged it in a way to allow you to prepare delicious<br />
      meals conveniently and quickly, every time. From soups to stews, pour over sauces to delicious pastas<br />
      and more. We're here to ensure you spend less time cooking, leaving more time for the moments that <br />
      really matter.</p>


    {/*Card Image Section Started*/}
    <h4 className="text-center text-dark my-5" style={{ position: "relative", left: "13%", top: "60px", fontSize: "35px", }}>Meet The Team</h4>

    <hr className='hr2' style={{ width: '30%', color: "black", }} /> {/* Adjust the width as needed */}
    <hr className='hr5' style={{ width: '30%', color: "black", }} /> {/* Adjust the width as needed */}

    <div className="container" style={{ position: "relative", top: "100px", left: "25%", }}>
      <div className="row">
        <div className="col-md-3">
          <div className="card" style={{ border: "none", }} >
            <img src="images/ntlantla.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Ntlantla Lucky</h4>

            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ border: "none", }} >
            <img src="images/sgcobile.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Sgcobile Gijima</h4>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ border: "none", }}>
            <img src="images/ntlantla.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Dildaar Abrahams</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*End Card Image Section Started*/}

    {/*Footer Section Started*/}
    <div className="footer" style={{ background: "black", position: "relative", top: "150px", }}>
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <a href='/Home'><img src={logoshesha} alt="logoshesha.png" style={{ color: "white", }} /><em style={{ fontSize: "30px", textDecoration: "none", }}></em></a>
          <div className="sb_footer-links_div">
            <h4>Contact Info</h4>
            <p><span style={{ color: "whitesmoke", }}>CALL :</span> 021 110 9870</p>
            <p><span style={{ fontWeight: "600", }}>WRITE :</span>  ntlantla.simelela@younglings.africa</p>
            <p><span style={{ fontWeight: "600", }}>FIND US:</span> 20541 Bishop Tutu Street</p>
          </div>

          <div className="sb_footer-links_div">
            <h4>Resources</h4>
            <Link to="https://www.youtube.com/">
              <p style={{ color: "whitesmoke", }}>Youtube</p>
            </Link>
            <Link to="/Recipes">
              <p style={{ color: "whitesmoke", }}>Royco Website</p>
            </Link>
            <Link to="/Recipes">
              <p style={{ color: "whitesmoke", }}>STV</p>
            </Link>
          </div>

          <div className="sb_footer-links_div">
            <h4>Other Information</h4>
            <Link to="/Lessons">
              <p style={{ color: "whitesmoke", }}>LESSONS</p>
            </Link>
            <Link to="/Recipes">
              <p style={{ color: "whitesmoke", }}>RECIPES</p>
            </Link>
            <Link to="/Categories">
              <p style={{ color: "whitesmoke", }}>ARTICLES</p>
            </Link>
            <Link to="/Categories">
              <p style={{ color: "whitesmoke", }}>OUR BRANDS</p>
            </Link>
            <Link to="/Categories">
              <p style={{ color: "whitesmoke", }}>ABOUT US</p>
            </Link>
          </div>
          <div className="sb_footer-links_div">
          </div>
        </div>

        <hr></hr>
        <h6 className="text-start text-light my-5" style={{ color: "white", position: "relative", top: "-20px", left: "2%", color: "white", }}>Copyright @ Shesha Food Recipe. All right reserved.</h6>
      </div>
    </div>
    {/*End the footer Section Started*/}
  </>)
}
