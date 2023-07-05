// import logo from './logo.svg';
// import './App.css';
import CreateEmployee from './pages/CreateEmployee';
import { Provider } from "react-redux";
import {store} from './Utils/redux'
// import EmployeeList from './pages/EmployeeList';


function App() {
  return (
      
    <Provider store={store}>
        <div className="App">
        <header className="App-header">
          <CreateEmployee />
          {/* <EmployeeList/> */}
        </header>
      </div>
    </Provider>
  
  );
}

export default App;
