import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import ReactDOM from "react-dom";
import "./menu1/styles.css";
//import SideBar from "./sidebar";
import { slide as Menu } from 'react-burger-menu';

class HomePage extends React.Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {

        if (!this.dropdownMenu.contains(event.target)) {

            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });

        }
    }
    render() {
        return (
            <div>
                <button onClick={this.showMenu}>
                    Show menu
                </button>

                {
                    this.state.showMenu
                        ? (
                            <div
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <button> Menu item 1 </button>
                                <button> Menu item 2 </button>
                                <button> Menu item 3 </button>
                            </div>
                        )
                        : (
                            null
                        )
                }
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
