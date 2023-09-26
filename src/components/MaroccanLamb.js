import React from 'react'
import { MDBContainer } from "mdb-react-ui-kit";
import { TopNav } from './TopNav';
import './MaroccanLamb.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';



import logoshesha from './images/logoshesha.png';

export default function MaroccanLamb() {
    return (<>
        <TopNav />
        <section className="section_OnePotWonder" style={{ backgroundColor: "rgb(248, 248, 248)", height: "20vh", width: "125%", }}>
            <h4 className="text-start text-light my-5" style={{ position: "relative", top: "30px", left: "10%", fontSize: "40px", fontWeight: "600", }}>Make your Maroccan Lamb Tagine</h4>
        </section>

        {/*Paragraph and Heading Section*/}
        <p className="text-start text-dark my-5" style={{ position: "relative", top: "-10px", left: "13%", fontSize: "20px", }}>WATCH: 7-MINUTE MAROCCAN LAMB TAGINE</p>

        <h4 className="text-start text-dark my-5" style={{ position: "relative", top: "30px", left: "13%", fontSize: "30px", fontWeight: "600", }}>Before watching the video, small introduction about <span style={{ color: "red", }}>Maroccan Lamb Tagine</span></h4>

        <p className="text-start text-dark my-5" style={{ position: "relative", top: "30px", left: "13%", fontSize: "25px", }}>But who introduced this dish to the nomadic tribes who first used it? Or was it invented in Morocco itself? According to the (insanely expensive) Encyclopedia of Kitchen History by Mary Ellen Snodgrass, the tagine dates back to Harun al Rashid, a late eighth-century ruler of the Islamic empire.</p>
        {/* End Paragraph and Heading Section*/}


        <MDBContainer style={{ position: "relative", left: "12%", }}>
            <div className="ratio ratio-16x9" style={{ width: "60%", }}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/MeFrYHCpPks?si=q8rxyMPnADjZLkdE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            </div>
            <p style={{ fontSize: "30px",position:"relative",top:"15px",  }}>Lamb Tagine Recipe - Easy Lamb Tajine - Moroccan Lamb - الطاجين</p>
        </MDBContainer>


        <h4 className="text-start text-dark my-5" style={{ position: "relative", top: "90px", left: "13%", fontSize: "30px", fontWeight: "600", }}>Lastest Recipe Videos</h4>

        <MDBContainer style={{ position: "relative", left: "12%", top: "100px", }}>
            <MDBRow>
                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/b1BEXRfFAow?si=z1sEaLTgPTBDNspM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>HOW TO PREPARE MOROCCAN LAMB TAGINE || COUS-COUS RECIPE || MAROKKANISCHES LAMM TAJINE APRIKOSEN</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/9Yzbre1n3WU?si=YZWPqjzD6_ilMIcb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Moroccan Lamb Tagine Recipe | With Dried Fruits and Couscous| by Lounging with Lenny</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/aeB_VWAnmUg?si=dd3nrbpWKQxitMMU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>How To Cook The Perfect Lamb Tagine With Apricot Tabouleh | James Martin's Mediterranean</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/k5grI8mJM7c?si=NDGUXxGxkLmVlzPq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Master Chef Hamid - How to make authentic Moroccan Tagine</p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <MDBContainer style={{ position: "relative", left: "12%", top: "150px", }}>
            <MDBRow>
                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/G3NbrdzftLY?si=QWptArYpZLT05s_J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Moroccan Lamb Meatballs</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CT67_7UJ0KM?si=8AzVuRoC1B_9HnMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Tender Moroccan slow cooked lamb shanks | North African cuisine | indulge with iti</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/s6BPk-PNHmQ?si=oAiviSfSZ4kH4GIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Moroccan Lamb tagine recipe - Rick Stein - BBC</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KilpSdcNlTE?si=-4p9JO5_frRmSC-v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Best Lamb Tagine you can eat outside of Morocco | Lamb Shank Tagine | Essence Cuisine</p>
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
