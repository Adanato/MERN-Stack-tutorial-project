import React from "react";
import UsersList from '../components/UsersList';
const Users = () => {
    const USERS = [{ id: 'u1', name: "Adam", image: "https://images.pexels.com/photos/17031087/pexels-photo-17031087/free-photo-of-wood-bird-animal-beak.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", places: 3 }];

    return <UsersList items={USERS} />;
};
export default Users;