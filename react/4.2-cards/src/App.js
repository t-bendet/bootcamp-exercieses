import Card from "./Card";
import "./App.css";
function App() {
  return (
    <div className="container">
      <Card
        image="https://robohash.org/26/?set=set3"
        title="some title"
        description="i am describing"
        link1="https://en.wikipedia.org/wiki/Hapoel_Be%27er_Sheva_B.C."
        linkDescription1="yalla hapoel"
        link2="https://en.wikipedia.org/wiki/Hapoel_Be%27er_Sheva_B.C."
        linkDescription2="yalla hapoel"
      />
      <Card
        image="https://robohash.org/26/?set=set2"
        title="another title"
        description="i am not describing"
        link1="https://en.wikipedia.org/wiki/Hapoel_Be%27er_Sheva_B.C."
        linkDescription1="yalla hapoel"
        link2="https://en.wikipedia.org/wiki/Hapoel_Be%27er_Sheva_B.C."
        linkDescription2="yalla hapoel"
      />
      <Card
        image="https://robohash.org/26/?set=set4"
        title="ninja cat"
        description="mewwowowowowo"
        link1="https://en.wikipedia.org/wiki/Hapoel_Be%27er_Sheva_B.C."
        linkDescription1="yalla hapoel"
        link2="https://en.wikipedia.org/wiki/Hapoel_Be%27er_Sheva_B.C."
        linkDescription2="yalla hapoel"
      />
    </div>
  );
}

export default App;
