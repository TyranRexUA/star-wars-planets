import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import s from './SearchForm.module.scss';
import { setSearchValue } from './../../redux/searchFormReducer';

const SearchForm = ({ setSearchValue, match, searchValue, history }) => {

    useEffect(() => {
        if (match.params.searchValue) {
            setSearchValue(match.params.searchValue)
        }
    }, [match.params.searchValue, setSearchValue])

    window.addEventListener('unhandledrejection', (e) => { // if 404 error go to url /404
        if (e.reason.request.status === 404) history.push('/404');
    })

    const search = (e) => { // go to search url
        e.preventDefault();
        if (searchValue) {
            history.push(`/search/${searchValue}`);
        } else {
            history.push('/');
        }
    }

    return (
        <form onSubmit={search} className={s.searchForm}>
            <input
                className={s.search} type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue ? searchValue : ''}
                placeholder='Search planets...' />
            <button type="submit" />
        </form>
    )
};

const mapStateToProps = (state) => ({
    searchValue: state.searchForm.searchValue,
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        { setSearchValue }
    )
)(React.memo(SearchForm))