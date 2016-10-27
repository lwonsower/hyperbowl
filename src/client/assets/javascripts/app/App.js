import React, { PropTypes } from 'react';

import Navbar from '../components/Navbar.jsx';

const App = (props) => (
  <div className="page-container">
    <Navbar />
    {React.cloneElement({...props}.children, {...props})}
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
