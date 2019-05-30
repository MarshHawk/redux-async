import { takeLatest } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'
import { fetchPlant } from '../actions/plant'

function* plantSaga() {
    yield takeLatest(actionTypes.FETCH_PLANT, fetchPlant)
}

export default plantSaga;


