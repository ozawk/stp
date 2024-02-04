using Amazon.CognitoIdentityProvider;

namespace stp
{
    internal class CognitoUserPool
    {
        private string userPoolId;
        private string clientId;
        private AmazonCognitoIdentityProviderClient cognitoIdClient;

        public CognitoUserPool(string userPoolId, string clientId, AmazonCognitoIdentityProviderClient cognitoIdClient)
        {
            this.userPoolId = userPoolId;
            this.clientId = clientId;
            this.cognitoIdClient = cognitoIdClient;
        }
    }
}