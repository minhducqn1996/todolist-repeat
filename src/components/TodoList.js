import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

TodoList.propTypes = {
    todoListForm: PropTypes.array,
    handleDeleteForm: PropTypes.func,
    handleEditForm: PropTypes.func,
    nameValueEditToForm: PropTypes.string,
    keyValueEditToForm: PropTypes.number,
};

TodoList.defaultProps = {
    todoListForm: [],
    handleDeleteForm: null,
    handleEditForm: null,
    nameValueEditToForm: null,
    keyValueEditToForm: null,
}

function TodoList(props) {
    const { todoListForm, handleDeleteForm, handleEditForm, nameValueEditToForm, keyValueEditToForm } = props;

    console.log(nameValueEditToForm, keyValueEditToForm);

    if (!todoListForm) return;

    const rendeMapData = todoListForm.map((item, key) =>
        <TodoItem
            key={key}
            itemform={item}
            keyform={key}
            handleDeleteForm={handleDeleteForm}
            handleEditForm={handleEditForm}
        />
    )

    return (
        <div>
            {rendeMapData}
        </div>
    );
}

export default TodoList;