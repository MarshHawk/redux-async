import { call, put } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcCI6WzQ4LDQ2LDQ4LDQ2LDQ4LDQ2LDQ4XSwiaXNzdWVyX2lkIjo2NTksIm9yaWdpbiI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCIsImF1ZCI6Ikpva2VuIiwiZXhwIjoxNTU5MDg4NDc0LCJpYXQiOjE1NTkwODEyNzQsImlzcyI6Ikpva2VuIiwianRpIjoiMm1oZmdhNjI4NG5uMmxsZGo0MDg2anUxIiwibmJmIjoxNTU5MDgxMjc0fQ.wUW9AHR55ugvePwFqPbO2-drM_PeFAxPEn21EGPLSbE';
const apiUrl = `https://trefle.io/api/plants?q=rosemary&token=${token}`;
const apiLogin = 'https://trefle.io/api/auth/claim?token=Wmk3VnBLQVdPTHdkaVNHOFphdCtJZz09&ip=24.218.44.131'
const obj = {
    method: 'GET' ,
    mode : 'cors',
    headers: {
        'Accept': 'application/json'
    }
  }

const api = (url) => fetch(url, obj).then(response => response.json())

export const fetchPlantRequest =() => ({
    type: actionTypes.FETCH_PLANT
})

export function* fetchPlant(action) {
    try {
        const plants = yield call(api, apiUrl)
        console.log(plants)
        yield put({
            type: actionTypes.FETCH_PLANT_FULFILLED,
            data: plants
        })
    } catch (e) {
        console.log(e)
    }
}