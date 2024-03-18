import React from 'react';
import getCurrentUser from '../actions/getCurrentUser';
import ChatClient from './ChatClient';

const ChatPage = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div>
      <ChatClient currentUser={currentUser} />
    </div>
  );
};

export default ChatPage;
