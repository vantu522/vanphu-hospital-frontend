const Topbar = () => {
    const handleLogout = () => {
      localStorage.removeItem("token");
      window.location.href = "/login";
    };
  
    return (
      <header className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
        >
          Logout
        </button>
      </header>
    );
  };
  
  export default Topbar;
  