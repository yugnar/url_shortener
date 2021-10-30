import { PrismaClient } from "@prisma/client";

export default function getPathDefinition(req, res) {
  const prisma = new PrismaClient();

  console.log("Working with params... - " + req.query.queryUrl);

  try {
    prisma.routingTable
      .findMany({ where: { full_url: req.query.queryUrl } })
      .then((route) => {
        console.log(route.length);
        if (route.length > 0) {
          return res.status(200).json({ route: route[0].code });
        } else {
          return res.status(200).json({ route: "UNREGISTERED" });
        }
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error });
  } finally {
    prisma.$disconnect();
  }
}
