import React from 'react'

const Navbar2 = () => {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hekto Navbar</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            margin: 0;\n            font-family: Arial, sans-serif;\n        }\n        .navbar {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 15px 30px;\n            background-color: #ffffff; /* White background */\n            border-bottom: 2px solid #8000ff; /* Purple border */\n        }\n        .navbar-left {\n            display: flex;\n            align-items: center;\n        }\n        .navbar-left h1 {\n            margin: 0;\n            font-size: 28px;\n            color: #000033; /* Dark navy color */\n            font-weight: bold;\n        }\n        .navbar-links {\n            display: flex;\n            list-style-type: none;\n            margin: 0 0 0 40px;\n            padding: 0;\n        }\n        .navbar-links li {\n            margin-right: 20px;\n        }\n        .navbar-links li a {\n            text-decoration: none;\n            font-size: 16px;\n            color: #000033; /* Dark navy color */\n        }\n        .navbar-links li a:hover {\n            color: #ff007f; /* Pink highlight */\n        }\n        .navbar-right {\n            display: flex;\n            align-items: center;\n        }\n        .search-bar {\n            display: flex;\n            border: 2px solid #8000ff;\n            border-radius: 20px;\n            overflow: hidden;\n        }\n        .search-bar input {\n            border: none;\n            padding: 8px 15px;\n            outline: none;\n            font-size: 14px;\n        }\n        .search-bar button {\n            background-color: #ff007f; /* Pink background */\n            border: none;\n            color: white;\n            padding: 8px 15px;\n            cursor: pointer;\n            font-size: 14px;\n        }\n        .search-bar button:hover {\n            background-color: #e60073; /* Darker pink */\n        }\n    "
    }}
  />
  <div className="navbar">
    <div className="navbar-left">
      <h1>Hekto</h1>
      <ul className="navbar-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
    <div className="navbar-right">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button type="submit">🔍</button>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Navbar2
