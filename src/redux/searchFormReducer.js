const   SET_SEARCH_VALUE = 'search/SET_SEARCH_VALUE';

const initialState = {
    searchValue: '',
};

const SearchForm = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_VALUE: // set searchValue property in searchForm
            return {...state,
                searchValue: action.payload,
            };
        default: return state;
    }
}

export default SearchForm;
export const setSearchValue = (data) => ({type: SET_SEARCH_VALUE, payload: data});