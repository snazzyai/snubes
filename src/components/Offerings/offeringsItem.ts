interface OfferingsInfoItem {
  imgUrl: string
  heading: string
  text: string
  imgAlt: string
}

const offeringsItem: OfferingsInfoItem[] = [
  {
    imgUrl: '/src/assets/images/group-37.png',
    heading: 'Sign up for free',
    text: 'Signing up and setting up your project takes less than 5 minutes',
    imgAlt: 'Sign up contact logo',
  },
  {
    imgUrl: '/src/assets/images/group-11.png',
    heading: 'Source smarter',
    text: 'Our data-based AI and our experts will help you find exactly what you are looking for',
    imgAlt: 'Atom logo',
  },
  {
    imgUrl: '/src/assets/images/group-27.png',
    heading: 'Receive offers',
    text: 'With our insights you always receive high quality proposals at the best price',
    imgAlt: 'Offers documents logo',
  },
];

export default offeringsItem;
