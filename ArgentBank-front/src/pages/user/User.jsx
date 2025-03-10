import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/authSlice";

const API_URL = "http://localhost:3001/api/v1/user/profile";

import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import "../../style/components/_user.scss";

const User = () => {
	const dispatch = useDispatch();
	const { user, token } = useSelector((state) => state.auth);
	const [isEditing, setIsEditing] = useState(false);

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
						<span className="user--edit--name" style={{ display: isEditing ? "none" : "block" }}>
							{user.firstName} {user.lastName}!
						</span>
					</h1>
					<button
						className="user--welcome--btn user--edit--name"
						onClick={() => setIsEditing(true)}
						style={{ display: isEditing ? "none" : "block" }}>
						Edit name
					</button>
					<form className="user--edit--form" style={{ display: isEditing ? "flex" : "none" }}>
						<div>
							<input type="text" placeholder={user.firstName}></input>
							<input type="text" placeholder={user.lastName}></input>
						</div>
						<div>
							<button type="submit" className="user--edit--form--btn">
								Save
							</button>
							<button type="button" className="user--edit--form--btn" onClick={() => setIsEditing(false)}>
								Cancel
							</button>
						</div>
					</form>
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
