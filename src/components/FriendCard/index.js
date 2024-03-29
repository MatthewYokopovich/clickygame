import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card" >
      <div className="img-container" >
        <img alt={props.name} src={props.image} onClick={props.handleClick} data-id={props.id}/>
      </div>
    </div>
  );
}

export default FriendCard;
