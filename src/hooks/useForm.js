import { useState } from 'react';

export const useForm = ( initialForm = {},formValidations={} ) => {
  
    const [ formState, setFormState ] = useState( initialForm);
    const [ formValidations, setFormValidations ] = useState({});

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        const formCheckedValues = {};

        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[ formField ];
            formCheckedValues[ `${ formField }Valid` ] = fn( formState[ formField ] ) ? true : errorMessage;
        }

        setFormValidations( formCheckedValues );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}