exports.find = async () => {
  return await db.query(`SELECT * FROM books`);
};
