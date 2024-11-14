import React, { useState } from 'react'

const FeedbackForm = () => {
  
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        feedback:''
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({ ...formData, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/submitFeedback', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            })
            if(response.ok) {
                alert('Feedback submitted successfully!')
            } else {
                alert('Error submitting feedback!')
            }
        } catch(error) {
            console.error('Submission error: ', error)
        }
    }

  return (
    <div className='flex flex-col bg-red-400 w-full h-full items-center justify-center'>
    <form onSubmit={handleSubmit} className='flex flex-col p-10 w-full'>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Feedback:
        <textarea name="feedback" value={formData.feedback} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default FeedbackForm
