const config = {
  s3: {
    REGION: "us-west-2",
    BUCKET: "my-notes-api-s3",
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://tla4wud4h6.execute-api.us-west-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_ZJXdsUEiE",
    APP_CLIENT_ID: "487rdfk99ehrei508c84bn1o66",
    IDENTITY_POOL_ID: "us-west-2:26622dad-47b3-49ee-98f8-ab252c173c00",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51IE1LnL75xjERPyiNUERpIlWI0wn3h4HcxvgayOEFocHZgam2LlPtsK8k3ZQVUPrba64TjUlXOagNRf11RJSrd8U0074xI6Rg1",
};

export default config;