import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import UserCard from "./components/UserCard";
import FormUser from "./components/FormUser";
import ParticlesBackground from "./components/ParticlesBackground";
import ModoDark from "./components/ModoDark";
import ModalUpdate from "./components/ModalUpdate";
import ModalDelete from "./components/ModalDelete";
import ModalCreate from "./components/ModalCreate";
import ModalAcceptDelete from "./components/ModalAcceptDelete";
import ModalError from "./components/ModalError";
import Loader from "./components/Loader";

function App() {
  const [updateInfo, setUpdateInfo] = useState();
  const [closeForm, setCloseForm] = useState(true);
  const [closeModalUpdate, setCloseModalUpdate] = useState(true)
  const [closeModalDelete, setCloseModalDelete] = useState(true)
  const [closeModalCreate, setCloseModalCreate] = useState(true)
  const [closeModalAcceptDelete, setCloseModalAcceptDelete] = useState(true) 
  const [userMapped, setUserMapped] = useState()
  const [closeModalError, setCloseModalError] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  const baseUrl = "https://users-crud.academlo.tech";

  const [users, getAllUsers, createNewUser, deleteUserById, updateUserById] =
    useFetch(baseUrl, setCloseForm, setCloseModalUpdate, setCloseModalDelete, setCloseModalCreate, setCloseModalError, setIsLoading);

  useEffect(() => {
    getAllUsers("/users");
  }, []);

  const handleOpenForm = () => {
    setCloseForm(!closeForm);
  };

  return (
    <div className="container">
      {
        isLoading 
          ? (<Loader />)
          : (
              <>
                <div className="container__header">
                  <h1 className="title">Users</h1>
                  <ModoDark />
                </div>
                <button onClick={handleOpenForm} className="formUser__btn">
                  Open Form
                </button>
                <FormUser
                  createNewUser={createNewUser}
                  updateInfo={updateInfo}
                  updateUserById={updateUserById}
                  setUpdateInfo={setUpdateInfo}
                  closeForm={closeForm}
                  setCloseForm={setCloseForm}
                />
                <div className="card__container">
                  {users?.map((user) => (
                    <UserCard
                      key={user.id}
                      user={user}     
                      setCloseModalAcceptDelete={setCloseModalAcceptDelete}       
                      setUpdateInfo={setUpdateInfo}
                      handleOpenForm={handleOpenForm}
                      closeModalAcceptDelete={closeModalAcceptDelete}
                      setUserMapped={setUserMapped}
                    />
                  ))}
                </div>
                <ParticlesBackground />
                <ModalUpdate
                  closeModalUpdate={closeModalUpdate}
                  setCloseModalUpdate={setCloseModalUpdate}
                />
                <ModalDelete
                  closeModalDelete={closeModalDelete}
                  setCloseModalDelete={setCloseModalDelete}
                />
                <ModalCreate 
                  closeModalCreate={closeModalCreate}
                  setCloseModalCreate={setCloseModalCreate}
                />
                <ModalAcceptDelete 
                  closeModalAcceptDelete={closeModalAcceptDelete}
                  setCloseModalAcceptDelete={setCloseModalAcceptDelete}
                  deleteUserById={deleteUserById}
                  userMapped={userMapped}
                />
                <ModalError 
                  closeModalError={closeModalError}
                  setCloseModalError={setCloseModalError}
                  setCloseForm={setCloseForm}
                  closeForm={closeForm}
                />
              </>
            )
      }
      
      
    </div>
  );
}

export default App;
