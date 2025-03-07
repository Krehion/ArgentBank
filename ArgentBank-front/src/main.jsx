import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./utils/router/AppRouter";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AppRouter />
	</StrictMode>
);
