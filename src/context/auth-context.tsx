'use client';

import { Auth } from '@/type';
import React from 'react';
import { createContext } from 'react';

export type AuthContextType = {
    userInfo: Auth | undefined;
    logIn: (res: Auth) => void;
    logOut: () => void;
};

const initialState = {
    email: '',
    password: ''
};

export const AuthContext = createContext<AuthContextType>({
    userInfo: initialState,
    logIn: () => { },
    logOut: () => { }
});

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [userInfo, setUserInfo] = React.useState<Auth | undefined>();

    const logIn = (res: Auth) => {
        if (res) {
            setUserInfo(res);
        }
    };

    const logOut = () => {
        setUserInfo(initialState);
    };

    return <AuthContext.Provider value={{ userInfo, logIn, logOut }}> { children } </AuthContext.Provider>;
}
