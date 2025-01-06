import './Header.css';

const Header = () => (
  <header style={{ padding: '10px 20px', backgroundColor: '#1e1e1e', textAlign: 'center', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)', position: 'fixed', width: '100%', top: 0, left: 0, zIndex: 1000 }}>
    <h1 style={{ color: '#76c7c0', fontSize: '24px', margin: '0', textTransform: 'uppercase' }}>TR</h1>
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', padding: 0, margin: '10px 0' }}>
        <li style={{ margin: '0 10px' }}><a href="#home" style={linkStyle}>Home</a></li>
        <li style={{ margin: '0 10px' }}><a href="#about" style={linkStyle}>About</a></li>
        <li style={{ margin: '0 10px' }}><a href="#work" style={linkStyle}>Work</a></li>
        <li style={{ margin: '0 10px' }}><a href="#projects" style={linkStyle}>Projects</a></li>
        <li style={{ margin: '0 10px' }}><a href="#contact" style={linkStyle}>Contact</a></li>
      </ul>
    </nav>
  </header>
);

const linkStyle = {
  textDecoration: 'none',
  fontSize: '16px',
  color: '#ffffff',
  padding: '8px 12px',
  borderRadius: '5px',
  transition: 'background-color 0.3s',
};

export default Header;
