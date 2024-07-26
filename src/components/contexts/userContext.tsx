import { createContext, useEffect, useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as any);


export const UserStorage = ({ children }: any) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);
    const [data, setData] = useState({})
    const [register, setRegister] = useState({})
    const navigate = useNavigate();

    const getUser = (data: string) => {
        api.get('/user/get-user', {headers:{Authorization: token}}).then(({ data }) => {
            setUser(data.user)
            setLogin(true)
        }).catch((error) => {
            console.log('User not authenticated', error)
        })
    };

    useEffect(() => {
        getUser(token);
    },[token])
    
    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', {email, password}).then(({ data }) => {
            setLogin(true);
            getUser(data.token);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            navigate('/');
        }).catch((error) =>{
            console.log('Error in credentials', error)
        })
    }

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({})
    }

    const handleRegister = (name: string, email: string, password: string) => {
        api.post('/user/sign-up', { name, email, password}, {headers: {}}).then(({ data }) => {
            
        }).catch((error) => {
            console.log('System error')
        })
    }

    return (
        <UserContext.Provider value={{login, setLogin, user, setUser, handleLogin, token, setToken, logOut, data, setData, register, setRegister, handleRegister}}>
            { children }
        </UserContext.Provider>
    )
}