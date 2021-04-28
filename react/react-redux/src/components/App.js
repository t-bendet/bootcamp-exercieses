import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div>
          <SongDetail className="column eight wide" />
        </div>
      </div>
    </div>
  );
};

export default App;
