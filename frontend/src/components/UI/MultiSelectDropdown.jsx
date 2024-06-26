import PropTypes from 'prop-types';

MultiSelectDropdown.propTypes={
  values:PropTypes.any
}

export default function MultiSelectDropdown({ values }) {
  return (
    <select className="rounded-lg w-full px-4 py-4 bg-gray-100 focus:outline-none" multiple={true}>
      {values?.map((data, index) => (
        <option key={index} value={data}>{data}</option>
      ))}
    </select>
  );
}
