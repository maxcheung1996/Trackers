import './ProfileContainer.css';
import axios from "axios";
import React from "react";

interface ContainerProps {
  name: string;
}

const baseURL = "https://localhost:7220/api/User/GetUsers";

const ProfileContainer: React.FC<ContainerProps> = ({ name }) => {

  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    axios.get(baseURL).then(res => {
      console.log("GetUsers:", res)
      setUsers(res.data);
    })
    .catch(err => {
      console.log("GetUsers Error:", err)
    })
  }, [])

  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Profile <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      <ul>{
      users.map((user, index) => <li key={index}>{user.userName}</li>)
      }</ul> 
    </div>
  );
};

export default ProfileContainer;