import Box4 from "./Box4";

function Box3() {
  return (
    <div
      className="box last"
      style={{ backgroundColor: "pink", height: "300px", width: "300px" }}
    >
      <Box4></Box4>
      <Box4></Box4>
    </div>
  );
}

export default Box3;
