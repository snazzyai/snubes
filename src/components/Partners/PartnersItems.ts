import allianzLogo from '../../assets/images/allianz-copy-2.png';
import creditshelfLogo from '../../assets/images/creditshelf-copy-2.png';
import usercentricsLogo from '../../assets/images/usercentrics-copy-2.png';
import laserhubLogo from '../../assets/images/laserhub.png';
import talixoLogo from '../../assets/images/talixo-logo-black-copy-5.png';

interface PartnersInfoItems {
  imgUrl: string
  imgAlt: string
}

const partnerItems: PartnersInfoItems[] = [
  {
    imgUrl: allianzLogo,
    imgAlt: 'allianz logo',
  },
  {
    imgUrl: creditshelfLogo,
    imgAlt: 'creditshelf logo',
  },
  {
    imgUrl: usercentricsLogo,
    imgAlt: 'usercentrics logo',
  },
  {
    imgUrl: laserhubLogo,
    imgAlt: 'laserhub logo',
  },
  {
    imgUrl: talixoLogo,
    imgAlt: 'talixo logo',
  },
];

export default partnerItems;
