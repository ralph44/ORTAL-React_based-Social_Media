import React from 'react';
import {connect} from 'react-redux';
import { PropTypes } from 'prop-types';

export default function(ComposedComponent) {
    class Authenticate extends React.Component {
        componentWillMount() {
            if (!this.props.userAuthenticated) {
                console.log("Not authenticated");
                this.context.router.history.push("/Login");
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }

    Authenticate.PropTypes = {
        userAuthenticated: PropTypes.bool.isRequired
    }

    Authenticate.contextTypes = {
        router: PropTypes.object.isRequired
    }

    const mapStateToProps = state => {
      return {
        userAuthenticated: state.user.authenticated,
      }
    };


    return connect(mapStateToProps)(Authenticate);
}
