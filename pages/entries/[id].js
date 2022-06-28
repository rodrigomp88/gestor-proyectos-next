import { Layout } from "../../components";

const validStatus = ["pending", "in-progress", "finished"];

const EntryPage = () => {
  return (
    <Layout title="...">
      <div className="grid h-[80vh] place-items-center">
        <div className="px-10 py-5 w-[50vh] bg-teal-700">
          <p className="text-left text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
            sapiente dolores itaque illum commodi vero mollitia placeat, at
            repellendus adipisci quisquam quibusdam rerum earum quae. Minus
            velit doloribus obcaecati maxime!
          </p>
          <p className="text-right text-md">Creada hace...</p>
          <div className="flex flex-col justify-items-center mt-5">
            <textarea />
            <button>Bien</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EntryPage;
