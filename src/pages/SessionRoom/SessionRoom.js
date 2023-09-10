import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import "./style.css";

function SessionRoom(props) {
  localStorage.setItem(
    "session-token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI3NzYxOTEsImlzcyI6ImRldmtleSIsIm5hbWUiOiJPbWFyIiwibmJmIjoxNjkyNjg5NzkxLCJzdWIiOiJPbWFyIiwidmlkZW8iOnsicm9vbSI6Im15LWZpcnN0LXJvb20iLCJyb29tQ3JlYXRlIjp0cnVlLCJyb29tSm9pbiI6dHJ1ZX19.H9bgCQRDP44deZzGhpwcz5GOmiRnME7mruDt8arRD9g"
  );

  return (
    <main data-lk-theme="default">
      <LiveKitRoom
        token={localStorage.getItem("session-token")}
        serverUrl="ws://192.168.43.7:7880/"
        connect={true}
      >
        <VideoConference />
      </LiveKitRoom>
    </main>
  );
}

export default SessionRoom;
