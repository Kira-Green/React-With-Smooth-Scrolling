import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import Sax from '../Images/saxophone-72-312.png';

export default class Navbar extends Component {
	scrollToTop = () => {
		scroll.scrollToTop();
	};

	render() {
		return (
			<nav className="nav" id="navbar">
				<div className="nav-content">
					<img
						src={Sax}
						className="nav-logo"
						alt="Logo"
						onClick={this.scrollToTop}
					/>
					<ul className="nav-items">
						<li className="nav-item">
							<Link
								activeClass="active"
								to="section1"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Introduction
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="section2"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Photos
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="section3"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Hobbies
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="section4"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Education and work experience
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="section5"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Links and Contact Info
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
