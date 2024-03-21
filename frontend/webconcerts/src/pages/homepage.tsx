import React from 'react';

export default function Home() {
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
          <header className="mb-4">
            <h1 className="mx-8 text-lg font-semibold text-gray-900 dark:text-black">Admin</h1>
          </header>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-300 group"
              >
                <span className="ms-3">Home</span>
              </a>
            </li>
            <li>
              <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-300 group w-full text-left">
                <span className="ms-3">History</span>
              </button>
            </li>
            <li>
              <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-300 group w-full text-left">
                <span className="ms-3">User</span>
              </button>
            </li>
            <li>
              <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-white dark:hover:bg-gray-300 group w-full text-left">
                <span className="ms-3">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-6 sm:ml-64 ">

        <div className="flex justify-between mb-6 gap-5">
          <div className="w-1/3 bg-blue-700 p-4 rounded-lg">
            {/* Content for Box 1 */}
          </div>
          <div className="w-1/3 bg-teal-500 p-4 rounded-lg">
            {/* Content for Box 2 */}
          </div>
          <div className="w-1/3 bg-red-600 p-4 rounded-lg">
            {/* Content for Box 3 */}
          </div>
        </div>

        <div className="flex justify">
          <button className="px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            Overview
          </button>
          <button className="px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            Create
          </button>
        </div>

      </div>
    </div>
  );
}
