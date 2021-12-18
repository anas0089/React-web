import React from 'react'

import "./NavBar.css";
function NavBar() {

    return (
<div className="NavBar" >
		<div className="Logoplace" >
			<a href="/" >
				<img src="https://telegra.ph/file/31d2524903d8bea2552fc.jpg" />
			</a>
			<div className="catacry" >
				<a href="/movies" >
				Movies
				</a>
				<a href="/series" >
				Series
				</a>
				<a href="/comedy" >
				Comedy
				</a>
			</div>
		</div>
		<div className="serchbox" >
			<form className="example" action="action_page.php">
			<input type="text" placeholder="Search.." name="search" required />
			<button type="submit"><i class="fa fa-search"></i></button>
			</form>
		</div>
	</div>
	    )
}
	
export default NavBar
