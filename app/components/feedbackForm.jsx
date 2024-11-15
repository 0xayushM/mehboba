import React, { useState } from 'react';

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form Data:', formData);
        console.log('API Endpoint:', process.env.NEXT_PUBLIC_GOOGLE_SHEET_API);

        fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEET_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            mode: 'no-cors',
        })
            .then(() => {
                alert('Form submitted successfully');
                // Clear the form
                setFormData({
                    name: '',
                    email: '',
                    feedback: '',
                });
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Form submission failed');
            });
    };

    return (
        <div className='flex flex-col w-full h-full items-center justify-center'>
            <form id='form' className='flex flex-col p-10 w-full bg-white' onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Feedback:
                    <textarea
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
