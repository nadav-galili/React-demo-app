import React, { useState } from "react";

function MydivContainer(){
    const [activeText, setActiveText]=useState('');

    function mouseoverHandler(e){
setActiveText('active')
    }

    function mouseoutHandler(e){
        setActiveText('')
    }


return (
    <div 
    onMouseOver={mouseoverHandler}
    onMouseOut={mouseoutHandler}>
        MyDiv{activeText}
    </div>
)
}
export default MydivContainer;
