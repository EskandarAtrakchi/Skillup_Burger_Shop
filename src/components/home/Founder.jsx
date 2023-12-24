import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/skj.jpg";

const Founder = () => {
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

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Eskandar Atrakchi</h3>

        <p>
          Hey, everyone! I am Eskandar Atrakchi, the founder of Burger Shop.
          <br />
          Our aim is to create the most tasty burger on the planet.
        </p>

        <p>
          <strong>Role:</strong> Founder & Head Chef
        </p>

        <p>
          <strong>Experience:</strong> Over 10 years in the culinary world, specializing in burger craftsmanship.
        </p>

        <p>
          <strong>Favorite Burgers:</strong>
        </p>
        <ul>
          <li>Classic Cheeseburger</li>
          <li>Vegetarian Delight Burger</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Founder;
