
import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './profile.css';
import Loader from '../Loader';



const Profile = () => {

    const navigate = useNavigate()

  const { user, loading, isAuthenticated } = useSelector(state => state.user);

  useEffect(() => {
    if (!isAuthenticated) {
     navigate('/LoginSignup');
    }
  }, [navigate, isAuthenticated]);


  if (!user) {
   
    return <Loader />;
  }


  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
        
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt={user.name} />
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
          
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substring(0, 10)}</p>
              </div>
              <div>
                <Link to="/orders">My Bookings</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
