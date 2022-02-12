import LazyLoad from 'react-lazyload';
import Head from '../../Head/Head';
import Offerings from '../../Offerings/Offerings';
import WhySnubes from '../../WhySnubes/WhySnubes';
import Testimonials from '../../Testimonials/Testimonials';
import Partners from '../../Partners/Partners';

const Body: React.FC = () => (
  <div>
    <LazyLoad height={200} once>
      <Head />
    </LazyLoad>
    <LazyLoad height={200} once>
      <Offerings />
    </LazyLoad>
    <LazyLoad height={200} once>
      <WhySnubes />
    </LazyLoad>
    <LazyLoad height={200} once>
      <Testimonials />
    </LazyLoad>
    <LazyLoad height={200} once>
      <Partners />
    </LazyLoad>
  </div>
);
export default Body;
