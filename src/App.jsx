import "./App.css";
import NavBar from "./components/NavBar";
import Homepage from "./routes/Homepage";

function App() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <NavBar />
      <main className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <Homepage />
      </main>
    </div>
  );
}

export default App;
