<<<<<<< HEAD
// src/components/SignIn.js
import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const user = {
                email,
                password
            };
            await axios.post('http://localhost:5000/api/users/signin', user);
            console.log('User signed in');
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={email} onChange={handleChange} required placeholder="Email" />
                <input type="password" name="password" value={password} onChange={handleChange} required placeholder="Password" />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
=======
// src/components/SignIn.js
import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const user = {
                email,
                password
            };
            await axios.post('http://localhost:5000/api/users/signin', user);
            console.log('User signed in');
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={email} onChange={handleChange} required placeholder="Email" />
                <input type="password" name="password" value={password} onChange={handleChange} required placeholder="Password" />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
>>>>>>> c342c0499b682941d4d2bb302fd5f6920adce68e
