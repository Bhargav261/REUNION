import React from 'react';

const Input = ({ type, name, value, label, onChange, required, ...rest }) => {
    return (
        <>
            {
                (type == "text" || type == "number") && (
                    <>
                        <div className="floating">
                            <input type={type} name={name} className="form-control" id={label} value={value} onChange={onChange} placeholder={label} required={required} {...rest} />
                            <label htmlFor={label}>{required ? (label + " *") : label}</label>
                        </div>
                    </>
                )
            }

            {
                (type == "searchBox") && (
                    <>
                        <div className="floating">
                            <input type={type} name={name} className="form-control" id={label} value={value} onChange={onChange} placeholder={label} required={required} {...rest} />
                            <label htmlFor={label}>{required ? (label + " *") : label}</label>
                        </div>
                    </>
                )
            }

            {
                (type == "checkbox") && (
                    <>
                        <div className="form-check">
                            <input className="form-check-input" name={name} checked={value} onChange={onChange} type={type} id={name} {...rest} required={required}  />
                            <label className="form-check-label" htmlFor={name}>
                                {label}
                            </label>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Input;