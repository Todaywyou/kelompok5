import { CodeXml } from "lucide-react";

function NavBar() {
  return (
    <header className="sticky top-0 border border-gray-300 bg-white/80">
      <div className="flex max-w-7xl mx-auto justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <CodeXml size={32} />
          
          <h1 className=" font-bold text-xl text-red-500">Sintak.</h1>
        </div>
        <ul className="hidden md:flex gap-8">
          <li><a href= "" className="hover:text-red-500">Tentang</a> </li>
          <li><a href=""className="hover:text-red-500">Materi</a> </li>
          <li><a href="/"className="hover:text-red-500">Home</a></li>
        </ul>
        <a href="" className="bg-red-400 px-4 py-2 text-white rounded-md hover:bg-red-200">Daftar sekarang</a>
      </div>
    </header>
  );
}

export default NavBar;
