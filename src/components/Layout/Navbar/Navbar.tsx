import './Navbar.scss';
import Nav from './Nav/Nav';
import NavContent from './NavContent/NavContent';
import { useToggleStore } from '../../../store/store';
import snubesLogo from '../../../assets/images/snubes-logo.png';

const Navbar: React.FC = () => {
  const { isNavToggled } = useToggleStore();
  return (
    <>
      <div className="Header">
        <div className="logo">
          <a href="/">
            {' '}
            <img src={snubesLogo} alt="snubes logo" />
            {' '}
          </a>
        </div>
        <Nav />
      </div>
      { isNavToggled ? <NavContent /> : null }
    </>

  );
};

export default Navbar;
