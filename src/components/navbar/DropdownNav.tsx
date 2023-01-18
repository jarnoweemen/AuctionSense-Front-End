import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useQuery, UseQueryResult } from "react-query";
import { Link } from "react-router-dom";
import ICategory from "../../models/ICategory";

export default function DropdownNav() {
  const { enqueueSnackbar } = useSnackbar();

  const allCategories = async () => {
    const res = await fetch("http://localhost:8080/api/all/categories", {
      method: "GET",
      mode: "cors",
    });
    return res.json();
  };

  const {
    isLoading,
    isError,
    data,
    error,
  }: UseQueryResult<ICategory[], Error> = useQuery<ICategory[], Error>(
    "categories",
    allCategories
  );

  const toggleDropdown = () => {
    document.querySelector(".dropdownContent")?.classList.toggle("hidden");
  };

  useEffect(() => {
    if (isError) {
      enqueueSnackbar(error.name, {
        variant: "error",
        autoHideDuration: 5000,
        anchorOrigin: { vertical: "top", horizontal: "center" },
      });
    }
  }, [isError, error]);

  if (isError) {
    return (
      <div>
        <div className="dropdown-content-left">
          Currently no categories available
        </div>
      </div>
    );
  }

  if (isLoading) {
    <div className="dropdown-content-left">
      <p>Loading...</p>
    </div>;
  }

  return (
    <div className="dropdown hover:bg-orange-400 rounded">
      <button className="dropdownbtn w-full p-2 flex items-center" onClick={toggleDropdown}>
        Categories
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div className="dropdownContent hidden absolute z-10 bg-gray-200 text-black w-40">
        {data?.map((category) => (
          <Link
            className="block float-none"
            key={category.id}
            to={`/c/${category.name}`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
