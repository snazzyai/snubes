import './Head.scss';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import Form from '../Form/Form';
import { useFormStore } from '../../store/store';
import Submission from '../Submission/Submission';

const Head: React.FC = () => {
  const {
    formIsSubmitted,
  } = useFormStore();
  return (
    <div
      className="head"
    >
      {formIsSubmitted ? <Submission /> : <Form />}
      <HeaderInfo />
    </div>
  );
};

export default Head;
