import './HeaderInfo.scss';
// import { lazy } from 'react';
import headerInfoItem from './headerInfoItem';

const HeaderInfo: React.FC = () => (
  // const headerInfoItem = lazy(() =>import('./headerInfoItem'))
  <div className="header-info">
    <p className="header-info__text">Welcome to Europes largest call center database</p>
    <div className="header-info--items">
      {
              headerInfoItem.map((item) => (
                <div className="header-info--items--item" key={item.title}>
                  <p className="header-info--items--item__numbers">{item.numbers}</p>
                  <p className="header-info--items--item__title">{item.title}</p>
                </div>
              ))
      }
    </div>
    <div />
  </div>
);

export default HeaderInfo;
