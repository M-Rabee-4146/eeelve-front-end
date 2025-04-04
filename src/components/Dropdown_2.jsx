import React, { useState, useRef, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { ChevronRight } from "lucide-react";

const Dropdown_2 = () => {
  const Department_ids = [
    { id: "1", name: "1st product" },
    { id: "2", name: "2nd product", subMenu: [{ id: "2-1", name: "Sub Product 1" }, { id: "2-2", name: "Sub Product 2" }] },
    { id: "3", name: "3rd product" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const dropdownRef = useRef(null);
  let closeTimer = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setOpenSubMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Delayed submenu close function
  const handleMenuLeave = () => {
    closeTimer.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // Short delay to allow moving to submenu
  };
  // Delayed submenu close function
  const handleSubMenuLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpenSubMenu(null);
    }, 200); // Short delay to allow moving to submenu
  };

  const handleSubMenuEnter = () => {
    clearTimeout(closeTimer.current);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Dropdown Trigger Button */}
      <button
        type="button"
        className="inline-flex justify-center items-center text-md px-4 py-2 bg-amber-400 border font-semibold pr-20 border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
        onMouseEnter={() => setIsOpen(true)}
      >
        <Bars3Icon className="size-5 mx-2 font-bold" /> All Departments
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            {Department_ids.map((dept) => (
              <MenuItem
                key={dept.id}
                text={dept.name}
                hasSubMenu={!!dept.subMenu}
                onMouseEnter={() => {
                  setOpenSubMenu(dept.id);
                  handleSubMenuEnter();
                }}
                onMouseLeave={handleMenuLeave}
              >
                {dept.subMenu && openSubMenu === dept.id && (
                  <div
                    className="absolute left-full top-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    onMouseEnter={handleSubMenuEnter}
                    onMouseLeave={handleSubMenuLeave}
                  >
                    <div className="py-1">
                      {dept.subMenu.map((sub) => (
                        <MenuItem key={sub.id} text={sub.name} />
                      ))}
                    </div>
                  </div>
                )}
              </MenuItem>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Menu Item Component
function MenuItem({ text, hasSubMenu = false, children, ...props }) {
  return (
    <div className="relative">
      <button
        className="w-full text-left px-4 py-2 text-sm flex justify-between items-center text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        {...props}
      >
        <span>{text}</span>
        {hasSubMenu && <ChevronRight className="size-4 text-gray-600" />}
      </button>
      {children}
    </div>
  );
}

export default Dropdown_2;
