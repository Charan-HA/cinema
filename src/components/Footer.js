import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800 dark:border-t-2 dark:border-gray-700 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="http://www.instagram.com/char.an4636/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Instagram</a>
            </li>
            <li>
                <a href="http://www.linkedin.com/char.an4636" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">LinkedIn</a>
            </li>
            <li>
                <a href="http://www.youtube.com/char.an4636" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Youtube</a>
            </li>
            <li>
                <a href="https://github.com/Charan-HA" target="_blank" rel="noreferrer" className="hover:underline">Github</a>
            </li>
        </ul>
        </div>
    </footer>
  )
}
