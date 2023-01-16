import { useQuery, UseQueryResult } from "react-query";
import { Link } from "react-router-dom";
import "../../css/components/Navbar.css";
import ICategory from "../../models/ICategory";

export default function CategoriesDropdown() {
  const allCategories = async () => {
    const res = await fetch("http://localhost:8080/api/all/categories", {
      method: "GET",
      mode: "cors",
    });
    return res.json();
  };

  const { isLoading, isError, data, error }: UseQueryResult<ICategory[], Error> = useQuery<ICategory[], Error>(
    "categories",
    allCategories
  );

  if (isError) {
    // Display error in snackbox
    return <div className="dropdown-content-left"></div>;
  }

  if (isLoading) {
    <div className="dropdown-content-left">
      <p>Loading...</p>
    </div>;
  }

  return (
    <div className="dropdown-content-left">
        {data?.map((category) => (
            <Link key={category.id} to={`/c/${category.name}`}>{category.name}</Link>
        ))}
    </div>
  );
}
