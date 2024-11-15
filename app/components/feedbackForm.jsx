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
        <div className="w-full flex items-center justify-center">
            <div className="w-full p-5 md:p-10">
                <form className="flex flex-col space-y-6 " onSubmit={handleSubmit}>
                    {['name', 'email', 'feedback'].map((field) => (
                        <div className="relative" key={field}>
                            <input
                                type={field === 'email' ? 'email' : 'text'}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                required
                                placeholder=" " // placeholder ensures the label floats correctly
                                className="block pt-5 px-0 w-full text-[1rem] md:text-[1.2rem] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#600E9B] focus:outline-none focus:ring-0 focus:border-[#600E9B] peer font-content"
                            />
                            <label
                                className="peer-focus:font-medium absolute text-[1rem] md:text-[1.2rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#600E9B] peer-focus:dark:text-[#600E9B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-pacifico"
                            >
                                {field.charAt(0).toUpperCase() + field.slice(1)}
                            </label>
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="button-36 font-mainheading text-[1rem] md:text-[1.5rem]"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;
