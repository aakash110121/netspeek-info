

import zIndex from '@mui/material/styles/zIndex';
import React from 'react';
import ReactModal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
    backgroundColor: '#F4F3F8'
  },
};

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#react-modal-wrapper');

export function Modal({ children, buttonRender, modalIsOpen, setIsOpen, afterOpenModal, closeModal, subtitle }) {


  return (
    <div>
      {
        buttonRender !== undefined
          ?
          buttonRender
          :
          <button onClick={openModal}>Open Modal</button>
      }
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <div className="modal-swirl"></div>

        <div className="modal-content-wrapper">
          <div className='close-modalbtn'>
            <button onClick={closeModal}><CloseIcon /></button>
          </div>
          {children}
        </div>
      </ReactModal>
    </div>
  );
}