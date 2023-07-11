import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/v1';

export const getLocations = async () => {
    try {
        const response = await axios.get('/locations');
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const addLocation = async (location) => {
    try {
        const response = await axios.post('/locations/addLocation', location);

        if(response.status === 200) {
            return response;
        }

    } catch (error) {
        return Promise.reject({error: "Name & Address is already exist"});
    }
}