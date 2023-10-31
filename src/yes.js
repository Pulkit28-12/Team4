import React from 'react';

const YesPage = ({ handleSendData }) => {
  return (
    <div>
      <button onClick={() => handleSendData('Yes')}>Yes</button>
    </div>
  );
};

export default YesPage;
