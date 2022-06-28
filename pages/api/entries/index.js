import { db } from "../../../database";
import { Entry } from "../../../models";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getEntries(res);
    case "POST":
      return postEntry(req, res);
    case "PUT":
      return postEntry(req, res);
    default:
      return res.status(400).json({ message: "EndPoint no existe!" });
  }
}

const getEntries = async (res) => {
  await db.connect();
  const entries = await Entry.find().sort({ createAt: "ascending" });
  await db.disconnect();

  res.status(200).json(entries);
};

const postEntry = async (req, res) => {
  const { description = "" } = req.body;

  const newEntry = new Entry({
    description,
    createAt: Date.now(),
  });

  try {
    await db.connect();
    await newEntry.save();
    await db.disconnect();

    return res.status(200).json(newEntry);
  } catch (error) {
    await db.disconnect();
    console.log(error);

    return res
      .status(500)
      .json({ message: "Algo salio mal, revisar consola del servidor" });
  }
};
