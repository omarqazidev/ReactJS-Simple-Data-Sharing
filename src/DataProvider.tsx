import React, { useState, createContext } from 'react';

export type TContextData = [string, (data: string) => void] | null;

export const DataContext = createContext<TContextData>(null);

const DataProvider: React.FC = (children) => {
    const [stateData, setStateData] = useState('');

    // const setData = (data: string) => {
    //     setStateData(data);
    // };

    return (
        <DataContext.Provider value={[stateData, setStateData]}>{children}</DataContext.Provider>
    );
};

export default DataProvider;
