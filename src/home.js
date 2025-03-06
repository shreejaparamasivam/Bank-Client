import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center"
             style={{ 
                 minHeight: '100vh', 
                 backgroundImage: "url('/HoneyBank.jpg')", 
                 backgroundSize: 'cover', 
                 backgroundPosition: 'center', 
                 backgroundRepeat: 'no-repeat' 
             }}>
            <h1 className="mb-4" style={{ color: 'black', textAlign: 'center' }}>Welcome to Honey Bank</h1>
            <p style={{ color: 'black', textAlign: 'center' }}>Safe as a hive, secure as your savings.</p>
        </div>
    );
}

export default Home;
