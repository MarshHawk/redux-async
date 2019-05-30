import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import { clearPlants, loadPlants } from '../actions/index'
import actionTypes from '../constants/actionTypes'


function loadPlantsEpic(action$) {
    return action$.ofType(actionTypes.LOAD_PLANTS)
    .switchMap(() => {
        return Observable.of(clearPlants()).delay(2000);
    })
}

export const rootEpic = combineEpics(loadPlantsEpic);