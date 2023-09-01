import React from 'react'
import { useState } from 'react';
//acá apunto al archivo de barrioñ, puedo omitir el index en la ruta
import { AddCategory,GifGrid } from './components';

//GifExpert es el componente general (El más grande)

export const GifExpert = () => {
  const [categories, setCategories] = useState(['HAPPY'])
  const onAddCategory = (newCategory) => {
    //console.log(newCategory);
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
    //Otra forma setCategories(cat=>[...cat,'Valorant'])
  }

  return (
    <>
      {/* Listado de Gifs */}
        {categories.map(category => (
          <GifGrid key={category} category={category} />
        )
        )}
      {/* Gif Item */}

      {/* Título */}
      <h1>Searcher</h1>

      {/* Input */}
      <AddCategory
        onNewCategory={onAddCategory}
      //setCategories={setCategories}
      />
    </>
  )
}
