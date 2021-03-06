import React from 'react';
function Modal(props) {
  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn btn--alt' onClick={props.modal_click_kottu}>
        Cancel
      </button>
      <button className='btn' onClick={props.modal_click_kottu}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
