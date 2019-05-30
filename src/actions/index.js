import actionTypes from '../constants/actionTypes'

export function loadPlants() {
    return {type: actionTypes.LOAD_PLANTS}
}

export function clearPlants() {
    return {type: actionTypes.CLEAR_PLANTS}
}

export function fetchPlant(login) {
    return {type: actionTypes.FETCH_PLANT,
            payload: login}
}

export function fetchPlantFulfilled(plant) {
    return { type: actionTypes.FETCH_PLANT_FULFILLED,
            payload: plant }
}