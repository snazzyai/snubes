import './App.scss';
import Header from './components/Layout/Header/Header';
import Body from './components/Layout/Body/Body';
import Footer from './components/Layout/Footer/Footer';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
