import "./Search.css";

const Search = (props) => {
  return (
    <div className="bar">
      <input type="text" onChange={(e) => props.onChange(e.target.value)} />
    </div>
  );
};

export default Search;
