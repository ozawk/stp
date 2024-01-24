using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;
using Windows.Web.Http;

namespace stp
{
    public class Network
    {
        public string Post(string url, string contentType, string sendData)
        {
            string result = "";
            try
            {
                System.Text.Encoding enc = System.Text.Encoding.GetEncoding("utf-8");
                byte[] postDataBytes = System.Text.Encoding.ASCII.GetBytes(sendData);

                //send
                System.Net.WebRequest req = System.Net.WebRequest.Create(url);
                req.Method = "POST";
                req.ContentType = contentType;
                req.ContentLength = postDataBytes.Length;
                System.IO.Stream reqStream = req.GetRequestStream();
                reqStream.Write(postDataBytes, 0, postDataBytes.Length);
                reqStream.Close();

                //response
                System.Net.WebResponse res = req.GetResponse();
                System.IO.Stream resStream = res.GetResponseStream();
                System.IO.StreamReader sr = new System.IO.StreamReader(resStream, enc);
                result = sr.ReadToEnd();
                if (sr != null)
                {
                    sr.Close();
                }
            }
            catch (System.Net.WebException)
            {
                result = "ERR";
            }
            return result;
        }

        public string Get(string url)
        {
            string result = "";
            try
            {
                //send
                System.Net.WebRequest req = System.Net.WebRequest.Create(url);
                req.Method = "GET";
                
                //response
                System.Net.WebResponse res = req.GetResponse();
                System.IO.Stream resStream = res.GetResponseStream();
                System.IO.StreamReader sr = new System.IO.StreamReader(resStream);
                result = sr.ReadToEnd();
                if (sr != null)
                {
                    sr.Close();
                }

            }
            catch (System.Net.WebException)
            {
                result = "ERR";
            }
            return result;
        }
    }
}
