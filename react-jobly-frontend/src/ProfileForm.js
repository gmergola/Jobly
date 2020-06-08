import React, {useState} from 'react';
import defaultPhoto from './images/default-user-photo.png';

function ProfileForm({ currentUser }) {
  console.log('profile user: ', currentUser);
  const [formData, setFormData] = useState({})

  // set authorization
  // make a patch request to the server
  // initial form data to be current user info without password
  // implement re-enter password
  // const [formData, setFormData] = useState({});

  function handleChange(){
    return 'change';
  }

  function handleSubmit(){
    return 'submit';
  }

  return (
    <div>
      <div>
        <h1>{currentUser.username}</h1>
        <p>User's name: {currentUser.first_name} {currentUser.last_name}</p>
        {currentUser.photo_url ? <img src={currentUser.photo_url} alt="default" /> :
          <img src={defaultPhoto} alt="default" />}
      </div>
      <br />
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first_name">First Name:</label>
          <input onChange={handleChange} value={formData.first_name} name="first_name"></input><br />
          <label htmlFor="last_name">Last Name:</label>
          <input onChange={handleChange} value={formData.last_name} name="last_name"></input><br />
          <label htmlFor="email">E-mail:</label>
          <input onChange={handleChange} value={formData.email} name="email"></input><br />
          <label htmlFor="password" >Re-enter Password:</label>
          <input onChange={handleChange} value={formData.password} name="password"></input><br />
          <label htmlFor="photo_url" >Photo URL:</label>
          <input onChange={handleChange} value={formData.photo_url} name="photo_url"></input><br />
          <button className="btn btn-info" type="submit">Edit</button>
          {/* <div ><Alert errors={errorMessage} /></div> */}
        </form>
      </div>
    </div>
  )

}

export default ProfileForm;