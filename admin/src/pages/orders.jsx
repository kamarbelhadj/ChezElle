import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({token}) => {
  const [orders, setOrders] = useState([]);
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
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/order/status',
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
        toast.error('An error occurred');
      }
    }
  };
  
  useEffect(() => {
    fetchAllOrders();
  }, [token]);
  return (
    <div>
      <h3>Order page</h3>
      <div>
        {orders.map((order, index) => (
          <div className="grid grid-cols-1 sm:grid-cols[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700  " key={index}>
            <img className="w-12" src={assets.parcel_icon} alt="" />
            <div>
              <div>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return (
                      <p className="py-0.5" key={index}>
                        {item.name} x {item.quantity} <span>{item.size}</span>
                      </p>
                    );
                  } else {
                    return (
                      <p  className="py-0.5" key={index}>
                        {item.name} x {item.quantity} <span>{item.size}</span>,
                      </p>
                    );
                  }
                })}
              </div>
              <p className="mt-3 mb-2 font-medium">{order.addresse.firstName + " " + order.addresse.lastName}</p>
              <div>
                <p>{order.addresse.street + ","}</p>
                <p>
                  {order.addresse.city +
                    ", " +
                    order.addresse.state +
                    ", " +
                    order.addresse.country +
                    ", " +
                    order.addresse.zipCode}
                </p>
              </div>
              <p>{order.addresse.phone}</p>
            </div>
            <div>
              <p className="text-sm sm:text-[-15px]">Items : {order.items.length}</p>
              <p className="mt-3">Method : cash on delivery</p>
              <p>Paymenet : {order.payment ? 'done':'pending'}</p>
              <p>Date : {new Date(order.date).toLocaleDateString('fr-FR')}</p>
            </div>
            <p className="text-sm sm:text-[-15px] items-center">{currency}{order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className="p-2 font-semibold" >
              <option value="Order placed">Order placed</option>
              <option value="confirmed">confirmed</option>
              <option value="shipped">shipped</option>
              <option value="on  delivery">on  delivery</option>
              <option value="delivered">delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
