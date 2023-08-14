import axios from "../../api/axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PriceSidebar from "./PriceSidebar";
import Stepper from "./Stepper";
// import {
//     CardNumberElement,
//     CardCvcElement,
//     CardExpiryElement,
//     useStripe,
//     useElements,
// } from '@stripe/react-stripe-js';
import { clearErrors } from "../../actions/orderAction";
import { useSnackbar } from "notistack";
import { post } from "../../utils/paytmForm";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import MetaData from "../Layouts/MetaData";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  // const stripe = useStripe();
  // const elements = useElements();
  // const paymentBtn = useRef(null);

  const [payDisable, setPayDisable] = useState(false);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const navigate = useNavigate();
  const paymentData = {
    amount: Math.round(totalPrice),
    user: user._id,
    currency: "USD",
    email: user.email,
    phoneNo: shippingInfo.phoneNo,
    billing_details: {
      name: user.name,
      email: user.email,
      address: {
        line1: shippingInfo.address,
        city: shippingInfo.city,
        country: shippingInfo.country,
        state: shippingInfo.state,
        postal_code: shippingInfo.pincode,
      },
    },
  };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    totalPrice,
    user: user._id,
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const orderResponse = await axios.post("/api/v1/order/new", order);
      const orderId = orderResponse.data.order._id;

      // Await the payment API call
      const { data } = await axios.post(
        "/api/v1/create-payment",
        { ...paymentData, orderId },
        config
      );
      if (data?.hosted_url) {
        window.location.replace(data.hosted_url);
      }
    } catch (error) {}
  };

  const submitPayment = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    } catch (error) {
      setPayDisable(false);
      enqueueSnackbar(error, { variant: "error" });
    }
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
      enqueueSnackbar(error, { variant: "error" });
    }
  }, [dispatch, error, enqueueSnackbar]);

  return (
    <>
      <MetaData title="MNFST: Secure Payment | Paytm" />

      <main className="w-full mt-20">
        {/* <!-- row --> */}
        <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
          {/* <!-- cart column --> */}
          <div className="flex-1">
            <Stepper activeStep={3}>
              <div className="w-full bg-white">
                <form
                  onSubmit={(e) => submitHandler(e)}
                  autoComplete="off"
                  className="flex flex-col justify-start gap-2 w-full mx-8 my-4 overflow-hidden"
                >
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="payment-radio-group"
                      name="payment-radio-button"
                    >
                      <FormControlLabel
                        control={<Radio />}
                        label={
                          <div className="flex items-center gap-4">
                            <img
                              draggable="false"
                              className="h-6 w-6 object-contain"
                              src="https://rukminim1.flixcart.com/www/96/96/promos/01/09/2020/a07396d4-0543-4b19-8406-b9fcbf5fd735.png"
                              alt="Paytm Logo"
                            />
                            <span>Crypto</span>
                          </div>
                        }
                      />
                    </RadioGroup>
                  </FormControl>

                  <input
                    type="submit"
                    value={`Pay $${totalPrice.toLocaleString()}`}
                    disabled={payDisable ? true : false}
                    className={`${
                      payDisable
                        ? "bg-primary-grey cursor-not-allowed"
                        : "bg-[#24292e]  cursor-pointer"
                    } w-1/2 sm:w-1/4 my-2 py-3 font-medium text-white shadow hover:shadow-lg rounded-sm uppercase outline-none`}
                  />
                </form>

                {/* stripe form */}
                {/* <form onSubmit={(e) => submitHandler(e)} autoComplete="off" className="flex flex-col justify-start gap-3 w-full sm:w-3/4 mx-8 my-4">
                                <div>
                                    <CardNumberElement />
                                </div>
                                <div>
                                    <CardExpiryElement />
                                </div>
                                <div>
                                    <CardCvcElement />
                                </div>
                                <input ref={paymentBtn} type="submit" value="Pay" className="bg-[#24292e]  w-full sm:w-1/3 my-2 py-3.5 text-sm font-medium text-white shadow hover:shadow-lg rounded-sm uppercase outline-none cursor-pointer" />
                            </form> */}
                {/* stripe form */}
              </div>
            </Stepper>
          </div>

          <PriceSidebar cartItems={cartItems} />
        </div>
      </main>
    </>
  );
};

export default Payment;
