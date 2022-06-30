import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);
  
  const saveUserHandler = (userDataEntry)=>{
    setUsersList((prevUsersList) =>{
      return [ 
        ...prevUsersList, {id: Math.random(), ...userDataEntry}];
    }
     
    )
  }
  
  return (
    <div>
      <AddUser onAddUser={saveUserHandler}/>
      <UsersList userData={usersList} />
    </div>
  );
}

export default App;
