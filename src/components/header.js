import { useState } from "react";
import React from "react";

import "../styles/header.css";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCog } from '@fortawesome/free-solid-svg-icons';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Header({ searchStories }) {
    const [query, setQuery] = useState([]);


    const handleChange = (event) => {
        console.log('working', event.target.value);

        setQuery(event.target.value);

        searchStories(query);
    }

    return (
        <div className="search-bar">
            <div className="site-name">
                <span className="logo">H</span>
                <a href="/">
                    <p>Search<br></br>Hacker News</p>
                </a>
            </div>
            <div className="input-container">
                <input type="text" onChange={(event) => handleChange(event)} placeholder="Search stories by title, url or author" />
                
            </div>
            <a href="/settings"> Settings</a>
        </div>
    )
}