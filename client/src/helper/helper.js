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

export const getLocationById = async (id) => {
    try {
        const response = await axios.get(`/locations/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteLocation = async (id) => {
    try {
        const response = await axios.delete(`/locations/deleteLocation/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const updateLocation = async (id, location) => {
    try {
        const response = await axios.put(`/locations/updateLocation/${id}`, location);
        return Promise.resolve(response.data);
    } catch (error) {
        return Promise.reject({error: "Name & Address is already exist"});
    }
}


// -----------------Devices-----------------
export const getDevices = async (locationId) => {
    try {
        const response = await axios.get(`/devices/?locationId=${locationId}`);
        return Promise.resolve(response.data);
    } catch (error) {
        return Promise.reject(error);
    }
}

export const addDevice = async (locationId, device) => {
    try {
        const response = await axios.post(`/devices/addDevice/?locationId=${locationId}`, device);
        return Promise.resolve(response.data);
    } catch (error) {
        return Promise.reject(error);
    }
}