# Note Application - React Front End on Serverless Stack Integrated with Amazon Web Services

## Table of Contents

- **[Description](#Description)**
- **[Installation Requirements](#Installation-Requirements)**
- **[License](#License)**
- **[Questions](#Questions)**

# Description
The note application allows a user to sign-up or sign-In and save notes with file attachments. Sign-up and sign-in are controlled by AWS (Amazon Web Services) Cognito User Pools so users can log-in with their email address. AWS-Amplify is used for user authorization and API connection to backend serverless stack. Notes are saved in AWS DynamoDB and any file attachments are stored in AWS S3 Buckets. The serverless stack repo is found here https://github.com/jaredseefried/serverless-api-to-aws 

 ### Deployed Site @ https://my-serverless-note-app-to-aws.netlify.app/
---
 ![Scratch Note App](./public/images/notes-screenshot.jpg)

# Installation Requirements

1. Clone Note Application in the command line by entering: git clone https://github.com/jaredseefried/serverless-note-app.git 

2. Install required libraries from entering in the command line: npm i

3. Update ./src/config.js file with your own AWS information
    - S3: Region and Bucket Name
    - apiGateway: Region and URL
    - Cognito: Region, User pool ID, App Client ID and Identity Pool ID
    - Max Attachment can be left alone
    - Stripe Key

5. Start the application by entering in the command line: npm start

(Instructions are based on having your own Amazon Web Services Services Configured and Seperate Serverless Stack built.) You can view my serverless stack at this repo: https://github.com/jaredseefried/serverless-api-to-aws.git 

If you would like to learn how to build this application from scratch, follow this tutorial: https://serverless-stack.com/chapters/what-is-serverless.html 
# License

MIT

# Have Questions?

## [Github Profile: github.com/jaredseefried](https://github.com/jaredseefried "Title")

Please email me at jared.seefried@yahoo.com if you have additional questions.