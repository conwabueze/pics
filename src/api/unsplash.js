import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID 1989624928f5ab7e108f6f0f89a59d096d48c6aff68ac26d4053384ed9b87021'
    }
});