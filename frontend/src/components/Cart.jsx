import React from 'react';

function Cart({ items, onUpdateQuantity, onRemove, onCheckout }) {
  const total = items.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);

  return (
    <div className="card shadow-sm border-primary">
      <div className="card-header bg-primary text-white py-2">
        <h6 className="mb-0"><i class="bi bi-cart"></i> Carrinho</h6>
      </div>
      <div className="card-body p-2">
        {items.length === 0 ? (
          <p className="text-center text-muted small my-3">Seu carrinho está vazio.</p>
        ) : (
          <>
            <div className="cart-scroll-area">
              <ul className="list-group list-group-flush">
                {items.map(item => (
                  <li key={item.id} className="list-group-item px-1 py-2 border-bottom">
                    <div className="d-flex justify-content-between align-items-start mb-1">
                      <span className="fw-bold small text-truncate" style={{ maxWidth: '140px' }}>{item.name}</span>
                      <button onClick={() => onRemove(item.id)} className="btn btn-sm p-0 text-danger fw-bold" style={{ lineHeight: 1 }}>×</button>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-success small fw-bold">R$ {item.price}</span>
                      <input
                        type="number"
                        className="form-control form-control-sm p-1"
                        style={{ width: '50px', height: '25px', fontSize: '12px' }}
                        value={item.quantity}
                        onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
                        min="1"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-top mt-2 pt-2 px-1">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="small fw-bold">Total:</span>
                <span className="h6 mb-0 fw-bold text-primary">R$ {total.toFixed(2)}</span>
              </div>
              <button onClick={onCheckout} className="btn btn-success btn-sm w-100 fw-bold shadow-sm">Finalizar Compra</button>
            </div> {}
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
