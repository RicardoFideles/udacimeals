import {
    ADD_RECIPE,
    REMOVE_FROM_CALENDAR
} from '../actions'

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
        case ADD_RECIPE:
        return {
            ...state, [day] : {
                ...state[day],
                [meal] : recipe.meal
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

export default calendar