import './styles/Modal.css'

const ModalDelete = ({ closeModalDelete, setCloseModalDelete }) => {
  const handleModalDelete = () => {
    setCloseModalDelete(!closeModalDelete)
  }

  return (
    <div onClick={handleModalDelete} className={`modal__container ${closeModalDelete && 'close-modal'}`}>
      <div onClick={e => e.stopPropagation()} className='modal__item'>
        <span className='modal__icon'><i className='bx bx-check-circle'></i></span>
        <p className='modal__text'>This User Was Deleted Successfully</p>
        <button onClick={handleModalDelete} className='modal__btn'>Accept</button>
      </div>
    </div>
  )
}

export default ModalDelete