import React from "react";
import Text from "./Text";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta non a voluptas. Itaque aliquam modi, veritatis libero ipsum quae quis reiciendis accusantium reprehenderit aliquid, ullam sunt excepturi animi aut?";

const App = () => {
  return (
    <div>
      <Text string={lorem + lorem + lorem} maxLength={250} />
    </div>
  );
};

export default App;
