import React from 'react'

const Card = ({
    image,
    title,
    description,
}) => {
    return (
        <div className="card">
            <img src={image} alt="" />
            <div className="right">
                <div className="title">
                    {title}
                </div>
                <div className="description">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default Card
