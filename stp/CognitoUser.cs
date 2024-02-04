using Amazon.CognitoIdentityProvider;
using System;
using System.Threading.Tasks;

namespace stp
{
    internal class CognitoUser
    {
        private string userName;
        private string clientId;
        private CognitoUserPool cognitoUserPool;
        private AmazonCognitoIdentityProviderClient cognitoIdClient;

        public CognitoUser(string userName, string clientId, CognitoUserPool cognitoUserPool, AmazonCognitoIdentityProviderClient cognitoIdClient)
        {
            this.userName = userName;
            this.clientId = clientId;
            this.cognitoUserPool = cognitoUserPool;
            this.cognitoIdClient = cognitoIdClient;
        }

        internal Task StartWithSrpAuthAsync(InitiateSrpAuthRequest initiateSrpAuthRequest)
        {
            throw new NotImplementedException();
        }
    }
}