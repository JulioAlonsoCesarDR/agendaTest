import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    
    const [users, setUsers] = useState([]);

    const [dataUser, setDataUser] = useState ({
        userId:'',
        name: '',
        phone: '',
        email: '',
        date: '',
    });

    const onChangeDataUser = ({
        userId,
        name,
        phone,
        email,
        date } = user) => {
        setDataUser({
            userId,
            name,
            phone,
            email,
            date,
        });
    }

    const onChangeUsers = (users) => {
        setUsers(users);
    }

    return (
        <UserContext.Provider value={{ user:dataUser, users, onChangeDataUser,onChangeUsers }}>
            {children}
        </UserContext.Provider>
    )

}
export {
    UserProvider
}
export default UserContext;