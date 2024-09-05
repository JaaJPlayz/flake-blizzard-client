import "./globals.css";
import Layout from "./pages/Layout";
import NixInfoPage from "./pages/nixPage";

function App() {
  return (
    <div className="App">
      <Layout>
        <NixInfoPage />
      </Layout>
    </div>
  );
}

export default App;
