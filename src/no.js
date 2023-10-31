import React from 'react';

const NoPage = ({ handleSendData }) => {
  return (
    <div>
      <button onClick={() => handleSendData('No')}>No</button>
    </div>
  );
};

export default NoPage;
