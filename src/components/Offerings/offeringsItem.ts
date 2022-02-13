import signupLogo from '../../assets/images/group-37.jpg';
import atomLogo from '../../assets/images/group-11.jpg';
import documentLogo from '../../assets/images/group-27.jpg';

interface OfferingsInfoItem {
  imgUrl: string
  heading: string
  text: string
  imgAlt: string
}

const offeringsItem: OfferingsInfoItem[] = [
  {
    imgUrl: signupLogo,
    heading: 'Sign up for free',
    text: 'Signing up and setting up your project takes less than 5 minutes',
    imgAlt: 'Sign up contact logo',
  },
  {
    imgUrl: atomLogo,
    heading: 'Source smarter',
    text: 'Our data-based AI and our experts will help you find exactly what you are looking for',
    imgAlt: 'Atom logo',
  },
  {
    imgUrl: documentLogo,
    heading: 'Receive offers',
    text: 'With our insights you always receive high quality proposals at the best price',
    imgAlt: 'Offers documents logo',
  },
];

export default offeringsItem;
