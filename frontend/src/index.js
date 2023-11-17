import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import { restoreSession } from './components/store/session';
import configureStore from "./components/store";

const store = configureStore();
const container = document.getElementById('root');
const root = createRoot(container);

if(true){
    store.dispatch(restoreSession()).then(()=>{root.render(<App store={store} />);})
}else{
    root.render(<App store={store} />);
}
