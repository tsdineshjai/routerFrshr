/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Drill.module.css";
import { ContextCount } from "../CounterProvider";
import { useContext } from "react";

function Drill() {
	return (
		<div className={styles.countContainer}>
			<Count />
			<Buttons />
		</div>
	);
}

export default Drill;

function Count() {
	const { count } = useContext(ContextCount);
	return <h3>{count}</h3>;
}

function Buttons() {
	const { setCount } = useContext(ContextCount);
	return (
		<>
			<button onClick={() => setCount((currentCount) => currentCount + 1)}>
				+
			</button>
			<button onClick={() => setCount((currentCount) => currentCount - 1)}>
				-
			</button>
		</>
	);
}
