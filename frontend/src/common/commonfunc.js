export const errorContainer = (form, field) => {
    return form.touched[field] && form.errors[field] ? <span className="error text-danger gap-1 mb-5 bg-body rounded">{form.errors[field]}</span> : null
}

export const formAttr = (form, field) => ({ onBlur: form.handleBlur, onChange: form.handleChange, value: form.values[field] })
