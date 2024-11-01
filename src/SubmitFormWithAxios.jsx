import React, { useState } from 'react';
import axios from 'axios';

function SubmitFormWithAxios() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', { title, body })
            .then(response => {
                console.log('Data submitted:', response.data);
                setTitle('');
                setBody('');
            })
            .catch(error => {
                console.error('Error submitting data:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Body:
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default SubmitFormWithAxios;