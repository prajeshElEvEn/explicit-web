import React from 'react'

const Footer = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="left">
                    <div className="text">
                        &copy; {new Date().getFullYear()} <span>ElEvEn Co.</span> All rights reserved
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
