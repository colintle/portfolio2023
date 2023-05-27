import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

function MiniBot() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [incoming, setIncoming] = useState( { type: "api", message: "" });
  const [newMessage, setNewMessage] = useState( { type: "api", message: "" } );

  // Basically chat history between bot and the user
  const [messages, setMessages] = useState([
    {
      message: 'Hi, what would you like to know about Colin Le?',
      type: 'api',
    }])

  // Use to send to "/api/respond"
  const [history, setHistory] = useState([])
  
  const messagesRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const messageList = messagesRef.current;
    if (messageList) {
      messageList.scrollTop = messageList.scrollHeight;
    }
  }, [messages, incoming]);

  useEffect(() => {
      setNewMessage(incoming);
  }, [incoming])

  useEffect(() => {
      if (newMessage.message) {
          setMessages((prevMsgs) => [...prevMsgs, newMessage]);
      }
  }, [loading])

  async function handleSubmit(e){
    e.preventDefault()

    setError(null)

    if (!input)
    {
      alert("Please input a question!")
      return;
    }

    const question = input.trim();

    setMessages((state) => [...state, { message: question, type: "user" }]);

    setLoading(true)
    setInput("")
    setIncoming( { type: "api", message: "" });
    try {
      const response = await fetch("/api/langchain", {
        method: 'POST',
        body: JSON.stringify({ question: question, history: history }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const reader = response.body.getReader();
  
      while (true) {
        const { done, value } = await reader.read();
  
        if (done) {
          break;
        }
  
        const text = new TextDecoder().decode(value);
        setIncoming( ({ type, message }) => ({ type, message: message + text }));
      }
      setLoading(false);
      setIncoming( { type: "api", message: "" });
    } 
    catch (error) {
      setLoading(false);
      setError("Error. Please try again!");
    }
  }

  function handleEnter(e){
    if (e.key === 'Enter' && input){
      handleSubmit(e)
    }
    else if (e.key === 'Enter')
    {
      e.preventDefault();
    }
  }


  return (
    <div className='bg-white h-full animate__animated animate__fadeIn animate__slow rounded-xl border-4 border-purple-700'>
      <h1 className='w-fit m-auto text-2xl lg:text-3xl xl:text-4xl text-center my-2'>
          ProfiLeAI
          <hr className='h-1 mx-auto my-2 bg-gradient-to-b from-sky-600 to-purple-700 border-0 rounded'></hr>
      </h1>
      {/* The Chat */}
      <div className='flex flex-col justify-between items-center h-3/4'>
        {/* The Messages Container */}
        <div className='h-3/4 w-5/6 rounded-md border-gray-200 border-2 flex justify-center items-center'>
          {/* The Messages */}
          <div id="messages" className='w-full h-full overflow-auto bg-transparent' ref={messagesRef}>
            {
              messages.map((message, index) => {
                if (message.type === 'api')
                {
                  return(
                    <div key={index} className='flex justify-evenly bg-gray-200 py-3'>
                        <span className="bg-gradient-to-b from-sky-600 to-purple-700 h-7 w-7 text-md text-white rounded-lg flex justify-center items-center">
                            <i className="fa-solid fa-robot"></i>
                        </span>
                        <div className='w-3/4 text-sm'>
                            <p className='text-ellipsis overflow-hidden'>{message.message}</p>
                        </div>
                    </div>
                  )
                }
                else
                {
                  return(
                    <div key={index} className='flex justify-evenly py-3'>
                        <span className="bg-gradient-to-b from-sky-600 to-purple-700 h-7 w-7 text-md text-white rounded-lg flex justify-center items-center">
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <div className='w-3/4 text-sm'>
                            <p className='text-ellipsis overflow-hidden'>{message.message}</p>
                        </div>
                    </div>
                  )
                }
              })
            }
            {
              loading &&
              <div className='flex justify-evenly bg-gray-200 py-3'>
                <span className="bg-gradient-to-b from-sky-600 to-purple-700 h-7 w-7 text-md text-white rounded-lg flex justify-center items-center">
                  <i className="fa-solid fa-robot"></i>
                </span>
                <div className='w-3/4 text-sm'>
                  <p className='text-ellipsis overflow-hidden'>{incoming.message}</p>
                </div>
              </div>
            }
          </div>
        </div>
        {/* The Input Container */}
        <div className='w-5/6 rounded-md border-gray-200 border-2 relative'>
          <form
            onSubmit={handleSubmit}
            className='flex justify-center items-center text-sm'>
            <textarea
              disabled={loading}
              onKeyDown={handleEnter}
              ref={inputRef}
              autoFocus={false}
              rows={1}
              maxLength={512}
              id="input"
              name="input"
              placeholder={
                loading ? 'Waiting for response...'
                : 'Give a brief description of Colin Le.'
              }
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='w-full p-4 pr-10 resize-none focus:outline-none rounded-md'
            >
            </textarea>
            <button
              type="submit"
              disabled={loading}
              className={`absolute right-3 hover:-translate-y-1 transition-transform cursor-pointer ${loading ? "animate-spin" : ""}`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-sky-600 to-purple-700 h-7 w-7 text-xl flex justify-center items-center">
                {!loading ? (
                  <i className="fa-solid fa-paper-plane"></i>
                ) : (
                  <i className="fa-solid fa-spinner"></i>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default MiniBot