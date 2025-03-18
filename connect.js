const oracledb = require('oracledb');

// Enable Thick mode
oracledb.initOracleClient({ libDir: 'C:\\oracle\\instantclient_12_1' });

const dbConfig = {
  user: "olss",
  password: "orcl",
  connectString: "localhost:1521/ORCL"
};

async function run() {
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    console.log("Successfully connected to Oracle Database!");
    const result = await connection.execute(`SELECT * FROM Users`);
    console.log(result.rows);

  } catch (err) {
    console.error("Error connecting to Oracle DB: ", err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing connection: ", err);
      }
    }
  }
}

run();
