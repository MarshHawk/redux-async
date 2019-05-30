import React from 'react';
import {connect} from 'react-redux';
import {loadPlants, clearPlants } from '../actions/index'
import { fetchPlantRequest } from '../actions/plant'

function Plants(props) {
    return <div>
        <button type="button" onClick={props.loadPlants}>Load plants</button>
        <button type="button" onClick={props.clearPlants}>Clear plants</button>
        <button type="button" onClick={props.fetchPlant}>Fetch plant</button>
        <PlantList {...props}></PlantList>
    </div>
}

function PlantList(props) {
    if (props.plants.length === 0) return null;
    return (<div>
        {props.plants.map(p => <Plant {...p} key={p.id}/>)}
    </div>)
}

function Plant(props) {
    return <p>{ props.scientific_name }</p>
}

function mapState(state) {
    return state.plants;
}

function mapDispatch(dispatch) {
    return {
        loadPlants: () => dispatch(loadPlants()),
        clearPlants: () => dispatch(clearPlants()),
        fetchPlant: () => dispatch(fetchPlantRequest())
    };
}

export default connect(mapState, mapDispatch)(Plants)