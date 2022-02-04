import './Navbar.scss';
import Nav from './Nav/Nav';

const Navbar: React.FC = () => (
  <div className="Header">
    <div className="logo">
      <img src="/src/assets/images/snubes-logo.png" alt="snubes logo" />
    </div>
    <Nav />

  </div>
);

export default Navbar;
