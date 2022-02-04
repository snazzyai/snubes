import './Offerings.scss';
import offeringsItem from './offeringsItem';

const Offerings: React.FC = () => (
  <div className="offerings">
    {
          offeringsItem.map((offering) => (
            <div className="offerings-item" key={offering.heading}>
              <img src={offering.imgUrl} alt={offering.imgAlt} />
              <p className="offerings-item__heading">{offering.heading}</p>
              <p className="offerings-item__text">{offering.text}</p>
            </div>
          ))
      }
  </div>
);

export default Offerings;
