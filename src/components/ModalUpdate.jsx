import './styles/Modal.css'

const ModalUpdate = ({ closeModalUpdate, setCloseModalUpdate }) => {

  const handleModalUpdate = () => {
    setCloseModalUpdate(!closeModalUpdate)
  }

  return (
    <div onClick={handleModalUpdate} className={`modal__container ${closeModalUpdate && 'close-modal'}`}>
      <div onClick={e => e.stopPropagation()} className='modal__item'>
        <span className='modal__icon'><i className='bx bx-check-circle'></i></span>
        <p className='modal__text'>This User Was Updated Successfully</p>
        <button onClick={handleModalUpdate} className='modal__btn'>Accept</button>
      </div>
    </div>
  )
}

export default ModalUpdate