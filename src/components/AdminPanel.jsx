import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <div style={{padding: '20px', textAlign: 'center'}}>
      <h2>Admin Quick Access</h2>
      <Link to="/admin" style={{
        padding: '10px 20px',
        background: '#446B8C',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        display: 'inline-block',
        marginTop: '10px'
      }}>
        Go to Admin Panel
      </Link>
    </div>
  );
};

export default AdminPanel;
