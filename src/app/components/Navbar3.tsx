import React from 'react'

const Navbar3 = () => {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Furniture Banner</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            margin: 0;\n            font-family: Arial, sans-serif;\n            background-color: #f9f7fd; /* Light lavender background */\n        }\n        .banner {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            padding: 50px 80px;\n        }\n        .banner-text {\n            max-width: 50%;\n        }\n        .banner-text h4 {\n            color: #ff007f; /* Pink */\n            font-size: 18px;\n            margin-bottom: 10px;\n        }\n        .banner-text h1 {\n            font-size: 48px;\n            color: #2d2a8e; /* Dark navy */\n            margin: 10px 0;\n        }\n        .banner-text p {\n            color: #5c5c5c; /* Gray */\n            margin: 20px 0;\n            font-size: 16px;\n            line-height: 1.6;\n        }\n        .shop-now {\n            background-color: #ff007f; /* Pink */\n            color: #fff;\n            text-transform: uppercase;\n            padding: 12px 30px;\n            border-radius: 30px;\n            text-decoration: none;\n            font-size: 14px;\n            font-weight: bold;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n        }\n        .shop-now:hover {\n            background-color: #e60073; /* Darker pink */\n        }\n        .banner-image {\n            position: relative;\n        }\n        .banner-image img {\n            max-width: 100%;\n            height: auto;\n        }\n        .discount-badge {\n            position: absolute;\n            top: 20px;\n            right: 20px;\n            background-color: #4cd964; /* Light green */\n            color: #fff;\n            border-radius: 50%;\n            width: 80px;\n            height: 80px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-size: 16px;\n            font-weight: bold;\n        }\n        .pagination {\n            display: flex;\n            margin-top: 40px;\n            gap: 10px;\n        }\n        .pagination span {\n            display: block;\n            width: 12px;\n            height: 12px;\n            border-radius: 50%;\n            background-color: #d6d6d6; /* Light gray */\n            cursor: pointer;\n        }\n        .pagination span.active {\n            background-color: #ff007f; /* Pink */\n        }\n    "
    }}
  />
  <div className="banner">
    <div className="banner-text">
      <h4>Best Furniture For Your Castle...</h4>
      <h1>New Furniture Collection Trends in 2020</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
        adipiscing in phasellus non in justo.
      </p>
      <a href="#" className="shop-now">
        Shop Now
      </a>
      <div className="pagination">
        <span className="active" />
        <span />
        <span />
      </div>
    </div>
    <div className="banner-image">
      <img src="/sofa.png" alt="Chair Image" />
      <div className="discount-badge">50% off</div>
    </div>
  </div>
</>

    </div>
  )
}

export default Navbar3
