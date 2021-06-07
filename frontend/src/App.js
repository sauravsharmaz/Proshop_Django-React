import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import Homescreen from './screens/Homescreen'


function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <Homescreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
