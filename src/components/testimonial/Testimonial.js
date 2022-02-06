import React from "react";
import { GiGrandPiano } from "react-icons/gi";
import "./Testimonial.css";

const Testimonial = () => {
	return (
		<div className="testimonial">
			<div className="container">
				<div className="outline">
					<div className="content">
						<div className="testimonial-icons">
							<i style={{color:"lime"}}>
								<GiGrandPiano /> <br />
								Rainbow <br /> 무지개
							</i>
						</div>

						<p className="body">
							Lorem ipsum dolor sit amet, consetetur sadipscing
							elitr, sed diam nonumy eirmod tempor invidunt ut
							labore et dolore magna aliquyam erat,
						</p>
						<div className="name">
							<p>Jo-An Na</p>
							<p>Director, Rainbow</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
