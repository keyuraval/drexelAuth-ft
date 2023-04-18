import styles from "./styles.module.css";

const Main = () => {

    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>Drexel Bot</h1>
                <link to='/login'>
                    <button className={styles.white_btn}>
                        Login
                    </button>
                </link>

            </nav>
        </div>
    );
};

export default Main;