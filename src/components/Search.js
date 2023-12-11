import React from 'react';
import styles from "../styles/Search.module.scss";
import searchIcon from "../assets/search.svg";

const Search = () => {
    return (
        <div className={styles.searchContainer}>
            <img className={styles.searchIcon} src={searchIcon} alt="searchIcon"/>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Поиск"
                />
        </div>
    );
};

export default Search;