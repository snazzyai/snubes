import './Footer.scss';
import footerInfoItem from './FooterItem';

const Footer: React.FC = () => (
  <div className="footer">
    <div className="footer-top">
      <img src="/src/assets/images/best-of-internet-service-2018-170-px.png" alt="innovationspreis-it award" />
      <div className="footer-top-item">
        {
                  footerInfoItem[0].map((item) => (
                    <p key={item.title} className="footer-top-item__text"><a className="footer-top-item__link" href={item.url}>{item.title}</a></p>
                  ))
              }
      </div>
      <div className="footer-top-item">
        {
                  footerInfoItem[1].map((item) => (
                    <p key={item.title} className="footer-top-item__text"><a className="footer-top-item__link" href={item.url}>{item.title}</a></p>
                  ))
              }
      </div>
      <div className="footer-top-item">
        {
                  footerInfoItem[2].map((item) => (
                    <p key={item.title} className="footer-top-item__text"><a className="footer-top-item__link" href={item.url}>{item.title}</a></p>
                  ))
              }
        <p>
          <i>facebook</i>
          <i>facebook</i>
          <i>facebook</i>
        </p>
      </div>
    </div>
    <div className="footer-bottom">
      <p className="footer-bottom__text">
        <span>@</span>
        {' '}
        {(new Date()).getFullYear()}
        {' '}
        <span>Snubes GmbH All Rights Reserved</span>
      </p>
    </div>

  </div>
);

export default Footer;
