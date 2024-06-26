import PropTypes from 'prop-types';

InputField.propTypes={
  type:PropTypes.string,
  placeholder:PropTypes.string,
  name:PropTypes.string,
  onChange:PropTypes.func,
  value:PropTypes.any,
}

export default function InputField({type,placeholder,name,onChange,value}) {
  return (
    <input
        className="rounded-lg w-full px-4 py-4 bg-gray-100 focus:outline-none"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        required
    />
  )
}
