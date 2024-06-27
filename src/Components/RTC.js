import React, { useEffect, useRef, useState } from 'react';
import DailyIframe from '@daily-co/daily-js';

const TranscriptionService = () => {
  const callEl = useRef(null);
  const [callFrame, setCallFrame] = useState(null);
  const [transcripts, setTranscripts] = useState([]);

  useEffect(() => {
    const frame = DailyIframe.createFrame(callEl.current, {
      iframeStyle: { width: '100%', height: '100%' }
    });

    frame.join({
      url: 'https://your123.daily.co/apvK88WEzzY1eQiShrP8',
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvIjp0cnVlLCJkIjoiMjA3NzgzMmItM2ZkMS00YzJjLWExYTYtMGU4ZGFiOTZkNzMwIiwiaWF0IjoxNzE5NDMxNjQzfQ.aUdrtO-wxxwG6ZyEAaeiqPXt3NjhsY8h6etZrTXfZB0"
    });

    frame.on('app-message', (message) => {
      if (message?.fromId === 'transcription' && message.data?.is_final) {
        setTranscripts(prevTranscripts => [
          ...prevTranscripts,
          //${message.data.user_name}: ${message.data.text}
        ]);
      }
    });

    setCallFrame(frame);

    return () => {
      frame.leave();
    };
  }, []);

  const startTranscription = () => {
    callFrame.startTranscription();
    setTranscripts(prevTranscripts => [...prevTranscripts, "Transcription started"]);
  };

  const stopTranscription = () => {
    callFrame.stopTranscription();
    setTranscripts(prevTranscripts => [...prevTranscripts, "Transcription stopped"]);
  };

  return (
    <div style={{ margin: 0, fontFamily: 'Arial, sans-serif', backgroundColor: 'black', color: 'white' }}>
      <div ref={callEl} style={{ width: '100%', height: '56vw', position: 'relative' }}></div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <button onClick={startTranscription} style={{ padding: '10px 20px', fontSize: '16px', border: 'none', cursor: 'pointer', margin: '0 10px', borderRadius: '5px', backgroundColor: 'green', color: 'white' }}>
          Start transcription
        </button>
        <button onClick={stopTranscription} style={{ padding: '10px 20px', fontSize: '16px', border: 'none', cursor: 'pointer', margin: '0 10px', borderRadius: '5px', backgroundColor: 'red', color: 'white' }}>
          Stop transcription
        </button>
      </div>
      <div style={{ margin: '20px', padding: '20px', backgroundColor: '#333', borderRadius: '10px' }}>
        {transcripts.map((transcript, index) => (
          <p key={index} style={{ margin: '0 0 10px' }}>{transcript}</p>
        ))}
      </div>
    </div>
  );
};

export default TranscriptionService;


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Transcription Service</title>
//     <style>
//         body {
//             margin: 0;
//             font-family: Arial, sans-serif;
//             background-color: black;
//             color: white;
//         }
//         #call {
//             width: 100%;
//             height: 56vw;
//             position: relative;
//         }
//         #controls {
//             display: flex;
//             justify-content: center;
//             margin: 20px 0;
//         }
//         #controls button {
//             padding: 10px 20px;
//             font-size: 16px;
//             border: none;
//             cursor: pointer;
//             margin: 0 10px;
//             border-radius: 5px;
//         }
//         #start {
//             background-color: green;
//             color: white;
//         }
//         #stop {
//             background-color: red;
//             color: white;
//         }
//         #transcript {
//             margin: 20px;
//             padding: 20px;
//             background-color: #333;
//             border-radius: 10px;
//         }
//         #transcript p {
//             margin: 0 0 10px;
//         }
//     </style>
// </head>
// <body>
//     <div id="call"></div>
//     <div id="controls">
//         <button id="start">Start transcription</button>
//         <button id="stop">Stop transcription</button>
//     </div>
//     <div id="transcript"></div>
//     <script crossorigin src="https://unpkg.com/@daily-co/daily-js"></script>
//     <script>
//         const callEl = document.querySelector('#call');
//         const callFrame = DailyIframe.createFrame(callEl, {
//             iframeStyle: { width: '100%', height: '100%' }
//         });

//         callFrame.join({
//             url: 'https://your123.daily.co/apvK88WEzzY1eQiShrP8',
//             token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvIjp0cnVlLCJkIjoiMjA3NzgzMmItM2ZkMS00YzJjLWExYTYtMGU4ZGFiOTZkNzMwIiwiaWF0IjoxNzE5NDMxNjQzfQ.aUdrtO-wxxwG6ZyEAaeiqPXt3NjhsY8h6etZrTXfZB0"
//         });

//         document.querySelector('#start').addEventListener('click', () => {
//             callFrame.startTranscription();
//             const p = document.createElement('p');
//             p.textContent = "Transcription started";
//             document.querySelector('#transcript').appendChild(p);
//         });

//         document.querySelector('#stop').addEventListener('click', () => {
//             callFrame.stopTranscription();
//             const p = document.createElement('p');
//             p.textContent = "Transcription stopped";
//             document.querySelector('#transcript').appendChild(p);
//         });

//         callFrame.on('app-message', message => {
//             if (message?.fromId === 'transcription' && message.data?.is_final) {
//                 const p = document.createElement('p');
//                 p.textContent = message.data.user_name + ": " + message.data.text;
//                 document.querySelector('#transcript').appendChild(p);
//             }
//         });
//     </script>
// </body>
// </html>