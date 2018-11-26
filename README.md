React App:

# Link: http://contacts-app-demo.s3-website-us-east-1.amazonaws.com/

Commands executed to create entire Backend using Amplify CLI:

#$ npm install amplify 

#$ amplify configure

#$ cd your-app-directory

#$ amplify init

#$ amplify add api
    - Choose GraphQL
	- Choose authentication type Cognito User Pool
	- modified schema.graphql, save and hit enter on CLI

#schema.graphql =>

type Contact @model @auth(rules: [{allow: owner}]){
    id: String!
	name: String
    email: String
    phone: String
}

#$ amplify push




