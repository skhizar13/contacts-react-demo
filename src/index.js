import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

import {ApolloProvider} from 'react-apollo';
import {Rehydrated} from 'aws-appsync-react';
import AwsConfig from './aws-exports';

import Amplify, {Auth} from 'aws-amplify';
import AWSAppSyncClient from 'aws-appsync';

Amplify.configure(AwsConfig);


const authConfig = {
    type: AwsConfig.aws_appsync_authenticationType,
    jwtToken: async () =>
        (await Auth.currentSession()).getAccessToken().getJwtToken()
};

const client = new AWSAppSyncClient({
    url: AwsConfig.aws_appsync_graphqlEndpoint,
    region: AwsConfig.aws_appsync_region,
    auth: authConfig,
    disableOffline: true
})



ReactDOM.render(<ApolloProvider client={client}>
    <Rehydrated>
        <App />
    </Rehydrated>
</ApolloProvider>
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
