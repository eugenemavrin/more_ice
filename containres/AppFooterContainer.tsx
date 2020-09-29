import React from 'react';
import {connect} from 'react-redux';
import { loadData } from '../services/client';
import PropTypes from 'prop-types';
import AppFooter from '../components/AppFooter';

const mapStateToProps = (state: any) => ({ ...state.whether });
const AppFooterContainer = (state: {data:any, getData:any, isFetching: any}) => (
	<AppFooter data={state.data} getData={state.getData} isFetching={state.isFetching}/>
);

function mapActionsToProps(dispatch:any) {
    return {
        getData: () => dispatch(loadData())
    }
}

AppFooterContainer.propTypes = {
	data: PropTypes.any,
	getData: PropTypes.func,
	isFetching: PropTypes.bool
};

export default connect(
	mapStateToProps,
	mapActionsToProps
)(AppFooterContainer);