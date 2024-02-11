const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();
  
    // options for cookie
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: false,  //access frontend side
      secure: false,
    };
  
    res.status(statusCode).cookie("token", token).json({
      success: true,
      user,
      token,
    });
  };
  
  module.exports = sendToken;