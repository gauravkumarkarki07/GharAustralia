import PropTypes from 'prop-types';

SelectDropdown.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any, // Value is optional if you want to control it externally
  onChange: PropTypes.func.isRequired,
};

export default function SelectDropdown({ values, name, value, onChange }) {
  return (
    <select
      className="rounded-lg w-[250px] px-4 py-4 bg-gray-100 focus:outline-none"
      value={value} // Ensure you're passing the correct value here
      onChange={(e) => onChange({ target: { name, value: e.target.value } })}
      name={name}
    >
      {values?.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
