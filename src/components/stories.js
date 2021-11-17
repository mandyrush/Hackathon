import React from "react";
export default function Stories({ stories }) {
    return (

        <ul>
            {stories.map((story, index) => {
                const storyUrl = '/item?id=' + story.objectID;
                const authorUrl = '/user?id=' + story.author;
                return (


                    <li key={index}>
                        <p>{story.title} <a href={story.url}>{story.url}</a></p>
                        <p>
                            <a href={storyUrl}>{story.points} points</a> | <a href={authorUrl}>{story.author}</a> | <a href={storyUrl}>{story.num_comments}comments</a>
                        </p>
                    </li>
                )
            })}
        </ul>


    )
}