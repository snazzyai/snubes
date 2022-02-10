import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.scss';
import Navbar from './components/Layout/Navbar/Navbar';
import Body from './components/Layout/Body/Body';
import Footer from './components/Layout/Footer/Footer';

const App: React.FC = () => (
  <div className="App">
    <Navbar />
    <Body />
    <Footer />
  </div>
);

export default App;
