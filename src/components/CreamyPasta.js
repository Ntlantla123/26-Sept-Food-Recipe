import React from 'react'
import './BreadForTimes.css';
import { TopNav } from './TopNav'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import logoshesha from './images/logoshesha.png';

import { Container } from 'react-bootstrap'
import { faFacebook, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function breadForTimes() {
  return (<>
    <TopNav />
    <header className="Header_Bread12">
    </header>

    <div className="text-center" style={{ position: "relative", left: "7%", top: "10vh", }}>
      <h4 style={{ fontSize: "50px", fontWeight: "600", }}>Creamy Pasta & Tomato</h4>
    </div>

    <img src="images/pasta.jpeg" style={{ width: "80%", position: "relative", left: "20%", top: "15vh", }} class="img-thumbnail" alt="" fluid />

{/*row section */}
<Row style={{ position: "relative", left: "21%", top: "25vh", }}>
      <Col >
        <h4 style={{ fontWeight: "600", }}>Cooking time</h4>
        <li style={{ fontSize: "20px", color: "red", }}> 30 - 40 mins</li>
      </Col>
      <Col >
        <h4 style={{ fontWeight: "600", }}>Preparation time</h4>
        <li style={{ fontSize: "20px", color: "red", }}> 30 mins</li>
      </Col>
    </Row>

    {/*end row section */}
    <div className="text" style={{ position: "relative", left: "20%", fontSize: "23px", top: "30vh", }}>
    <p>Beyond the obvious option of using tomato paste to make a tomato-heavy recipe, like <br/>sauce or soup, you can also use tomato paste to elevate the flavor of other recipes—like<br/>
     we did in this Jackfruit Sloppy Joes recipe, in the dipping sauce for these Air-Fryer Zucchini<br/>
      Fries and in our Slow-Cooker Butter Chicken recipe.</p>
</div>


<Container >
      <div className="singleCol social-media-icons-white d-flex justify-content-evenly" style={{ position: "relative", top: "32vh", left: "4%", }}>
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
    <hr className='hr2_Bread' /> {/* Adjust the width as needed */}
    {/*end paragraph */}


    {/*Start Column Section */}
    <Row style={{ position: "relative", left: "21%", top: "40vh", }}>
      <Col>
        <h4 style={{ fontWeight: "600", }}>Ingredients:</h4>
        <ul>
          <li style={{ fontSize: "20px", }}>8 ounces uncooked pasta </li>
          <li style={{ fontSize: "20px", }}>2 tablespoons butter</li>
          <li style={{ fontSize: "20px", }}> 2-3 cloves garlic minced</li>
          <li style={{ fontSize: "20px", }}> 2 tablespoons tomato paste</li>
          <li style={{ fontSize: "20px", }}> 1 (14 ounce) can tomato sauce</li>
        </ul>
      </Col>
      </Row>
      <Row style={{ position: "relative", left: "21%", top: "48vh", }}>

      <Col >
        <h4 style={{ fontWeight: "600", }}>Methods:</h4>
        <ol>
          <li style={{ fontSize: "20px", }}> Add a Splash of Red Wine.</li>
          <li style={{ fontSize: "20px", }}>Mix in Some Meat.</li>
          <li style={{ fontSize: "20px", }}>Spice It Up.</li>
          <li style={{ fontSize: "20px", }}> Get Cheesy.</li>
          <li style={{ fontSize: "20px", }}>Stir in More Dairy.</li>
          <li style={{ fontSize: "20px", }}> Pop It in the Oven.</li>
          <li style={{ fontSize: "20px", }}>Sautee Some Veggies. </li>
        </ol>
      </Col>
    </Row>
    {/*End Column Section */}


    {/*Start Heading & Paragraph Section */}
     <div className="text" style={{ position: "relative", left: "20%", top: "20vh", }}>
      <p style={{ position: "relative", top: "30vh", fontSize: "22px", }}>A beautifully flavoured bread for your next gathering, with a little help from Royco® Tomato Bredie Dry Cook in Sauce.</p>
    </div>

    <div style={{ position: "relative", top: "30vh" }}>
    <h4 className="text-start text-dark my-5" style={{ position: "relative", left: "20%", top: "170px", fontSize: "40px", }}>Vegetarian</h4>
    <p className="text-start text-dark my-5" style={{ position: "relative", left: "20%", top: "160px", fontSize: "20px", }}> This recipe is suitable for vegetarians</p>

    <h4 className="text-start text-dark my-5" style={{ position: "relative", left: "20%", top: "170px", fontSize: "30px", }}>Family Friendly</h4>
    <p className="text-start text-dark my-5" style={{ position: "relative", left: "20%", top: "160px", fontSize: "20px", }}>CReamy Pasta And Tomato is perfect for chefs that cook. Get them in on the<br /> mixing and enjoy the magic of the Creamy Pasta and Tamoto.</p>
    </div>
    {/*End Heading & Paragraph Section */}

   {/*Footer Section Started*/}
   <div className="footer" style={{ background: "black", position:"relative",top:"450px",}}>
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <a href='/Home'><img src={logoshesha} alt="logoshesha.png" style={{ color: "white", }} /><em style={{ fontSize: "30px", textDecoration: "none", }}></em></a>
          <div className="sb_footer-links_div">
            <h4>Contact Info</h4>
             <p><span style={{  color: "whitesmoke", }}>CALL :</span> 021 110 9870</p>
              <p><span style={{fontWeight:"600",}}>WRITE :</span>  ntlantla.simelela@younglings.africa</p>
              <p><span style={{fontWeight:"600",}}>FIND US:</span> 20541 Bishop Tutu Street</p>
          </div>

          <div className="sb_footer-links_div">
            <h4>Resources</h4>
            <Link to="https://www.youtube.com/">
              <p style={{  color: "whitesmoke", }}>Youtube</p>
            </Link>
            <Link to="/Recipes">
              <p style={{  color: "whitesmoke", }}>Royco Website</p>
            </Link>
            <Link to="/Recipes">
              <p style={{  color: "whitesmoke", }}>STV</p>
            </Link>
          </div>

          <div className="sb_footer-links_div">
            <h4>Other Information</h4>
            <Link to="/Lessons">
              <p style={{  color: "whitesmoke", }}>LESSONS</p>
            </Link>
            <Link to="/Recipes">
              <p style={{ color: "whitesmoke", }}>RECIPES</p>
            </Link>
            <Link to="/Categories">
              <p style={{  color: "whitesmoke", }}>ARTICLES</p>
            </Link>
            <Link to="/Categories">
              <p style={{  color: "whitesmoke", }}>OUR BRANDS</p>
            </Link>
            <Link to="/Categories">
              <p style={{  color: "whitesmoke", }}>ABOUT US</p>
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

  </>
  )
}
