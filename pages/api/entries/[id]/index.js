import { db } from "../../../../database";
import { Entry } from "../../../../models";

export default function handler(req, res) {
  switch (req.method) {
    case "PUT":
      return updateEntry(req, res);
    case "GET":
      return getEntry(req, res);
    default:
      return res.status(400).json({ message: "Metodo no existe" });
  }
}

const getEntry = async (req, res) => {
  const { id } = req.query;

  await db.connect();
  const entryDB = await Entry.findById(id);
  await db.disconnect();

  if (!entryDB) {
    return res.status(400).json({ message: "No hay entrada con ese ID:" + id });
  }
  return res.status(200).json(entryDB);
};

const updateEntry = async (req, res) => {
  const { id } = req.query;

  await db.connect();

  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(400).json({ message: "No hay entrada con ese ID:" + id });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  try {
    const updateEntry = await Entry.findByIdAndUpdate(
      id,
      { description, status },
      { runValidators: true, new: true }
    );
    await db.disconnect();
    res.status(200).json(updateEntry);
  } catch (error) {
    console.log(error);
    await db.disconnect();
    res.status(400).json({ message: error.errors.status.message });
  }
};
