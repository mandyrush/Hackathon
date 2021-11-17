import React from 'react'
import "../styles/Filter.css";

export default function Filter() {

    return (
        <div className="Filter">
            <p className="Search">Search</p>
            <select className='Selectone'>
                <option value="All">All</option>
                <option value="Stories">Stories</option>
                <option value="Comments">Comments</option>

            </select>
            <p>By</p>
            <select className='Selecttwo'>
                <option value="Popularity">Popularity</option>
                <option value="Date">Date</option>
            </select>
            <p>For</p>
            <select className="Selectthree">
                <option value="ALL TIME">All Time</option>
                <option value="Last 24h">Last 24h</option>
                <option value="Past week">Past Week</option>
                <option value="Past Month">Past Month</option>
                <option value="Past Year">Past Year</option>
                <option value="Custom Range">Custom Range</option>
            </select>
        </div>
    )

}
