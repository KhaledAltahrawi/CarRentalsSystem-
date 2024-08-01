<<<<<<< HEAD
// src/components/SignUp.js
import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formData;

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const newUser = {
                name,
                email,
                password
            };
            await axios.post('http://localhost:5000/api/users/signup', newUser);
            console.log('User registered');
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} onChange={handleChange} required placeholder="Name" />
                <input type="email" name="email" value={email} onChange={handleChange} required placeholder="Email" />
                <input type="password" name="password" value={password} onChange={handleChange} required placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
=======
// src/components/SignUp.js
import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formData;

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const newUser = {
                name,
                email,
                password
            };
            await axios.post('http://localhost:5000/api/users/signup', newUser);
            console.log('User registered');
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} onChange={handleChange} required placeholder="Name" />
                <input type="email" name="email" value={email} onChange={handleChange} required placeholder="Email" />
                <input type="password" name="password" value={password} onChange={handleChange} required placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
>>>>>>> c342c0499b682941d4d2bb302fd5f6920adce68e
