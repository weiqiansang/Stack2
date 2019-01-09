import 'babel-polyfill';
import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "./LoaderButton";
import { Auth } from "aws-amplify";
import * as RoutesPath from '../constants/routes';
import "./Login.css";

export default class LogInPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            username: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    isValidUserPassword() {
       return (this.state.username === 'aaa' && this.state.password === 'aaa');
    }

    handleSubmit = async event => {
        event.preventDefault();

        this.setState({ isLoading: true });

        try {
//            await Auth.signIn(this.state.email, this.state.password);
//            this.props.userHasAuthenticated(true);
//            this.props.history.push("/");
            this.setState({ isMenu: true });
            this.setState({ isAuthenticating: true });
            console.log(this.state.username + " / " + this.state.password);
            if (this.isValidUserPassword()) {
                this.setState({ isLoading: false });
                this.props.history.push(RoutesPath.RISKNETFM);
            }
            else
            {//                console.log(this.state.username + " / " + this.state.password);
                this.setState({ isLoading: false });
                this.props.history.push(RoutesPath.LOG_IN);
//                this.props.history.push("./login");
            }
        } catch (e) {
            alert(e.message);
            this.setState({ isLoading: false });
        }
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>User Name</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <LoaderButton
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        isLoading={this.state.isLoading}
                        text="Login"
                        loadingText="Logging in…"
                    />
                </form>
            </div>
        )
    }
}
