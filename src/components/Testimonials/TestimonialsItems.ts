import imgUrl from '../../assets/images/talixo-logo-black-copy-5-2.png';

interface TestimonialInfoItem {
  imgUrl: string
  quote: string
  quoter: string
  position: string
  imgAlt: string
}

const testimonialsItems: TestimonialInfoItem[] = [
  {
    imgUrl,
    quote: '"Finding a suitable outsourcing service provider through Snubes was very easy and our personal consultant helped us every step of the way. After a short time we had good offers on the table. An on-site visit confirmed the positive impression and we have now found a matching partner. Thank you for your great support, which has helped us a lot in the selection process."',
    quoter: 'Jan Brenneke',
    position: 'VP Operations',
    imgAlt: 'talixo logo',
  },
  {
    imgUrl,
    quote: '"Finding a suitable outsourcing service provider through Snubes was very easy and our personal consultant helped us every step of the way. After a short time we had good offers on the table. An on-site visit confirmed the positive impression and we have now found a matching partner. Thank you for your great support, which has helped us a lot in the selection process."',
    quoter: 'Jan Brenneke',
    position: 'VP Admin',
    imgAlt: 'talixo logo',
  },
  {
    imgUrl,
    quote: '"Finding a suitable outsourcing service provider through Snubes was very easy and our personal consultant helped us every step of the way. After a short time we had good offers on the table. An on-site visit confirmed the positive impression and we have now found a matching partner. Thank you for your great support, which has helped us a lot in the selection process."',
    quoter: 'Jan Brenneke',
    position: 'VP Logistics',
    imgAlt: 'talixo logo',
  },
];

export default testimonialsItems;
