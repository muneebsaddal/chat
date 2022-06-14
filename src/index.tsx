import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signUp" element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	</Provider>
);
