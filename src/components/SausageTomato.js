import React from 'react'
import { MDBContainer } from "mdb-react-ui-kit";
import { TopNav } from './TopNav';
import './SausageTomato.css';
import { Link } from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';



import logoshesha from './images/logoshesha.png';

export const SausageTomato = () => {
    return (<>
        <TopNav />
        <section className="section_SausageTomato" style={{ backgroundColor: "rgb(248, 248, 248)", height: "20vh", width: "125%", }}>
            <h4 className="text-start text-light my-5" style={{ position: "relative", top: "30px", left: "10%", fontSize: "40px", fontWeight: "600", }}>Make your Sausage Tomato Casserole.</h4>
        </section>

        {/*Paragraph and Heading Section*/}
        <p className="text-start text-dark my-5" style={{ position: "relative", top: "-10px", left: "13%", fontSize: "20px", }}>WATCH: 9-MINUTE SAUSAGE TOMATO CASSEROLE CHALLENGE</p>

        <h4 className="text-start text-dark my-5" style={{ position: "relative", top: "30px", left: "13%", fontSize: "30px", fontWeight: "600", }}>Before watching the video, small introduction about <span style={{ color: "red", }}>Sausage Tomato Casserole</span></h4>

        <p className="text-start text-dark my-5" style={{ position: "relative", top: "30px", left: "13%", fontSize: "25px", }}>A casserole (French: diminutive of casse, from Provençal cassa 'pan') is a kind of large, deep pan or bowl used for cooking a variety of dishes in the oven; it is also a category of foods cooked in such a vessel. To distinguish the two uses, the pan can be called a "casserole dish" or "casserole pan," whereas the food is simply "a casserole." The same pan is often used both for cooking and for serving.</p>
        {/* End Paragraph and Heading Section*/}

        {/* Video Section*/}
        <MDBContainer style={{ position: "relative", left: "12%", }}>
            <div className="ratio ratio-16x9" style={{ width: "60%", }}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/SPxE0A7tPtQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            </div>
            <p style={{ fontSize: "30px",position:"relative",top:"15px",  }}>Phil Vickery's Tomato and Sausage Casserole | This Morning</p>
        </MDBContainer>


        <h4 className="text-start text-dark my-5" style={{ position: "relative", top: "90px", left: "13%", fontSize: "30px", fontWeight: "600", }}>Lastest Recipe Videos</h4>

        <MDBContainer style={{ position: "relative", left: "12%", top: "100px", }}>
            <MDBRow>
                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/GPTQp1Girt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                   </div>
                    <p style={{ position:"relative",top:"15px",  }}>Watch: Easy Sausage Casserole Recipe | The Secret Yorkshire Cook</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EBxVbYo_UjA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Watch: Gordon Ramsay's Sausage Hotpot</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/DmRDZKneYQY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Watch: Tomato and Onion Sausage Casserole | One Pot Chef</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/OabQwD8EBf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{position:"relative",top:"15px", }}>Watch: Wors and tomato stew | Simple and easy wors and tomato recipe</p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <MDBContainer style={{ position: "relative", left: "12%", top: "150px", }}>
            <MDBRow>
                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/g8yQAkG0iOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Watch: Sausage and Spaghetti Recipe</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UE0Yvws9z1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <p style={{position:"relative",top:"15px",  }}>This German pasta drove everyone crazy! Cheap, fast and incredibly delicious!</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/oNff3U-DuWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{position:"relative",top:"15px",  }}>Curried Sausages by Recipe Tin Eats</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/bALsZ2RqCT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>It's soooo good that I cook it almost Everyday!</p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        {/*End Video Section*/}

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
