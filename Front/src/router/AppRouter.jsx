import { Routes, Route } from "react";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import User from "../pages/user/User";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/sign-in" element={<Login />} />
			<Route path="/user" element={<User />} />
		</Routes>
	);
};

export default AppRouter;
