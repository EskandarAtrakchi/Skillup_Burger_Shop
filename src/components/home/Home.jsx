import React, { useState } from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";
import burgerImage from "../../assets/bg.jpg";
import { useNavigate } from "react-router-dom";

const options = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
  },
};

function Home() {
  const [showImage, setShowImage] = useState(true);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the Menu component when the button is clicked
    navigate("/menu");
  };

  return (
    <div>
      {showImage ? (
        <motion.div {...options}>
          <img
            src={burgerImage}
            alt="Burger"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
          <button
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "10px 20px",
              fontSize: "18px",
              cursor: "pointer",
            }}
            onClick={() => setShowImage(false)}
          >
            Explore Menu
          </button>
        </motion.div>
      ) : (
        <>
          <motion.div {...options}>
            {/* <Founder /> */}
          </motion.div>
          <motion.div {...options}>
            <Menu />
          </motion.div>
        </>
      )}
    </div>
  );
}

export default Home;