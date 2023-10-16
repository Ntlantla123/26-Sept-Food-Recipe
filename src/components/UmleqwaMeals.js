import React from 'react'
import { MDBContainer } from "mdb-react-ui-kit";
import { TopNav } from './TopNav';
import './UmleqwaMeals.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';



import logoshesha from './images/logoshesha.png';

export const UmleqwaMeals = () => {
    return (<>
        <TopNav />
        <section className="section_UmleqwaMeals" style={{ backgroundColor: "rgb(248, 248, 248)", height: "20vh", width: "125%", }}>
            <h4 className="text-start text-light my-5" style={{ position: "relative", top: "30px", left: "10%", fontSize: "40px", fontWeight: "600", }}>Make your Umleqwa Meals</h4>
        </section>

        {/*Paragraph and Heading Section*/}
        <p className="text-start text-dark my-5" style={{ position: "relative", top: "-10px", left: "13%", fontSize: "20px", }}>WATCH: 7-MINUTE Umleqwa Meals</p>

        <h4 className="text-start text-dark my-5" style={{ position: "relative", top: "30px", left: "13%", fontSize: "30px", fontWeight: "600", }}>Before watching the video, small introduction about <span style={{ color: "red", }}>Umleqwa Meals</span></h4>

        <p className="text-start text-dark my-5" style={{ position: "relative", top: "30px", left: "13%", fontSize: "25px", }}>The word “uMleqwa’’ comes from the fact that these chickens roam freely, and when you try to catch them, they run away so fast that you have to chase them (leqa). I just love the whole excitement that comes with cooking uMleqwa, from chasing it, slaughtering it and removing the feathers, to, finally, cutting it into pieces. uMleqwa is best served with samp, steamed bread, idombolo or pap.</p>
        {/* End Paragraph and Heading Section*/}


        <MDBContainer style={{ position: "relative", left: "12%", }}>
            <div className="ratio ratio-16x9" style={{ width: "60%", }}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/AjMt0G5fkt0?si=LzfxSrMBnw-H8fGa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            </div>
            <p style={{ fontSize: "30px",position:"relative",top:"15px",  }}>SOUTH AFRICAN HARD BODY CHICKEN : How to cook Chicken<br/> Hard Body / Umleqwa | Outdoor Cooking</p>
        </MDBContainer>


        <h4 className="text-start text-dark my-5" style={{ position: "relative", top: "90px", left: "13%", fontSize: "30px", fontWeight: "600", }}>Lastest Recipe Videos</h4>

        <MDBContainer style={{ position: "relative", left: "12%", top: "100px", }}>
            <MDBRow>
                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/e5TeLtHcTCc?si=BiWzW8MN4qvCLTZd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Hardbody chicken recipe / How to cook hardbody chicken stew /Free range chicken / Umleqwa</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/vZrlECYAaLA?si=iyrjIGeb_WgZUwLb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>How to cook hard body chicken. How to cook road runner chicken. Chicken stew recipe.</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/aaBlTQ0l9lM?si=WVpuqbRD8hMBriY6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>How to cook hard body chicken stew without boiling it/ tasty chicken easy and quick recpice</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7Srj8OX-9q8?si=xI0iGodAObebqhmy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Watch: How to cook Hardbody Chicken</p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <MDBContainer style={{ position: "relative", left: "12%", top: "150px", }}>
            <MDBRow>
                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/RghJQ_tDIoA?si=QtgC3ZBxgjJ4P778" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>The Best Chicken Stew | Tasty Chicken Stew | Chicken Stew Recipe</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CivvS247KLo?si=6JBWJNvT-8oA_KWG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>BASIC MOGODU RECIPE| SOUTH AFRICA</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ccvura3aSI0?si=jDPcEYBUDcXc4s9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>CHICKEN STEW - easy food recipes to make at home</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8vVIMWl1U20?si=UXDnpRN1q7rHPFNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Mandela Day: Umleqwa with steamed Amasi bread | Afternoon Express | 18 July 2019</p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>


        {/*Footer Section Started*/}
        <div className="footer" style={{ background: "grey", position: "relative", top: "260px", }}>
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <a href='/Home'><img src={logoshesha} alt="logoshesha.png" style={{ color: "white", }} /><em style={{ fontSize: "30px", textDecoration: "none", }}></em></a>
                    <div className="sb_footer-links_div">
                        <h2>Contact</h2>
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
                        <h2>Resources</h2>
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
                        <h2>Quick Links</h2>
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
                <h4 className="text-start text-light my-5" style={{ position: "relative", left: "2%", top: "-30px", }}>love Shesha? check out more brands from Royco®</h4>

                <a href='https://www.royco.co.za/'><Button variant="light" style={{ width: "15%", height: "50px", position: "relative", top: "-20px", left: "2%", }}>See All</Button>{' '}</a>
                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        {/*End the footer Section Started*/}


    </>)
}
