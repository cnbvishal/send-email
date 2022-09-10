import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Singup";
import EmailVerify from "./components/EmailVerify";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/" element={<Navigate replace to="/signup" />} />
			<Route path="/users/:id/verify/:token" element={<EmailVerify />} />
		</Routes>
	);
}

export default App;
