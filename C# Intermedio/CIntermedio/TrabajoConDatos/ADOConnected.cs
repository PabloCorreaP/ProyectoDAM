using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Odbc;
using System.Text;

namespace TrabajoConDatos
{
    class ADOConnected
    {
        public List<Tuple<int, String, float>> Connect()
        {
            OdbcConnection connection=null;
                List<Tuple<int, String, float>> tabla1 = new List<Tuple<int, String, float>>();
            try
            {
                 connection = new OdbcConnection(string.Empty);
                connection.Open();

                OdbcCommand com = connection.CreateCommand();

                com.CommandText = "SELECT Param1, Param2 form table1 WHERE Param1=@Pram1Where";
                com.Parameters.Add(new OdbcParameter("@Param1", 10));

                OdbcDataReader reader = com.ExecuteReader();

                while (reader.Read())
                {
                       tabla1.Add(new Tuple<int, String, float>(
                    reader.GetInt32(1),
                    reader.GetString(1),
                    reader.GetFloat(3)));

                }
                //ds.Tables[0].Columns;
                connection.Close();

            }
            catch (Exception e)
            {
                System.Diagnostics.Debug.WriteLine(e);
            }
            finally
            {
                if (connection.State != ConnectionState.Closed)
                {
                    connection.Close();
                }
                if (connection!=null)
                {
                    connection.Dispose();
                }
            }
            return tabla1;
        }

        public int Execute()
        {
            OdbcConnection connection = null;
            int rowsAffected = 0;
            OdbcTransaction transaction=null;
            try
            {
                connection = new OdbcConnection(string.Empty);
                connection.Open();

                OdbcCommand com = connection.CreateCommand();

                com.CommandText = "INSET INTO Table1(Param1,Param2) VALUES(@Param1,@Param2,@Param3)";
                com.Parameters.Add(new OdbcParameter("@Param1",10));
                com.Parameters.Add(new OdbcParameter("@Param2", "Jose"));
                com.Parameters.Add(new OdbcParameter("@Param2", 150.14));

                 transaction = connection.BeginTransaction();
              rowsAffected=  com.ExecuteNonQuery();
                transaction.Commit();

                //ds.Tables[0].Columns;
                connection.Close();

            }
            catch (Exception e)
            {
                System.Diagnostics.Debug.WriteLine(e);
                if (transaction != null)
                {
                    transaction.Dispose();
                }
            }
            finally
            {
                if (connection.State != ConnectionState.Closed)
                {
                    connection.Close();
                }
                if (connection != null)
                {
                    connection.Dispose();
                }
                if(transaction != null)
                {
                    transaction.Dispose();
                }
            }
            return rowsAffected;
        }
    }
}
