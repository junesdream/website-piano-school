import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="col solution">
					<div className="footer-topItems">
						<div className="footer-linkItems">
							<h6>Lessons</h6>
							<ul>
								<li>
									<Link to="/" className="link">
										Concert
									</Link>
								</li>
								<li>
									<Link to="/" className="link">
										Tutoring
									</Link>
								</li>
								<li>
									<Link to="/" className="link">
										Presentation
									</Link>
								</li>
								<li>
									<Link to="/" className="link">
										Remote
									</Link>
								</li>
							</ul>
						</div>

						<div className="col company">
							<h6>Company</h6>
							<ul>
								<li>
									<Link to="/" className="link">
										About
									</Link>
								</li>
								<li>
									<Link to="/" className="link">
										Blog
									</Link>
								</li>
								<li>
									<Link to="/" className="link">
										Jobs
									</Link>
								</li>
								<li>
									<Link to="/" className="link">
										Press
									</Link>
								</li>
							</ul>
						</div>
						<div className="col support">
                        <h6>Support</h6>
                        <ul>
                            <li><Link to="/" className="link">Pricing</Link></li>
                            <li><Link to="/" className="link">Recording</Link></li>
                            <li> <Link to="/" className="link">Guides</Link> </li>
                            <li><Link to="/" className="link">Talent Status</Link>
                            </li>
                        </ul>
                    </div>
<div className="col legal">
                        <h6>Legal</h6>
                        <ul>
                            <li>
                                <Link to="/" className="link">
                                    Claim
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="link">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="link">
                                    Cookies
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="link">
                                    Terms
                                </Link>
                            </li>
                        </ul>
                    </div>
					</div>

					<div className="col-subscribe">
						<h6>Subscribe to our newsletter</h6>
						<p>
							The latest news, articles, and resources sent to
							your inbox weekly.
						</p>
						<div className="subscribe">
							<input
								type="email"
								placeholder="Enter your email"
							/>
							<button>Subscribe</button>
						</div>
					</div>

				</div>

				<div className="footer-bottom">
					<div className="content">
						<div className="rights">
							<p>&copy; 무지개, Inc. All rights reserved.</p>
						</div>
						<div className="footer-social">
							<FaFacebook
								size={20}
							/>
							<FaInstagram
								size={20}
							/>
							<FaTwitter
								size={20}/>
							<FaGithub
								size={20}/>
						</div>
					</div>
				</div>
                
			</div>
		</div>
	);
};

export default Footer;
