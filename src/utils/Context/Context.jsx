import { createContext,useState } from "react";


export const AuthContext = createContext();

    

const Context = ({children}) => {
    const [value,setValue] = useState('valuse')
    

    const info = { value };
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;