import React, { useState, useEffect } from "react";
import SendIcon from "@material-ui/icons/Send";

export default function MiddleSideBar() {
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    console.log(msg);
  }, [msg]);
  function submit() {
    if (input !== "") {
      setMsg([...msg, input]);
    }
    setInput("");
  }
  return (
    <div className="Chat">
      <div className="chat_header">
        <h2
          style={{
            margin: "0.5%"
          }}
        >
          Ross
        </h2>
      </div>
      <div className="chat_body">
        <div>
          <div className="chat_body_msg_rx">
            <span className="chat_body_msgs_rx">
              Hola
              <span style={{ fontSize: "10px" }}></span>
            </span>
          </div>
        </div>
        {msg.map((k, index) => (
          <div>
            <div className="chat_body_msg_sender">
              <span className="chat_body_msgs_sender">
                {k}

                <span style={{ fontSize: "10px" }}></span>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="chat_footer">
        <div className="chat_footer_contents">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            width="100%"
            type="text"
            placeholder="Type messege...."
            border="none"
            outline="none"
            className="chat_footer_contents"
          />
          <SendIcon onClick={submit} />
        </div>
      </div>
    </div>
  );
}
