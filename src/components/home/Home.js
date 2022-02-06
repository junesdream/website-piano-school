import React from "react";
import "./Home.css";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import Pricing from "../pricing/Pricing";
import Testimonial from "../testimonial/Testimonial";
import Faq from "../faq/Faq";
import Contact  from "../contact/Contact";
import Footer from '../footer/Footer';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Pricing />
			<Testimonial />
			<Faq />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
