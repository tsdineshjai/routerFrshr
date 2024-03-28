import React, { Suspense } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";

const Players = React.lazy(() => import("./pages/Players"));
function App() {
	return (
		<>
			<Header />

			<BrowserRouter>
				<AppBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/players"
						element={
							<Suspense fallback={<h1>loading...</h1>}>
								<Players />
							</Suspense>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

function AppBar() {
	const navigate = useNavigate();
	return (
		<>
			<button onClick={() => navigate("/")}>Home</button>
			<button onClick={() => navigate("/players")}>Players</button>
			<br />
		</>
	);
}
