import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
class EnterCustomerInfo extends Component {
    render(){
        return(
            <h1>Join a Team</h1>
        )
    }
}
const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(EnterCustomerInfo);
