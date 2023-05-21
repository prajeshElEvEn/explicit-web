import React from 'react'

const Card = ({
    title,
    description,
}) => {
    return (
        <div className="card">
            <img src="" alt="" />
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
