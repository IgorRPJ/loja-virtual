import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';

function Shop() {
  const [products, setProducts] = useState([]);

  // Inicia o carrinho com o que estiver no LocalStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Salva no LocalStorage toda vez que o carrinho mudar
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);

  const addToCart = (product, quantity) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      return [...prev, { ...product, quantity }];
    });
  };

  return (
    <div className="bg-light min-vh-100 pb-5">
      <nav className="navbar navbar-dark bg-primary mb-4 shadow-sm">
        <div className="container"><span className="navbar-brand fw-bold"><i class="bi bi-cart"></i> Minha Loja</span></div>
      </nav>

      <div className="container">
        <div className="row">
          {/* Coluna de Produtos: 4 por linha (col-md-3) */}
          <div className="col-lg-9">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
              {products.map(p => (
                <div className="col" key={p.id}>
                  <ProductCard product={p} onAddToCart={addToCart} />
                </div>
              ))}
            </div>
          </div>

          {/* Coluna do Carrinho */}
          <div className="col-lg-3">
            <div className="sticky-top" style={{ top: '20px' }}>
              <Cart items={cart} onUpdateQuantity={
                (id, q) => setCart(
                  prev => prev.map(
                    item => item.id === id ? { ...item, quantity: Math.max(1, q) } : item))
                    } onRemove={(id) => setCart(prev => prev.filter(item => item.id !== id))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
