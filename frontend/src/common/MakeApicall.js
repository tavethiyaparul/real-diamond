import axios from "axios"

let BASE_URL = "https://dharmiimpex.com/api"

export const makeApiCall = async (
    method,
    endpoint,
    params,
    // token,
    content_type
    //   navigateFunc
) => {
    //   const user = JSON.parse(localStorage.getItem("user"));
    //   const token = decryptToken(user.token, SECRET_KEY);

    const headers = {
        // token: token,
        "Content-Type": content_type === "raw" ? "application/json" : content_type === "formdata" ? "multipart/form-data" : "application/json",
    }

    const config = {
        headers: headers,
        // withCredentials: true
    }

    try {
        let response
        if (method === "post") {
            response = await axios.post(BASE_URL + endpoint, params, config)
        } else if (method == "delete") {
            if (params === null) {
                params = ""
            }
            response = await axios.delete(BASE_URL + endpoint + params, config)
        } else {
            if (params === null) {
                params = ""
            }
            response = await axios.get(BASE_URL + endpoint + params, config)
        }
        // if (response.data.status === 10) {
        // console.log("make api", response.data.status)
        // window.location.href = "/login"
        //     // window.location.reload()
        // //   handleLogout(navigateFunc);
        // } else {
        return response
        // }
    } catch (error) {
        if (error.response.data.status === 10) {
            //   // handleLogout(null);
            window.location.href = "/login"
            //   // window.location.reload()
            //   console.log("API call logout");
        }
        console.error("API call error:", error)
        throw error // Rethrow the error to handle it at the calling site
    }
}
