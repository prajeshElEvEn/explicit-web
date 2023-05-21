import React from 'react'

const Footer = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="left">
                    <div className="text">
                        &copy; {new Date().getFullYear()} <a href="https://prajesheleven.github.io/mine2.0/" target="_blank" rel="noopener noreferrer">ElEvEn Co.</a> All rights reserved
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
