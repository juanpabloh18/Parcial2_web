import React, { useState, useEffect } from 'react';
import Modal from '../componentes/Modal';

const Informacion = () => {
  const [productos, setProductos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [busqueda, setBusqueda] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json();
      console.log(result);
      setProductos(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = (producto) => {
    setSelectedProduct(producto);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  const productosFiltrados = productos.filter((producto) => {
    return producto.id.toString().includes(busqueda);

  });

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <h1 className="display-1 fw-bold mb-4">Lista de Productos</h1>
      <div className="w-100">
        <div className="d-grid gap-2">
          <input
            type="text"
            value={busqueda}
            onChange={handleBusquedaChange}
            placeholder="Buscar por ID"
          />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center mt-5">
        {productosFiltrados.map((producto, index) => (
          <div key={index} className="col">
            <div className="card h-100" onClick={() => openModal(producto)}>
              <img
                src={producto.image}
                className="card-img-top img-fluid mx-auto d-block mx-3 my-3"
                alt={`Imagen ${index}`}
                style={{ minHeight: "100px", minWidth: "100px", maxHeight: "200px", maxWidth: "100px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">Precio: ${producto.price}</p>
                <p className="card-text">ID Producto: {producto.id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        title={selectedProduct ? selectedProduct.title : ''}
        description={selectedProduct ? selectedProduct.description : ''}
        category={selectedProduct ? selectedProduct.category : ''}
      />
    </div>
  );
};

export default Informacion;
