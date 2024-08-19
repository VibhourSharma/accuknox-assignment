const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <div className="flex items-center space-x-2">
        <span href="#" className="text-gray-800 font-bold text-lg">
          Dashboard V24
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="search"
          placeholder="Search widgets..."
          className="px-4 py-2 text-sm border rounded-md outline-none"
        />
        <button className="px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-md">
          + Add Widget
        </button>
        <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-md">
          ...
        </button>
        <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-md">
          Last 2 days
        </button>
      </div>
    </header>
  );
};

export default Header;
