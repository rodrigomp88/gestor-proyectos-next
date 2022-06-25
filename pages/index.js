import { Completada, EnProgreso, Layout, Pendiente } from "../components";

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
