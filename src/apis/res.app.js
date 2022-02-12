import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import Axios from 'axios';


const restClient = rest('https://api.kramasoft-frontend.smarttersstudio.in');

/**
 * Feathers application
 * @type {createApplication.Application<any>}
 */
const restApp = feathers();

restApp.configure(restClient.axios(Axios));


export default restApp;


export const uploadFile = (file) => {
    const formData = new FormData();
    formData.append('uri[]', file);
    return customService.create(formData);
};

export const customService = restApp.service('v1/custom');

