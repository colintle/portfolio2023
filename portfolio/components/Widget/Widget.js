import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Widget({icon}) {
  let color;

  if (icon.color == 'red')
  {
    color = `relative rounded-xl shadow-2xl bg-gradient-to-b from-red-400 to-red-500 flex items-center justify-center h-12 w-12 transition duration-300 transform hover:-translate-y-2`;
  }
  else if (icon.color == 'blue')
  {
    color = `relative rounded-xl shadow-2xl bg-gradient-to-b from-blue-400 to-blue-500 flex items-center justify-center h-12 w-12 transition duration-300 transform hover:-translate-y-2`;
  }
  else if (icon.color == 'green')
  {
    color = `relative rounded-xl shadow-2xl bg-gradient-to-b from-green-400 to-green-500 flex items-center justify-center h-12 w-12 transition duration-300 transform hover:-translate-y-2`;
  }
  else if (icon.color == 'yellow')
  {
    color = `relative rounded-xl shadow-2xl bg-gradient-to-b from-yellow-400 to-yellow-500 flex items-center justify-center h-12 w-12 transition duration-300 transform hover:-translate-y-2`;
  }

  return (
    <div className="flex items-center justify-center mx-3 my-3">
      <div className={color}>
        <FontAwesomeIcon icon={icon.icon} className='text-white text-3xl drop-shadow-2xl'/> 
      </div>
    </div>
  );
}


export default Widget