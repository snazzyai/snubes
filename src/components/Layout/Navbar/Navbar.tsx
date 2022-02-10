import './Navbar.scss';
import Nav from './Nav/Nav';
import NavContent from './NavContent/NavContent';
import useStore from '../../../store/store';

const Navbar: React.FC = () => {
  const { isNavToggled } = useStore();
  return (
    <>
      <div className="Header">
        <div className="logo">
          <img src="/src/assets/images/snubes-logo.png" alt="snubes logo" />
        </div>
        <Nav />
      </div>
      { isNavToggled ? <NavContent /> : null }
    </>

  );
};

export default Navbar;
