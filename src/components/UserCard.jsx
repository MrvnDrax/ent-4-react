import './styles/UserCard.css'

const UserCard = ({ user, setCloseModalAcceptDelete, setUpdateInfo, handleOpenForm, closeModalAcceptDelete, setUserMapped }) => {

  const handleDelete = () =>{
    setUserMapped(user)
    setCloseModalAcceptDelete(!closeModalAcceptDelete)
  }

  const handleUpdate = () =>{
    setUpdateInfo(user)
    handleOpenForm()
  }

  return (

    <article className='card'>
      <header className='card__header'>
        <img className='card__img' src={user.image_url || '/img/user.png'} alt="Unknown user image" />
      </header>
      <footer className='card__footer'>
        <h2 className='card__footer-name'>{`${user.first_name} ${user.last_name}`}</h2>
        <hr className='card__hr' />
        <ul className='card__footer-list'>
          <li className='card__group'>
            <span className='card__item'>Email</span>
            <span className='card__value'>{user.email}</span>
          </li>
          <li className='card__group'>
            <span className='card__item'>Birthday</span>
            <span className='card__value'>{user.birthday}</span>
          </li>
        </ul>
        <hr className='card__hr' />
        <div className='card__btn-container'>          
          <button className='card__btn-delete card__btn' onClick={handleDelete}><i className='bx bx-trash'></i></button>
          <button className='card__btn-edit card__btn' onClick={handleUpdate}><i className='bx bx-edit' ></i></button>        
        </div>
      </footer>
    </article>
  );
};

export default UserCard;
