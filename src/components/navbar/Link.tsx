import { Link } from "react-router-dom";
import ILink from "../../models/ILink";

export default function LinkNav({name, link}: ILink ) {
  return (
    <div>
      <Link className="hover:bg-orange-400 p-2 rounded" to={link}>
        {name}
      </Link>
    </div>
  );
}
