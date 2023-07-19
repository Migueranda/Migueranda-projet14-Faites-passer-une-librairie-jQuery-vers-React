import CreateEmployee from './pages/CreateEmployee';
import { Provider } from "react-redux";
import {store} from './store/redux';

function App() {
  return (
      
    <Provider store={store}>
        <div className="App">
        <header className="App-header">
          <CreateEmployee />
        </header>
      </div>
    </Provider>  
  );
}
export default App;
