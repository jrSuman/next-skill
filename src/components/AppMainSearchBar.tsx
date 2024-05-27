const AppMainSearchBar = () => {
  return (
    <div className="relative w-full border rounded-full overflow-hidden h-12">
      <input
        type="text"
        className="appearance-none grow w-full peer border-0 h-full bg-white/0 transition-all outline-0 active:outline-0 focus:outline-0 pl-12 pr-3"
        placeholder="What you want to learn."
      />
      <div className="absolute top-1/2 -translate-y-1/2 left-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </div>
    </div>
  );
};

export default AppMainSearchBar;
