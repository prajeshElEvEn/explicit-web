import React from 'react'

const HomePage = () => {
    return (
        <div className="container">
            <div className="box">
                <div className="header">
                    <div className="sub-title">
                        Clean. Safe. Secure.
                    </div>
                    <div className="title">
                        Reporting and Curating Explicit Content on YouTube
                    </div>
                    <div className="description">
                        Explicit is a platform dedicated to reporting and curating explicit video content found on YouTube. We aim to make YouTube a cleaner and safer environment by identifying and reporting explicit videos, ensuring a more enjoyable and family-friendly experience for all users.
                    </div>
                </div>
                <form>
                    <div className="text">
                        Submit a explicit YouTube video URL
                    </div>
                    <div className="form-field">
                        <div className="input">
                            <input
                                type="url"
                                placeholder='Enter YouTube video URL'
                            />
                        </div>
                        <button className='btn'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default HomePage
