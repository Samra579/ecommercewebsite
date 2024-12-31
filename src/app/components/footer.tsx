import React from 'react'

const Footer = () => {
  return (
    <div>
     <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Footer Example</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            margin: 0;\n            font-family: Arial, sans-serif;\n            background-color: #f4f4ff;\n        }\n        .footer {\n            background-color: #f4f4ff;\n            padding: 50px 20px;\n            color: #333;\n        }\n        .footer-container {\n            display: flex;\n            justify-content: space-between;\n            flex-wrap: wrap;\n            max-width: 1200px;\n            margin: 0 auto;\n        }\n        .footer-column {\n            flex: 1;\n            min-width: 200px;\n            margin: 0 20px;\n        }\n        .footer-column h3 {\n            font-size: 18px;\n            font-weight: bold;\n            margin-bottom: 15px;\n            color: #333;\n        }\n        .footer-column ul {\n            list-style: none;\n            padding: 0;\n            margin: 0;\n        }\n        .footer-column ul li {\n            margin-bottom: 10px;\n        }\n        .footer-column ul li a {\n            text-decoration: none;\n            color: #555;\n            font-size: 14px;\n        }\n        .footer-column ul li a:hover {\n            color: #007bff;\n        }\n        .footer-newsletter {\n            margin-bottom: 20px;\n        }\n        .footer-newsletter input {\n            padding: 10px;\n            width: 70%;\n            margin-right: 10px;\n            border: 1px solid #ddd;\n            border-radius: 5px;\n        }\n        .footer-newsletter button {\n            padding: 10px 20px;\n            background-color: #ff0077;\n            color: #fff;\n            border: none;\n            border-radius: 5px;\n            cursor: pointer;\n        }\n        .footer-newsletter button:hover {\n            background-color: #e6006e;\n        }\n        .footer-bottom {\n            text-align: center;\n            margin-top: 30px;\n            font-size: 14px;\n            color: #777;\n        }\n        .footer-socials {\n            text-align: center;\n            margin-top: 10px;\n        }\n        .footer-socials i {\n            font-size: 18px;\n            margin: 0 5px;\n            cursor: pointer;\n            color: #555;\n        }\n        .footer-socials i:hover {\n            color: #007bff;\n        }\n    "
    }}
  />
  <div className="footer">
    <div className="footer-container">
      {/* Newsletter Column */}
      <div className="footer-column">
        <h3>Hekto</h3>
        <div className="footer-newsletter">
          <input type="email" placeholder="Enter Email Address" />
          <button>Sign Up</button>
        </div>
        <p>Contact Info</p>
        <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
      </div>
      {/* Categories Column */}
      <div className="footer-column">
        <h3>Categories</h3>
        <ul>
          <li>
            <a href="#">Laptops &amp; Computers</a>
          </li>
          <li>
            <a href="#">Cameras &amp; Photography</a>
          </li>
          <li>
            <a href="#">Smart Phones &amp; Tablets</a>
          </li>
          <li>
            <a href="#">Video Games &amp; Consoles</a>
          </li>
          <li>
            <a href="#">Waterproof Headphones</a>
          </li>
        </ul>
      </div>
      {/* Customer Care Column */}
      <div className="footer-column">
        <h3>Customer Care</h3>
        <ul>
          <li>
            <a href="#">My Account</a>
          </li>
          <li>
            <a href="#">Discount</a>
          </li>
          <li>
            <a href="#">Returns</a>
          </li>
          <li>
            <a href="#">Orders History</a>
          </li>
          <li>
            <a href="#">Order Tracking</a>
          </li>
        </ul>
      </div>
      {/* Pages Column */}
      <div className="footer-column">
        <h3>Pages</h3>
        <ul>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Browse the Shop</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
          <li>
            <a href="#">Pre-Built Pages</a>
          </li>
          <li>
            <a href="#">Visual Composer Elements</a>
          </li>
          <li>
            <a href="#">WooCommerce Pages</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">©Webecy - All Rights Reserved</div>
  </div>
</>
 
    </div>
  )
}

export default Footer
