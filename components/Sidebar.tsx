const Sidebar = () => {
  return (
    <div className="flex min-h-screen w-56 flex-col bg-white pt-2 pb-6 shadow-lg">
      <ul className="space-y-2 tracking-wide">
        <li className="min-w-max">
          <a
            href="#"
            aria-label="dashboard"
            className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
          >
            <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                className="fill-current text-cyan-400 dark:fill-slate-600"
              ></path>
              <path
                d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                className="fill-current text-cyan-200 group-hover:text-cyan-300"
              ></path>
              <path
                d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                className="fill-current group-hover:text-sky-300"
              ></path>
            </svg>
            <span className="-mr-1 font-medium">Dashboard</span>
          </a>
        </li>
        <li className="min-w-max text-cyan-800">Row 2</li>
        <li className="min-w-max  text-cyan-800">Row 3</li>
        <li className="min-w-max  text-cyan-800">Row 4</li>
        <li className="min-w-max  text-cyan-800">Row 5</li>
        <li className="min-w-max  text-cyan-800">Row 5</li>
      </ul>
    </div>
  );
};

export default Sidebar;
