import swapi from './../API/swapi';

const   SET_PLANETS = 'planets/SET_PLANETS',
        ADD_PLANETS = 'planets/ADD_PLANETS',
        TOGGLE_IS_LOADING = 'planets/TOGGLE_IS_LOADING';

const initialState = {
    next: '',
    planets: [],
    isLoading: false,
};

const planetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLANETS:
            return {...state,
                planets: [...action.payload.results],
                next: action.payload.next
            };
        case ADD_PLANETS:
            return {...state,
                planets: [...state.planets, ...action.payload.results],
                next: action.payload.next
            };
        case TOGGLE_IS_LOADING:
            return {...state,
                isLoading: action.isLoading
            };
        default: return state;
    }
}

export default planetsReducer;
const setPlanets = (data) => ({type: SET_PLANETS, payload: data});
const addPlanets = (data) => ({type: ADD_PLANETS, payload: data});
const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});

export const requestPlanets = () => {
    return async (dispatch) => {
        dispatch(toggleIsLoading(true));
        let response =  await swapi.getPlanets();
            dispatch(setPlanets(response));
            dispatch(toggleIsLoading(false));
    }
};

export const requestMorePlanets = (next) => {
    return async (dispatch) => {
        dispatch(toggleIsLoading(true));
        let response =  await swapi.getMore(next);
            dispatch(addPlanets(response));
            dispatch(toggleIsLoading(false));
    }
};