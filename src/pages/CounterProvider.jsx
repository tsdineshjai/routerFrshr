/* eslint-disable react/prop-types */
import React from "react";
import { createContext } from "react";

export const ContextCount = createContext(null);

export default function CounterProvider({ children }) {
	const [count, setCount] = React.useState(0);

	return (
		<ContextCount.Provider value={{ count, setCount }}>
			{children}
		</ContextCount.Provider>
	);
}
