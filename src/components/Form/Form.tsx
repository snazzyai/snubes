import './Form.scss';
import FormInput from '../FormInput/FormInput';

const Form: React.FC = () => (
  <div className="form-box">
    <p className="form-box__heading">Find imbound call centers for your company</p>
    <p className="form-box__subheading">Use our AI and Big Data driven call center sourcing solution</p>
    <FormInput />
  </div>
);

export default Form;
