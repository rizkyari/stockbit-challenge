import {takeLatest, put, call, all, select} from "redux-saga/effects";
import{getDataError, getDataSuccess, searchDataSuccess, searchDataError, infiniteScrollSuccess, infiniteScrollError, getDetailSuccess, getDetailError} from "../actions/action";
import request from "../../helpers/request";
import makeSelectStore from '../selector/selector';
import * as api from '../../helpers/api';

export function* getFirstTime(){
    const url = api.main_api;
    const { idx } = yield select(makeSelectStore());
    const config = {
        method: "get",
        headers: {
            "Accept": "application/json",
        },
    };
    try {
        const result = yield call(request, url, config);
        console.log(idx);
        yield put(getDataSuccess(result));
    } catch(error){
        put(getDataError(error));
    }
}

export function* searchTitle(action){
    const{title} = action;
    const endpoint = `${api.url}${title}`;
    const config ={
        method: "get",
        headers: {
            "Accept": "application/json",
        },
    };
    try{
        const result = yield call(request, endpoint, config);
        yield put(searchDataSuccess(result));
    } catch(error){
        put(searchDataError(error));
    }
}

export function* infiniteScroll(){
    const { page, title } = yield select(makeSelectStore());
    const endpoint = `${api.search_url}&s=${title}&page=${page}`;
    const config = {
        method: "get",
        headers : {
            "Accept" : "application/json" 
        },
    };
    try {
    //     const result = yield call(request, endpoint, config);
    //     yield put(infiniteScrollSuccess(result));
    console.log(title);
    } catch (error){
        // put(infiniteScrollError(error))
        console.log('from error',title, page);
    }
}

export function* getDetail(action){
    const{id} = action;
    const url = `${api.search_url}&i=${id}`;
    const config = {
        method: "get",
        headers : {
            "Accept" : "application/json" 
        },
    };
    try{
        const result = yield call(request, url, config);
        yield put(getDetailSuccess(result));
    } catch(error) {
        put(getDetailError(error));
    }
}

export default function* rootSaga(){
    yield all([
        takeLatest("GET_DATA", getFirstTime),
        takeLatest("SEARCH_DATA", searchTitle),
        takeLatest("INFINITE_SCROLL", infiniteScroll),
        takeLatest("GET_DETAIL", getDetail),
    ]);
}