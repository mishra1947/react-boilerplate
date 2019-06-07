import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';
import Header from './components/header';
// import CustomModal from './components/modal';
// import { checkAuth } from './actions';
import { toastmessage } from './utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }


  render() {
    let { route } = this.props;
    let currentPath = matchRoutes(route.routes, window.location.pathname);
    return (
      <React.Fragment>
        <Header />
        <div className="main-body">
          {renderRoutes(route.routes, {
            toastmessage: toastmessage
          })}
        </div>
        {/* <CustomModal {...currentPath[0]} toastmessage={toastmessage} /> */}
      </React.Fragment>
    );
  }
}
// connect(
//   null,
//   { checkAuth }
// )
export default (withRouter(App));
