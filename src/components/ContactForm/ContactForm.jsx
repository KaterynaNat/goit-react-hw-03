import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const phoneRegex = /^[\d\s+\-()]*$/;

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must not exceed 50 characters')
    .required('Please enter data'),
  number: Yup.string()
    .matches(phoneRegex, 'Phone number can only contain numbers and +, -, (), spaces.')
    .required('Please enter data'),
});

const ContactForm = ({ onAddContact }) => {
  const [formError, setFormError] = useState('');

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          if (values.name && values.number) {
            onAddContact(values.name, values.number);
            resetForm();
            setFormError('');
          } else {
            setFormError('Please enter data');
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div className={styles.fieldContainer}>
              <Field
                type="text"
                name="name"
                placeholder="Enter name"
                className={styles.input}
              />
              {errors.name && touched.name && <div className={styles.error}>{errors.name}</div>}
            </div>
            <div className={styles.fieldContainer}>
              <Field
                type="text"
                name="number"
                placeholder="Enter phone number"
                className={styles.input}
              />
              {errors.number && touched.number && <div className={styles.error}>{errors.number}</div>}
            </div>
            {formError && <div className={styles.error}>{formError}</div>}
            <button type="submit" className={styles.submitButton}>Add Contact</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;