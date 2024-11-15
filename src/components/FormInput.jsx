
export const FormInput = ({label, required, id, name: name_, ref})=> {
    
    let name = name_ || id;

    return (
        <div className="form-input-wrapper">
            <label htmlFor={id}>
                
                {

                    required 
                    ? 
                    <span className="red">*</span> 
                    : 
                    null
                
                }
                {label}
            </label>
            <input aria-label={name} ref={ref} name={id} id={id} type="text" />
        </div>
    )
}