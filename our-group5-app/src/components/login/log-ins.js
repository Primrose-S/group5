import React from 'react'

const logins = () => {
  return (
    <div>
      <div className='container2'>
       <div className='input'>
            <label> Username : </label>
        <input type='email' placeholder='enter user name' required/>

        </div>
        <div className='input'>
            <label> password : </label>
            <input type='password' placeholder='enter your password' required/>
        </div>
        <div className='input'>
        <input type='submit' value='log in'/>
        <div> 
            <a href='#click'>fforgotten password</a>
        </div>
        </div>
        </div>
    </div>
  )
}

export default logins
