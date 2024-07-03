import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import TopNav from './TopNav';
import Footer from './Footer';

export let AuthContext = createContext("");

export default function AuthContextProvider(props) {
    const [user, setUser] = useState(null);

    let saveUserData = () => {
        let enCodeToken = localStorage.getItem("token");
        if (enCodeToken) {
            let deCodeToken = jwtDecode(enCodeToken);
            setUser(deCodeToken);
        }
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            saveUserData();
        }
    }, []);

    let logOut = () => {
        localStorage.removeItem("token");
        setUser(null);
        return <Navigate to="/login" />;
    };

    return (
        <>
            <TopNav />
            <AuthContext.Provider value={{ user, logOut, saveUserData }}>
                {props.children}
            </AuthContext.Provider>
            <Footer />
        </>
    );
}
