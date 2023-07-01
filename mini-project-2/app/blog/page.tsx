import React from 'react';

const CenteredText: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <p>Stay tuned. We are launching our awesome blog soon. Thank you kindly for your patience.</p>
    </div>
  );
};

export default CenteredText;