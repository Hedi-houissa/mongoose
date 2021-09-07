import './App.css';
import Navbar from './Component/NavBar/Navbar'
import Footer from './Component/Footer/Footer'
import { Switch,Route} from 'react-router-dom'
import contactlist from './Pages/Contactlist/Contactlist'
import addeditContact from './Pages/AddEditContact/AddEditContact'
import errors from './Pages/errors/Errors';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch >
        <Route exact path='/' component={contactlist}    />
        <Route exact path={['/addContact','/editContact/:id']} component={addeditContact} /> 
        <Route path='/*' component={errors} />
      </Switch>

      <Footer/>
    </div>
  );
}

export default App;
