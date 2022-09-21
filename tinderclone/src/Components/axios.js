import axios from 'axios';
const instance=axios.create({
    baseURL:'https://tinder-backend-90.herokuapp.com/'
    //http://localhost:8001
})
export default instance