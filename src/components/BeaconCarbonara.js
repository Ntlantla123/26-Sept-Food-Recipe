import React from 'react'
import { MDBContainer } from "mdb-react-ui-kit";
import { TopNav } from './TopNav';
import './BeaconCarbonana.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';



import logoshesha from './images/logoshesha.png';

export default function BeaconCarbonara() {
    return (<>
        <TopNav />
        <section className="section_BeaconCarbonana" style={{ backgroundColor: "rgb(248, 248, 248)", height: "20vh", width: "125%",}}>
            <h4 className="text-start text-light my-5" style={{ position: "relative", top: "30px", left: "10%", fontSize: "40px", fontWeight: "600", }}>Make your Beacon Carbonara Pasta</h4>
        </section>

        {/*Paragraph and Heading Section*/}
        <p className="text-start text-dark my-5" style={{ position: "relative", top: "-10px", left: "13%", fontSize: "20px", }}>WATCH: 10-MINUTE BEACON CARBONARA PASTA</p>

        <h4 className="text-start text-dark my-5" style={{ position: "relative", top: "30px", left: "13%", fontSize: "30px", fontWeight: "600", }}>Before watching the video, small introduction about <span style={{ color: "red", }}>Beacon Carbonara Pasta</span></h4>

        <p className="text-start text-dark my-5" style={{ position: "relative", top: "30px", left: "13%", fontSize: "25px", }}>Carbonara (Italian: [karbo'na:ra]) is a pasta dish made with eggs, hard cheese, cured pork, and black pepper. The dish took its modern form and name in the middle of the 20th century. The cheese is usually Pecorino Romano, parmesan, or a combination of the two.</p>
        {/* End Paragraph and Heading Section*/}


        <MDBContainer style={{ position: "relative", left: "12%", }}>
            <div className="ratio ratio-16x9" style={{ width: "60%", }}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/waH2yGRWh5E?si=KJJmC6KFIZIzYejz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            </div>
            <p style={{ fontSize: "30px",position:"relative",top:"15px",  }}>Easy Carbonara Pasta with Bacon | 5 ingredients | 10 min</p>
        </MDBContainer>


        <h4 className="text-start text-dark my-5" style={{ position: "relative", top: "90px", left: "13%", fontSize: "30px", fontWeight: "600", }}>Lastest Recipe Videos</h4>

        <MDBContainer style={{ position: "relative", left: "12%", top: "100px", }}>
            <MDBRow>
                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4nAfxzE02Gw?si=iV1FKn53J8XYij-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Easy Carbonara in 15 Minutes</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/D_2DBLAt57c?si=lFsdC3AM_ZfNCSMK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>How to Make Classic Carbonara | Jamie Oliver</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5t7JLjr1FxQ?si=bJA41RJSwFLNY41H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Gordon Ramsay Cooks Carbonara in Under 10 Minutes | Ramsay in 10</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dzyXBU3dIys?si=dU4YQsyWVZT282wR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Pasta Carbonara the American Way (With Bacon)</p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <MDBContainer style={{ position: "relative", left: "12%", top: "150px", }}>
            <MDBRow>
                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Mprr5Q5Z7H4?si=vj-_QDd47JT9MBVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Creamy Carbonara Pasta - Christmas Recipe</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/vBcXtkXzuVE?si=LTO-vaqDM_E2s9Lt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>Watch: Easy Cheesy Creamy Spaghetti Carbonara *Non-Traditional*</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/H1nATgspzKM?si=OZPUoOsKWHF_2gnl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ position:"relative",top:"15px",  }}>My husband's favorite recipe! Perfect pasta carbonara recipe</p>
                </MDBCol>

                <MDBCol size='md'>
                    <div className="ratio ratio-16x9" style={{ width: "100%", }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6Oy5ITdDQ3o?si=qK1rwG8q-1wgeXbe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <p style={{ fposition:"relative",top:"15px",  }}>How to Make SPAGHETTI alla CARBONARA in 2021 (Next Level Carbonara)</p>
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
