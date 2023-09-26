import React from 'react'
import { MDBContainer } from "mdb-react-ui-kit";
import { TopNav } from './TopNav';
import './OnePotWonder.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';



import logoshesha from './images/logoshesha.png';

export default function OnePotWonder() {
    return (<>
        <TopNav />
        <section className="section_OnePotWonder" style={{ backgroundColor: "rgb(248, 248, 248)", height: "20vh", width: "125%", }}>
            <h4 className="text-start text-light my-5" style={{ position: "relative", top: "30px", left: "10%", fontSize: "40px", fontWeight: "600", }}>Make your One Pot Wonder</h4>
        </section>

        {/*Paragraph and Heading Section*/}
        <p className="text-start text-dark my-5" style={{ position: "relative", top: "-10px", left: "13%", fontSize: "20px", }}>WATCH: 14-MINUTE ONE POT WONDER</p>

        <h4 className="text-start text-dark my-5" style={{ position: "relative", top: "30px", left: "13%", fontSize: "30px", fontWeight: "600", }}>Before watching the video, small introduction about <span style={{ color: "red", }}>One Pot Wonder</span></h4>

        <p className="text-start text-dark my-5" style={{ position: "relative", top: "30px", left: "13%", fontSize: "25px", }}>Wonder Pot (Hebrew: סיר פלא, romanized: sír péle, Hebrew pronunciation: [siʁ 'pele]) is an Israeli invention for baking on top of a gas stove rather than in an oven. It consists of three parts: an aluminium pot shaped like a Bundt pan except smooth-sided rather than fluted, a hooded cover perforated with venting holes, and a thick, round, slightly domed metal disc with a center hole that is placed between the pot and the flame.</p>
        {/* End Paragraph and Heading Section*/}


        <MDBContainer style={{ position: "relative", left: "12%", }}>
            <div className="ratio ratio-16x9" style={{ width: "60%", }}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/P0BKlrc1e8s?si=vMBGgduXrs27XZX-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            </div>
            <p style={{ fontSize: "30px",position:"relative",top:"15px",  }}>One Pot Wonder with chicken and chorizo | My go-to winter dish that's super easy!</p>
        </MDBContainer>


        <h4 className="text-start text-dark my-5" style={{ position: "relative", top: "90px", left: "13%", fontSize: "30px", fontWeight: "600", }}>Lastest Recipe Videos</h4>

        <MDBContainer style={{ position: "relative", left: "12%", top: "100px", }}>
            <MDBRow>
                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/J0LAvL4G_cA?si=bD-M5gxhu4iLlWk1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>HOW TO MAKE THE BEST ONE POT CHICKEN RICE</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/u437DOwE1Ag?si=So33mQoFn1zbLIYw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>One Pot Recipes | Gordon Ramsay</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/jVemtQCGct8?si=PS7Ao88daA9xo9I7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>One-Pan Herby Green Rice and Fish | Jamie Oliver</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/7j7S2nJ_FyI?si=3BlFyvzQowe8B4Nn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>I cook it almost every day! One Pan Chicken Thigh Dinner!</p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <MDBContainer style={{ position: "relative", left: "12%", top: "150px", }}>
            <MDBRow>
                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/OVpJByAfXhw?si=XLrA8mbwF6BHXT-j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Bush Cooking - Chicken Stirfry Hot Sause Recipe - Super Easy Camp Meal</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/KnNoGeNoW6o?si=Gv3jXUVuK-mDEY6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Watch: The Boeuf bourguignon everyone can make | One pot wonders - Ep. 2</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/0VQEJARHJ44?si=Z-iAFz7YzHs-I6PE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px", }}>How to make... One Pan Pasta!</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xIrkFxOclzA?si=yPlD97XowMC1pefO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>One-Pot Wonder: I Made Delicious Pasta with Only One Pot and You Can Too!</p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>


       {/*Footer Section Started*/}
       <div className="footer" style={{ background: "black", position: "relative", top: "350px", }}>
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
