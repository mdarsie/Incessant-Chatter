import React from 'react'
import './index.css'

export default function Patter(props) {
    return (
        <div className="patter-container">
            <img className="profile-image" src={`${props.picture_url}`} />
            <div className="content-container">
                <div className="user-name">
                    {props.name} <div className="handle">@{props.handle}</div>
                </div>
                {props.content}
                Likes {props.length}
            </div>
        </div>
    )
}