import React, {useRef} from 'react';
import { TopNav } from './TopNav';
import './Fries.css';
import Image from 'react-bootstrap/Image';
import { Link, NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import { FreeMode } from "swiper";
import HomeCard from './HomeCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from 'react-bootstrap';

import { Container } from 'react-bootstrap'
import { faFacebook,faLinkedin, faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import images
import logoshesha from './images/logoshesha.png';
import amagwinyaMain from './images/amagwinyaMain.png';
import friesMain from './images/friesMain.jpg';
import chickenWrap from './images/chickenWrap.jpg';
import chickenBreyanni from './images/chickenBreyanni.webp';
import fishFishers from './images/fishFishers.jpg';
import curryFood from './images/curryFood.webp';
import beaconPork from './images/beaconPork.jpg';


export const FriesHotchips = () => {

  const pancakeIngredientsEl = useRef();
  const burgerEl = useRef();
  const shushiEl = useRef();
  const tandooriChickenEl = useRef();
  const butternutrisottoEl = useRef();
  const minestroneSoupEl = useRef();
  const chickenTetrazziniEl = useRef();

  return (<>
    <TopNav />
    <header className="masthead_Fries">
      <div className="container h-100">
        <div className="col-12 text-center">
        <p className="text-center text-light" style={{ position: "relative", top: "140px", fontSize: "23px", }}>Quick & Easy Recipes</p>
          <h1 className="text-center text-light" style={{ position: "relative", top: "25vh", fontSize: "55px", }}>Hot Fries Recipes</h1>
          <p className="text-center text-light" style={{ position: "relative", top: "35vh", fontSize: "25px", }}>You can't go wrong with a hot fries. It's a sure way to get the kids clearing their plates, and a winning dinner for two. We've got everything from the classics to fresh new inspiration when you feel like trying something new.</p>

        </div>
      </div>
    </header>
    <h4 className="text-center text-dark my-5" style={{ position: "relative", left: "13%", top: "40px", fontWeight: "600", fontSize: "60px", }}>Delicious Hot Fries</h4>
    <div className='text-center' style={{ position: "relative", left: "13%", top: "60px", }}>
      <Image src="images/fries.jpg" fluid />;
    </div>

    <div style={{ position: "relative", top: "-75vh", }}>
      <p className="text-start text-dark my-5" style={{ position: "relative", left: "15%", top: "90vh", fontSize: "23px", }}>Top Tip: Soak the wooden skewers in a plate of water for 15 minutes <br />
        before skewering the ingredients. This ensures that the skewers don't burn when braaied.</p>
      
      
        <Container >
        <div className="singleCol social-media-icons-white d-flex justify-content-evenly" style={{position:"relative",top:"90vh",}}>
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
      <hr className='hr_magwinya1' /> {/* Adjust the width as needed */}

      <Row style={{ position: "relative", left: "15%", top: "100vh", }}>
        <Col>
          <h4 style={{ fontWeight: "600", }}>Ingredients:</h4>
          <ul>
            <li style={{ fontSize: "20px", }}> Chicken broth, Arborio rice</li>
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
      </Row>
    </div>
    {/*End Column Section */}

    <h4 className="text-start text-dark my-5" style={{ position: "relative",left:"16%", top: "30vh", fontWeight: "600", }}>Methods</h4>
   
   <div>
      <Card style={{ width: "50%",position: "relative", left: "15%", top: "30vh",borderRadius:"20px", }}>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
      </Card>
    
      <Card style={{ width: "50%",position: "relative", left: "15%", top: "34vh",borderRadius:"20px", }}>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "50%",position: "relative", left: "15%", top: "38vh",borderRadius:"20px", }}>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>

      {/*Slider image Section*/}
     <h4 className='text-center' style={{ position: "relative", left: "15%", fontSize: "50px", top: "60vh", fontWeight: "600", }}>Related Recipes </h4>

<div className="container py-4 px-4 justify-content-center" style={{ position: "relative", left: "12%", top: "70vh", }}>
 <Swiper
   freeMode={true}
   grabCursor={true}
   modules={[FreeMode]}
   className="mySwiper"
   slidesPerView={5}
   spaceBetween={30}
   breakpoints={{
     0: {
       slidesPerView: 1,
       spaceBetween: 10,
     },
     480: {
       slidesPerView: 2,
       spaceBetween: 10,
     },
     768: {
       slidesPerView: 3,
       spaceBetween: 15,
     },
     1024: {
       slidesPerView: 4,
       spaceBetween: 10,
     },
     1280: {
       slidesPerView: 5,
       spaceBetween: 30,
     }
   }}
 >

   <SwiperSlide>
     <HomeCard data={{ imagesSrc: amagwinyaMain, price: '10 mins', title: 'Magwinya', }} />
     <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => pancakeIngredientsEl.current.click()} ><NavLink ref={pancakeIngredientsEl} to='/ViewIngredients' />View Recipe</Button>
   </SwiperSlide>

   <SwiperSlide>
     <HomeCard data={{ imagesSrc: friesMain, price: '35 mins', title: 'Fries' }} />
     <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => burgerEl.current.click()} ><NavLink ref={burgerEl} to='/ViewIngredientsburger' hidden />View Recipe</Button>
   </SwiperSlide>

   <SwiperSlide>
     <HomeCard data={{ imagesSrc: chickenWrap, price: '15 mins', title: 'Chicken Wrap' }} />
     <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => shushiEl.current.click()} ><NavLink ref={shushiEl} to='/shushi' />View Recipe</Button>
   </SwiperSlide>

   <SwiperSlide>
     <HomeCard data={{ imagesSrc: chickenBreyanni, price: '23 mins', title: 'Chicken Breyanni' }} />
     <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => tandooriChickenEl.current.click()} ><NavLink ref={tandooriChickenEl} to='/TandooriChicken' />View Recipe</Button>
   </SwiperSlide>

   <SwiperSlide>
     <HomeCard data={{ imagesSrc: fishFishers, price: '45 mins', title: 'Fish Fishers' }} />
     <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => butternutrisottoEl.current.click()} ><NavLink ref={butternutrisottoEl} to='/ButternutRisotto' />View Recipe</Button>
   </SwiperSlide>

   <SwiperSlide>
     <HomeCard data={{ imagesSrc: curryFood, price: 'R45', title: 'Japanese Curry' }} />
     <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => minestroneSoupEl.current.click()} ><NavLink ref={minestroneSoupEl} to='/minestroneSoup' />View Recipe</Button>
   </SwiperSlide>

   <SwiperSlide>
     <HomeCard data={{ imagesSrc: beaconPork, price: 'R10', title: 'Home Cured Pork' }} />
     <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => chickenTetrazziniEl.current.click()} ><NavLink ref={chickenTetrazziniEl} to='/chickenTetrazzini' />View Recipe</Button>
   </SwiperSlide>
 </Swiper>
</div>
{/*end Slide Section*/}

    {/*Footer Section Started*/}
    <div className="footer" style={{ background: "black", position: "relative",top:"80vh", }}>
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
