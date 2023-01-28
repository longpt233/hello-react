import React from "react";  
import { Link } from "react-router-dom";
 

const NavBar = () => {
	return (
	  <div>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
		  <div className="container-fluid">
			 
			<div
			  className="collapse navbar-collapse"
			  id="navbarSupportedContent"
			>
			  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
				<li className="nav-item">
				  <Link className="nav-link" to="/world">
					Thế giới đó đây
				  </Link>
				</li>
				<li className="nav-item">
				  <Link className="nav-link" to="/cine">
					Phim 
				  </Link>
				</li> 
				<li className="nav-item">
				  <Link className="nav-link" to="/health">
					Sức khỏe
				  </Link>
				</li>
			  </ul>
			</div>
		  </div>
		</nav>
	  </div>
	);
  }
  
  export default NavBar;