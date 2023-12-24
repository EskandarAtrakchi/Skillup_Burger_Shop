import React from "react";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/skj.jpg";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <article>
        <h4>Burger Shop</h4>
        <p>
          Welcome to Burger Shop, where we serve the most delectable burgers on
          the entire planet. Our commitment is to provide you with an
          extraordinary culinary experience that tantalizes your taste buds.
        </p>
        <p>
          Explore our diverse menu, carefully crafted to satisfy your cravings
          for mouth-watering burgers and other delightful dishes. Click below
          to discover our menu.
        </p>
      </article>

      <div>
        <h2>Founder</h2>
        <article>
          <div>
            <img src={me} alt="Founder" />
            <h3>Eskandar Atrakchi</h3>
          </div>
          <p>
            Hello, I'm Eskandar Atrakchi, the proud founder of Burger Shop.
            Dedicated to delivering taste that's heavenly and divine...
          </p>
        </article>
      </div>

      <div>
        <h2>Our Team</h2>
        <article>
          <div>
            <h3>Team Member 1</h3>
          </div>
          <p>
            Meet Team Member 1, Atrakchi, a passionate individual committed to creating
            culinary wonders that leave you craving for more.
          </p>
        </article>

        <article>
          <div>
            <h3>Team Member 2</h3>
          </div>
          <p>
            Introducing Team Member 2, Eskandar, our culinary maestro, adding a unique
            touch to every dish served at Burger Shop.
          </p>
        </article>
      </div>
    </div>
  );
};

export default About;