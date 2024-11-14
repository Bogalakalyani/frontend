import React from "react";
import chatPreviews from './components/chat-previews.js'; // Adjust the import path accordingly

const Chatlist = () => {
    const today = new Date().toLocaleDateString(); // Get today's date as a string

    // Helper function to format time
    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    };

    // Helper function to format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    // Helper function to check if the date is today
    const isToday = (dateString) => {
        const messageDate = new Date(dateString).toLocaleDateString();
        return messageDate === today;
    };

    return (
        <>
            <div className="flex-1 overflow-y-scroll" style={{ height: '91vh' }}>
                {chatPreviews.map((chat, index) => {
                    return (
                        <div key={index} className="p-4 flex items-center border-b border-gray-500">
                            {/* Sender Profile Picture */}
                            <img
                                src={chat.senderProfilePicture || "https://placehold.co/40x40"}
                                alt={chat.senderName}
                                className="rounded-full w-10 h-10 mr-4"
                            />
                            <div className="flex-1">
                                <div className="font-semibold">{chat.senderName}</div>
                                <div className="text-sm text-gray-300">
                                    {chat.messagePreview}
                                </div>
                            </div>
                            <div className="text-xs text-gray-300">
                                {isToday(chat.sentAt) ? formatTime(chat.sentAt) : formatDate(chat.sentAt)}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Chatlist;
