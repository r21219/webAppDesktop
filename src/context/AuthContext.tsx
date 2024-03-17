import React, {createContext, useContext, useState, PropsWithChildren} from 'react';
//todo finish logout
interface AuthContextType {
    userName: string;
    setUserName: (name: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [userName, setUserName] = useState<string>('');

    const logout = () => {
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