import React from "react"
const Error = () => {
    return (
        <>
            <div className="error-container text-center">
                <h1 className="display-1 text-danger">404</h1>
                <p className="lead">Oops! Page not found.</p>
                <p className="lead">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <a href="/" className="btn btn-primary">
                    Go Back to Home
                </a>
            </div>
        </>
    )
}

export default Error
