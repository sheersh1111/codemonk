// import { ChatEngine } from 'react-chat-engine';
import './App.css';
import { StepLabel, Stepper, Typography, Step } from "@material-ui/core";
// import Brightness1TwoToneIcon from '@material-ui/icons/icons-material/Brightness1TwoTone';
import filled from "./filled.jpeg"
import blank from "./empty.png"
function App() {
  const activeStep = 0;

  const steps = [
    {
      label: <Typography>Shipping Details</Typography>,
      icon: filled,
    },
    {
      label: <Typography>Confirm Order</Typography>,
      icon: blank,
    },
    {
      label: <Typography>Payment</Typography>,
      icon: blank,
    },
  ];
  const stepStyles = {
    boxSizing: "border-box",
  };


  const data = {
    "products": [
      {
        "id": 1,
        "name": "Earphones",
        "price": 12690,
        "imageUrl": "https://via.placeholder.com/150",
        "desc": "Silver"
      },
      {
        "id": 2,
        "tagline": "200 Cash back",
        "name": "Test 6X",
        "price": 14000,
        "imageUrl": "https://via.placeholder.com/150",
        "desc": "32GB Gold \n\n Extended Warranty",
        "planLink": "http://pointstonothing.com/linktoplan",
        "gift": {
          "name": "Glory Selfie Stick",
          "desc": "Silver Moon",
          "price": 175
        }
      },
      {
        "id": 3,
        "name": "Test 6X",
        "price": 18000,
        "imageUrl": "https://via.placeholder.com/150",
        "desc": "64GB Gold \n\n Extended Warranty",
        "planLink": "http://pointstonothing.com/linktoplan",
        "gift": {
          "name": "Glory Selfie Stick",
          "desc": "Silver Moon",
          "price": 175
        }
      },
      {
        "id": 4,
        "tagline": "100 Cash back",
        "name": "Earphones",
        "price": 11690,
        "imageUrl": "https://via.placeholder.com/150",
        "desc": "White"
      },
      {
        "id": 5,
        "name": "Earphones",
        "price": 11690,
        "imageUrl": "https://via.placeholder.com/150",
        "desc": "Orange"
      },
      {
        "id": 6,
        "name": "Test 5X",
        "price": 10000,
        "imageUrl": "https://via.placeholder.com/150",
        "desc": "32GB Gold"
      }
    ],
    "pincode": {
      "560066": {
        "deliveryPrice": 50,
        "cashOnDelivery": false,
        "estimatedDays": {
          "min": 2,
          "max": 5
        }
      },
      "560067": {
        "deliveryPrice": 0,
        "cashOnDelivery": true,
        "estimatedDays": {
          "min": 3,
          "max": 5
        }
      },
      "560068": {
        "deliveryPrice": 0,
        "cashOnDelivery": false,
        "estimatedDays": {
          "min": 5,
          "max": 5
        }
      }
    },
    "discount": {
      "minTotal": 5000,
      "discountPercentage": 10
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="first">
          <div className='testLeft'><img src={require("./Codemonk-tech-assignment/Images/logo.png")} alt="logo" /></div>
          <div className='testRight'>
            <div><span>Track Order|</span></div>
            <div><img src={require("./Codemonk-tech-assignment/icon/search.png")} alt="searchIcon" /></div>
            <div><span>|</span></div>
            <div><img src={require("./Codemonk-tech-assignment/icon/user.png")} alt="userIcon" /></div>
            <div><span>|</span></div>
            <div><img src={require("./Codemonk-tech-assignment/icon/shopping.png")} alt="shoppingIcon" /></div>
          </div>
        </div>
        <div className='stepClass'>
          <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
            {steps.map((item, index) => (
              <Step
                key={index} active={activeStep === index ? true : false}
                completed={activeStep >= index ? true : false}
              >
                <StepLabel
                  icon={item.icon}
                  style={{
                    color: activeStep >= index ? "tomato" : "rgba(0,0,0,0.649)",
                  }}
                >
                  {item.label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div className='lightPurple'> <p>Shop for $5000 or more and get 10% discount on your order</p></div>
        <div className="outbox">

          <h2>Shopping Cart</h2>
          <div className="tableHeader">
            <div className="productHeading p">Product</div>
            <div className="price productHeading">Price</div>
            <div className="quantity productHeading">Quantity</div>
            <div className="subtotal productHeading">Subtotal</div>
          </div>
          <div className="products">
            <div>
              <div className="objects">
                <div className="product">
                  <div><img src={require("./Codemonk-tech-assignment/Images/Earphone.png")} alt="ear" /></div>
                  <div>
                    <p>{data.products[3].name}</p>
                    <span>{data.products[3].desc}</span>
                  </div>
                </div>
                <div className="priceValues">
                  <span>{data.products[3].price} $</span>
                </div>
                <div className="quantity">
                  <p>-</p>
                  <p className="qty">0</p>
                  <p>+</p>
                </div>
                <div className="subtotal">
                  {data.products[3].price} $
                  <img src={require("./Codemonk-tech-assignment/icon/DELETE.png")} alt="delete Icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="products">
            <div>
              <div className='objects'>
                <div className="product">
                  <div><img src={require("./Codemonk-tech-assignment/Images/phone.png")} alt="ear" /></div>
                  <div>
                    <p>{data.products[1].name}</p>
                    <span>{data.products[1].desc}</span>
                  </div>
                </div>
                <div className="priceValues">
                  <span>{data.products[1].price} $</span>
                </div>
                <div className="quantity">
                  <p>-</p>
                  <p className="qty">1</p>
                  <p>+</p>
                </div>
                <div className="subtotal">
                  {data.products[1].price}
                  <img src={require("./Codemonk-tech-assignment/icon/DELETE.png")} alt="delete Icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="products">
            <div>
              <div className='objects'>
                <div className="product">
                  <div><img src={require("./Codemonk-tech-assignment/Images/stick.png")} alt="ear" /></div>
                  <div>
                    <p>{data.products[1].gift.name}</p>
                    <span>{data.products[1].gift.desc}</span>
                  </div>
                </div>
                <div className="priceValues">
                  <span>{data.products[1].gift.price} $</span>
                </div>
                <div className="quantity">
                  <p className="qty">1</p>
                </div>
                <div className="subtotal">
                  {data.products[1].gift.price}
                  <img src={require("./Codemonk-tech-assignment/icon/DELETE.png")} alt="delete Icon" />
                </div>
              </div>
            </div>
          </div>


        </div>

        <div className='downCat'>
          <div className="delivery">
            <div><p>Delivary Availability</p></div>
            <div className='location'>
              <img src={require("./Codemonk-tech-assignment/icon/LOCATION.png")} alt="location" />
              <input value="11003"></input>
              <p>CHANGE</p>
            </div>
            <hr></hr>
            <div>
              <div>
                <div>
                  <img src={require("./Codemonk-tech-assignment/icon/check.png")} alt="check" />
                </div>
                <div className='free'>Free delivery</div>
              </div>
              <div>
                <div>
                  <img src={require("./Codemonk-tech-assignment/icon/check.png")} alt="check" />
                </div>
                <div className='free'>Cash on delivery</div>
              </div>
              <div>
                <div>
                  <img src={require("./Codemonk-tech-assignment/icon/check.png")} alt="check" />
                </div>
                <div className='free'>Estimated delivery time is 3-5 days</div>
              </div>
            </div>


          </div>
          <div className="orderSummary">
            <h4>Order Summary</h4>
            <div>
              <div>
                <span className="leftSide free">Subtotoal</span>
                <span className="rightSide free">25000$</span>
              </div>
              <div>
                <span className="leftSide free">Total discount</span>
                <span className="rightSide">-100$</span>
              </div>
              <div>
                <span className="leftSide free">Standard Shipping</span>
                <div className="rightSide free">Free</div>
              </div>
            </div>
            <div>
              <div className='od'>
                <div className="leftSide" id='orderTotal'>Order Total</div>
                <div className="rightside totalCash">42998,00$</div>
              </div>
              <div>
                <div className="leftSide continue">CONTINUE SHOPPING</div>
                <div className="rightside checkout">CHECKOUT</div>
              </div>
            </div>
          </div>
        </div>
        <div className='lastCat'>
          <div className='impocontact'>
            <div className='impolinks'>
              <div className='lorem'>
                <h4>LOREM</h4>
                <span>Dummy</span>
                <span>Dummy</span>
                <span>Dummy</span>
                <span>Dummy</span>
                <span>Dummy</span>
              </div>
              <div className='lorem'>
                <h4>LOREM</h4>
                <span>Dummy Test</span>
                <span>Dummy Test</span>
                <span>Dummy Test</span>
                <span>Dummy Test</span>
                <span>Dummy Test</span>
                <span>Dummy Test</span>
                <span>Dummy Test</span>
                <span>Dummy Test</span>
              </div>
              <div className='lorem'>
                <h4>LOREM</h4>
                <span>Dummy Test</span>
                <span>Dummy Test</span>
                <span>Dummy Test</span>
                <span>Dummy Test</span>
                <span>Dummy Test</span>
                <span>Dummy Test</span>
                <span>Dummy Test</span>
                <span>Dummy Test</span>
              </div>
              <div className='lorem'>
                <h4>LOREM</h4>
                <span>Dummy</span>
                <span>Dummy</span>
                <span>Dummy</span>
                <span>Dummy</span>
                <span>Dummy</span>
                <span>Dummy</span>
                <span>Dummy</span>
              </div>

            </div>
            <div className='vertical'>

            </div>
            <div className='contacts'>
              <div className='timings'>

                <h3>CALL US</h3>
                <p>Monday-Friday Saturday & Sunday</p>
                <p>8am to 5pm IST 10am to 6pm CST</p>
              </div>
              <div className='cnum'>
                <div className='df'>
                  <img src={require("./Codemonk-tech-assignment/icon/phone.png")} alt="phone" />
                  <div><b>1800-123-1234</b></div>
                </div>
                <div className='support'>

                  <div className='horizontal'></div>
                  <p>support.us.@test.com</p>
                </div>
              </div>
            </div>

          </div>
          <div className='horizontal'> </div>
          <div className='thanks'>
            <div className='dummy'>
              Dummy |  Dummy |  Dummy |  Dummy
            </div>
            <div className='lowest'>
              Lorel Ipsum simply dummy test of the printing and typesetting industry.
            </div>
          </div>
        </div>


      </header>
    </div>
  );
}

export default App;
