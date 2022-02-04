import './FormInput.scss';
import { useFormik } from 'formik';

interface InitialValues {
  company: string
  fullName: string
  phone: string
  email: string
}
const FormInput: React.FC = () => {
  const formik = useFormik<InitialValues>({
    initialValues: {
      company: '',
      fullName: '',
      phone: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },

  });

  return (
    <div className="form-input">
      <form onSubmit={formik.handleSubmit} className="form-input">
        <div className="form-input__item">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            className="form-input__item__input form-input__item__input--add-margin"
            onChange={formik.handleChange}
            value={formik.values.company}
            placeholder="Company"
          />
          {console.log(formik)}
        </div>
        <div className="form-input__item">
          <label htmlFor="fullName">Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className="form-input__item__input"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            placeholder="Full name"
          />
        </div>
        <div className="form-input__item">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="phone"
            className="form-input__item__input"
            onChange={formik.handleChange}
            value={formik.values.phone}
            placeholder="+49"
          />
        </div>
        <div className="form-input__item">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input__item__input"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="E-mail"
          />
        </div>
        <div className="form-input__item__submit">
          <button className="form-input__item__submit__button" type="submit">Get Informed</button>
        </div>

      </form>
    </div>
  );
};

export default FormInput;
