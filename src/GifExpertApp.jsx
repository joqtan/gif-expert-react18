import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

function GifExpertApp() {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (inputValue) => {
        if(categories.includes(inputValue)) return;
        setCategories((cats) => [inputValue, ...cats]);
    };

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory onAddCategory={onAddCategory}/>
            {categories?.map((cat) => <GifGrid key={cat} category={cat}/>)}
        </>
    );
}

export default GifExpertApp;
