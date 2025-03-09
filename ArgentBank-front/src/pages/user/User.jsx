import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/authSlice";

const API_URL = "http://localhost:3001/api/v1/user/profile";

import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import "../../style/components/_user.scss";

const User = () => {
	const dispatch = useDispatch();
	const { user, token } = useSelector((state) => state.auth);

	useEffect(() => {
		if (!token) return;

		const fetchUserProfile = async () => {
			try {
				const response = await fetch(API_URL, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`
					}
				});

				const data = await response.json();
				if (!response.ok) throw new Error(data.message || "Failed to fetch profile");

				dispatch(setUser(data.body));
			} catch (error) {
				console.error("Profile fetch error:", error);
			}
		};

		fetchUserProfile();
	}, [token, dispatch]);

	if (!user) return <p>Loading...</p>;

	return (
		<>
			<Nav />
			<main className="bg-dark user">
				<div className="user--welcome">
					<h1>
						Welcome back <br />
						{user.firstName} {user.lastName}!
					</h1>
					<button>Edit name</button>
				</div>
				<div className="user--account">
					<div className="user--account--wrapper">
						<h2 className="user--account--title">Argent Bank Checking (x8349)</h2>
						<p className="user--account--amount">$2,082.79</p>
						<p>Available balance</p>
					</div>
					<button className="user--account--cta">View transactions</button>
				</div>
				<div className="user--account">
					<div className="user--account--wrapper">
						<h2 className="user--account--title">Argent Bank Savings (x6712)</h2>
						<p className="user--account--amount">$10,928.42</p>
						<p>Available balance</p>
					</div>
					<button className="user--account--cta">View transactions</button>
				</div>
				<div className="user--account">
					<div className="user--account--wrapper">
						<h2 className="user--account--title">Argent Bank Credit card (x8349)</h2>
						<p className="user--account--amount">$184.30</p>
						<p>Available balance</p>
					</div>
					<button className="user--account--cta">View transactions</button>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default User;
