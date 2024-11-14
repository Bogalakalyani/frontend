import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo';
import Chatlist from './Chatlist';
import Chatarea from './Chatarea';
import Chatheader from './Chatheader';

const App = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const handleToggleSidebar = () => {
        setIsSidebarVisible(prevState => !prevState);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar - Displayed on large screens or when sidebar is toggled */}
                {isSidebarVisible && (
                    <div className="col-lg-4 col-md-4 col-12 d-lg-block d-md-block" style={{paddingLeft:'0px',paddingRight:'0px'}}>
                        <Logo onToggleSidebar={handleToggleSidebar} />
                        <Chatlist />
                    </div>
                )}

                {/* Toggle Sidebar button for smaller screens */}
                {!isSidebarVisible && (
                    <button
                        onClick={handleToggleSidebar}
                        style={{
                            position: 'fixed',
                            top: '15px',
                            left: '10px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#336387',
                            fontSize: '20px',
                            zIndex: '1000',
                            display: 'flex',
                        }}
                    >
                        <i className="fa fa-grip-lines"></i>
                    </button>
                )}

                {/* Chat Area */}
                <div className={`col ${isSidebarVisible ? 'col-lg-8 col-md-8' : 'col-12'}`}>
                    <Chatheader />
                    <Chatarea />
                </div>
                {/* Additional Styles for Mobile */}
                <style jsx="true">{`
                    @media (max-width: 768px) {
                        .sidebar {
                            width: 100%;
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default App;