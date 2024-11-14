import React from 'react';
import singleChat from './components/single-chat';

const Chatarea = () => {
    const yourID = 26172646; // Replace with your actual user ID

    // Helper function to format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }).toUpperCase();
    };

    // Helper function to format time
    // const formatTime = (dateString) => {
    //     const date = new Date(dateString);
    //     return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    // };

    // Check if two dates are on the same day
    const isSameDay = (date1, date2) => {
        return date1.toDateString() === date2.toDateString();
    };

    let lastDisplayedDate = null;

    return (
        <>
            <div className="flex-1 overflow-y-scroll" style={{ height: '79vh', backgroundColor: '#e6eff5' }}>
                {singleChat.map((chat, index) => {
                    const messageDate = new Date(chat.sentAt);
                    const isNewDay = lastDisplayedDate === null || !isSameDay(messageDate, lastDisplayedDate);

                    // Update the last displayed date
                    lastDisplayedDate = messageDate;

                    return (
                        <div key={index}>
                            {/* Display date only for the first message of a new day */}
                            {isNewDay && (
                                <div className="text-center text-gray-400 text-xs mb-4 p-2">
                                    {isSameDay(messageDate, new Date()) ? 'Today' : formatDate(chat.sentAt)}
                                </div>
                            )}

                            {/* Message content */}
                            <div className={`flex items-start mb-4 ${chat.senderId === yourID ? 'justify-end' : ''}`}>
                                {chat.senderId !== yourID && (
                                    <img
                                        src={chat.senderProfilePicture || "https://placehold.co/40x40"}
                                        alt={chat.senderName}
                                        className="rounded-full w-10 h-10 mr-4"
                                    />
                                )}
                                <div
                                    className={`p-3 rounded-lg shadow-sm max-w-xs ${
                                        chat.senderId === yourID ? 'text-white' : 'bg-white'
                                    }`}
                                    style={{ backgroundColor: chat.senderId === yourID ? '#336387' : '#ffffff' }}
                                >
                                    <p>{chat.message}</p>
                                </div>
                                {chat.senderId === yourID && (
                                    <img
                                        src={chat.senderProfilePicture || "https://placehold.co/40x40"}
                                        alt={chat.senderName}
                                        className="rounded-full w-10 h-10 ml-4"
                                    />
                                )}
                            </div>

                            {/* Display time for each message */}
                            <div className="text-center text-gray-400 text-xs mb-4">
                                {/* {formatTime(chat.sentAt)} */}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="p-3 border-t border-gray-300 flex items-center">
                <button className="mr-4 text-yellow-500">
                    <i className="fas fa-smile"></i>
                </button>
                <input
                    type="text"
                    placeholder="Send a message"
                    className="flex-1 p-2 border border-gray-300 rounded-lg"
                />
                <button style={{ marginLeft: '10px' }}>
                    <i className="fa-regular fa-paper-plane"></i>
                </button>
            </div>
        </>
    );
};

export default Chatarea;
