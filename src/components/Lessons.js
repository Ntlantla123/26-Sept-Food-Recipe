import React, { useRef } from 'react';
import { TopNav } from './TopNav';
import './Lesson.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import "swiper/css/free-mode";
import 'swiper/swiper-bundle.min.css';
import HomeCard from './HomeCard';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
 
//Import Images
import logoshesha from './images/logoshesha.png';
import viewpancake2 from './images/viewpancake2.png';
import viewburger from './images/viewburger.png';
import shushi from './images/shushi.jpg';
import tandooriChicken from './images/tandooriChicken.jpg';
import butternutrisotto from './images/butternutrisotto.jpg';
import minestroneSoup from './images/minestroneSoup.jpg';
import chickenTetrazzini from './images/chickenTetrazzini.jpg';


export const Lessons = () => {

  const pancakeIngredientsEl = useRef();
  const burgerEl = useRef();
  const shushiEl = useRef();
  const tandooriChickenEl = useRef();
  const butternutrisottoEl = useRef();
  const minestroneSoupEl = useRef();
  const chickenTetrazziniEl = useRef();


  return (
    <React.Fragment>
      <TopNav />
      {/*Header Section*/}
      <header className="masthead">
        <div className="container h-100">
          <div className="col-12 text-center">
            <h4 className="fw-light" style={{ position: "relative", top: "250px", fontSize: "65px", }}>Lessons</h4>
            <p className="text-center text-light my-5" style={{ position: "relative", left: "1%", top: "80px", fontSize: "20px", }}>Explore More Recipes</p>          </div>
        </div>
      </header>
      {/*End Header Section*/}


      {/*Card Image Section*/}
      <h1 className="text-center text-dark my-5" style={{ position: "relative", left: "15%", top: "10px", fontSize: "50px", }}>Popular Recipes</h1>
      <hr className='hr_lesson1'></hr>
      <hr className='hr_lesson2'></hr>
      <p className="text-center text-dark my-5" style={{ position: "relative", left: "15%", top: "-40px", fontSize: "25px", }}>Great to have you visit our website. Learn how to make your own <br />Delicious meals by viewing any of the recipes below. </p>

      <div className="container" style={{ position: "relative", top: "40px", left: "13%", }}>
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={{ border: "none", }} >
              <img src="images/chickenTikkaMasala.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "600", }}>Chicken Tikka Masala</h5>
                <p className="card-text">Cooking time. 40 mins. Preparation time. 10 mins. Serves.A beautifully flavoured bread</p>
                <a href="/ChickenTikka" className="btn btn-primary" style={{ borderColor: "black", backgroundColor: "white", color: "black", }}>Watch Video</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ border: "none", }}>
              <img src="images/butterChickenCurry.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "600", }}>Butter Chicken Curry</h5>
                <p className="card-text">Cooking time. 40 mins. Preparation time. 10 mins. Serves.A beautifully flavoured bread</p>
                <a href="/ButterChickenCurry" className="btn btn-primary" style={{ borderColor: "black", backgroundColor: "white", color: "black", }}>Watch Video</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ border: "none", }} >
              <img src="images/sausageTomatoCasserole.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "600", }}>Sausage Tomato Casserole</h5>
                <p className="card-text">Cooking time. 40 mins. Preparation time. 10 mins. Serves.A beautifully flavoured bread</p>
                <a href="/SausageTomato" className="btn btn-primary" style={{ borderColor: "black", backgroundColor: "white", color: "black", }}>Watch Video</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ border: "none", }}>
              <img src="images/africanStylePap.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "600", }}>African Style Trendy Pap</h5>
                <p className="card-text">Cooking time. 40 mins. Preparation time. 10 mins. Serves.A beautifully flavoured bread</p>
                <a href="/AfricanStylePap" className="btn btn-primary" style={{ borderColor: "black", backgroundColor: "white", color: "black", }}>Watch Video</a>
              </div>
            </div>
          </div>

          <div className="container" style={{ position: "relative", top: "50px", left: "0%", }}>
            <div className="row">
              <div className="col-md-3">
                <div className="card" style={{ border: "none", }}>
                  <img src="images/beaconCarbonPasta.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: "600", }}>Beacon Carbonara Pasta</h5>
                    <p className="card-text">Cooking time. 40 mins. Preparation time. 10 mins. Serves.A beautifully flavoured bread</p>
                    <a href="/BeaconCarbonara" className="btn btn-primary" style={{ borderColor: "black", backgroundColor: "white", color: "black", }}>Watch Video</a>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card" style={{ border: "none", }}>
                  <img src="images/onePotWonder.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: "600", }}>One Pot Wonder</h5>
                    <p className="card-text">This pasta sauce is just four ingredients: onion, garlic, a can of crushed tomatoes, and cream.</p>
                    <a href="/OnePotWonder" className="btn btn-primary" style={{ borderColor: "black", backgroundColor: "white", color: "black", }}>Watch Video</a>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card" style={{ border: "none", }}>
                  <img src="images/lambTrayTagine.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: "600", }}>Maroccan Lamb Tagine</h5>
                    <p className="card-text">It's quick to make, calls on ingredients we always have on hand and the recipe.</p>
                    <a href="/MaroccanLamb" className="btn btn-primary" style={{ borderColor: "black", backgroundColor: "white", color: "black", }}>Watch Video</a>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card" style={{ border: "none", }}>
                  <img src="images/umleqwaMeals.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: "600", }}>Umleqwa Meals</h5>
                    <p className="card-text">Easy, quick, authentic carne asada street tacos you can now make right at home!</p>
                    <a href="/UmleqwaMeals" className="btn btn-primary" style={{ borderColor: "black", backgroundColor: "white", color: "black", }}>Watch Video</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container" style={{ position: "relative", top: "80px", left: "0%", }}>
            <div className="row">
              <div className="col-md-3">
                <div className="card" style={{ border: "none", }}>
                  <img src="images/biryaniChicken.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: "600", }}>Chicken Biryani</h5>
                    <p className="card-text">Cooking time. 1hr 30 mins. Preparation time. 10 mins. Serves.A beautifully flavoured bread</p>
                    <a href="/BeaconCarbonara" className="btn btn-primary" style={{ borderColor: "black", backgroundColor: "white", color: "black", }}>Watch Video</a>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card" style={{ border: "none", }}>
                  <img src="images/porkMeat.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: "600", }}>Cripsy Slow-Roasted Pork</h5>
                    <p className="card-text">This pasta sauce is just four ingredients: onion, garlic, a can of crushed tomatoes, and cream.</p>
                    <a href="/OnePotWonder" className="btn btn-primary" style={{ borderColor: "black", backgroundColor: "white", color: "black", }}>Watch Video</a>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card" style={{ border: "none", }}>
                  <img src="images/lambTrayTagine.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: "600", }}>Maroccan Lamb Tagine</h5>
                    <p className="card-text">It's quick to make, calls on ingredients we always have on hand and the recipe.</p>
                    <a href="/MaroccanLamb" className="btn btn-primary" style={{ borderColor: "black", backgroundColor: "white", color: "black", }}>Watch Video</a>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card" style={{ border: "none", }}>
                  <img src="images/umleqwaMeals.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: "600", }}>Umleqwa Meals</h5>
                    <p className="card-text">Easy, quick, authentic carne asada street tacos you can now make right at home!</p>
                    <a href="/UmleqwaMeals" className="btn btn-primary" style={{ borderColor: "black", backgroundColor: "white", color: "black", }}>Watch Video</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Card Image Section*/}



      <h1 className="text-center text-dark my-5" style={{ position: "relative", left: "13%", top: "190px", fontSize: "50px", }}>Related Recipes</h1>
      {/*Slider images section started*/}
      <div className="container py-4 px-4 justify-content-center" style={{ position: "relative", left: "14%", top: "200px", }}>
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
            <HomeCard data={{ imagesSrc: viewpancake2, price: '10 mins', title: 'Pancake', }} />
            <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => pancakeIngredientsEl.current.click()} ><NavLink ref={pancakeIngredientsEl} to='/ViewIngredients' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: viewburger, price: '35 mins', title: 'Burger' }} />
            <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => burgerEl.current.click()} ><NavLink ref={burgerEl} to='/ViewIngredientsburger' hidden />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: shushi, price: '15 mins', title: 'Shiki Shushi' }} />
            <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => shushiEl.current.click()} ><NavLink ref={shushiEl} to='/shushi' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: tandooriChicken, price: '23 mins', title: 'Tandoori Chicken' }} />
            <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => tandooriChickenEl.current.click()} ><NavLink ref={tandooriChickenEl} to='/TandooriChicken' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: butternutrisotto, price: '45 mins', title: 'Butternut Risotto' }} />
            <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => butternutrisottoEl.current.click()} ><NavLink ref={butternutrisottoEl} to='/ButternutRisotto' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: minestroneSoup, price: 'R45', title: 'Minestrone Soup' }} />
            <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => minestroneSoupEl.current.click()} ><NavLink ref={minestroneSoupEl} to='/minestroneSoup' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: chickenTetrazzini, price: 'R10', title: 'Chicken Tetrazzini' }} />
            <Button style={{ width: "100%", backgroundColor: "grey", fontWeight: "600", border: "none", height: "50px", }} onClick={() => chickenTetrazziniEl.current.click()} ><NavLink ref={chickenTetrazziniEl} to='/chickenTetrazzini' />View Recipe</Button>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*End slider section*/}


      {/*Footer Section*/}
      <div className="footer_Lesson" style={{ position: "relative", top: "400px", background: "black", }}>
        <div className="sb_footer section_padding">
          <div className="sb_footer-links">
            <a href='/Home'><img src={logoshesha} alt="logoshesha.png" style={{ color: "white", }} /></a>
            <div className="sb_footer-links_div">
              <h4>Contact Info</h4>
              <p><span style={{ color: "whitesmoke", }}>CALL :</span> 021 110 9870</p>
              <p><span style={{ fontWeight: "600", }}>WRITE :</span>  ntlantla.simelela@younglings.africa</p>
              <p><span style={{ fontWeight: "600", }}>FIND US:</span> 20541 Bishop Tutu Street</p>
            </div>
            <div className="sb_footer-links_div">
              <h4>Resources</h4>
              <a href="/Home">
                <p style={{ fontWeight: "600", color: "white", textDecoration: "none", }}>Youtube</p>
              </a>
              <a href="/Recipes">
                <p style={{ color: "white", }}>Royco Website</p>
              </a>
              <a href="/Recipes">
                <p style={{ color: "white", }}>STV</p>
              </a>
            </div>
            <div className="sb_footer-links_div">
              <h2>Company</h2>
              <a href="/Home">
                <p style={{ fontWeight: "600", color: "white", }}>Home</p>
              </a>
              <a href="/Lessons">
                <p style={{ fontWeight: "600", color: "white", }}>Lessons</p>
              </a>
              <a href="/Recipes">
                <p style={{ fontWeight: "600", color: "white", }}>Recipe</p>
              </a>
              <a href="/Categories">
                <p style={{ fontWeight: "600", color: "white", }}>Categories</p>
              </a>
            </div>
            <div className="sb_footer-links_div">
            </div>
          </div>

          <hr></hr>
          <h6 className="text-start text-light my-5" style={{ color: "white", position: "relative", top: "-10px", left: "2%", color: "white", }}>Copyright @ Shesha Food Recipe. All right reserved.</h6>
        </div>
      </div>
      {/*End footer Section*/}
    </React.Fragment>
  )
}
