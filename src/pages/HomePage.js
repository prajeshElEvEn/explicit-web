import React from 'react'
import Card from '../components/Card'

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
                <div className="main">
                    <div className="title">
                        How it works?
                    </div>
                    <Card
                        title={"Collecting Explicit YouTube Links"}
                        description={"The Explicit platform utilizes various mechanisms to identify explicit videos on YouTube. These mechanisms may include user submissions, automated content scanning, and manual review processes. Users can submit explicit video links they come across, or the system may proactively detect potentially explicit content using advanced algorithms and filters."}
                    />
                    <Card
                        title={"Saving Links in a Dataset"}
                        description={"Once explicit video links are collected, they are securely stored in a dataset. The dataset serves as a repository of explicit video information, which may include details like video URLs, metadata, timestamps, and relevant user-generated reports. This dataset acts as a centralized source of information for further analysis and reporting."}
                    />
                    <Card
                        title={"Reporting Explicit Videos:"}
                        description={"The Explicit platform empowers users to report explicit videos found on YouTube. Users can browse the dataset, verify the content, and submit reports based on their observations. These reports can include specific details about the explicit nature of the video, violations of community guidelines, or any other relevant information. The reported videos are then flagged and reported to the appropriate channels or authorities responsible for enforcing YouTube's policies."}
                    />


                </div>
            </div>
        </div>
    )
}

export default HomePage
