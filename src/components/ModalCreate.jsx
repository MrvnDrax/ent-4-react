import './styles/Modal.css'

const ModalCreate = ({ closeModalCreate, setCloseModalCreate }) => {
  const handleModalCreate = () => {
    setCloseModalCreate(!closeModalCreate)
  }

  return (
    <div onClick={handleModalCreate} className={`modal__container ${closeModalCreate && 'close-modal'}`}>
      <div onClick={e => e.stopPropagation()} className='modal__item'>
        <span className='modal__icon'><i className='bx bx-check-circle'></i></span>
        <p className='modal__text'>This User Was Created Successfully</p>
        <button onClick={handleModalCreate} className='modal__btn'>Accept</button>
      </div>
    </div>
  )
}

export default ModalCreate