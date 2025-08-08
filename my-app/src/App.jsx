import React from 'react';
import EventComp from './components/EventComp';
import EventComp2 from './components/EventComp2';
import EnterKeyInput from './components/EnterKeyInput';
import EventBubbleCapture from './components/EventBubbleCapture';

function App() {
  // const showMessage = (message) => {
  //   console.log('Message:', message);
  // };

  return (
    <>
    {/* <div className="h-screen flex justify-center items-center bg-gray-900">
      <EventComp handler={showMessage} msg="This is a custom message!" />
    </div> */}

    {/* <EventComp2/> */}

    {/* <EnterKeyInput/> */}

    <EventBubbleCapture />
    </>
  );
}

export default App;
