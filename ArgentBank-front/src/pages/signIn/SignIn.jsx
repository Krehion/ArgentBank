import Nav from "../../components/nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";
import "../../style/components/_signin.scss";

const SignIn = () => {
	return (
		<>
			<Nav />
			<main className="bg-dark">
				<div className="signin">
					<FontAwesomeIcon icon={faCircleUser} />
					<h1>Sign in</h1>
					<form className="signin--form">
						<div className="signin--form--input-wrapper">
							<label for="username">Username</label>
							<input id="username" type="text" />
						</div>
						<div className="signin--form--input-wrapper">
							<label for="password">Password</label>
							<input id="password" type="password" />
						</div>
						<div className="signin--form--input-remember">
							<input id="rememberme" type="checkbox" />
							<label for="rememberme">Remember me</label>
						</div>
						<button type="submit" className="signin--form--btn">
							Sign in
						</button>
					</form>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default SignIn;
