import React from 'react'
import '../Styles/wallpaper.css'

export default function MealType(props) {
    return (
        <div className="item col-lg-4 col-md-12 shadow p-3 mb-5 bg-body rounded">
            <img src={require(`../images/${props.item.image}`)} alt="" />
            <div className="descp-item">
                <h4>{props.item.name}</h4>
                <p>{props.item.content}</p>
            </div>
        </div>
    )
}
