import './styles/Modal.css'

const ModalAcceptDelete = ({ closeModalAcceptDelete, setCloseModalAcceptDelete, deleteUserById, userMapped }) => {
  
  const handleAccept = () => {
    deleteUserById('/users', userMapped.id)
    setCloseModalAcceptDelete(!closeModalAcceptDelete)
  }

  const handleModalAcceptDelete = () => {
    setCloseModalAcceptDelete(!closeModalAcceptDelete)
  }

  return (
    <div onClick={handleModalAcceptDelete} className={`modal__container ${closeModalAcceptDelete && 'close-modal'}`}>
      <div onClick={e => e.stopPropagation()} className='modal__item'>
        <span className='modal__icon'><i className='bx bx-check-circle'></i></span>
        <p className='modal__text'>Do You Wanna Delete This User?</p>
        <div className='modal__container-btn'>          
        <button onClick={handleAccept} className='modal__btn'>Yes</button>
        <button onClick={handleModalAcceptDelete} className='modal__btn'>No</button>
        </div>
      </div>
    </div>
  )
}

export default ModalAcceptDelete