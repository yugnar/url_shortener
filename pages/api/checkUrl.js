import { PrismaClient } from "@prisma/client";

export default function getPathDefinition(req, res) {
  // async function queryProper() {
  //     console.log("Query proper initial");
  //     db.each("SELECT rowid AS id, code FROM RoutingTable", function(err, row) {
  //         console.log(row.id + ": " + row.code);
  //     });
  // }

  const prisma = new PrismaClient();

  console.log("Working with params... - " + req.query.queryUrl);

  async function main() {
    const route = await prisma.routingTable.findMany({
      where: {
        code: req.query.queryUrl,
      },
    });
    if (route) {
      console.log(route);
    } else {
      console.log("No results found");
    }
  }

  try {
    main();
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }

  res.status(200).json({ query: req.query.queryUrl });
}