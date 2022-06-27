import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/reset" element={<Reset />} />
			<Route path="/home" element={<App />} />
		</Routes>
	</BrowserRouter>
);
