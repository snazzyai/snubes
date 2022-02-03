import './Nav.scss';
import menuItems from './menuItems';

const Nav: React.FC = () => (
  <ul className="nav-menu">
    {menuItems.map((item) => (
      <li className={item.className} key={item.title}>
        {item.title}
      </li>
    ))}
  </ul>
);

export default Nav;
