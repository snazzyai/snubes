import './Partners.scss';
import PartnersItems from './PartnersItems';

const Partners = () => (
  <div className="partners">
    {
        PartnersItems.map((item) => (
          <div key={item.imgAlt} className="partners-item">
            <img className="partners-item__img" src={item.imgUrl} alt={item.imgAlt} />
          </div>
        ))
    }
  </div>
);

export default Partners;
