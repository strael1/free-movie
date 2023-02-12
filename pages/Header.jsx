import styles from '../styles/header.module.css';

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <section className={styles.headerLogo}>
                    <i className="bars"></i>
                </section>
                <nav className={styles.headerSearch}>
                    <input type="search" placeholder="Pesquisar..." id="search" />
                    <label htmlFor="search"></label>
                </nav>
            </div>
        </header>
    )
}