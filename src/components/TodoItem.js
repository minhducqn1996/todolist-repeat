import React from 'react';
import PropTypes from 'prop-types';
// import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';

TodoItem.propTypes = {
    itemform: PropTypes.object,
    keyform: PropTypes.number,
    handleDeleteForm: PropTypes.func,
    handleEditForm: PropTypes.func,
}

TodoItem.defaultProps = {
    itemform: null,
    keyform: null,
    handleDeleteForm: null,
    handleEditForm: null,
}

function TodoItem(props) {
    const { itemform, keyform, handleDeleteForm, handleEditForm } = props;

    const handleDelete = (keyValue) => {
        if (!handleDeleteForm) return;
        handleDeleteForm(keyValue);
    }

    const handleEdit = (keyform, nameValue) => {
        if (!handleEditForm) return;
        handleEditForm(keyform, nameValue);
        // <TodoForm nameValueEditToForm={nameValue} keyValueEditToForm={keyform} />
    }

    return (
        <div>
            <div key={keyform}> {itemform.name} </div>
            <button
                onClick={() => handleDelete(keyform)}
            >
                X
            </button>
            <button
                onClick={() => handleEdit(keyform, itemform.name)}
            >
                Edit
            </button>
        </div>
    );
}

export default TodoItem;