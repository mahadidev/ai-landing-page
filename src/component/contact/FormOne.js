import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";
import { FiType } from "react-icons/fi";
import { BsFillSendFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Result = () => {
  return (
    <Alert variant="success" className="success-msg">
      Your Message has been successfully sent.
    </Alert>
  );
};

const FormOne = () => {
  const form = useRef();
  const [result, showresult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yj5dgzp",
        "template_hfduayo",
        form.current,
        "WLENsTkBytC0yvItS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    showresult(true);
  };

  const conversationAreaRef = useRef();
  const messageInputRef = useRef();
  const [messages, setMessages] = useState([]);
  const [messageItems, setMessageItems] = useState([
    <div className="conversation-item right">
      <div className="conversation-message">Hey, Let's start...</div>
    </div>,
    <div className="conversation-item">
      <div className="conversation-avatar">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 496 512"
          height="2em"
          width="2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
        </svg>
      </div>
      <div className="conversation-message">
        Awesome! How can i assist you today?
      </div>
    </div>,
    <div className="conversation-item right">
      <div className="conversation-message">Can you read PDF?</div>
    </div>,
    <div className="conversation-item">
      <div className="conversation-avatar">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 496 512"
          height="2em"
          width="2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
        </svg>
      </div>
      <div className="conversation-message">Yes I can read pdf.</div>
    </div>,
  ]);
  const [isTyping, setTyping] = useState(false);

  const addAiReply = (message) => {
    const elm = (
      <div className="conversation-item">
        <div className="conversation-avatar">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 496 512"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
          </svg>
        </div>
        <div className="conversation-message">{message}</div>
      </div>
    );
    setMessageItems((prevElm) => [...prevElm, elm]);

    const messageObj = { role: "user", content: message };
    setMessages((prevElm) => [...prevElm, messageObj]);
  };

  const addUserReply = (message) => {
    const elm = (
      <div className="conversation-item right">
        <div className="conversation-message">{message}</div>
      </div>
    );
    setMessageItems((prevElm) => [...prevElm, elm]);

    const messageObj = { role: "user", content: message };
    setMessages((prevElm) => [...prevElm, messageObj]);
  };

  const sendMessage = () => {
    // show typing
    setTyping(true);

    // api conf
    const apiEndPoint = "https://api.openai.com/v1/chat/completions";
    const secretKey = "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";

    const message = messageInputRef.current.value;
    if (message.length > 0) {
      // if has message
      addUserReply(message);
      // send post request to chat gpt
      axios
        .post(
          apiEndPoint,
          {
            model: "gpt-3.5-turbo",
            messages: [
              ...messages,
              {
                role: "user",
                content: message,
              },
            ],
            max_tokens: 4000,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${secretKey}`,
            },
          }
        )
        .then((response) => {
          // answer
          var answer = response.data.choices[0].message.content;
          // hide typing
          setTyping(false);
          // add ai reply
          addAiReply(answer);

          // scroll to bottom
          setTimeout(() => {
            document.getElementById("chatBody").scrollTop =
              conversationAreaRef.current.scrollHeight;
          }, 200);
        })
        .catch((error) => {
          // hide typing
          setTyping(false);
          // add ai reply
          addAiReply("Something went wrong!");

          // scroll to bottom
          setTimeout(() => {
            document.getElementById("chatBody").scrollTop =
              conversationAreaRef.current.scrollHeight;
          }, 200);
        });
    } else {
      toast("🦄 Please type your message!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    // clear input value
    messageInputRef.current.value = "";
  };

  const onPressEnterKey = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="axil-contact-form">
      <div id="chatBody" className="chat-body">
        <div className="conversation-wrapper" ref={conversationAreaRef}>
          {/* conversation start */}
          {messageItems &&
            messageItems.map((item, index) => {
              return item;
            })}
          {isTyping && (
            <div className="conversation-item">
              <div className="conversation-avatar">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 496 512"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
                </svg>
              </div>
              <div className="conversation-message">typing...</div>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Write your message..."
            ref={messageInputRef}
            onKeyDown={onPressEnterKey}
          />
          <button className="subscribe-btn" type="button" onClick={sendMessage}>
            <BsFillSendFill />
          </button>
        </div>
      </div>
      {result ? (
        <div className="form-group">
          <Result />
        </div>
      ) : null}
    </div>
  );
};

export default FormOne;
