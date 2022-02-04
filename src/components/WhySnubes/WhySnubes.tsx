import './WhySnubes.scss';
import whySnubesItems from './whySnubesItems';

const WhySnubes: React.FC = () => (
  <div className="why-snubes">
    <p>Why Snubes</p>
    {
        whySnubesItems.map((item) => (
          <div className="why-snubes-item" key={item.text}>
            <p className="why-snubes-item__heading">{item.heading}</p>
            <p className="why-snubes-item__text">{item.text}</p>
          </div>
        ))
      }
  </div>
);

export default WhySnubes;
