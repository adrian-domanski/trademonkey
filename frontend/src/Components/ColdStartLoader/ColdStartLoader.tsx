import React from 'react';

export default function ColdStartLoader() {
  return (
    <div style={container}>
      <div style={card}>
        <h2>🚀 Waking up server...</h2>
        <p>
          The backend is hosted on a free tier and may take up to 30 seconds to
          start.
        </p>
        <div style={spinner}></div>
      </div>
    </div>
  );
}

const container: React.CSSProperties = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#0f172a',
  color: 'white',
  fontFamily: 'sans-serif',
};

const card: React.CSSProperties = {
  textAlign: 'center',
};

const spinner: React.CSSProperties = {
  margin: '20px auto',
  width: '40px',
  height: '40px',
  border: '4px solid #334155',
  borderTop: '4px solid #38bdf8',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
};
