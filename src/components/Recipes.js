import React, { useRef } from 'react';
import { TopNav } from '../components/TopNav';
import './Recipes.css';
import { NavLink, Link } from 'react-router-dom';
import { FreeMode } from "swiper";
import HomeCard from './HomeCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from 'react-bootstrap';


//import images
import logoshesha from './images/logoshesha.png';
import amagwinyaMain from './images/amagwinyaMain.png';
import friesMain from './images/friesMain.jpg';
import chickenWrap from './images/chickenWrap.jpg';
import chickenBreyanni from './images/chickenBreyanni.webp';
import fishFishers from './images/fishFishers.jpg';
import curryFood from './images/curryFood.webp';
import beaconPork from './images/beaconPork.jpg';



export const Recipes = () => {

  const pancakeIngredientsEl = useRef();
  const burgerEl = useRef();
  const shushiEl = useRef();
  const tandooriChickenEl = useRef();
  const butternutrisottoEl = useRef();
  const minestroneSoupEl = useRef();
  const chickenTetrazziniEl = useRef();

  return (<>

    <TopNav />
    {/*Header Section*/}
    <header className="masthead_recipe">
      <div className="container h-100">
        <div className="col-12 text-center">
          <h4 className="fw-light" style={{ position: "relative", top: "250px", fontSize: "65px", }}>Our Recipes</h4>
          <p className="text-center text-light my-5" style={{ position: "relative", left: "1%", top: "80px", fontSize: "20px", }}>Explore More Recipes</p>
        </div>
      </div>
    </header>
    {/*end Header Section*/}

      
    <div style={{ position: "relative", left: "20%" }}>
      <h4 className='text-center' style={{ position: "relative", left: "-5%", fontSize: "50px", top: "40px", fontWeight: "600", }}>BREAKFAST & BRUNCH RECIPES </h4>
      <p className='text-center' style={{ position: "relative", left: "-5%", fontSize: "25px", top: "40px", }}>No morning is complete without a good meal, and we have all the wake<br /> up-worthy breakfast recipes to start your day off right.</p>
    </div>
    {/*Slider image Section*/}
    <div className="container py-4 px-4 justify-content-center" style={{ position: "relative", left: "12%", top: "100px", }}>
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


    {/*Card Image Section*/}

    <div className="container" style={{ position: "relative", top: "200px", left: "13%", }}>
      <div className="row">
        <div className="col-md-3">
          <div className="card" >
            <img src="images/poached egg.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Perfect Poached Eggs</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}>Preparation time: 10min<br />
                Cooking time: 40min<br />
                Serves: 6</p>
              <a href="/CreamyPasta" style={{ backgroundColor: "transparent", color: "red", border: "none", textDecoration: "none", }}>View Recipe</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" >
            <img src="images/avacodos.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Ripe Avacado</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}> Preparation time: 15min<br />
                Cooking time: 35min<br />
                Serves: 4</p>
              <a href="/CreamyPasta" style={{ backgroundColor: "transparent", color: "red", border: "none", textDecoration: "none", }}>View Recipe</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" >
            <img src="images/salmonFish.webp" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Baked Salmon</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}>Preparation time: 1hour<br />
                Cooking time: 45min<br />
                Serves: 3</p>
              <a href="/MeatBalls" style={{ backgroundColor: "transparent", color: "red", border: "none", textDecoration: "none", }}>View Recipe</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" >
            <img src="images/soupChicken.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Chicken Noodle Soup</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}>Preparation time: 5min<br />
                Cooking time: 4 - 8mins per side<br />
                Serves: 1/2 pound</p>
              <a href="/CarneTacos" style={{ backgroundColor: "transparent", color: "red", border: "none", textDecoration: "none", }}>View Recipe</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container" style={{ position: "relative", top: "250px", left: "13%", }}>
      <div className="row">
        <div className="col-md-3">
          <div className="card" >
            <img src="images/savouryMince.jpeg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Savoury Mince</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}>Preparation time: 10min<br />
                Cooking time: 40min<br />
                Serves: 6</p>
              <a href="/BreadForTimes" style={{ backgroundColor: "transparent", color: "red", border: "none", textDecoration: "none", }}>View Recipe</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" >
            <img src="images/curriedMince.avif" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Mince Curry </h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}> Preparation time: 15min<br />
                Cooking time: 35min<br />
                Serves: 4</p>
              <a href="/CreamyPasta" style={{ backgroundColor: "transparent", color: "red", border: "none", textDecoration: "none", }}>View Recipe</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src="images/potatoSalad.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Classic Potato Salad</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}>Preparation time: 1hour<br />
                Cooking time: 45min<br />
                Serves: 3</p>
              <a href="/MeatBalls" style={{ backgroundColor: "transparent", color: "red", border: "none", textDecoration: "none", }}>View Recipe</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src="images/cheeseRollup.webp" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Grilled Cheese Roll Ups</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}>Preparation time: 5min<br />
                Cooking time: 4 - 8mins per side<br />
                Serves: 1/2 pound</p>
              <a href="/CarneTacos" style={{ backgroundColor: "transparent", color: "red", border: "none", textDecoration: "none", }}>View Recipe</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container" style={{ position: "relative", top: "300px", left: "13%", }}>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img src="images/garlicBreadGrilledCheese.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Garlic Grilled Cheese</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}>Preparation time: 10min<br />
                Cooking time: 40min<br />
                Serves: 6</p>
              <a href="/BreadForTimes" style={{ backgroundColor: "transparent", color: "red", border: "none", textDecoration: "none", }}>View Recipe</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src="images/caramelisedPotato.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Caramelised Potato</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}> Preparation time: 15min<br />
                Cooking time: 35min<br />
                Serves: 4</p>
              <a href="/CreamyPasta" style={{ backgroundColor: "transparent", color: "red", border: "none", textDecoration: "none", }}>View Recipe</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" >
            <img src="images/lazania.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Lazania z sosem</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}>Preparation time: 1hour<br />
                Cooking time: 45min<br />
                Serves: 3</p>
              <a href="/MeatBalls" style={{ backgroundColor: "transparent", color: "red", border: "none", textDecoration: "none", }}>View Recipe</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src="images/classicCheesePizza.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Classic Cheese Pizza</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}>Preparation time: 5min<br />
                Cooking time: 4 - 8mins per side<br />
                Serves: 1/2 pound</p>
              <a href="/CarneTacos" style={{ backgroundColor: "transparent", color: "red", border: "none", textDecoration: "none", }}>View Recipe</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container" style={{ position: "relative", top: "350px", left: "13%", }}>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img src="images/4x4-Bread.webp" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>4x4 Bread</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}>Preparation time: 10min<br />
                Cooking time: 40min<br />
                Serves: 6</p>
              <a href="/BreadForTimes" style={{ backgroundColor: "transparent", color: "red", border: "none", textDecoration: "none", }}>View Recipe</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src="images/peperoniPizza.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Spicy Peperoni Pizza</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}> Preparation time: 15min<br />
                Cooking time: 35min<br />
                Serves: 4</p>
              <a href="/CreamyPasta" style={{ backgroundColor: "transparent", color: "red", border: "none", textDecoration: "none", }}>View Recipe</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src="images/meatBalls.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Meat Balls</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}>Preparation time: 1hour<br />
                Cooking time: 45min<br />
                Serves: 3</p>
              <a href="/MeatBalls" style={{ backgroundColor: "transparent", color: "red", border: "none", textDecoration: "none", }}>View Recipe</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src="images/Taco.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "600", }}>Carne Asada Tacos</h4>
              <p className="card-text" style={{ position: "relative", top: "10px", }}>Preparation time: 5min<br />
                Cooking time: 4 - 8mins per side<br />
                Serves: 1/2 pound</p>
              <a href="/CarneTacos" style={{ backgroundColor: "transparent", color: "red", border: "none", textDecoration: "none", }}>View Recipe</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*End Card Image Section Started*/}


    {/*Footer Section Started*/}
    <div className="footer" style={{ background: "black", position: "relative", top: "750px", }}>
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