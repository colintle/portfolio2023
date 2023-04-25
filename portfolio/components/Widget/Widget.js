import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Widget({icon}) {
  return (
    <div className="flex items-center justify-center mx-3 my-3">
      <div className={`relative rounded-xl shadow-2xl bg-gradient-to-b from-${String(icon.color)}-400 to-${String(icon.color)}-500 flex items-center justify-center h-12 w-12 transition duration-300 transform hover:-translate-y-2`}>
        <FontAwesomeIcon icon={icon.icon} className='text-white text-3xl drop-shadow-2xl'/> 
      </div>
    </div>
  );
}


export default Widget