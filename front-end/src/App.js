
import './App.css';
import './header.js';
import 'react-bulma-components';
import HeaderComponent from './header.js';
import BodyComponent from './pageBody';

function App() {
  return (
    
    <div className="App">
      
      <header className="App-header">
       <HeaderComponent/>
       <BodyComponent/>
      </header>
      
    </div>
  );
}



export default App;
// export default pageHeader;
