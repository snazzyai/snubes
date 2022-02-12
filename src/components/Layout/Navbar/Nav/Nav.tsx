import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { faBars, faXmark, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useToggleStore } from '../../../../store/store';

import './Nav.scss';
import menuItems from './menuItems';

const Nav: React.FC = () => {
  const { isNavToggled, navToggle } = useToggleStore();
  const handleBurger = () => {
    navToggle();
  };
  return (
    <>
      <ul className="nav-menu">
        {menuItems.map((item) => (
          <Fragment key={item.title}>
            <li className={item.className}>
              {item.title}
            </li>
            { item.title.includes('EUR') || item.title.includes('EN') ? <span><FontAwesomeIcon icon={faAngleDown} /></span> : null }
          </Fragment>
        ))}
      </ul>
      <div className="nav-menu__burger">
        { isNavToggled ? <FontAwesomeIcon icon={faXmark} size="2x" onClick={handleBurger} color="grey" /> : <FontAwesomeIcon icon={faBars} size="2x" onClick={handleBurger} color="grey" />}
      </div>
    </>
  );
};

export default Nav;
