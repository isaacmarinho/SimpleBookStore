using Srvtools;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class Encryption
    {
        public string EncryptPassword(string userid, string password)
        {
            char[] RetPassword = new char[0];
            Encrypt.EncryptPassword(userid, password, 10, ref RetPassword, false);

            return new string(RetPassword);
        }
    }
}
