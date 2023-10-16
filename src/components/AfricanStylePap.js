import React from 'react'
import { MDBContainer } from "mdb-react-ui-kit";
import { TopNav } from './TopNav';
import './AfricanStylePap.css';
import { Link } from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

import logoshesha from './images/logoshesha.png';

export const AfricanStylePap =() => {
    return (<>
        <TopNav />
        <section className="section_AfricanStyle" style={{ backgroundColor: "rgb(248, 248, 248)", height: "20vh", width: "125%", }}>
            <h4 className="text-start text-light my-5" style={{ position: "relative", top: "30px", left: "10%", fontSize: "40px", fontWeight: "600", }}>Make your African Style Trendy Pap</h4>
        </section>

        {/*Paragraph and Heading Section*/}
        <p className="text-start text-dark my-5" style={{ position: "relative", top: "-10px", left: "13%", fontSize: "20px", }}>WATCH: 2-MINUTE AFRICAN  STYLE TRENDY PAP</p>

        <h4 className="text-start text-dark my-5" style={{ position: "relative", top: "30px", left: "13%", fontSize: "30px", fontWeight: "600", }}>Before watching the video, small introduction about <span style={{ color: "red", }}>African Style Trendy Pap</span></h4>

        <p className="text-start text-dark my-5" style={{ position: "relative", top: "30px", left: "13%", fontSize: "25px", }}>Pap is a kind of porridge made from maize meal and can be cooked to be runny, soft or stiff. Any time of the day is a great time to enjoy pap - breakfast, lunch or supper. It is a staple in many homes, mainly thanks to its cost and versatility.</p>
        {/* End Paragraph and Heading Section*/}


        <MDBContainer style={{ position: "relative", left: "12%", }}>
            <div className="ratio ratio-16x9" style={{ width: "60%", }}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/hPfPJ0DYLso?si=nDOD7azJEfUKo5j8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            </div>
            <p style={{ fontSize: "30px",position:"relative",top:"15px",  }}>Easy pap recipe. Quick and lump free pap</p>
        </MDBContainer>


        <h4 className="text-start text-dark my-5" style={{ position: "relative", top: "90px", left: "13%", fontSize: "30px", fontWeight: "600", }}>Lastest Recipe Videos</h4>

        <MDBContainer style={{ position: "relative", left: "12%", top: "100px", }}>
            <MDBRow>
                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/d55BGVJZl7A?si=awXtL-DouIljq5tr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>HOW TO COOK PAP|HOW TO MAKE A FLUFFY AND CREAMY PAP| WANNA COOK</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZvRUgmiTILo?si=jR9FTUNHcr6gCwvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>HOW TO MAKE FLUFFY PHUTHU PAP | HOW TO MAKE KRUMMEL PAP | UMPHOKOQO | PHUTU FOR BEGINNERS</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/YtJcwITRctg?si=-XMcxpwFWDrwjHG4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{position:"relative",top:"15px", }}>HOW TO COOK PAP| PAP FOR BEGINNERS| WITH NO LUMPS | #howtomakepap | #HowtocookSadza | #Ugali</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/1BkZfGFbsfo?si=3AwEn0d5Sqbi0J0y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>How to make Pap/Uphuthu Tutorial || South African Youtuber</p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <MDBContainer style={{ position: "relative", left: "12%", top: "150px", }}>
            <MDBRow>
                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/9Y6wLIxjbbc?si=PTAe8XPle2S5PCc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Pap Recipe South Africa: How To Cook South African Pedi Pap with no lumps | Pedi Pap/Mielie Meal</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/pA59RONoB8Q?si=OKTB0qHTP_YzE0wm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{position:"relative",top:"15px",  }}>Watch: How to cook pap for beginners/ South Africa</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/dIvkXNlfiMI?si=DVXA_46oT1D0Je5y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Watch: HOW TO COOK PAP|HOW TO MAKE FLUFFY PAP WITH RAMA.</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/djm5nzPZj5o?si=UbwtFvJAgKLF3RNj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Watch: Ugali (Maize Meal) recipe with measurements</p>
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
