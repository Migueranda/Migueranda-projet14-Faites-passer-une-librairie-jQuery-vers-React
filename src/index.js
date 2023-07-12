import React, { StrictMode, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './store/redux';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
const EmployeeList = lazy(() => import("./pages/EmployeeList"));
const CreateEmployee = lazy(() => import("./pages/CreateEmployee"));

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <Routes>   
            <Route>            
              <Route path='/' element={<App /> } /> 
              <Route path='/CreateEmployee' element={ <React.Suspense fallback={<>...Loading</>}> <CreateEmployee/></React.Suspense> } />
              <Route path='/EmployeeList' element={ <React.Suspense fallback={<>...Loading</>}><EmployeeList/></React.Suspense>} />       
            </Route>
          </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
