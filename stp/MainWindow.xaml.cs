using Amazon.CognitoIdentityProvider.Model;
using Amazon.CognitoIdentityProvider;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Controls.Primitives;
using Microsoft.UI.Xaml.Data;
using Microsoft.UI.Xaml.Input;
using Microsoft.UI.Xaml.Media;
using Microsoft.UI.Xaml.Navigation;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Amazon.CognitoIdentityProvider;
using Amazon.CognitoIdentityProvider.Model;
using static System.Net.Mime.MediaTypeNames;
using Amazon.CognitoIdentity;
using Amazon.Runtime;

// To learn more about WinUI, the WinUI project structure,
// and more about our project templates, see: http://aka.ms/winui-project-info.

namespace stp
{
    /// <summary>
    /// An empty window that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainWindow : Window
    {
        public MainWindow()
        {
            this.InitializeComponent();
        }

        private async void btnLogin_ClickAsync(object sender, EventArgs e)
        {
            AmazonCognitoIdentityProviderClient provider = new AmazonCognitoIdentityProviderClient(new Amazon.Runtime.AnonymousAWSCredentials(), wwRegion);
         
        }
    }
}
