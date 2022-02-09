import React, { useState } from 'react';
import axios from 'axios';

export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    const Register = (e) => {
        e.preventDefault();
        console.log(username, password);
        const isReq = validate();
        if (isReq) {
            /* Send request to the server for registry */
            axios.post('https://our-very-own.herokuapp.com/users', {
                Username: username,
                Password: password,
                Email: email,
                Birthday: birthday
            })
                .then(response => {
                    const data = response.data;
                    console.log(data);
                    window.open('/', '_self'); // the second argument '_self' is necessary so that the page will open in the current tab
                })
                .catch(e => {
                    console.log('Invalid Username.')
                });
        };



        return (
            <form>
                <label>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    Birthday:
                    <input type="text" value={birthday} onChange={e => setBirthday(e.target.value)} />
                </label>

                <button type="submit" onClick={handleSubmit}>Submit</button>
                <button type="submit" onClick={Register}>Register?</button>

            </form>
        );
    }
}