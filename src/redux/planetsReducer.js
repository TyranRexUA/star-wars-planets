import swapi from './../API/swapi';

const SET_PLANETS = 'planets/SET_PLANETS',
  ADD_PLANETS = 'planets/ADD_PLANETS',
  TOGGLE_IS_GLOBAL_LOADING = 'planets/TOGGLE_IS_GLOBAL_LOADING',
  TOGGLE_IS_LOADING = 'planets/TOGGLE_IS_LOADING';

const initialState = {
  next: '',
  planets: [],
  isLoading: false,
  isGlobalLoading: false,
};

const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLANETS: // when componentDidMount add planets(page=1) to state
      return {
        ...state,
        planets: [...action.payload.results],
        next: action.payload.next
      };
    case ADD_PLANETS: // add planets(page=2, 3, ....) to state
      return {
        ...state,
        planets: [...state.planets, ...action.payload.results],
        next: action.payload.next
      };
    case TOGGLE_IS_LOADING: // show preloader in showMoreBtn in Library
      return {
        ...state,
        isLoading: action.isLoading
      };
    case TOGGLE_IS_GLOBAL_LOADING: // show preloader
      return {
        ...state,
        isGlobalLoading: action.isLoading
      };
    default: return state;
  }
}

export default planetsReducer;
const setPlanets = (data) => ({ type: SET_PLANETS, payload: data });
const addPlanets = (data) => ({ type: ADD_PLANETS, payload: data });
const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading });
const toggleIsGlobalLoading = (isLoading) => ({ type: TOGGLE_IS_GLOBAL_LOADING, isLoading });

export const requestPlanets = () => {
  return async (dispatch) => {
    dispatch(toggleIsGlobalLoading(true));
    swapi.getPlanets().then((response) => {
      dispatch(setPlanets(response));
    }).catch((err) => {
      console.log('+', err);
      window.location.hash = '#/error'
    }).finally(() => {
      dispatch(toggleIsGlobalLoading(false));
    });
  }
};

export const requestMorePlanets = (next) => {
  return async (dispatch) => {
    dispatch(toggleIsLoading(true));
    swapi.getMorePlanets(next).then((response) => {
      dispatch(addPlanets(response));
    }).catch(() => {
      window.location.hash = '#/error'
    }).finally(() => {
      dispatch(toggleIsLoading(false));
    });
  }
};

export const searchPlanets = (searchvalue) => {
  return async (dispatch) => {
    dispatch(toggleIsGlobalLoading(true));
    swapi.searchPlanets(searchvalue).then((response) => {
      dispatch(setPlanets(response));
    }).catch(() => {
      window.location.hash = '#/error'
    }).finally(() => {
      dispatch(toggleIsGlobalLoading(false));
    });
  }
};