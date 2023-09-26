import React from 'react'
import './BreadForTimes.css';
import { TopNav } from './TopNav'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import logoshesha from './images/logoshesha.png';
import { Button } from 'react-bootstrap';

export default function breadForTimes() {
  return (<>
    <TopNav />
    <header className="Header_Bread12">
    </header>

    <div className="text" style={{ position: "relative", left: "20%", top: "10vh", }}>
      <h1>Creamy Chicken Rissitto</h1>
      <p>Unlike other rice recipes that require simmering in a pot of water, risotto is cooked very slowly by adding small amounts of liquid at a time. This process allows the rice to release its starches, creating a rich, velvety sauce with soft but slightly al dente grains.</p>
    </div>

    <img src="images/creamyChickenAndRositto.jpg" style={{ width: "80%", position: "relative", left: "20%", top: "15vh", }} class="img-thumbnail" alt="" fluid />



    {/*Start Column Section */}
    <Row style={{ position: "relative", left: "21%", top: "20vh", }}>
      <Col>
        <h4 style={{ fontWeight: "600", }}>Ingredients:</h4>
        <ul>
          <li style={{ fontSize: "20px", }}> Chicken broth</li>
          <li style={{ fontSize: "20px", }}> Arborio rice,</li>
          <li style={{ fontSize: "20px", }}> Parmesan,parsley</li>
          <li style={{ fontSize: "20px", }}> Garlic</li>
          <li style={{ fontSize: "20px", }}> Olive oil</li>
          <li style={{ fontSize: "20px", }}> Kosher salt</li>
          <li style={{ fontSize: "20px", }}> Chicken thighs</li>
          <li style={{ fontSize: "20px", }}> Celery, carrot</li>
          <li style={{ fontSize: "20px", }}> Onion, white wine</li>
          <li style={{ fontSize: "20px", }}> Bay leaves</li>
        </ul>
      </Col>
      <Col >
        <h4 style={{ fontWeight: "600", }}>Methods:</h4>
        <ol>
          <li style={{ fontSize: "20px", }}> Add hot stock</li>
          <li style={{ fontSize: "20px", }}> A ladleful at a time, to the rice and cook slowly,<br/> stirring often, so that the stock is absorbed. </li>
          <li style={{ fontSize: "20px", }}> The technique is called the risotto method</li>
        </ol>
      </Col>
    </Row>
    {/*End Column Section */}


    {/*Start Heading & Paragraph Section */}
    <div className="text" style={{ position: "relative", left: "20%", top: "20vh", }}>
      <p style={{ position: "relative", top: "10px", fontSize: "22px", }}>A beautifully flavoured bread for your next gathering, with a little help from Royco® Tomato Bredie Dry Cook in Sauce.</p>
    </div>

    <h4 className="text-start text-dark my-5" style={{ position: "relative", left: "20%", top: "170px", fontSize: "40px", }}>Vegetarian</h4>
    <p className="text-start text-dark my-5" style={{ position: "relative", left: "20%", top: "160px", fontSize: "20px", }}> This recipe is suitable for vegetarians</p>

    <h4 className="text-start text-dark my-5" style={{ position: "relative", left: "20%", top: "170px", fontSize: "30px", }}>Family Friendly</h4>
    <p className="text-start text-dark my-5" style={{ position: "relative", left: "20%", top: "160px", fontSize: "20px", }}>CReamy Pasta And Tomato is perfect for chefs that cook. Get them in on the<br /> mixing and enjoy the magic of the Creamy Pasta and Tamoto.</p>
    {/*End Heading & Paragraph Section */}

    {/*Footer Section Started*/}
    <div className="footer" style={{ background: "grey",position:"relative",top:"260px", }}>
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <a href='/Home'><img src={logoshesha} alt="logoshesha.png" style={{ color: "white", }} /><em style={{ fontSize: "30px", textDecoration: "none", }}></em></a>
          <div className="sb_footer-links_div">
            <h3>Contact</h3>
            <Link to="/Contact">
              <p style={{ fontWeight: "600", color: "whitesmoke", }}><i>Linkedin</i></p>
            </Link>
            <Link to="/Lessons">
              <p style={{ fontWeight: "600", color: "whitesmoke", }}><i>Facebook</i></p>
            </Link>
            <Link to="/Recipes">
              <p style={{ fontWeight: "600", color: "whitesmoke", }}><i>GitHub</i></p>
            </Link>
          </div>
          <div className="sb_footer-links_div">
            <h3>Resources</h3>
            <Link to="https://www.youtube.com/">
              <p style={{ fontWeight: "600", color: "whitesmoke", }}>Youtube</p>
            </Link>
            <Link to="/Recipes">
              <p style={{ fontWeight: "600", color: "whitesmoke", }}>Royco Website</p>
            </Link>
            <Link to="/Recipes">
              <p style={{ fontWeight: "600", color: "whitesmoke", }}>STV</p>
            </Link>
          </div>

          <div className="sb_footer-links_div">
            <h3>Quick Links</h3>
            <Link to="/Home">
              <p style={{ fontWeight: "600", color: "whitesmoke", }}>Home</p>
            </Link>
            <Link to="/Lessons">
              <p style={{ fontWeight: "600", color: "whitesmoke", }}>Lessons</p>
            </Link>
            <Link to="/Recipes">
              <p style={{ fontWeight: "600", color: "whitesmoke", }}>Recipe</p>
            </Link>
            <Link to="/Categories">
              <p style={{ fontWeight: "600", color: "whitesmoke", }}>Categories</p>
            </Link>
          </div>
          <div className="sb_footer-links_div">
          </div>
        </div>

        <hr></hr>

        <h6 className="text-start text-dark my-5" style={{ color: "white", position: "relative", top: "20px", left: "0%", color: "black", }}>Copyright @ Shesha Food Recipe. All right reserved.</h6>
        <a href='https://www.royco.co.za/'><Button variant="light" style={{ width: "15%", }}>See All</Button>{' '}</a>
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/*End the footer Section Started*/}


  </>
  )
}
