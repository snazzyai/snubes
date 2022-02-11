import './Submission.scss';
import { useFormStore } from '../../store/store';
import formatPhoneNumber from '../../helper/formatPhoneNumber';

const Submission: React.FC = (): JSX.Element => {
  const {
    name, email, company, phone, dialCode,
  } = useFormStore();

  return (
    <div className="sub-box">
      <p className="sub-box__heading">Thank you for your request!</p>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p className="sub-box__subheading">You've taken the first step, our experts will get in touch with you soon</p>
      <hr />
      <div className="sub-box__info">
        <div>
          <p>Company</p>
          <p>Name</p>
          <p>Phone</p>
          <p>Email</p>
        </div>
        <div>
          <p>{company}</p>
          <p>{name}</p>
          <p>{formatPhoneNumber(dialCode, phone)}</p>
          <p>{email}</p>
        </div>
      </div>

    </div>
  );
};

export default Submission;
