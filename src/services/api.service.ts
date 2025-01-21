import {IUserResponseModel} from "../models/IUserResponseModel.ts";


const url = 'https://dummyjson.com';

    export const getUsers = async (page: string):Promise<IUserResponseModel> => {
            const limit = 30;
            const skip = limit * (+page) - limit;
            const response = await fetch(url + '/users' + '?skip=' + skip)
                .then(value => value.json())
            return response;

    }

