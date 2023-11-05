const db = require("../util/database");


exports.checkDataExists = async (data, table, field) => {
  const query = `SELECT IF(COUNT(*) > 0, 1, 0) AS exist FROM ${table} WHERE ${field} = ?`;

  try {
    const [rows] = await db.execute(query, [data]);
    const exist = rows[0].exist;
    return exist;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw the error for handling in the calling code
  }
  };


/*export async function checkDataExists(data, table, field) {
    const query = `SELECT IF(COUNT(*) > 0, 1, 0) AS exist FROM ${table} WHERE ${field} = ?`;
    const result = await db.execute(query, [data]);
    return result;
      /*return db.execute
      (`SELECT IF(COUNT(*) > 0, 1, 0) AS exist FROM ${table} WHERE ${field} = ?`, [data]);
    }*/