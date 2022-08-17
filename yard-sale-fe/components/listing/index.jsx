const Listing = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h3>{data.title}</h3>
      <ul>
        Categories
        {data.categories.length > 0 &&
          data.categories.map((category, i) => {
            return <li key={i}>{category.title}</li>;
          })}
      </ul>
    </div>
  );
};

export default Listing;
