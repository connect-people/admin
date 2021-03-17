import React, { useState } from 'react';

const Card = ({ ListData, item }) => {
    const [list, setList] = useState(item)
    const styles = {
        float: 'left',
        width: 'calc(50% - 20px)',
        height: '150px',
        margin: '5px',
        border: '1px solid red',
    }
    const imageArea = {
        display: 'block',
        width: '100px',
        height: '100px',
        // background: `'url(${list.imageUrl})'`,
        backgroundSize: '100px'
    }
    const fontStyle = {
        display: 'block',
        fontSize: 12,
    }


    return(
        <div style={styles}>
            <span style={imageArea}></span>
            <span style={fontStyle}>{list.brandName}</span>
            <span style={fontStyle}>{list.content}</span>
            <span style={fontStyle}>{list.majorCategoryName}</span>
        </div>  
    );
}

export default Card;