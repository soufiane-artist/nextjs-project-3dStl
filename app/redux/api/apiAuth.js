import axios from "axios";
import { authAction } from '../slices/sliceAuth';
import { toast } from 'react-toastify';

export function loginUser(user) {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:2002/api/auth/login', user);
            dispatch(authAction.login(data));
            localStorage.setItem('user', JSON.stringify(data));
            return data; // Return data for component handling
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Login failed';
            toast.error(errorMessage);
            throw error; // Throw error for component handling
        }
    }
}
