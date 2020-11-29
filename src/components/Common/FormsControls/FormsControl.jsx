import React from 'react';
import st from './FormsControl.module.css';

//draw a component looking for which input we need
export const FormControl = (props) => {
    const hasError = props.meta.touched && props.meta.error;

    return (
        <div className={ `${ st.formControl } ${ hasError? st.error: "" }` }>
            <div>
                { props.children }
            </div>
            { hasError && <span>{ props.meta.error }</span> }
        </div>
    )
}
//draw textarea container
export const Textarea = ({ input, meta, ...props }) => {
    return <FormControl meta={ meta }><textarea {...input} {...props} /></FormControl>
}
//draw input container
export const Input = ({ input, meta, ...props }) => {
    return <FormControl meta={ meta }><input {...input} {...props} /></FormControl>
}