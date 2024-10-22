import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderDetails = () => {
  const location = useLocation();
  const { order } = location.state; 

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Détails de la commande</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {order.items.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden p-4 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <img 
              className="w-full h-50 object-cover mb-4 rounded-md" 
              src={item.images[0]} // Show only the first image
              alt={item.name} 
            />
            <p className="text-gray-700 mb-1">Quantity: <span className="font-medium">{item.quantity}</span></p>
            <p className="text-gray-700">Size: <span className="font-medium">{item.size}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;
