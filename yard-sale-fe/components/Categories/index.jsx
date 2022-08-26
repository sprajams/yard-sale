import { useRouter } from "next/router";
import clsx from "clsx";
import styles from "./styles.module.scss";

const Categories = ({ data }) => {
  const router = useRouter();
  // user selection updates the query in the url
  const handleChange = (e) => {
    if (router.isReady && router.asPath.includes(e.target.value)) {
      //TODO: if category is already selected and selected again, category is untoggled by making it undefined. Can we remove category entirely?
      router.push({
        pathname: router.pathname,
        query: { ...router.query, category: undefined },
      });
    } else {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, category: e.target.value },
      });
    }
  };
  return (
    <div>
      <h2>All categories</h2>
      <ul>
        {data.length > 0 &&
          data.map((category, i) => {
            return (
              <li key={i}>
                <button
                  onClick={handleChange}
                  value={category.slug.current}
                  className={clsx(
                    styles.categoryBtn,
                    category.slug.current === router.query.category &&
                      styles.active
                  )}
                >
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
