import React from "react";
import "../styles/header.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <div className="search-bar">
            <div className="site-name">
                <span className="logo">H</span>
                <a href="/">
                    <p>Search<br></br>Hacker News</p>
                </a>
            </div>
            <div className="input-container">
                <input type="text" placeholder="Search stories by title, url or author" />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
            <a href="/settings"><FontAwesomeIcon icon={faCog} /> Settings</a>
        </div>
    )
}