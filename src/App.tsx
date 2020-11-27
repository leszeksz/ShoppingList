import React, {useState} from 'react';
import './sass/main.scss';

import {Header} from "./components/Header";
import {NewItemForm} from "./components/NewItemForm";
import {Product} from "./models/Product";


function App() {
    const [items, setItems] = useState<Product[]>([]);

    const addProduct = (product: Product) => {
        setItems([...items, product]);
    }
  return (
    <div className="App">
      <Header/>
      <NewItemForm addProductFn = {addProduct}/>
    </div>
  );
}

export default App;
