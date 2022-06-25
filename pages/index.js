import { Layout } from "../components";
import { Completada } from "../components/Completada";
import { EnProgreso } from "../components/EnProgreso";
import { Pendiente } from "../components/Pendiente";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="grid grid-cols-3 pt-3">
        <Pendiente />
        <EnProgreso />
        <Completada />
      </div>
    </Layout>
  );
}
