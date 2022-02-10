import './NavContent.scss';
import menuItems from '../Nav/menuItems';

const NavContent: React.FC = () => (
  <div className="menu-content">
    {menuItems.map((item) => (
      <li className={item.className} key={item.title}>
        {item.title}
      </li>
    ))}
  </div>
);

export default NavContent;
