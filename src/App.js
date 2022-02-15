import Board from "./components/Board";

function App() {

  const propTest  = [
    {id: 1, judul: "Judul Pertama"},
    {id: 2, judul: "Judul Kedua"},
    {id: 3, judul: "Judul Ketiga"},
  ]


  return (
    <div className="App">
      <Board children={propTest} />
    </div>
  );
}

export default App;

