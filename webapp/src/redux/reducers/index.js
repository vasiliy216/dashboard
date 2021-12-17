import { combineReducers } from 'redux'

const reducers = ['user', 'post']

export default combineReducers(
    reducers.reduce((initial, name) => {
        initial[name] = require(`./${name}`).default;
        return initial;
    }, {})
)