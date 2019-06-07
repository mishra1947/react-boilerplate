import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Loader from '../customFields/loader';
import { updateModalData } from '../../actions';
import Icon from '../icon';

class Addonmodal extends Component {
  constructor(props) {
    super(props);
    this.scrollRef = null;
    this.state = { modal: null, module: null, isLoaded: false, isOpen: false };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.modal !== prevState.modal) {
      return { modal: nextProps.modal };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.modal !== this.props.modal) {
      let { modal } = this.props;
      this.setState({ isOpen: modal.showCustomModal });
      if (modal.path) {
        import(`../${modal.path}`)
          .then(module =>
            this.setState({ module: module.default, isLoaded: true })
          )
          .catch(e => {
            console.log(e);
          });
      }
    }
  }
  closeModal = () => {
    this.setState({
      modal: null,
      module: null,
      //isLoaded: false,
      isOpen: false
    });
    this.props.updateModalData({ showCustomModal: false, addon: true });
  };

  scrollTo = (offsetTop = 0) => {
    let elem = document.getElementById('scrollRef');
    elem.scrollTop = elem.scrollTop + offsetTop;
  };

  render() {
    const { module: Component, modal, isLoaded } = this.state;
    return (
      <Modal
        isOpen={modal.showCustomModal}
        className={modal.className}
        backdrop="static"
      >
        <ModalHeader>
          {modal.title}
          <a
            className="btn-close rotate90 A"
            href="#"
            onClick={this.closeModal}
          >
            <Icon icon="Close@M" className="ania" />
          </a>
        </ModalHeader>
        <ModalBody id="scrollRef">
          {!isLoaded && <Loader />}
          {isLoaded && Component && (
            <Component
              {...modal}
              closeModal={this.closeModal}
              toastmessage={this.props.toastmessage}
              scrollTo={this.scrollTo}
            />
          )}
        </ModalBody>
        {/* <ModalFooter>
          <Button color="secondary" onClick={this.closeModal}>
            Cancel
          </Button>
        </ModalFooter> */}
      </Modal>
    );
  }
}
function mapStateToProps({
  page: { addonmodal = { showCustomModal: false } }
}) {
  return {
    modal: addonmodal
  };
}
export default connect(
  mapStateToProps,
  { updateModalData }
)(Addonmodal);
