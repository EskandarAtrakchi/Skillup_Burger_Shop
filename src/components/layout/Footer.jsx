import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";  

function Footer() {
  return (
    <footer>
      <div>
        <h2>Burger Shop</h2>
        <p>We are trying to give you the best taste possible.</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <strong>All rights reserved @burgershop</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://www.youtube.com/@itiscoded/videos">
          <AiFillYoutube />
        </a>
        <a href="https://www.instagram.com/itiscoded/">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/EskandarAtrakchi/Skillup_Burger_Shop">
        <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
}

export default Footer;