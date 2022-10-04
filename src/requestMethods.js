import axios from "axios"

const BASE_URL = "http://localhost:8787/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWRmZWJiNzU0OGUyZDgyODJjZTAzOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDg4NjIyNiwiZXhwIjoxNjY1MTQ1NDI2fQ.8E2HOyo4ystd-yQ7Zj_KjlRehQ8iZxovShR6Q5KezqE"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});