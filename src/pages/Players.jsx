import React from "react";

export default function Players() {
	const [players] = React.useState(["mark", "mason", "petic"]);
	return (
		<>
			<ul>
				{players.map((player) => (
					<li key={player}>{player}</li>
				))}
			</ul>
		</>
	);
}
