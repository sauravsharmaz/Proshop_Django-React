import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import Homescreen from './screens/Homescreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'
import CartScreen from './screens/CartScreen'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './index.css'

function App() {
  return (
    <div>
      <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' component={Homescreen} exact />
          <Route path='/product/:id' component={ProductScreen} exact />
          <Route path='/cart' component={CartScreen} exact />
          <Route path='/login' component={LoginScreen} exact />
        </Container>
      </main>
      <Footer />
      </Router>
    </div>
  );
}
export default App;
