import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="left">
                    <Link to={'/'} className="logo">
                        Explicit
                    </Link>
                </div>
                <div className="right">
                    <a href="https://github.com/prajeshElEvEn/explicit-web" target="_blank" rel="noopener noreferrer" className='btn'>
                        <svg width="18" height="18" fill="#333333" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M12 3c-4.972 0-9 4.028-9 9a9.001 9.001 0 0 0 6.155 8.54c.451.082.616-.193.616-.434 0-.213-.01-.779-.012-1.529-2.505.542-3.032-1.207-3.032-1.207-.41-1.04-1-1.318-1-1.318-.817-.557.062-.545.062-.545.902.064 1.377.926 1.377.926.803 1.377 2.106.978 2.62.75.081-.583.316-.979.57-1.204-1.998-.226-4.098-1-4.098-4.448 0-.984.351-1.787.926-2.417-.091-.225-.402-1.142.087-2.382 0 0 .756-.24 2.476.923A8.615 8.615 0 0 1 12 7.354a8.615 8.615 0 0 1 2.253.301c1.72-1.163 2.473-.923 2.473-.923.492 1.24.184 2.157.09 2.382.578.63.923 1.433.923 2.417 0 3.457-2.103 4.216-4.107 4.442.322.275.61.826.61 1.664 0 1.204-.01 2.174-.01 2.47 0 .24.162.52.619.433A9.003 9.003 0 0 0 21 12c0-4.972-4.028-9-9-9Z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Github</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
