import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerUser } from '../utils/auth';

const initialState = {
  Name: '',
};

function RegisterForm({ user, updateUser }) {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData, user).then(() => updateUser(user.uid));
  };

  const handleChange = (e) => {
    console.warn(e.target.value);
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.warn(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control name="Name" required onChange={handleChange} />
      </Form.Group>
      <Button variant="custom-btn" type="submit">
        Submit
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: {
    uid: PropTypes.string.isRequired,
  }.isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
