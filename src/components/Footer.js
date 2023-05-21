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
                <div className="right">
                    <a
                        href="mailto:prajesh.eleven118@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='btn'
                    >
                        <svg width="18" height="18" fill="#333333" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.25 6v13.5h19.5V6H2.25Zm3.234 1.5h13.032L12 11.836 5.484 7.5Zm-1.734.656 7.828 5.227.422.258.422-.258 7.828-5.227V18H3.75V8.156Z"></path>
                        </svg>
                        <span>Write to Us</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
