import React, { useState } from 'react';
import React, { useState } from 'react';



const listaFavoritos = () => {
  const [store, setStore] = useState({ listaFavoritos: [] });
  const [inputValue, setInputValue] = useState('');

  const obtenerFavorito = () => {
    if (inputValue.trim()) {
      setStore((prevStore) => ({
        ...prevStore,
        listaFavoritos: [...prevStore.listaFavoritos, inputValue]
      }));
      setInputValue('');
    }
  };

  const borrarFavorito = (index) => {
    setStore((prevStore) => ({
      ...prevStore,
      listaFavoritos: prevStore.listaFavoritos.filter((_, i) => i !== index)
    }));
  };

  return (
    <div>
      <h2>Favoritos</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Añadir nuevo favorito"
      />
      <button onClick={addFavorite}>❤️</button>
      <ul>
        {store.listaFavoritos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => borrarFavoritos(index)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default listaFavoritos;