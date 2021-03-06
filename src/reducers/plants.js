import actionTypes from '../constants/actionTypes'

const initialState = {
    plants: [],
}

const plantData = [{"slug":"datura-arborea","scientific_name":"Datura arborea","link":"http://trefle.io/api/plants/113077","id":113077,"complete_data":false,"common_name":null},{"slug":"datura-suaveolens","scientific_name":"Datura suaveolens","link":"http://trefle.io/api/plants/113082","id":113082,"complete_data":false,"common_name":null},{"slug":"datura-sanguinea","scientific_name":"Datura sanguinea","link":"http://trefle.io/api/plants/113080","id":113080,"complete_data":false,"common_name":null},{"slug":"datura-candida","scientific_name":"Datura candida","link":"http://trefle.io/api/plants/113078","id":113078,"complete_data":false,"common_name":null},{"slug":"datura-innoxia","scientific_name":"Datura innoxia","link":"http://trefle.io/api/plants/127345","id":127345,"complete_data":false,"common_name":null},{"slug":"datura-wrightii","scientific_name":"Datura wrightii","link":"http://trefle.io/api/plants/127357","id":127357,"complete_data":false,"common_name":"sacred thorn-apple"},{"slug":"datura-inermis","scientific_name":"Datura inermis","link":"http://trefle.io/api/plants/127342","id":127342,"complete_data":false,"common_name":"smoooth thorn-apple"},{"slug":"datura-fastuosa","scientific_name":"Datura fastuosa","link":"http://trefle.io/api/plants/127344","id":127344,"complete_data":false,"common_name":null},{"slug":"datura-leichhardtii","scientific_name":"Datura leichhardtii","link":"http://trefle.io/api/plants/127349","id":127349,"complete_data":false,"common_name":"Leichhardt's datura"},{"slug":"datura-kymatocarpa","scientific_name":"Datura kymatocarpa","link":"http://trefle.io/api/plants/127348","id":127348,"complete_data":false,"common_name":"datura"},{"slug":"datura-discolor","scientific_name":"Datura discolor","link":"http://trefle.io/api/plants/127341","id":127341,"complete_data":false,"common_name":"desert thorn-apple"},{"slug":"datura-stramonium","scientific_name":"Datura stramonium","link":"http://trefle.io/api/plants/127354","id":127354,"complete_data":false,"common_name":"jimsonweed"},{"slug":"datura-ferox","scientific_name":"Datura ferox","link":"http://trefle.io/api/plants/127352","id":127352,"complete_data":false,"common_name":null},{"slug":"datura-tatula","scientific_name":"Datura tatula","link":"http://trefle.io/api/plants/127356","id":127356,"complete_data":false,"common_name":null},{"slug":"datura-meteloides","scientific_name":"Datura meteloides","link":"http://trefle.io/api/plants/127347","id":127347,"complete_data":false,"common_name":null},{"slug":"datura-reburra","scientific_name":"Datura reburra","link":"http://trefle.io/api/plants/127353","id":127353,"complete_data":false,"common_name":"datura"},{"slug":"datura-metel","scientific_name":"Datura metel","link":"http://trefle.io/api/plants/127346","id":127346,"complete_data":false,"common_name":null},{"slug":"datura-pruinosa","scientific_name":"Datura pruinosa","link":"http://trefle.io/api/plants/127350","id":127350,"complete_data":false,"common_name":"datura"},{"slug":"datura","scientific_name":"Datura","link":"http://trefle.io/api/plants/127339","id":127339,"complete_data":false,"common_name":"jimsonweed"},{"slug":"datura-quercifolia","scientific_name":"Datura quercifolia","link":"http://trefle.io/api/plants/127351","id":127351,"complete_data":false,"common_name":"Chinese thorn-apple"},{"slug":"datura-ceratocaula","scientific_name":"Datura ceratocaula","link":"http://trefle.io/api/plants/127340","id":127340,"complete_data":false,"common_name":"Latin Thorn-Apple"},{"slug":"datura-inoxia","scientific_name":"Datura inoxia","link":"http://trefle.io/api/plants/127343","id":127343,"complete_data":false,"common_name":"pricklyburr"}]

export default function plants(state = initialState, action) {
    switch(action.type) {
        case actionTypes.LOAD_PLANTS:
        return {
            plants: plantData.slice()
        };
        case actionTypes.CLEAR_PLANTS:
        return {
            plants: []
        }
        case actionTypes.FETCH_PLANT_FULFILLED:
        return {
            plants: action.data
        }
        default: return state;
    };
}