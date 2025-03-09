import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../redux/authSlice";
import { login } from "../../services/authService";

import Nav from "../../components/nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";
import "../../style/components/_signin.scss";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null); // Reset error before new attempt

		try {
			const token = await login(email, password);
			dispatch(setToken(token)); // Store token in Redux
			navigate("/user"); // Navigate after setting the token
		} catch (err) {
			setError(err.message); // Store error message if login fails
		}
	};

	return (
		<>
			<Nav />
			<main className="bg-dark">
				<div className="signin">
					<FontAwesomeIcon icon={faCircleUser} />
					<h1>Sign in</h1>
					<form className="signin--form" onSubmit={handleSubmit}>
						<div className="signin--form--input-wrapper">
							<label htmlFor="email">E-mail</label>
							<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
						</div>
						<div className="signin--form--input-wrapper">
							<label htmlFor="password">Password</label>
							<input
								id="password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<div className="signin--form--input-remember">
							<input id="rememberme" type="checkbox" />
							<label htmlFor="rememberme">Remember me</label>
						</div>
						<button type="submit" className="signin--form--btn">
							Sign in
						</button>
					</form>
					{error && <p className="signin--error">{error}</p>}
				</div>
			</main>
			<Footer />
		</>
	);
};

export default SignIn;
