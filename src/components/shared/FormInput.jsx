import React from 'react';

const FormInput = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default FormInput;
