import React from 'react'
import { TopNav } from './TopNav'
import './Contact.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import logoshesha from './images/logoshesha.png';


export default function Contact() {
    return (<>
        <TopNav />
        {/*Header Section*/}
        <header className="masthead_Contact">
            <div className="container h-100">
                <div className="col-12 text-center">
                    <h4 className="fw-light" style={{ position: "relative", top: "250px", fontSize: "65px", }}>Get in Touch</h4>
                    <p className="text-center text-light my-5" style={{ position: "relative", left: "1%", top: "80px", fontSize: "20px", }}>Contact</p>        </div>
            </div>
        </header>
        {/*Header Section*/}

        <p className="text-center text-dark my-5" style={{ position: "relative", left: "15%", top: "10px", fontSize: "20px", fontWeight: "600", }}>Lunch Recipes</p>

        <h4 className="text-center text-dark my-5" style={{ position: "relative", left: "15%", top: "-10px", fontSize: "50px", }}>Our Contact Details</h4>

        <Container style={{position:"relative",left:"25%",}}>

            <Row>
                <Col><span style={{ fontWeight: "600",fontSize:"25px", }}>Write to us</span> <br />ntlantla.simelela@younglings.africa</Col>
                <Col><span style={{ fontWeight: "600",fontSize:"25px", }}>Call us</span><br />tel : 021 675 3245</Col>
                <Col ><span style={{ fontWeight: "600",fontSize:"25px", }}>Visit us</span><br />20541 Bishop Tutu Street</Col>
            </Row>
        </Container>








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
