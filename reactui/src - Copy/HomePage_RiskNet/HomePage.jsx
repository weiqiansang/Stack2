import 'babel-polyfill';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div>
                <div>
                    test1
                </div>
                <div>
                    <Button variant="contained" color="primary">
                        Hello World (App.js)
                    </Button>
                    //                    <RaisedButton label="Default" style={style} />
                </div>
            <div className="col-md-6 col-md-offset-3">
                <h1>Welcome,  {user.firstName}!</h1>
                <p>You're logged in Risknet User Admin!!</p>
                <p>
                    <h1><Link to="RisknetFm\Menus\rc-menu-antd.html">Go to RisknetFM Function Management</Link></h1>
                    <h1><Link to="examples\antd.html">Go to examples\antd.html</Link></h1>
                    <h1><Link to="examples\antd.js">Go to examples\antd.js</Link></h1>
                    <h1><Link to="src\HomePage_RiskNet\antd.html">src\HomePage_RiskNet\antd.html</Link></h1>
                    <h1><Link to="rc-menu-antd.bak.1.html">rc-menu-antd.bak.1.html</Link></h1>
                    <h1><Link to="rc-menu-antd.html">rc-menu-antd.html</Link></h1>
                </p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                <ul>
                    {users.items.map((user, index) =>
                        <li key={user.id}>
                            {user.firstName + ' ' + user.lastName}
                            {
                                user.adeleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                            }
                        </li>
                    )}
                </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
