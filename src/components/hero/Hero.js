import React from 'react';
import { GiMusicalScore, GiMusicalKeyboard, GiDrum } from "react-icons/gi";
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';
import './Hero.css';


const Hero = () => {
  return (
		<div className="hero">
			<div className="container">
				<div className="content">
					<div className="col-1">
						<h1 className="hero-title">
							Full of natural sound with your hands
						</h1>
						<h1>
							<span className="hero-title">Online course</span>
						</h1>
						<p>
							Lorem ipsum dolor sit amet, consetetur sadipscing
							elitr, sed diam nonumy eirmod tempor invidunt ut
							labore et dolore magna aliquyam erat, sed diam
							voluptua. At vero eos et accusam et justo duo
							dolores et ea rebum. Stet clita kasd gubergren, no
							sea takimata sanctus est Lorem ipsum dolor sit amet.
						</p>
						<div className="used-by">
							<p>USED BY</p>
							<div className="icons">
								<i>
									<GiMusicalScore /> Notes
								</i>
								<i>
									<GiMusicalKeyboard /> Keys
								</i>
								<i>
									<GiDrum /> Bars
								</i>
							</div>
						</div>
					</div>
					<div className="col-2">
						<div className="form-layout">
							<div className="form-container">
								<p className="sign-in-txt" style={{color: "yellowgreen"}}>Sign in with</p>
								<div className="social-login">
									<i>
										<FaFacebook size={20} />
									</i>
									<i>
										<FaTwitter size={20} />
									</i>
									<i>
										<FaGithub size={20} />
									</i>
								</div>
								<div className="divider">
									<p>
										<span>Or</span>
									</p>
								</div>
								<form action="">
									<input type="text" placeholder="Name..." />
									<input
										type="email"
										placeholder="Email..."
									/>
									<input
										type="password"
										placeholder="Password..."
									/>
									<button>Create yoru account</button>
								</form>
							</div>
							<div className="form-footer">
								<p>
									By signing up, you agree to our
									<span> Private, Data Policy</span> and
									<span> Cookies Policy</span>.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
};

export default Hero;
