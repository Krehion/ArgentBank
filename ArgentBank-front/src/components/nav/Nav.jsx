import { NavLink } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "../../style/components/_nav.scss";

export default function Nav() {
	return (
		<nav className="main-nav">
			<NavLink to={"/"} className={"main-nav--logo"}>
				<img src={logo} />
			</NavLink>
			<div className="main-nav--items-container">
				<NavLink to={"sign-in"} className="main-nav--item">
					<FontAwesomeIcon icon={faCircleUser} /> Sign in
				</NavLink>
			</div>
		</nav>
	);
}
