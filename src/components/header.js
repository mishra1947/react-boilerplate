import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ModalButton from './modal/button'

import '../style/header.scss';

class Header extends Component {
  render() {
    return (
      <nav className="">
        <ToastContainer />
        <div className="header">
          <div className='logo'></div>
          <div>
            <p className='title'>Explore</p>
            <p className='subTitle'>Photos for Everyone</p>
          </div>
          <div className='search flex-grow-1'>
            <input placeholder='Search...' />
          </div>
          <div className='d-flex justify-content-end flex-grow-1'>
            <button type="button" className="btn btn-header mr10">Join</button>
            <ModalButton
              className='btn btn-header'
              data={{
                showCustomModal: true,
                title: '',
                path: '',
                className: 'modal-large'
              }}>
              Log In
            </ModalButton>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header
