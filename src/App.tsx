import * as React from 'react';
import Component from './Component';
import './styles.css';
import DataProvider from './DataProvider';

export default function App() {
    return (
        <div className="App">
            <h1>Simple Data Sharing</h1>
            <DataProvider>
                <Component componentTitle="Component One" textToSet="set from component one" />
                <Component componentTitle="Component Two" textToSet="set from component two" />
            </DataProvider>
            <p>
                Components do not automatically re-render when data changes.
                <br />
                Press the 'Get Data Buttons' to re-render the component
            </p>
        </div>
    );
}
