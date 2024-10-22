import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        const sortedOrders = response.data.orders.sort((a, b) => new Date(b.date) - new Date(a.date));
        setOrders(sortedOrders);
        setFilteredOrders(sortedOrders); 
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleFilterChange = (event) => {
    const selectedStatus = event.target.value;
    setFilterStatus(selectedStatus);
    
    if (selectedStatus === "All") {
      setFilteredOrders(orders); // Show all orders if "All" is selected
    } else {
      const filtered = orders.filter((order) => order.status === selectedStatus);
      setFilteredOrders(filtered);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );

      if (response.data.success) {
        await fetchAllOrders();  
      }
    } catch (error) {
      console.log(error);

      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Une erreur s'est produite");
      }
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3>Order page</h3>

      {/* Filter Dropdown */}
      <div className="my-4">
        <label htmlFor="statusFilter">Filtrer par statut :</label>
        <select
          id="statusFilter"
          value={filterStatus}
          onChange={handleFilterChange}
          className="ml-2 p-2 border rounded"
        >
          <option value="All">Tout</option>
          <option value="Commande passée">Commande passée</option>
          <option value="Confirmé">Confirmé</option>
          <option value="À la livraison">À la livraison</option>
          <option value="Livré">Livré</option>
        </select>
      </div>

      {/* Display filtered orders */}
      <div>
        {filteredOrders.map((order, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700"
            key={index}
          >
            <Link to={`orderDetails/${order._id}`} state={{ order }}>
              <img className="w-12 cursor-pointer" src={assets.parcel_icon} alt="Order Details" />
            </Link>
            <div>
              <div>
                {order.items.map((item, index) => (
                  <p className="py-0.5" key={index}>
                    {item.name} x {item.quantity} <span>{item.size}</span>
                  </p>
                ))}
              </div>
              <p className="mt-3 mb-2 font-medium">{order.addresse.firstName + " " + order.addresse.lastName}</p>
              <div>
                <p>{order.addresse.street + ","}</p>
                <p>
                  {order.addresse.city + ", " + order.addresse.state + ", " + order.addresse.country + ", " + order.addresse.zipCode}
                </p>
              </div>
              <p>{order.addresse.phone}</p>
            </div>
            <div>
              <p className="text-sm sm:text-[-15px]">Items: {order.items.length}</p>
              <p className="mt-3">Méthode: paiement à la livraison</p>
              <p>Payment: {order.payment ? 'done' : 'pending'}</p>
              <p>Date: {new Date(order.date).toLocaleDateString('fr-FR')}</p>
            </div>
            <p className="text-sm sm:text-[-15px] items-center">{currency}{order.amount}</p>
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className="p-2 font-semibold"
            >
              <option value="Commande passée">Commande passée</option>
              <option value="Confirmé">Confirmé</option>
              <option value="À la livraison">À la livraison</option>
              <option value="Livré">Livré</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
