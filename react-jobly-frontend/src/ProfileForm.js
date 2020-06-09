import React, { useState } from 'react';
import defaultPhoto from './images/default-user-photo.png';
import Alert from './Alert';
import JoblyApi from "./HelperApi";
import './ProfileForm.css';

/**WIP */
function ProfileForm({ currentUser }) {
  console.log('profile user: ', currentUser);
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState([]);

  // set authorization
  // make a patch request to the server
  // initial form data to be current user info without password
  // implement re-enter password
  // const [formData, setFormData] = useState({});

  function handleChange() {
    return 'change';
  }

  function handleSubmit() {
    return 'submit';
  }

  // useEffect(function Edit() {
  //   async function editUser() {

  //     try {
  //       let response = await JoblyApi.updateProfile(currentUser.username);
  //       window.localStorage.setItem('username', formData.username);
  //       setToken(response);
  //       history.push("/companies");
  //     } catch (err) {
  //       setErrorMessage(messages => ([
  //         ...messages, ...err
  //       ]));
  //       console.error(err);
  //     }

  //   }
  // }, [signingUp, logginIn, formData, initialData, setToken, history])

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
        <form className="form-group" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">First Name </span>
            </div>
            <input className="form-control" onChange={handleChange} value={formData.first_name} name="first_name"></input>
          </div>
          <br />
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Last Name </span>
            </div>
            <input className="form-control" onChange={handleChange} value={formData.last_name} name="last_name"></input>
          </div>
          <br />
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Email </span>
            </div>
            <input className="form-control" onChange={handleChange} value={formData.email} name="email"></input>
          </div>
          <br />
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Re-Enter Password </span>
            </div>
            <input className="form-control" onChange={handleChange} value={formData.password} name="password"></input>
          </div>
          <br />
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Photo URL </span>
            </div>
            <input className="form-control" onChange={handleChange} value={formData.photo_url} name="photo_url"></input>
          </div>
          <br />
          <button className="ProfileForm-button btn btn-info" type="submit">Save</button>
          <div ><Alert errors={errorMessage} /></div>
        </form>
      </div>
    </div>
  )

}

export default ProfileForm;