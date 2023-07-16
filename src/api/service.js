import axios from "./axios";
import urls from "./url";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYzNTljYjdmN2EwMGZiMmI2NmE5ODQiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjg0MjMyNjUyfQ.ZtRv0sXT2BuSbvt7tUEKluVV8vok6wmiT_LL_WjtgvQ";
console.log(accessToken);

//========================================= PRODUCTS ========================
export const getProducts = async () => {
  try {
    const res = await axios.get(urls.products.getProducts);
    return res.data;
  } catch (err) {
    return err.response;
  }
};

export const getProductBySlug = async (slug = "Tank1210B") => {
  try {
    const res = await axios.get(urls.products.getProductBySlug(slug));
    return res.data;
  } catch (err) {
    return err.response;
  }
};

// ===============================================================================

//========================================= ORDERS ========================

export const addOrder = async (data) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    // console.log("paylod we are sending" + JSON.stringify(data));
    const res = await axios.post(urls.orders.addOrder, data, config);
    return res.data;
  } catch (err) {
    return err.response;
  }
};

export const getOrders = async () => {
  try {
    const res = await axios.get(urls.orders.getOrders);
    return res.data;
  } catch (err) {
    return err.response;
  }
};

export const getOrder = async (id) => {
  try {
    const res = await axios.get(urls.orders.getOrderById(id));
    return res.data;
  } catch (err) {
    return err.response;
  }
};

// ===============================================================================

// ========================================= USER ========================

export const getProfile = async () => {
  try {
    const res = await axios.get(urls.user.getProfile);
    return res.data;
  } catch (err) {
    return err.response;
  }
};

// ===============================================================================

// ========================================= AUTH ========================

export const login = async (data) => {
  try {
    const res = await axios.post(urls.auth.login, data);
    return res.data;
  } catch (err) {
    return err.response;
  }
};

export const signup = async (data) => {
  try {
    const res = await axios.post(urls.auth.signup, data);
    return res.data;
  } catch (err) {
    return err.response;
  }
};

// ===============================================================================

// ========================================= Accessory Category ========================

export const getAccessoryCategory = async () => {
  try {
    const res = await axios.get(urls.accessoryCategory.get);
    return res.data;
  } catch (err) {
    return err.response;
  }
};

// ===============================================================================

// ========================================= Product Category ========================

export const getProductCategory = async () => {
  try {
    const res = await axios.get(urls.productCategory.get);
    return res.data;
  } catch (err) {
    return err.response;
  }
};

// ===============================================================================

// ========================================= get Image ========================

export const getImage = async (fileName) => {
  try {
    const res = await axios.get(`${urls.upload.getImage}?fileName=${fileName}`);
    return res;
  } catch (err) {
    return err.response;
  }
};

// ===============================================================================

// ========================================= Company ========================

export const getAbout = async () => {
  try {
    const res = await axios.get(urls.company.about);
    return res.data;
  } catch (err) {
    return err.response;
  }
};

export const getContact = async () => {
  try {
    const res = await axios.get(urls.company.getcontact);
    return res.data;
  } catch (err) {
    return err.response;
  }
};

export const getFaqs = async (category) => {
  try {
    const res = await axios.get(
      `${urls.company.getFaqs}${category ? `?category=${category}` : ``}`
    );
    return res.data;
  } catch (err) {
    return err.response;
  }
};

export const getFaqCategory = async () => {
  try {
    let res = await axios.get(urls.company.FaqCategory);
    return res.data;
  } catch (err) {
    return err.response;
  }
};

// ===============================================================================
// ========================================= Distributors ========================

export const getDistributors = async () => {
  try {
    const res = await axios.get(urls.company.distributor);
    return res.data;
  } catch (err) {
    return err.response;
  }
};

// ===============================================================================
// ========================================= Query ========================
export const addQuery = async (data) => {
  try {
    let res = await axios.post(urls.query.query, data);
    return res.data;
  } catch (err) {
    return err.response;
  }
};

// ===============================================================================
// ========================================= Maintainance ========================

export const getMaintainance = async (slug) => {
  try {
    let res = await axios.get(urls.maintainance.maintainance(slug));
    return res.data;
  } catch (err) {
    return err.response;
  }
};

//========================================= Payment ========================

export const PayStripe = async (data) => {
  try {
    let token = accessToken;
    console.log(token);
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.post(
      "/stripe/create-checkout-session",
      data,
      config
    );
    return res.data;
  } catch (err) {
    return err.response;
  }
};

export const paymentOrder = async (data) => {
  try {
    let token = accessToken;
    console.log(token);
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.post("/stripe/payment-order-status", data, config);
    return res.data;
  } catch (err) {
    return err.response;
  }
};
