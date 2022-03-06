import React from 'react';

const Input = ({ type, name, id, value, label, onChange, required, ...rest }) => {
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
                        <input type={type} name={name} className="search-form-control" id={label} value={value} onChange={onChange} placeholder={label} required={required} {...rest} />
                        {
                            value ? <i className='fa fa-times searchIcon cursor-pointer'></i> : <i className='cursor-pointer fa fa-search searchIcon'></i>
                        }
                        {/* <div className="floating">
                            <input type={type} name={name} className="form-control" id={label} value={value} onChange={onChange} placeholder={label} required={required} {...rest} />
                            <label htmlFor={label}>{required ? (label + " *") : label}</label>
                        </div> */}
                    </>
                )
            }

            {
                (type == "checkbox") && (
                    <>
                        {/* <div className="form-check align-items-center">
                            <input className="form-check-input" name={name} checked={value} onChange={onChange} type={type} id={name} {...rest} required={required} />
                            <label className="form-check-label" htmlFor={name}>
                                {label}
                            </label>
                        </div> */}

                        <label htmlFor={id} className="form-check-label">
                            <input id={id} type="checkbox" role="checkbox" className="form-check-input" /><span className="custom">{label}</span>
                        </label>
                    </>
                )
            }
        </>
    )
}

export default Input;