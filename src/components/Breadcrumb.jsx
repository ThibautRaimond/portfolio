import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <nav
      aria-label="fil d'ariane"
      className="w-screen -ml-[calc((100vw-100%)/2)] pl-8 py-4"
    >
      <ol className="flex items-center gap-1">
        <li className="p-0 m-0">
          <Link
            to="/profil"
            className="text-[#D4D4D4] underline"
          >
            Profil
          </Link>
        </li>
        <li className="p-0 m-0 px-1">
          <span aria-hidden="true" className="text-[#D4D4D4]">
            &gt;
          </span>
        </li>
        <li
          aria-current="page"
          className="text-[#07ed66] cursor-default p-0 m-0"
        >
          CV en ligne
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
