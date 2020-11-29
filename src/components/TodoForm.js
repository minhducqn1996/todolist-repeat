import React, { useRef } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    // handleChangeForm: PropTypes.func,
    typeForm: PropTypes.string,
    onClickForm: PropTypes.func,
    nameValueEditToForm: PropTypes.string,
    keyValueEditToForm: PropTypes.number,
    keyform: PropTypes.func,
};

TodoForm.defaultProps = {
    // handleChangeForm: null,
    typeForm: null,
    onClickForm: null,
    nameValueEditToForm: null,
    keyValueEditToForm: null,
    keyform: null,
}

function TodoForm(props) {
    const { typeForm, onClickForm, nameValueEditToForm, keyValueEditToForm, keyform } = props;
    const inputRef = useRef();

    console.log('test', keyform);

    // const handleChange = (e) => {
    //     if (!handleChangeForm) return;
    //     handleChangeForm(e);
    // }

    console.log(nameValueEditToForm, keyValueEditToForm);

    const handleClick = (e) => {
        if (!onClickForm) return;
        const value = inputRef.current.value;
        onClickForm(e, value)
        inputRef.current.value = '';
    }

    const handleEdit = (nameValue) => {
        
    }

    return (
        <form>
            <input
                id='input'
                type='text'
                ref={inputRef}
            />
            <button
                onClick={handleClick}
            >
                {typeForm}
            </button>
        </form>
    );
}

export default TodoForm;