import React from 'react';
import { isMatchText } from '../../../components/componentUtils';

const TextArea = ({ data }) => {
  const {
    id,
    name,
    className,
    placeholder,
    value = '',
    rows,
    cols,
    pattern,
    disabled,
    readOnly,
    maxlength,
    onBlur = () => {},
    onFocus = () => {},
    onChange = () => {},
  } = data;

  const handleChange = (e, id, value) => {
    if (pattern) {
      if (isMatchText(pattern, value)) {
        onChange(e, id, value);
        return;
      }
    }

    onChange(e, id, value);
  };

  return (
    <textarea
      id={id}
      name={name}
      className={className}
      placeholder={placeholder}
      value={value}
      rows={rows}
      cols={cols}
      disabled={disabled}
      readOnly={readOnly}
      maxLength={maxlength}
      onBlur={e => onBlur(e, id, e.target.value)}
      onFocus={e => onFocus(e, id, e.target.value)}
      onChange={e => handleChange(e, id, e.target.value)}
    />
  );
};

export default TextArea;
