import './styles/Modal.css'

const ModalError = ({ closeModalError, setCloseModalError, setCloseForm, closeForm }) => {

  const handleModalError = () => {
    setCloseModalError(!closeModalError)
    setCloseForm(!closeForm)
  }

  return (
    <div onClick={handleModalError} className={`modal__container ${closeModalError && 'close-modal'}`}>
      <div onClick={e => e.stopPropagation()} className='modal__item'>
        <span className='modal__icon'><i className='bx bx-check-circle'></i></span>
        <p className='modal__text'>The User Was Not Professed Successfully, Please Check Again</p>
        <button onClick={handleModalError} className='modal__btn btn'>Accept</button>
      </div>
    </div>
  )
}

export default ModalError