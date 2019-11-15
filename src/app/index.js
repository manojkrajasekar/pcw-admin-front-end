import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../redux/store';
import Pages from '../components/Pages';


const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Pages />
            </div>
        </Provider>
    )
}

export default App;