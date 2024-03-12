import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col px-96 ">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
