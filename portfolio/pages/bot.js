import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

function bot() {
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Basically chat history between bot and the user
  const [messages, setMessages] = useState([
    {
      message: 'Hi, what would you like to learn about Colin Le?',
      type: 'api',
    },
    {
      message: 'Test 1',
      type: 'user'
    },
    {
      message: 'Test 1',
      type: 'user'
    },
    {
      message: 'Test 1',
      type: 'user'
    },
    {
      message: 'Test 1',
      type: 'user'
    },
    {
      message: 'Test 1',
      type: 'user'
    }
  ,])

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
  }, [messages]);

  async function handleSubmit(e){
    e.preventDefault()

    setError(null)

    if (!input)
    {
      alert("Please input a question!")
      return
    }

    const question = input.trim()

    setMessages((state) = [...state, {message: question, type: "user"}])
    setLoading(true)
    setInput("")

    try {
      const response = await axios.post('/api/respond', {
        question,
        history
      })

      const data = response.data
      
      if (data?.error){
        setError(data.error)
      }
      else{
        setMessages((state) => [...state, {message: data.text, type:'api'}])
        setHistory((state) => [...state, [question, data.text]])
      }

      setLoading(false)

      messagesRef.current?.scrollTo(0, messagesRef.current.scrollHeight);
      
    }
    catch(error)
    {
      setLoading(false)
      setError("Error. Please try again!")
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
    <div className='h-screen'>
      <Link href={"/"}>
        <div className='flex hover:-translate-y-1 transition-transform cursor-pointer pt-3 pl-3'>
          <span className="mr-1 text-transparent bg-clip-text bg-gradient-to-b from-sky-600 to-purple-700">
            <i className="fa-solid fa-angles-left"></i>
          </span>
          <p className="text-black">
                <strong>
                  Home
                </strong>
              </p>
        </div>
      </Link>
      <h1 className='w-fit m-auto text-2xl lg:text-3xl xl:text-4xl text-center my-5'>
          ProfiLeAI
          <hr className='h-1 mx-auto my-2 bg-gradient-to-b from-sky-600 to-purple-700 border-0 rounded'></hr>
      </h1>
      {/* The Chat */}
      <div className='flex flex-col justify-between items-center h-3/4'>
        {/* The Messages Container */}
        <div className='h-3/4 w-3/4 rounded-md border-gray-200 border-2 flex justify-center items-center'>
          {/* The Messages */}
          <div className='w-full h-full overflow-auto bg-transparent' ref={messagesRef}>
            {
              messages.map((message, index) => {
                if (message.type === 'api')
                {
                  return(
                    <div key={index} className='flex p-4 bg-gray-200 rounded-sm'>
                      <span className="text-transparent bg-clip-text bg-gradient-to-b from-sky-600 to-purple-700 h-10 w-10">
                        <i className="fa-solid fa-robot"></i>
                      </span>
                      <div className=''>
                        <p>{message.message}</p>
                      </div>
                    </div>
                  )
                }
                else
                {
                  return(
                    <div key={index} className='flex p-4'>
                      <span className="text-transparent bg-clip-text bg-gradient-to-b from-sky-600 to-purple-700 h-10 w-10">
                        <i className="fa-solid fa-user"></i>
                      </span>
                      <div>
                        <p>{message.message}</p>
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
        {/* The Input Container */}
        <div className='h-1/6 w-3/4 rounded-md border-gray-200 border-2'>
        </div>
      </div>
    </div>
  )
}
export default bot