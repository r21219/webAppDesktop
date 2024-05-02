import React, { createContext, useContext, useEffect, useState, PropsWithChildren } from 'react';
import WebSocketService from "../service/WebSocketService";

interface AuthContextType {
    userName: string | null;
    login: (name: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [userName, setUserName] = useState<string | null>(localStorage.getItem('userName') || null);

    const login = (name: string) => {
        setUserName(name);
        localStorage.setItem('userName', name);
    };

    const logout = () => {
        setUserName(null);
        WebSocketService().disconnect();
        localStorage.removeItem('userName');
        localStorage.removeItem('token');
    };

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ userName, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
