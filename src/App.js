
import './App.sass';

import Home from './home/Home'
import About from './about/About'
import Services from './services/Services'
import News from './news/News'
import Contacts from './contacts/Contacts'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/news" component={News} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
