import './FormInput.scss';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useFormStore } from '../../store/store';
import countryData from '../../data/countrycode';
import useGeoLocationFinder from '../../hooks/useGeoLocation';

const schema = yup.object().shape({
  company: yup.string().required().matches(/^[A-Za-z]+$/).max(80),
  name: yup.string().required().max(50),
  phone: yup.string().required().matches(/^[0-9]+$/),
  email: yup.string().required().email(),

});

const FormInput: React.FC = () => {
  const { ...storeItems } = useFormStore();
  const code = useGeoLocationFinder();

  return (
    <div className="form-input">

      <div className="form-input__label-view">
        <label className="margin-left" htmlFor="company">Company</label>
        <label htmlFor="fullName">Name</label>
        <label htmlFor="phone">Phone</label>
        <label htmlFor="email">E-mail</label>
      </div>
      <Formik
        initialValues={{
          company: '',
          name: '',
          phone: '',
          email: '',
        }}
        validationSchema={schema}
        onSubmit={() => {
          storeItems.updateDialCode(code);
          storeItems.setFormIsSubmitted();
        }}
      >
        {({
          handleSubmit, handleChange, values, isValid, errors,
        }) => (
          <form className="form-input__form" onSubmit={handleSubmit}>
            <div className="form-input__item">
              <input
                id="company"
                name="company"
                type="text"
                style={errors.company ? { border: '1px solid red' } : { border: '1px solid #0099EE' }}
                className="form-input__item__input form-input__item__input--add-margin"
                onChange={(event) => {
                  handleChange(event);
                  storeItems.updateCompany(event.target.value);
                }}
                value={storeItems.company}
                placeholder="Company"
              />
            </div>
            <div className="form-input__item">

              <input
                id="name"
                name="name"
                type="text"
                style={errors.company ? { border: '1px solid red' } : { border: '1px solid #0099EE' }}
                className="form-input__item__input"
                onChange={(event) => {
                  handleChange(event);
                  storeItems.updateName(event.target.value);
                }}
                value={values.name}
                placeholder="Full name"
              />
            </div>

            <div className="form-input__item phone__view">
              <span>
                <select
                  className="form-input__item__select"
                  onChange={
                    (event) => {
                      storeItems.updateDialCode(event.target.value);
                    }
                }
                >
                  { code ? <option value="code">{code}</option> : countryData.map((data) => (
                    <option value={data.dial_code} key={data.code}>
                      {data.dial_code}
                    </option>
                  ))}

                </select>
              </span>
              <span>
                <input
                  id="phone"
                  name="phone"
                  type="phone"
                  style={errors.company ? { border: '1px solid red' } : { border: '1px solid #0099EE' }}
                  className="form-input__item__input phone__input"
                  onChange={(event) => {
                    handleChange(event);
                    storeItems.updatePhone(event.target.value);
                  }}
                  value={values.phone}
                  placeholder=""
                />
              </span>

            </div>
            <div className="form-input__item">
              <input
                id="email"
                name="email"
                type="email"
                style={errors.company ? { border: '1px solid red' } : { border: '1px solid #0099EE' }}
                className="form-input__item__input"
                onChange={(event) => {
                  handleChange(event);
                  storeItems.updateEmail(event.target.value);
                }}
                value={values.email}
                placeholder="E-mail"
              />
            </div>
            <div className="form-input__item__submit">
              <button className="form-input__item__submit__button" disabled={!isValid} type="submit">Get Informed</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormInput;
