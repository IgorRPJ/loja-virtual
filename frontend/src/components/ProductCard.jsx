import React, { useState } from 'react';

function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  
  const imageUrl = product.image || 'https://via.placeholder.com/150?text=Sem+Imagem';

  return (
    <div className="card h-100 border-0 shadow-sm product-card-hover">
      <img src={imageUrl} className="card-img-top p-3" alt={product.name} style={{ height: '180px', objectFit: 'contain' }} />
      <div className="card-body text-center d-flex flex-column">
        <h6 className="card-title fw-bold">{product.name}</h6>
        <p className="card-text small text-muted flex-grow-1">{product.description}</p>
        <p className="fw-bold text-dark mb-2">R$ {product.price}</p>
        <div className="d-flex gap-2">
          <input type="number" className="form-control form-control-sm w-25" value={quantity} onChange={(e ) => setQuantity(parseInt(e.target.value) || 1)} min="1" />
          <button className="btn btn-primary btn-sm w-75" onClick={() => { onAddToCart(product, quantity); setQuantity(1); }}>
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
