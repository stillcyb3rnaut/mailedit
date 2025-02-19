// components/Navbar.tsx
import { Menu } from "./Menu";
  
export function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-around items-center shadow-sm">
      {/* "mailed it." text */}
      <div className="font-bold text-white lowercase text-lg">mailed it.</div>

      {/* Menu component */}
      <Menu />
 
      
    </nav>
  );
}