import React from 'react'
//import Link from "next/link";

const Navbar1 = () => {
  return (
    <div>
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Navbar Example</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            margin: 0;\n            font-family: Arial, sans-serif;\n        }\n        .navbar {\n            background-color: #8000ff; /* Purple color */\n            color: #fff;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 10px 20px;\n            font-size: 14px;\n        }\n        .navbar-left,\n        .navbar-right {\n            display: flex;\n            align-items: center;\n        }\n        .navbar-left span,\n        .navbar-right span {\n            margin-right: 20px;\n            display: flex;\n            align-items: center;\n        }\n        .navbar-left span i,\n        .navbar-right span i {\n            margin-right: 5px;\n        }\n        .navbar-right span a {\n            text-decoration: none;\n            color: #fff;\n            margin-right: 15px;\n        }\n        .navbar-right span a:hover {\n            text-decoration: underline;\n        }\n        .dropdown {\n            position: relative;\n            display: inline-block;\n        }\n        .dropdown:hover .dropdown-content {\n            display: block;\n        }\n        .dropdown-content {\n            display: none;\n            position: absolute;\n            background-color: #fff;\n            color: #333;\n            min-width: 100px;\n            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);\n            z-index: 1;\n        }\n        .dropdown-content a {\n            color: #333;\n            text-decoration: none;\n            padding: 10px;\n            display: block;\n        }\n        .dropdown-content a:hover {\n            background-color: #f1f1f1;\n        }\n    "
    }}
  />
  <div className="navbar">
    <div className="navbar-left">
      <span>
        <i className="fa fa-envelope" /> nishasanal@gmail.com
      </span>
      <span>
        <i className="fa fa-phone" /> (123) 456-7890
      </span>
    </div>
    <div className="navbar-right">
      <span className="dropdown">
        <a href="#">English ▼</a>
        <div className="dropdown-content">
          <a href="#">English</a>
          <a href="#">Spanish</a>
        </div>
      </span>
      <span className="dropdown">
        <a href="#">USD ▼</a>
        <div className="dropdown-content">
          <a href="#">USD</a>
          <a href="#">EUR</a>
        </div>
      </span>
      <span>
        <a href="#">Login</a>
      </span>
      <span>
        <a href="#">Wishlist</a>
      </span>
      <span>
        <a href="#">🛒</a>
      </span>
    </div>
  </div>
</>

    </div>
     )
}

export default Navbar1