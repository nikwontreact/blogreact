import Navbar from '../components/Navbar'
import React, { useState } from 'react'
import axios from 'axios'


const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null)
    try {
      const response = await axios.post('http://localhost:8000/user/signup', formData,{ 
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true

      })
      if (response.status !== 200) {
        throw new Error('An error occurred')
      }
      setSuccess(response.data.message)
      setFormData({
        fullname: '',
        email: '',
        password: ''
      })
    } catch (err) {

      setError(err.message)
      console.log(err)
    }
  }

  return (
    <>
      <Navbar />
      <div id='createAccount' className='flex flex-col items-center justify-center h-screen bg-[rgb(224,226,237)]'>
        <h1 className='text-4xl font-semibold'>Create Account</h1>
        {error && <p className='text-red-500'>{error}</p>}
        {success && <p className='text-green-500'>{success}</p>}
        <form className='flex flex-col gap-5' onSubmit={handleSubmit} >
          <input type='text' name='fullname' placeholder='Full Name' className='p-2 border border-gray-300 rounded-md' value={formData.fullname} onChange={handleChange} />
          <input type='email' name='email' placeholder='Email' className='p-2 border border-gray-300 rounded-md' value={formData.email} onChange={handleChange} />
          <input type='password' name='password' placeholder='Password' className='p-2 border border-gray-300 rounded-md' value={formData.password} onChange={handleChange} />


          <button className='p-2 bg-black text-white rounded-md'>Create Account</button>
        </form>
      </div>
    </>
  )
}

export default CreateAccount;
