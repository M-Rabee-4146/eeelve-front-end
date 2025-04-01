import { useState, useRef, useEffect } from "react"

// Main Dropdown Component
export function CustomDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
        setIsSubMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle keyboard navigation
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false)
        setIsSubMenuOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Dropdown Trigger Button */}
      <button
        type="button"
        className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-700 bg-blue-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        onClick  ={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Open
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-20 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {/* Menu Label */}
            <div className="px-4 py-2 text-sm text-gray-700 font-medium border-b">My Account</div>

            {/* Menu Group 1 */}
            <div className="py-1">
              <MenuItem text="Profile" shortcut="⇧⌘P" />
              <MenuItem text="Billing" shortcut="⌘B" />
              <MenuItem text="Settings" shortcut="⌘S" />
              <MenuItem text="Keyboard shortcuts" shortcut="⌘K" />
            </div>

            {/* Separator */}
            <div className="h-px bg-gray-200 my-1"></div>

            {/* Menu Group 2 */}
            <div className="py-1">
              <MenuItem text="Team" />

              {/* Submenu */}
              <div className="relative">
                <button
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between items-center"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsSubMenuOpen(!isSubMenuOpen)
                  }}
                >
                  Invite users
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {isSubMenuOpen && (
                  <div className="absolute left-full top-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <MenuItem text="Email" />
                      <MenuItem text="Message" />
                      <div className="h-px bg-gray-200 my-1"></div>
                      <MenuItem text="More..." />
                    </div>
                  </div>
                )}
              </div>

              <MenuItem text="New Team" shortcut="⌘+T" />
            </div>

            {/* Separator */}
            <div className="h-px bg-gray-200 my-1"></div>

            {/* Menu Group 3 */}
            <div className="py-1">
              <MenuItem text="GitHub" />
              <MenuItem text="Support" />
              <MenuItem text="API" disabled={true} />
            </div>

            {/* Separator */}
            <div className="h-px bg-gray-200 my-1"></div>

            {/* Menu Group 4 */}
            <div className="py-1">
              <MenuItem text="Log out" shortcut="⇧⌘Q" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Menu Item Component
function MenuItem({ text, shortcut, disabled = false }) {
  const baseClasses = "w-full text-left px-4 py-2 text-sm flex justify-between items-center"
  const activeClasses = disabled
    ? "text-gray-400 cursor-not-allowed"
    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"

  return (
    <button className={`${baseClasses} ${activeClasses}`} disabled={disabled} role="menuitem">
      <span>{text}</span>
      {shortcut && <span className="ml-2 text-xs text-gray-500">{shortcut}</span>}
    </button>
  )
}

export default CustomDropdownMenu;