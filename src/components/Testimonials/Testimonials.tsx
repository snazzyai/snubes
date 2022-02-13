import './Testimonials.scss';
import Slider, { Settings } from 'react-slick';
import TestimonialItems from './TestimonialsItems';
import next from '../../assets/images/group-25-copy.png';
import prev from '../../assets/images/group-25.png';

const Testimonials: React.FC = () => {
  const settings: Settings = {
    lazyLoad: 'ondemand',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <img src={next} alt="right arrow icon" />,
    prevArrow: <img src={prev} alt="left arrow icon" />,
    dotsClass: 'button__bar',
  };

  return (
    <div className="testimonial">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...settings}>
        {
              TestimonialItems.map((item) => (
                <div className="testimonial-item" key={item.position}>
                  <img src={item.imgUrl} alt={item.imgAlt} />
                  <p className="testimonial-item__quote">{item.quote}</p>
                  <div>
                    <span className="testimonial-item__quoter">{item.quoter}</span>
                    <span>{', '}</span>
                    <span className="testimonial-item__position">{item.position}</span>
                  </div>

                </div>
              ))
          }
      </Slider>
    </div>
  );
};

export default Testimonials;
