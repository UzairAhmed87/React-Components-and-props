import "./App.css";
import Card from "./components/Card";

function App() {
  let Username = "Sarah";

  return (
    <>
      <h1 className="bg-yellow-400 p-10 rounded-lg text-black mb-5">
        {" "}
        Using tailwind and props in react
      </h1>

      <Card newUser={Username} />
      <Card img="https://images.pexels.com/photos/23893406/pexels-photo-23893406/free-photo-of-a-woman-is-painting-a-painting-on-a-canvas.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
    </>
  );
}

export default App;
