import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useToggleStore } from '../../../../store/store';

import './Nav.scss';
import menuItems from './menuItems';

const Nav: React.FC = () => {
  const { isNavToggled, navToggle } = useToggleStore();
  const handleBurger = () => {
    navToggle();
    console.log(isNavToggled);
  };
  return (
    <>
      <ul className="nav-menu">
        {menuItems.map((item) => (
          <>
            <li className={item.className} key={item.title}>
              {item.title}
            </li>
            { item.title.includes('EUR') || item.title.includes('EN') ? <span><FontAwesomeIcon icon={faAngleDown} /></span> : null }
          </>
        ))}
      </ul>
      <div className="nav-menu__burger">
        { isNavToggled ? <FontAwesomeIcon icon={faXmark} size="2x" onClick={handleBurger} color="grey" /> : <FontAwesomeIcon icon={faBars} size="2x" onClick={handleBurger} color="grey" />}
      </div>
    </>
  );
};

export default Nav;
