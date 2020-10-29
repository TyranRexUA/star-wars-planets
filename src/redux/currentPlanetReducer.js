import swapi from './../API/swapi';

const   SET_PLANET_DETAILS = 'currentPlanet/SET_PLANET_DETAILS',
        SET_PLANET_RESIDENTS = 'currentPlanet/SET_PLANET_RESIDENTS',
        TOGGLE_IS_LOADING = 'currentPlanet/TOGGLE_IS_LOADING';

const initialState = {
    name: null,
    rotation_period: null,
    diameter: null,
    climate: null,
    gravity: null,
    terrain: null,
    population: null,
    residents: [],
    isLoading: false,
};

const currentPlanetReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLANET_DETAILS:
            return {...state,
                name: action.payload.name,
                rotation_period: action.payload.rotation_period,
                diameter: action.payload.diameter,
                climate: action.payload.climate,
                gravity: action.payload.gravity,
                terrain: action.payload.terrain,
                population: action.payload.population,
            };
            case SET_PLANET_RESIDENTS:
                return {...state,
                    residents: action.payload,
                };
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        default: return state;
    }
}

export default currentPlanetReducer;
const setPlanetDetails = (data) => ({ type: SET_PLANET_DETAILS, payload: data });
const setPlanetResidents = (data) => ({ type: SET_PLANET_RESIDENTS, payload: data });
const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading });

export const requestPlanetDetails = (id) => {
    return async (dispatch) => {
        dispatch(toggleIsLoading(true));
        let response = await swapi.getPlanetDetails(id);
        dispatch(setPlanetDetails(response));
            let residentsResponse = await Promise.all(
                response.residents.map(person => swapi.gePersonName(person))
            )
            dispatch(setPlanetResidents(residentsResponse))
            dispatch(toggleIsLoading(false));
    }
};