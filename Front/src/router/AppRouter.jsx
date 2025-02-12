import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import User from "../pages/user/User";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-in" element={<Login />} />
				<Route path="/user" element={<User />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
