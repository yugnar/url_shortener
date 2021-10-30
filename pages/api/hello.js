// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// const sqlite3 = require('sqlite3').verbose();

export default async function handler(req, res) {

  // const db = new sqlite3.Database('routing.db');

  // db.serialize(function() {  
  //   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
  //       console.log(row.id + ": " + row.info);
  //   });
  // });
  
  // db.close();

  // res.status(200).json({msg: "Wala"});

  res.status(200).json({ text: 'Hello' })
}
