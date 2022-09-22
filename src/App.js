import './css/App.css';
import MemoryLimits from "./TemplateExperiments/MemoryLimits/MemoryLimits";
import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";

function App() {
	let navigate = useNavigate();

	useEffect(() => {
		var loggedIn = true;

		if (loggedIn) {
			navigate("/dashboard");
		} else {
			navigate("/login")
		}
	}, []);
	return (
		<div></div>
	);
}

export default App;
