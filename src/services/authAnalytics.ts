import axios from "axios";

export default axios.create({
    baseURL: "https://adbuyersclubdev.oa.r.appspot.com",
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
})

