import {takeLatest, put, call, all} from "redux-saga/effects";
import{getDataError, getDataSuccess} from "../actions/action";
import request from "../../helpers/request";
import * as api from '../../helpers/api';

export function* getFirstTime(){
    const url = api.main_api;
    const config = {
        method: "get",
        headers: {
            "Accept": "application/json",
        },
    };
    try {
        const result = yield call(request, url, config);
        yield put(getDataSuccess(result));
    } catch(error){
        put(getDataError(error));
    }
}

export default function* rootSaga(){
    yield all([
        takeLatest("GET_DATA", getFirstTime)
    ]);
}