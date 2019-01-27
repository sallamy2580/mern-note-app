const config = {
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-upload-aws-serverless-framework",
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://wcotbg5cz9.execute-api.us-west-2.amazonaws.com/prod/",
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_bbHHO0iK4",
    APP_CLIENT_ID: "1uiudikcdv3rl2hd6fjp6nhptd",
    IDENTITY_POOL_ID: "us-west-2:32e9bf0f-b625-48c5-b799-0b7a2e1a88da",
  },
};

export default config;