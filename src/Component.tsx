import React, { useState } from 'react';
import DataObject from './DataObject';
import { TContextData } from './DataProvider';

interface IComponentProps {
    componentTitle: string;
    textToSet: string;
}

const Component: React.FC<IComponentProps> = ({ componentTitle, textToSet }) => {
    const [state, setState] = useState('initial state');

    return (
        <div className="component">
            <div className="component-header">
                <h2>{componentTitle}</h2>
            </div>
            <button className="component-button" onClick={() => {}}>
                Set Data
            </button>
            <button
                className="component-button"
                onClick={() => {
                    setState(stateData);
                }}
            >
                Get Data
            </button>
            <div className="component-state">{state}</div>
        </div>
    );
};

export default Component;
