import React from "react";
import styles from "./Header.module.css";

function Header() {
	return (
		<div className={styles.header}>
			<h3>Home</h3>
			<h3>Contacts</h3>
			<h3>About</h3>
		</div>
	);
}

const RHeader = React.memo(Header);

export default RHeader;
