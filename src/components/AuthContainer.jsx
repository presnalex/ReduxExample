import React, { Component } from 'react';
import Auth from './Auth';
import {connect} from 'react-redux';
import {setEmailText, setPasswordText} from '../store/auth/actions'


class AuthContainer extends Component {
  render() {
    return (
        <Auth email={this.props.email} 
              password={this.props.password} 
              setEmailText={this.props.setEmailText} 
              setPasswordText={this.props.setPasswordText}
        />
    );
  }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
}
const mapDispatchToProps =  {
        setEmailText: setEmailText,
        setPasswordText: setPasswordText
}
export default connect(mapStateToProps,mapDispatchToProps)(AuthContainer);
