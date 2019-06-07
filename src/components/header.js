import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <ToastContainer />
          <div className="row">
            Header
          </div>
      </nav>
    );
  }
}
export default Header
