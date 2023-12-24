import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
  const orders = [
    { id: "order1", status: "Processing", qty: 23, amount: 2132, paymentMethod: "COD" },
    { id: "order2", status: "Processing", qty: 20, amount: 1800, paymentMethod: "Credit Card" },
    { id: "order3", status: "Delivered", qty: 15, amount: 1500, paymentMethod: "PayPal" },
    { id: "order4", status: "Shipped", qty: 18, amount: 1980, paymentMethod: "Credit Card" },
    { id: "order5", status: "Processing", qty: 25, amount: 2350, paymentMethod: "COD" },
    //This is added by me according to the brief 
    { id: "order6", status: "Processing", qty: 23, amount: 2132, paymentMethod: "COD" },
  ];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.status}</td>
                <td>{order.qty}</td>
                <td>₹{order.amount}</td>
                <td>{order.paymentMethod}</td>
                <td>
                  <Link to={`/order/${order.id}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;