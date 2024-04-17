import React, {createContext, useContext, useState, PropsWithChildren} from 'react';
import WebSocketService from "../service/WebSocketService";
//todo finish logout
interface AuthContextType {
    userName: string;
    setUserName: (name: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    let [userName, setUserName] = useState<string>('');

    const logout = () => {
        WebSocketService().disconnect();
        setUserName('');
    };

    return (
        <AuthContext.Provider value={{ userName, setUserName, logout }}>
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