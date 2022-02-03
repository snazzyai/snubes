import './Head.scss';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import Form from '../Form/Form';

const Head: React.FC = () => (
  <div className="head">
    <Form />
    <HeaderInfo />
  </div>
);

export default Head;
