import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { EntriesContext } from "../../context";
import { dbEntries } from "../../database";
import { Layout } from "../../components";
import { dateFunctions } from "../../utils";

const validStatus = ["pending", "in-progress", "finished"];

const EntryPage = ({ entry }) => {
  const [inputValue, setInputValue] = useState(entry.description);
  const [status, setStatus] = useState(entry.status);

  const router = useRouter();

  const { updateEntry } = useContext(EntriesContext);

  const onInputChanged = (event) => {
    setInputValue(event.target.value);
  };

  const onStatusChanged = (event) => {
    setStatus(event.target.value);
  };

  const onSave = () => {
    if (inputValue.trim().length === 0) return;

    const updatedEntry = {
      ...entry,
      status,
      description: inputValue,
    };
    updateEntry(updatedEntry, true);
    router.push("/");
  };

  const onDelete = () => {
    console.log("Agregar borrar");
  };

  return (
    <Layout title={inputValue.substring(0, 20) + "..."}>
      <div className="grid h-[80vh] place-items-center">
        <div className="px-10 py-5 w-[45vh] bg-gradient-to-b from-teal-600 shadow-2xl rounded-md">
          <div className="flex flex-col justify-items-center mt-5">
            <textarea
              placeholder="Nueva entrada"
              className="rounded-md p-1"
              value={inputValue}
              onChange={onInputChanged}
            />
            <p className="text-right text-md">
              {dateFunctions.getFormatDistanceToNow(entry.createAt)}
            </p>
            <div className="flex flex-col mt-2">
              <div>Estado:</div>
              <select
                className="w-full p-1"
                value={status}
                onChange={onStatusChanged}
              >
                {validStatus.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-between">
              <button
                disabled={inputValue.length <= 0}
                onClick={onSave}
                className="px-2 py-1 outline outline-green-700 hover:bg-green-800 font-bold mt-5 rounded-md"
              >
                Guardar
              </button>
              <button
                onClick={onDelete}
                className="px-2 py-1 outline outline-red-700 hover:bg-red-800 font-bold mt-5 rounded-md"
              >
                Borrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { id } = params;

  const entry = await dbEntries.getEntryById(id);

  if (!entry) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      entry,
    },
  };
};

export default EntryPage;
