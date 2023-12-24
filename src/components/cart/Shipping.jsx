import React, { useState } from "react";
import { Country, State } from "country-state-city";
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formError, setFormError] = useState(false);

  const navigate = useNavigate();

  const handleCountryChange = (e) => {
    const countryIsoCode = e.target.value;
    setSelectedCountry(countryIsoCode);
    setSelectedState(""); // Reset selected state when country changes
  };

  const handleConfirmOrder = () => {
    // Check if any required field is empty
    if (!selectedCountry || !selectedState) {
      setFormError(true);
      return;
    }

    // Mock logic for placing an order
    setOrderPlaced(true);

    // Show the success popup
    setTimeout(() => {
      setOrderPlaced(false);
      setFormError(false); // Reset form error state
      // Alert the user that the order has been placed successfully
      alert("Order placed successfully!");
      // Redirect to the home page
      navigate("/");
    }, 500);
  };

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            {/* COUNTRY DROPDOWN */}
            <label>Country</label>
            <select onChange={handleCountryChange} value={selectedCountry}>
              <option value="">Country</option>
              {Country.getAllCountries().map((country) => (
                <option value={country.isoCode} key={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            {/* STATE DROPDOWN */}
            <label>State</label>
            <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
              <option value="">State</option>
              {selectedCountry &&
                State.getStatesOfCountry(selectedCountry).map((state) => (
                  <option value={state.isoCode} key={state.isoCode}>
                    {state.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            {/* PIN CODE INPUT */}
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>
          <div>
            {/* PHONE NUMBER INPUT */}
            <label>Phone No.</label>
            <input type="number" placeholder="Enter Phone No." />
          </div>
          {/* Add the code for contact */}
          <button type="button" onClick={handleConfirmOrder}>
            Confirm Order
          </button>
          {formError && <div style={{ color: "red" }}>Please fill in all required fields</div>}
          <Popup open={orderPlaced} position="right center">
            <div style={{ color: "red", position: "absolute", top: "50%", right: "100%", transform: "translateY(-50%)", backgroundColor: "#fff", padding: "10px", borderRadius: "5px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}>
              Order Placed successfully!
            </div>
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;