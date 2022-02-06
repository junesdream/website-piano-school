import React from 'react';
import './Pricing.css';

const Pricing = () => {

  return (
		<div className="pricing">
			<div className="container">
				<div className="top-content">
					<div>
						<h2>
							Everything you need <span>€99 a month</span>
						</h2>
						<p>
							Includes every feature we offer plus unlimited
							tutoring and unlimited personal support.
						</p>
					</div>
					<div className="btn-div">
						<button>Get started today!</button>
					</div>
				</div>
				<div className="bottom-content">
					<div className="card">
						<p>
							<span>Everything you need</span>
						</p>
						<h3>All-in-one-lesson</h3>
						<p style={{ textAlign: "justify" }}>
							Duis autem vel eum iriure dolor in hendrerit in
							vulputate velit esse molestie consequat, vel illum
							dolore eu feugiat nulla facilisis at vero eros et
							accumsan et iusto odio dignissim qui blandit
							praesent luptatum zzril delenit augue duis dolore te
							feugait nulla facilisi.
						</p>
					</div>
					<div className="card">
						<div>
							<p>Make your own melody on the keyboard.</p>
						</div>
						<div>
							<p>Make your own melody on the keyboard.</p>
						</div>
						<div>
							<p>Make your own melody on the keyboard.</p>
						</div>
						<div>
							<p>Make your own melody on the keyboard.</p>
						</div>
						<div>
							<p>Make your own melody on the keyboard.</p>
						</div>
					</div>
					<div className="card">
						<div>
							<p>Make your own melody on the keyboard.</p>
						</div>
						<div>
							<p>Make your own melody on the keyboard.</p>
						</div>
						<div>
							<p>Make your own melody on the keyboard.</p>
						</div>
						<div>
							<p>Make your own melody on the keyboard.</p>
						</div>
						<div>
							<p>Make your own melody on the keyboard.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
};

export default Pricing;
