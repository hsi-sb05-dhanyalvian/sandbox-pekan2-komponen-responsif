const Navbar = () => {
  return (
    <nav className="
      fixed flex
      px-5 py-3 z-50
      w-full
      justify-between
      border-b border-b-lucide-border
      bg-lucide-nav
      shadow-xs
    ">
      <div className="container mx-auto md:px-4 relative flex items-center justify-between">
        <div className="flex flex-1 font-lg font-bold text-lucide-title">
          Apple Watch SE
        </div>
        
        <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0n mx-auto">
          <button className="
            px-3 py-1
            bg-lucide-red
            text-white text-xs
            cursor-pointer transition-colors
            rounded-full
            shadow-md
          ">
            Beli
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
