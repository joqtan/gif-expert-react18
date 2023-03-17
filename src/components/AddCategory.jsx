import { useState } from 'react';

function AddCategory({ onAddCategory }) {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (e) => {
        setInputValue(e?.target?.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue?.trim()?.length < 3) return;
        onAddCategory(inputValue?.trim());
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Search gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
}

export default AddCategory;
