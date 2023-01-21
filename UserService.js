import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:5000/users";
const USER_API_BASE_URL2  = "http://localhost:5000"

class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    getUserById(id){
        return axios.get(USER_API_BASE_URL + '/' + id);
    }

    getUniqueId(){
        return axios.get(USER_API_BASE_URL2+'/get_unique_id')
    }

    updateUser(user, id){
        return axios.put(USER_API_BASE_URL + '/' + id, user);
    }

    deleteUser(id){
        return axios.delete(USER_API_BASE_URL + '/' + id);
    }
}

export default new UserService()