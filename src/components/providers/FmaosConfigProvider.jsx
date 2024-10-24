
"use client"
import React, { createContext, useContext, useState } from 'react';

const initialFmaosConfig = {
    initialOffset: 60,
    transition: {
        type: "spring",
    },
    viewport: {
        once: true,
    },
};

const FmaosConfigContext = createContext();

export const FmaosConfigProvider = ({ children }) => {
    const [fmaosConfig, setFmaosConfig] = useState(initialFmaosConfig);

    return (
        <FmaosConfigContext.Provider value={{ fmaosConfig, setFmaosConfig }}>
            {children}
        </FmaosConfigContext.Provider>
    );
};

export const useFmaosConfig = () => {
    const context = useContext(FmaosConfigContext);
    if (!context) {
        throw new Error('useConfig must be used within a ConfigProvider');
    }
    return context;
};
