import React from 'react'
import './Articles.css';
import { TopNav } from './TopNav';
import { Link } from 'react-router-dom';

import logoshesha from './images/logoshesha.png';

import { Container } from 'react-bootstrap'

import { faFacebook, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Articles() {
  return (<>
    <TopNav />
    {/* Header Section */}
    <header className="masthead_Articles">
      <div className="container h-100">
        <div className="col-12 text-center">
          <h4 className="fw-light" style={{ position: "relative", top: "250px", fontSize: "65px",}}>Article</h4>
          <p className="text-center text-light my-5" style={{ position: "relative", left: "1%", top: "80px", fontSize: "20px", }}>Want to know more about us</p>                </div> 
      </div>
    </header>
    {/*End Header Section */}
    <div style={{ position: "relative", top: "-20px", }}>
      <p className="text-start text-dark my-5" style={{ position: "relative", top: "-20px", left: "20%", fontSize: "23px", fontWeight: "600", }}>Make Our recipe Your Own</p>

      <h2 className="text-start text-dark my-5" style={{ position: "relative", top: "10px", left: "19%", fontSize: "50px", fontWeight: "600", }}>Make Our recipe Your Own</h2>
      <p className="text-start text-dark my-5" style={{ position: "relative", top: "-20px", left: "20%", fontSize: "23px", }}>Published August 12, 2023</p>
    </div>
    <Container >
      <div className="singleCol social-media-icons-white d-flex justify-content-evenly" style={{ position: "relative", top: "-5vh", left: "2%", }}>
        <a href="https://facebook.com" >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://facebook.com" >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://facebook.com" >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://facebook.com" >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </Container>
    <hr className="hr_Articles" />

    <p className="text-start text-dark my-5" style={{ position: "relative", top: "-20px", left: "20%", fontSize: "23px", }}>Our recipes are here to be customised to your family's taste.<br />
      Skip the chilli, switch the chicken for beef, or add your own flavour with a sprinkle<br />
      of this and a dash of that. We get the creative juices flowing with three<br />
      recipes that can be reinvented over and over again.</p>

    <h4 className="text-start text-dark my-5" style={{ position: "relative", top: "-20px", left: "20%", fontSize: "23px", fontWeight: "600", }}>Make Our recipe Your Own</h4>

    <p className="text-start text-dark my-5" style={{ position: "relative", top: "-20px", left: "20%", fontSize: "23px", }}>This Meatball recipe is a dish that can be enjoyed in so many ways.<br />
      All you have to do is change up how you serve them. The classic serving <br />
      suggestion is with spaghetti, topped with shaved parmesan, but with a bit<br />
      of inspiration they can be transformed into a completely new dinner idea.<br /><br /><br />

      Make these Meatballs South African by filling hotdog rolls with meatballs<br />
      and all the trimmings to make mini Gatsby's. Add a bit of cumin,<br />
      coriander, and sumac to the meatball mixture, and serve on top of a bed<br />
      of couscous for a middle eastern twist. These little meatballs also make for<br />
      great starters or picnic snacks, simply stick a toothpick in each meatball and voila.</p>

    <h4 className="text-start text-dark my-5" style={{ position: "relative", top: "-20px", left: "20%", fontSize: "23px", fontWeight: "600", }}>CHICKEN THAT KEEPS CHANGING</h4>
    <p className="text-start text-dark my-5" style={{ position: "relative", top: "-20px", left: "20%", fontSize: "23px", }}>Our Oriental Drumsticks recipe is one of our<br />
      most popular recipes on our website. It's no mystery why - Royco Chicken Marinade is amplified with<br />
      the addition of some classic Asian flavours of Ginger, 5-spice and soy sauce.<br />
      Using the same principles this recipe can be taken around the <br />
      world and adjusted to pay homage to various international cuisines.<br /><br /><br />

      Add a combination of ground cumin, ginger, paprika, coriander,<br />
      cayenne pepper and turmeric to our chicken marinade to transform your<br />
      chicken into a version reminiscent of Indian tandoori chicken. Love Thai flavours?<br />
      Whiz up our chicken marinade, lemongrass, ginger, fish sauce,<br />
      chilli and fresh coriander as a marinade. For a tangy lemon and herb version,<br />
      squeeze lemon juice and a combination of chopped fresh herbs into Royco Chicken Marinade.</p>

    <h4 className="text-start text-dark my-5" style={{ position: "relative", top: "-20px", left: "20%", fontSize: "23px", fontWeight: "600", }}>FRIDGE-RAID RISOTTO</h4>
    <p className="text-start text-dark my-5" style={{ position: "relative", top: "-20px", left: "20%", fontSize: "23px", }}>Risotto is an all-in-one rice dish originating from the North of Italy.<br />
      The arborio rice used releases starch while being cooked, creating a<br />
      delicious, creamy sauce. Risotto is known for its versatility and is a great<br />
      weeknight meal that can be changed up with the ingredients that are<br />
      already in your kitchen.<br /><br /><br />

      Make sure that you always have Royco Chicken A La King Dry Cook-in<br />
      Sauce and arborio rice in the pantry as your base, and raid your fridge<br />
      and freezer to add your own flavour to this recipe. Some great<br />
      combinations other than chicken and mushroom are, frozen peas and bacon,<br />
      cherry tomatoes and fresh basil or salmon and asparagus.<br />
      Get creative and try your own version.</p>

    {/*Card Image Section Started*/}
    <section className="section_Articles">
      <h1 className="text-center text-dark my-5" style={{ position: "relative", top: "120px", fontSize: "3.8rem", }}>Recipes mentioned in the article</h1>

      <div className="container" style={{ position: "relative", top: "180px", }}>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src="images/4x4-Bread.webp" className="card-img-top" alt="" />
              <div className="card-body">
                <h4 className="card-title" style={{ fontWeight: "600", }}>4x4 Bread</h4>
                <p className="card-text" style={{ position: "relative", top: "10px", }}>Cooking Time Preparation Time<br />
                  <span style={{ fontWeight: "bold", }}> 15 mins   25 mins</span></p>
                <a href="/BreadForTimes" className="btn btn-primary" style={{ borderColor: "black", backgroundColor: "white", color: "black", position: "relative", top: "7px", }}>View Recipe</a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src="images/tomatoSauceMeatBalls.avif" className="card-img-top" alt="" />
              <div className="card-body">
                <h4 className="card-title" style={{ fontWeight: "600", }}>Meat Balls, Tomato Sauce</h4>
                <p className="card-text" style={{ position: "relative", top: "10px", }}>Cooking Time Preparation Time<br />
                  <span style={{ fontWeight: "bold", }}> 15 mins   25 mins</span></p>
                <a href="/MeatBalls" className="btn btn-primary" style={{ borderColor: "black", backgroundColor: "white", color: "black", position: "relative", top: "7px", }}>View Recipe</a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src="images/creamyChickenAndRositto.jpg" className="card-img-top" alt="" />
              <div className="card-body">
                <h4 className="card-title" style={{ fontWeight: "600", }}>Creamy Chicken Rossitto</h4>
                <p className="card-text" style={{ position: "relative", top: "10px", }}>Cooking Time Preparation Time<br />
                  <span style={{ fontWeight: "bold", }}> 25 mins   55 mins</span></p>
                <a href="/CreamyChickenRossitto" className="btn btn-primary" style={{ borderColor: "black", backgroundColor: "white", color: "black", position: "relative", top: "7px", }}>View Recipe</a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src="images/orientalDrumsticks.jpg" className="card-img-top" alt="" />
              <div className="card-body">
                <h4 className="card-title" style={{ fontWeight: "600", }}>Oriental Drumsticks</h4>
                <p className="card-text" style={{ position: "relative", top: "10px", }}>Cooking Time Preparation Time<br />
                  <span style={{ fontWeight: "bold", }}> 15 mins   20 mins</span></p>
                <a href="/OrientalDrumStick" className="btn btn-primary" style={{ borderColor: "black", backgroundColor: "white", color: "black", position: "relative", top: "7px", }}>View Recipe</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Card Image Section Started*/}
    </section>


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
