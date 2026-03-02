import './index.css';

function App() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '16px',
      background: 'radial-gradient(ellipse at 50% 60%, #1a1a2e 0%, #080808 70%)',
    }}>
      <div style={{
        width: '32px',
        height: '1px',
        background: 'rgba(255,255,255,0.2)',
        marginBottom: '8px',
      }} />
      <h1 style={{
        fontSize: 'clamp(2rem, 6vw, 4.5rem)',
        fontWeight: 300,
        letterSpacing: '-0.03em',
        color: '#fff',
      }}>
        nothing here.
      </h1>
      <p style={{
        fontSize: '0.85rem',
        fontWeight: 400,
        letterSpacing: '0.15em',
        color: 'rgba(255,255,255,0.25)',
        textTransform: 'uppercase',
      }}>
        check back later
      </p>
    </div>
  );
}

export default App;
