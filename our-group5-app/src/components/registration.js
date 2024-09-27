import React from 'react';
import './styles.css'

const registration = () => {
  return (
    <div className='container'>
       < div className = 'header'>
       <div className='text'>sign up</div>
       <div className='underline'></div>
       </div>
      <div className='inputs'>
        <div className='input'>
            <label>Name:</label>
        <input type='text' placeholder='enter your name' required/>
        </div>
       < div className='input'>
            <label>LastName:</label>
        <input type='text' placeholder='enter your surname'/>
        </div>
        < div className='input'>
            <label>Phone number:</label>
        <input type='number' placeholder='enter your number' required/>
        </div>
        
        <div className='input'>
            <label>Email: </label>
        <input type='email' placeholder='enter your email' required/>
        </div>
        <div className='input'>
            <label>password: </label>
        <input type='password' placeholder='enter password' required/>

        </div>
        <div className='input'>
            <label>password:</label>
            <input type='password' placeholder='verify your password' required/>
        </div>
        <div className='submit-container'>
            <input type='submit' value='log in' className='submit'/>
            <input type= 'submit' value='register' className='submit'/>
            </div>
      </div>
    </div>
  )
}

export default registration;
