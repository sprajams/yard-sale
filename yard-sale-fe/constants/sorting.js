export const SORT_QUERY_PARAM_KEY = "sort";
export const SORT_OPTIONS = [
  { value: "new", label: "Newest", groq: "updatedTime" },
  { value: "low", label: "Price: Low to High", groq: "price" },
  { value: "high", label: "Price: High to Low", groq: "price desc" },
  { value: "a-z", label: "A to Z", groq: "title" },
  { value: "z-a", label: "Z to A", groq: "title desc" },
];
