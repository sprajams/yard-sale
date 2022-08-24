import { useRouter } from "next/router";

const Categories = ({ data }) => {
  const router = useRouter();
  // user selection updates the query in the url
  const handleChange = (e) => {
    console.log(router);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, category: e.target.value },
    });
  };
  return (
    <div>
      <h2>All categories</h2>
      <ul>
        {data.length > 0 &&
          data.map((category, i) => {
            return (
              <li key={i}>
                <button onClick={handleChange} value={category.slug.current}>
                  {category.title}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Categories;
