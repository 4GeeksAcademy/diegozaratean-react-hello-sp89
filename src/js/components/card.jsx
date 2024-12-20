import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Card = (props)=>{
    console.log(props)
    console.log(props.name)
    console.log(props.likes)
    return(
        <div className="card" style={{width: "18rem", backgroundColor: "#EEE"}} >
            <img src={rigoImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">@{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <p>{props.likes} likes</p>
                <a href="#" className="btn btn-primary">Like</a>
            </div>
        </div>
    )
}

export default Card
