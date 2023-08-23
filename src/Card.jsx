import React from  "react";

function Card(props) {
    return (
<>
<div className="Cards">
    <div className="Card">
        <img src={props.source} alt="" className="card_img" />
        <div className="card_info" >
<span className="card_category">{props.category}</span>
<h3 className="card_title" title={props.sname}>{props.sname}</h3>
<a href={props.link} target="_blank">
    <button className="button">Watch Now</button>
</a>
        </div>

    </div>
 
</div>

</>
    );
}

export default Card;