import './Offerings.scss';
import LazyLoad from 'react-lazyload';
import offeringsItem from './offeringsItem';

const Offerings: React.FC = () => (
  <div className="offerings">
    {
          offeringsItem.map((offering) => (
            <LazyLoad key={offering.imgAlt}>
              <div className="offerings-item">
                <img src={offering.imgUrl} alt={offering.imgAlt} />
                <p className="offerings-item__heading">{offering.heading}</p>
                <p className="offerings-item__text">{offering.text}</p>
              </div>
            </LazyLoad>

          ))
      }
  </div>
);

export default Offerings;
