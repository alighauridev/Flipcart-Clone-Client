const urls = {
  baseUrl: "https://flipcart-server.onrender.com/",
  // baseUrl: "http://localhost:4000/",
  auth: {
    login: "/auth/login",
    signup: "/auth/signup",

    refreshAccessToken: "/auth/RefreshAccessToken",
  },
  user: {
    getProfile: "/user/profile",
  },
  products: {
    getProducts: "/products/product",
    addProduct: "/products/product",
    getProductBySlug: (slug) => `/products/product/${slug}`,
    deleproduct: (id) => `/products/product/${id}`,
  },
  orders: {
    getOrders: "/orders",
    addOrder: "/orders",
    getAllOrders: "/orders/all",
    getUserOrders: (id) => `/orders/user/${id}`,
    getOrderById: (id) => `/orders/${id}`,
  },
  accessoryCategory: {
    get: "/accessoryCategory",
    add: "/accessoryCategory",
    update: "/accessoryCategory",
    delete: "/accessoryCategory",
  },
  productCategory: {
    get: "/productCategory",
    add: "/productCategory",
    update: "/productCategory",
    delete: "/productCategory",
  },
  company: {
    about: "/company/about",
    addAbout: "/company/about",
    updateAbout: (id) => `/company/about/${id}`,
    getcontact: "/company/contact",
    updateContact: "/company/contact",
    getFaqs: "/company/faq",
    updateFaqs: (id) => `/company/faqs/${id}`,
    FaqCategory: "/company/faqCategory",
    distributor: "/company/distributor",
  },
  upload: {
    getImage: "/upload/image",
    uploadImage: "/upload/images",
  },
  query: {
    query: "/query",
  },
  maintainance: {
    maintainance: (slug) => `/maintainance/${slug}`,
  },
};

export default urls;
