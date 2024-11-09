import React, { useState } from 'react';

const ProductForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    price: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const { name, price } = formData;

    // Handle form data (e.g., log to console, send to API, etc.)
    console.log('Product Name:', name);
    console.log('Product Price:', price);

    // Optionally clear the form after submission
    setFormData({ name: '', price: '' });
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Product Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
          <input
            type="text"
            name="price"
            placeholder="Enter price"
            value={formData.price}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Save
          </button>
        </form>

        <div style={styles.formFooter}>
          <a href="#" style={styles.footerLink}>
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f7fc',
    margin: 0,
    padding: 0
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    maxWidth: '400px',
    width: '100%'
  },
  heading: {
    textAlign: 'center',
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px'
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    transition: 'all 0.3s ease-in-out'
  },
  inputFocus: {
    borderColor: '#007bff',
    boxShadow: '0 0 5px rgba(0, 123, 255, 0.3)'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out'
  },
  buttonHover: {
    backgroundColor: '#0056b3'
  },
  formFooter: {
    textAlign: 'center',
    marginTop: '15px'
  },
  footerLink: {
    color: '#007bff',
    textDecoration: 'none'
  },
  footerLinkHover: {
    textDecoration: 'underline'
  }
};

export default ProductForm;
