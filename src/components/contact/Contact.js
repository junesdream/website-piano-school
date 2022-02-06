import React from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
		<div className="contact">
			<div className="container">
				<div className="col-1">
					<div className="content">
						<div>
							<h2>Get in touch</h2>
							<p>
								Duis autem vel eum iriure dolor in hendrerit in
								vulputate velit esse molestie consequat, vel
								illum dolore eu feugiat nulla facilisis.
							</p>
						</div>
                        <div className="address">
                            <p>Am Paul-Linke-Uper 70</p>
                            <p>Berlin 10969</p>
                        </div>
                        <div className="icons">
                            <FaPhone style={{marginRight:"1rem"}} />
                            <p>+49 (30) 60979453 </p>
                        </div>
                        <div className="icons">
                            <FaEnvelope style={{marginRight:"1rem"}} />
                            <p>info@rainbow.com</p>
                        </div>
                        <div className="careers">
                            <p>Looking for careers? <span> View all job opening</span>
                            </p>
                        </div>
					</div>
				</div>
                <div className="col-2">
                    <form action="">
                        <input type="text" placeholder='Full name' />
                        <input type="email" placeholder='Email' />
                        <input type="phone" placeholder='Phone' />
                        <textarea name="Message" placeholder="Messsage" id="" cols="30" rows="10"></textarea>
                        <div className="checkbox">
                            <input type="checkbox" />
                            <p>By checking this box, you agree to the <span>Privacy Policy</span> and
                            <span>Cookie Policy </span>.</p>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
			</div>
		</div>
  );
};

export default Contact;
