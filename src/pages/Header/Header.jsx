import styles from "./Header.module.css";


export default function Header() {
	return (
		<div className={styles.header}>
			<h3>Home</h3>
			<h3>Contacts</h3>
			<h3>About</h3>
		
		</div>
	);
}
