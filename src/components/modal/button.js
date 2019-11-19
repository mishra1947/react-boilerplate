import React from 'react';
import { connect } from 'react-redux';

import { updateModalData } from '../../actions/pages';

const ModalButton = ({
  children,
  data,
  disabled = false,
  updateModalData,
  className = '',
  dom,
  style = {}
}) => {
  const buttonClicked = e => {
    e.preventDefault();
    if (disabled === false) {
      updateModalData(data);
    }
  };

  return (
    <div className={className} {...dom} style={style} onClick={buttonClicked}>
      {children}
    </div>
  );
};

export default connect(
  null,
  { updateModalData }
)(ModalButton);
