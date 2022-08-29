import ListingTile from "../../components/ListingTile";
import HomeIcon from "../../components/HomeIcon";

const Category = ({ category, slug }) => {
  return (
    <div>
      <h2>
        <HomeIcon />
        category: <span>{slug}</span>
      </h2>
      {category.length > 0 &&
        category.map((post, i) => {
          return (
            <div key={i}>
              <ListingTile data={post} />
            </div>
          );
        })}
    </div>
  );
};

export default Category;
