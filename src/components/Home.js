import 'babel-polyfill';
import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { compose } from 'recompose';

//import { withAuthorization, withEmailVerification } from '../Session';
//import { withFirebase } from '../Firebase';
//import Messages from '../Messages';

class HomePage extends Component {
/*    componentDidMount() {
        this.props.firebase.users().on('value', snapshot => {
            this.props.onSetUsers(snapshot.val());
        });
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <p>The Home Page is accessible by every signed in user.</p>

                <Messages users={this.props.users} />
            </div>
        );
    }
*/
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <p>The Home Page is accessible by every signed in user.</p>
            </div>
        );
    }
}

export default HomePage;
