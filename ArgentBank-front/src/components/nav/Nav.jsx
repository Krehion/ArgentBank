import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";
import logo from "../../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "../../style/components/_nav.scss";

export default function Nav() {
	const { user, isAuthenticated } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logout());
		navigate("/");
	};

	return (
		<nav className="main-nav">
			<NavLink to={"/"} className={"main-nav--logo"}>
				<img src={logo} />
			</NavLink>
			<div className="main-nav--items-container">
				{isAuthenticated ? (
					<>
						<NavLink to={"/user"} className="main-nav--item">
							<FontAwesomeIcon icon={faCircleUser} /> {user?.firstName}
						</NavLink>
						<a onClick={handleLogout} className="main-nav--item">
							<FontAwesomeIcon icon={faRightFromBracket} /> Log out
						</a>
					</>
				) : (
					<NavLink to={"sign-in"} className="main-nav--item">
						<FontAwesomeIcon icon={faCircleUser} /> Sign in
					</NavLink>
				)}
			</div>
		</nav>
	);
}
