import React from "react";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  // useParams hook to get the order ID from the URL
  const { id } = useParams();

  // Mock data for order details
  const orderDetails = {
    id: "order1",
    status: "Processing",
    placedAt: "2023-01-01 10:30 AM",
    deliveredAt: "2023-01-02 12:45 PM",
    paymentMethod: "Credit Card",
    paymentReference: "ABC123XYZ",
    paidAt: "2023-01-01 11:00 AM",
  };

  return (
    <section className="order-details">
      <main>
        <h1>Order Details</h1>

        {/* Status Section */}
        <div>
          <h2>Status</h2>
          <p>Order Status: {orderDetails.status}</p>
          <p>Placed At: {orderDetails.placedAt}</p>
          <p>Delivered At: {orderDetails.deliveredAt}</p>
        </div>

        {/* Payment Section */}
        <div>
          <h2>Payment</h2>
          <p>Payment Method: {orderDetails.paymentMethod}</p>
          <p>Payment Reference: {orderDetails.paymentReference}</p>
          <p>Paid At: {orderDetails.paidAt}</p>
        </div>
      </main>
    </section>
  );
};

export default OrderDetails;