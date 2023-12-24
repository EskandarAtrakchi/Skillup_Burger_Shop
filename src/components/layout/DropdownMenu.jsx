import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function DropdownMenu() {
  const [navLinks, setNavLinks] = useState([]);
  const navigate = useNavigate(); // Navigate to a different route

  useEffect(() => {
    const navs = [
      { name: "Login", path: "/login" },
      { name: "Orders", path: "/myOrders" },
      { name: "Logout", path: "/login" },
    ];
    setNavLinks(navs);
  }, []);

  const handleLogout = () => {
    // Show confirmation dialog
    const confirmed = window.confirm("Are you sure you want to logout?");
    
    // If user confirms, redirect to login
    if (confirmed) {
      alert('You have been logged out successfully!!');
      navigate("/login");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#"></a>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Menu
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {navLinks.map((d, i) => (
                <li key={i}>
                  {d.name === "Logout" ? (
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={handleLogout}
                    >
                      {d.name}
                    </button>
                  ) : (
                    <Link to={d.path}>
                      <button className="dropdown-item" type="button">
                        {d.name}
                      </button>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DropdownMenu;