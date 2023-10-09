import React, { useRef } from 'react';
import { TopNav } from './TopNav';
import './Home.css';
import { NavLink, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import "swiper/css/free-mode";
import 'swiper/swiper-bundle.min.css';
import HomeCard from './HomeCard';
import { Button } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBContainer } from "mdb-react-ui-kit";
import Image from 'react-bootstrap/Image';


//Import images
import logoshesha from './images/logoshesha.png';
import amagwinyaMain from './images/amagwinyaMain.png';
import friesMain from './images/friesMain.jpg';
import chickenWrap from './images/chickenWrap.jpg';
import chickenBreyanni from './images/chickenBreyanni.webp';
import fishFishers from './images/fishFishers.jpg';
import curryFood from './images/curryFood.webp';


export const Home = () => {
  const magwinyaEl = useRef();
  const FriesHotchipsEl = useRef();
  const ChickenWrapEl = useRef();
  const chickenBreyanniEl = useRef();
  const fishFishersEl = useRef();
  const minestroneSoupEl = useRef();

  return (<>

    <TopNav />
    {/*Header Section*/}
    <header className="masthead_Home">
      <div className="container h-100">
        <div className="col-12 text-center">
          <h1 className="text-start text-light" style={{ position: "relative", top: "120px", fontSize: "55px", }}>It is even better than<br /><span style={{ color: "green", fontWeight: "600", }}>an expensive cookery book</span></h1>
          <p className="text-start text-light" style={{ position: "relative", top: "140px", fontSize: "23px", }}>Enjoy and take a look at our quick dinner ideas</p>
        </div>
      </div>
    </header>
    {/*end header section*/}

    {/*Card Image Section*/}
    <h4 className="text-center text-dark my-5" style={{ position: "relative", left: "12%", top: "60px", fontSize: "3.8rem", }}>Trending Now</h4>
    <p className="text-center text-dark" style={{ position: "relative", left: "12%", top: "30px", fontSize: "23px", }}>Enjoy and take a look at our quick dinner ideas</p>

    <div className="container" style={{ position: "relative", top: "100px", left: "13%", }}>
      <div className="row">
        <div className="col-md-3">
          <div className="card" >
            <a href="/BreadForTimes"><img src="images/4x4-Bread.webp" className="card-img-top" alt="" /></a>
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>4x4 Bread</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}>Preparation time: 10min<br />
                Cooking time: 40min<br />
                Serves: 6</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <a href="/CreamyPasta"> <img src="images/pasta.jpeg" className="card-img-top" alt="" /></a>
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Creamy Pasta & Tomato</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}> Preparation time: 15min<br />
                Cooking time: 35min<br />
                Serves: 4</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <a href="/MeatBalls"> <img src="images/meatBalls.jpg" className="card-img-top" alt="" /></a>
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Meat Balls</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}>Preparation time: 1hour<br />
                Cooking time: 45min<br />
                Serves: 3</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <a href="/CarneTacos"> <img src="images/Taco.jpg" className="card-img-top" alt="" /></a>
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Carne Asada Tacos</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}>Preparation time: 5min<br />
                Cooking time: 4 - 8mins per side<br />
                Serves: 1/2 pound</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*End Card Image Section*/}


    {/*Slider images section*/}
    <h4 className="text-center text-dark my-5" style={{ position: "relative", left: "12%", top: "180px", fontSize: "3.8rem", }}> Special Recipes</h4>
    <div className="container py-4 px-4 justify-content-center" style={{ position: "relative", left: "13%", top: "180px", }}>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        slidesPerView={4}
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
          <a href='/Magwinya' ref={magwinyaEl}> <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => magwinyaEl.current.click()} >See Details</Button ></a>
        </SwiperSlide>

        <SwiperSlide>
          <HomeCard data={{ imagesSrc: friesMain, price: '35 mins', title: 'Fries' }} />
          <a href='/FriesHotchips' ref={FriesHotchipsEl}> <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => FriesHotchipsEl.current.click()} >See Details</Button></a>
        </SwiperSlide>

        <SwiperSlide>
          <HomeCard data={{ imagesSrc: chickenWrap, price: '15 mins', title: 'Chicken Wrap' }} />
          <a href='/ChickenWrap' ref={ChickenWrapEl}> <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => ChickenWrapEl.current.click()} >See Details</Button></a>
        </SwiperSlide>

        <SwiperSlide>
          <HomeCard data={{ imagesSrc: chickenBreyanni, price: '23 mins', title: 'Chicken Breyanni' }} />
          <a href='/Briyanni' ref={chickenBreyanniEl}> <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => chickenBreyanniEl.current.click()} >See Details</Button></a>
        </SwiperSlide>

        <SwiperSlide>
          <HomeCard data={{ imagesSrc: fishFishers, price: '45 mins', title: 'Fish Fishers' }} />
          <a href='/FishFingers' ref={fishFishersEl}> <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => fishFishersEl.current.click()} >See Details</Button></a>
        </SwiperSlide>

        <SwiperSlide>
          <HomeCard data={{ imagesSrc: curryFood, price: 'R45', title: 'Japanese Curry' }} />
          <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => minestroneSoupEl.current.click()} ><NavLink ref={minestroneSoupEl} to='/minestroneSoup' />See Details</Button>
        </SwiperSlide>
      </Swiper>
    </div>
    {/*End slider section*/}


    <div className='pos_cen' style={{ position: "relative", top: "45vh", }}>
      <Image src="images/apple-blur-branch-close-up (1).jpg" className='img_deg' fluid />
      <h2 className="text-start text-dark my-5" style={{ position: "relative", left: "2%", fontSize: "40px", fontWeight: "600", }}>We are <span style={{ color: "orange", }}>Shesha Foods</span></h2>

      <p style={{ position: "relative", left: "2%", }}>
        At Chefs Box, we believe that great food and convenience go hand in hand.<br /> We're passionate about providing delicious, home-style cooked meals that<br /> make mealtime easy for busy families.<br /> With our team of experienced culinary professionals and locally sourced,<br /> fresh ingredients, we bring a premium taste to your dinner table.<br /><br />
        When you choose Chefs Box, you're choosing more than just great food. You're choosing convenience<br /> and the freedom to spend more time with your loved ones. No more spending hours in the kitchen,<br /> no more mealtime stress. We're here to make your life easier, one meal at a time.</p>

      <a href='/Articles'><Button variant="secondary" style={{ position: "relative", left: "2%", }}>Know more</Button>{' '}</a>
    </div>

    <header className="masthead_Kiddies" style={{ position: "relative", top: "65vh", }}>
      <div className="container h-100">
        <div className="col-12 text-center">
          <h4 className="text-start text-light my-5" style={{ position: "relative", top: "150px",fontSize:"40px", }}>HEY MOM'S & DAD'S<br />HAVE YOU SEEN OUR HEALTHY <br/>BALANCED KIDDIES RANGE</h4>
          <a href='/About'><Button variant="secondary" style={{ position: "relative", left: "-45%",top:"20vh", }}>See more</Button>{' '}</a>
        </div>
      </div>
    </header>

    {/*Products Section */}
    <div className='Products' style={{ position: "relative", top: "40vh", }}>
      <h2 className="text-center text-dark my-5" style={{ position: "relative", left: "13%", top: "250px", fontSize: "50px", fontWeight: "600", }}>Our <span style={{color:"orange",}}>Products</span></h2>
      <hr className='hr8'></hr>
      <hr className='hr9'></hr>
      <p className="text-center text-dark my-5" style={{ position: "relative", left: "13%", top: "200px", fontSize: "25px", }}>You can also Visit <br />Our high-quality fresh and frozen chicken products are a South African favourite!</p>
    </div>
    
    <MDBContainer style={{ position: "relative", left: "12%", top: "90vh", }}>
      <MDBRow>
        <MDBCol size='md'>
          <a href='https://www.royco.co.za/'>
            <div className="ratio ratio-16x9" style={{ width: "100%", }}>
              <img src='images/roycoProducts.png' alt='' />
            </div>
          </a>
        </MDBCol>

        <MDBCol size='md'>
          <a href='https://www.mcdonalds.co.za/'>
            <div className="ratio ratio-16x9" style={{ width: "100%", }}>
              <img src='images/mcdonalds2.jpg' alt='' />
            </div>
          </a>
        </MDBCol>

        <MDBCol size='md'>
          <a href='https://www.brabys.com/za/western-cape/cape-town/epping-industria/poultry-products/county-fair-foods-pty-ltd'>
            <div className="ratio ratio-16x9" style={{ width: "100%", }}>
              <img src='images/countyFair.jpg' alt='' />
            </div>
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    <MDBContainer style={{ position: "relative", left: "12%", top: "115vh", }}>
      <MDBRow>
        <MDBCol size='md'>
          <a href='https://www.pizzahut.co.za/'>
            <div className="ratio ratio-16x9" style={{ width: "100%", }}>
              <img src='images/pizzaHut.jpg' alt='' />
            </div>
          </a>

        </MDBCol>

        <MDBCol size='md'>
          <a href='https://www.yum.com/wps/portal/yumbrands/Yumbrands/company/our-brands/taco-bell'>
            <div className="ratio ratio-16x9" style={{ width: "100%", }}>
              <img src='images/Taco_Bell_2016.svg.png' alt='' />
            </div>
          </a>
        </MDBCol>

        <MDBCol size='md'>
          <a href='https://order.kfc.co.za/menu?gclid=EAIaIQobChMInI_xssKagQMV1oloCR08QwI3EAAYASAAEgL1pPD_BwE'>
            <div className="ratio ratio-16x9" style={{ width: "100%", }}>
              <img src='images/kfc.png' alt='' />
            </div>
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    {/*End Products Section*/}


    {/*Footer Section*/}
    <div className="footer" style={{ background: "black", position: "relative", top: "150vh", }}>
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
    {/*End footer Section*/}
  </>
  )
}
