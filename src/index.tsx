import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { todoSlice } from './redux/todo';
import { persistConfig } from './redux/configureStore';
import { persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, 
  persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'

const persistedReducer = persistReducer(persistConfig, todoSlice.reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});

let persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
