import React, { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function revertBack() {
    setModalIsOpen(false);
  }
  return (
    <div>
      <div className='card'>
        <h2>{props.blah}</h2>
        <div className='actions'>
          <button className='btn' onClick={deleteHandler}>
            Delete
          </button>
        </div>
        {modalIsOpen ? <Modal modal_click_kottu={revertBack} /> : null}
        {modalIsOpen ? <Backdrop backdrop_click_kottu={revertBack} /> : null}
      </div>
    </div>
  );
}

export default Todo;
