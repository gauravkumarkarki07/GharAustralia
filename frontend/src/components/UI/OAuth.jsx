import PropTypes from 'prop-types';
import FirebaseApiRequest from '../../services/firebase/FirebaseApiRequest.js';

export default function OAuth({...props}) {
  const{handleGoogleSignIn}=FirebaseApiRequest();
  return (
    <button
        type="button"
        onClick={handleGoogleSignIn}
        className="px-2 py-3 rounded-lg w-full text-gray-500 hover:brightness-75 font-poppins border"
        {...props}
    />
  )
}

OAuth.propTypes={
    onClick:PropTypes.func,
}
