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

export const infiniteScroll = () => ({
    type: type.infinite_scroll,
})

export const infiniteScrollSuccess = (data) => ({
    type: type.infinite_scroll_success,
    data
})

export const infiniteScrollError = (error) => ({
    type: type.infinite_scroll_error,
    error
})

export const getDetail = (id) => ({
    type: type.get_detail,
    id
})

export const getDetailSuccess = (data) => ({
    type: type.get_detail_success,
    data
})

export const getDetailError = (error) => ({
    type: type.get_detail_error,
    error
})

export const choosenIndex = (index) => ({
    type: type.choosen_index,
    index
})

export const addPage = (page) => ({
    type: type.add_page,
    page
})

export const addTitle = (title) => ({
    type: type.add_title,
    title
})