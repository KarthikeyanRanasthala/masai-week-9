import React from 'react';

import { connect } from 'react-redux';

import Banner from '../components/Banner';
import BasicCard from '../components/BasicCard';

const Home = (props) => {
    return (
        <div className='container'>
            <Banner />
            <div className='row'>
                {props.workingDetails.map(ele => <BasicCard data={ele} key={ele.title} />)}
            </div>
            <div className='row'>
                {props.statistics.map(ele => <BasicCard data={ele} key={ele.title} />)}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        workingDetails: state.homePage.workingDetails,
        statistics: state.homePage.statistics
    }
}

export default connect(mapStateToProps, null)(Home);