import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../../pages/index/Index";
import SignIn from "../../pages/signIn/SignIn";
import User from "../../pages/user/User";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Index />} />
				<Route path="sign-in" element={<SignIn />} />
				<Route path="user" element={<User />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
