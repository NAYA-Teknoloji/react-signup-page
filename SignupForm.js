import React, {useState} from 'react';
import validation from './validation';

const SignupForm = () => {
    const[values, setValues] = useState({
        name: "",
        surname: "",
        email: "",
        number: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const handleFormSubmit = e => {
        e.preventDefault();
        setErrors(validation(values));};
    return (
        <div className="container">
            <div className="app-wrapper">
            <div>
            <h2 className="title">Create Account</h2>
            </div>
            <form className="form-wrapper">
                <div className="name">
                    <label className="label">Name</label>
                    <input className="input" type="text" name="name" value={values.name} onChange={handleChange}/>
                    {errors.name && <p className="error">{errors.name}</p>} 
                </div>
                <div className="surname">
                    <label className="label">Surname</label>
                    <input className="input" type="text" name="surname" value={values.surname} onChange={handleChange}/> 
                    {errors.surname && <p className="error">{errors.surname}</p>} 
                </div>
                <div className="email">
                    <label className="label">Company Email</label>
                    <input className="input" type="email" name="email" value={values.email} onChange={handleChange}/>
                    {errors.email && <p className="error">{errors.email}</p>}  
                </div>
                <div className="number">
                    <label className="label">Company Number</label>
                    <input className="input" type="text" name="number" value={values.number} onChange={handleChange}/>
                    {errors.number && <p className="error">{errors.number}</p>}  
                </div>
                <div className="password">
                    <label className="label">Password</label>
                    <input className="input" type="password" name="password" value={values.password} onChange={handleChange}/>
                    {errors.password && <p className="error">{errors.password}</p>}  
                </div>
                <div>
                    <button className="submit"onClick={handleFormSubmit}>Sign Up</button>
                </div>
                </form>
                </div>
                </div>
    );
};

export default SignupForm ;