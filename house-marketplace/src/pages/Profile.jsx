import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

export default function Profile() {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  const navigate = useNavigate();

  const onLogOut = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button type="button" onClick={onLogOut} className="logOut">
          Log Out
        </button>
      </header>
    </div>
  );
}
