import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../components/Auth/firebase.init';

export const AppContext = React.createContext();

const AuthContextProvider = ({ children }) => {
    const auth = getAuth(app);

    const [userInfo, setUserInfo] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUserInfo(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);


    return (
        <AppContext.Provider value={{ userInfo, setUserInfo, loading, setLoading }}>
            {children}
        </AppContext.Provider>
    );
};

export default AuthContextProvider;