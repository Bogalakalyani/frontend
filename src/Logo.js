import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Logo = ({ onToggleSidebar }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = () => setShowPopup(true);
    const handleClosePopup = () => setShowPopup(false);

    return (
        <>
            <div className="flex items-center justify-between p-3 border-b border-blue-500" style={{ backgroundColor: '#336387', color: 'white', height: '9vh' }}>
                <div className="flex items-center col-md-2 d-flex justify-center">
                    <button
                        onClick={onToggleSidebar}
                        className="text-white hover:text-blue-300 focus:outline-none"
                    >
                        <i className="fa fa-grip-lines"></i>
                    </button>
                </div>
                <div className="flex-1 text-left">
                    <h5 className="font-semibold m-0">Louie Berletta</h5>
                </div>
                <div className="flex items-center col-md-2 justify-center">
                    <button
                        onClick={handleShowPopup}
                        className="text-white hover:text-blue-300 focus:outline-none rounded-full border border-white"
                        style={{
                            width: '25px',
                            height: '25px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'white',
                        }}
                    >
                        <i className="fa fa-plus" style={{ color: 'green' }}></i>
                    </button>
                </div>
            </div>

            {/* Plus Button Popup Modal */}
            <Modal show={showPopup} onHide={handleClosePopup}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Content of the popup */}
                    <p>Enter details for the new item here.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosePopup}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => alert("New item added!")}>
                        Add Item
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Logo;
