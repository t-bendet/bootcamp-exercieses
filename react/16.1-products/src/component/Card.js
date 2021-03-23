import { Link } from "react-router-dom";
const Card = ({ data }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={data.imageUrl} alt="oh shinnyyyy" />
      </div>
      <div className="content">
        <h4 className="header">{data.title}</h4>
        <div class="meta">
          <span class="date">{data.price} $</span>
        </div>
      </div>
      <Link className="ui basic green button" to="/products">
        <button>Back</button>
      </Link>
    </div>
  );
};
export default Card;
