import logo from './logo.svg';
import './App.css';
import {Link,Outlet} from 'react-router-dom';

function App() {
  return (
    // style={{ padding: "1rem 0" }}
    <div style={{backgroundColor: "aqua"}}>
      <h1>Book keeper!</h1>
      <ul>
        <li><Link to='/invoices'>Invoices</Link></li>
        <li><Link to='/expenses'>Expenses</Link></li>
      </ul>
      <Outlet/> 
    </div>
  );
}

export default App;
