import { combineReducers } from 'redux';

import {
    ADD_RECIPE,
    REMOVE_FROM_CALENDAR
} from '../actions'


function food (state = {}, action) {
    switch(action.type) {
        case ADD_RECIPE :
            const { recipe } = action

            return {
                ...state,
                [recipe.label]: recipe
            }
        default :
            return state
    }
}

const initialCalendarState = {
    sunday: {
        breakast:null,
        lunch:null,
        dinner:null
    },
    monday: {
        breakast:null,
        lunch:null,
        dinner:null
    },
    tuesday: {
        breakast:null,
        lunch:null,
        dinner:null
    },
    wednesday: {
        breakast:null,
        lunch:null,
        dinner:null
    },
    thursday: {
        breakast:null,
        lunch:null,
        dinner:null
    },
    friday: {
        breakast:null,
        lunch:null,
        dinner:null
    },
    saturday: {
        breakast:null,
        lunch:null,
        dinner:null
    }
}

function calendar (state = initialCalendarState, action) {

    const {day, recipe, meal} = action

    switch(action.type){
        case ADD_RECIPE :
        return {
            ...state,
            [day] : {
                ...state[day],
                [meal] : recipe.label
            }
        }
        case REMOVE_FROM_CALENDAR:
            return {
                ...state,
                [day] : {
                    ...state[day],
                    [meal] :null
                }
            }
        default:
            return state;

    }
}

export default combineReducers({
    food,
    calendar
})