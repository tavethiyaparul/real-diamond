const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken()

    // options for cookie
    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true, //access frontend side
        secure: true,
    }

    res.status(statusCode).cookie("token", token).json({
        status: 1,
        user,
        token,
    })
}

module.exports = sendToken
