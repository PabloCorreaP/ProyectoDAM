using System;
using System.Collections.Generic;
using System.Text;
using System.Data.Odbc;
using System.Data;

namespace TrabajoConDatos
{
    class ADODisconnected
    {
        public void Connection()
        {


            try
            {
                OdbcConnection connection = new OdbcConnection(string.Empty);
                connection.Open();

                OdbcCommand com = connection.CreateCommand();

                com.CommandText = "SELECT Param1, Param2 form table1";
                OdbcDataAdapter dataAdapter = new OdbcDataAdapter(com);
                DataSet ds = new DataSet();
                dataAdapter.Fill(ds);


                //ds.Tables[0].Columns;
                connection.Close();

            }catch(Exception e)
            {

            }
        }
        
    }
}
