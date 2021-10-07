import * as type from "../type/type";

export const getData = () =>({
    type: type.get_data,
})

export const getDataSuccess = (data) => ({
    type: type.get_data_success,
    data
})

export const getDataError = (error) => ({
    type: type.get_data_error,
    error
})

export const searchData = (title) => ({
    type: type.search_data,
    title,
})

export const searchDataSuccess = (data) => ({
    type: type.search_data_success,
    data,
})

export const searchDataError = (error) => ({
    type: type.search_data_error,
    error
})