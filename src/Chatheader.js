import React, { useState, useEffect, useRef } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Modal, Button } from 'react-bootstrap';

const Chatheader = () => {
    // State for the Video Popup Modal
    const [showVideoModal, setShowVideoModal] = useState(false);

    // State for the Options Dropdown
    const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const dotsButtonRef = useRef(null);

    const handleVideoModalOpen = () => setShowVideoModal(true);
    const handleVideoModalClose = () => setShowVideoModal(false);

    // Toggle Dropdown
    const toggleOptionsDropdown = () => setShowOptionsDropdown(prevState => !prevState);

    // Close dropdown if click detected outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if click is outside both the dropdown and the dots button
            if (
                dropdownRef.current && 
                !dropdownRef.current.contains(event.target) &&
                dotsButtonRef.current &&
                !dotsButtonRef.current.contains(event.target)
            ) {
                setShowOptionsDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <div className="flex items-center justify-between p-3" style={{ backgroundColor: 'white', height: '9vh' }}>
                <div className="flex-1 text-center col-md-10">
                    <h5 className="font-semibold m-0">Mark Appleyard</h5>
                </div>
                <div className="col-md-2" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <button onClick={handleVideoModalOpen}>
                        <i className="fa fa-video"></i>
                    </button>
                    <button>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </button>
                    <button ref={dotsButtonRef} onClick={toggleOptionsDropdown}>
                        <i className="fa fa-ellipsis-vertical"></i>
                    </button>
                </div>
            </div>

            {/* Video Modal */}
            <Modal show={showVideoModal} onHide={handleVideoModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Start Video Call</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to start a video call with Mark Appleyard?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleVideoModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => alert('Starting video call...')}>
                        Start Call
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Options Dropdown */}
            {showOptionsDropdown && (
                <div ref={dropdownRef} style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '4rem',
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '10px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    zIndex: '10',
                    width: '150px'
                }}>
                    <div style={{ padding: '8px 12px', cursor: 'pointer', fontWeight: '500' }}>
                        Profile
                    </div>
                    <div style={{ padding: '8px 12px', cursor: 'pointer', fontWeight: '500' }}>
                        Settings
                    </div>
                    <div style={{ padding: '8px 12px', cursor: 'pointer', fontWeight: '500' }}>
                        Options
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatheader;
