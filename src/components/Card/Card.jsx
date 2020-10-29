import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { requestPlanetDetails } from './../../redux/currentPlanetReducer';

const Card = ({ residents, requestPlanetDetails }) => {

    useEffect(() => {
        requestPlanetDetails(1);
    }, [])

    return (
        <div>
            {residents}
        </div>
    )
};

const mapStateToProps = (state) => ({
    residents: state.currentPlanet.residents,
    isLoading: state.currentPlanet.isLoading,
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        { requestPlanetDetails }
    )
)(Card)