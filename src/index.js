import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EmployeeList from './pages/EmployeeList';
import {store} from './store/redux';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CreateEmployee from './pages/CreateEmployee';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <Routes>   
            <Route>            
              <Route path='/' element={<App /> } />
              <Route path='/CreateEmployee' element={<CreateEmployee/>} />
              <Route path='/EmployeeList' element={<EmployeeList/>} />       
            </Route>
          </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);