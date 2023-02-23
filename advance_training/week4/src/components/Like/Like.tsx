import React, { useState } from 'react'
import "./like.scss"

export type LikeProps = {
    count?: number;
}

export default function Like(props: LikeProps) {

    const { count = 100 } = props;
    const [liked, setLiked] = useState(false);

    function handleClick() {
        setLiked(prev => !prev);
    }

    return (
        <button role="like-button"
            onClick={handleClick}
            // style={{color:`${liked?"blue":""}`}}
            className={`btn ${liked ? 'btn-liked' : ''}`}
            >
            Like | {liked ? count + 1 : count}
        </button>
    )
}


// Like.defaultProps = {
//     count: 100
// }