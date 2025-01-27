"use client"
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="w-full  px-4 py-4 flex items-center justify-between">
      <div>
        <h1 className=" font-semibold text-gray-800">Good Afternoon, Andrew!</h1>
        <small>Here Are A Few Things To Get You Started</small>
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative cursor-pointer">
          <BellOutlined className="text-xl text-gray-600" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>
        <div className="relative">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
              <UserOutlined className="text-gray-600" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium text-gray-700">Andrew Williams</span>
              <span className="text-xs text-gray-500">Administrator</span>
            </div>
          </div>
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Settings
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Help
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                Sign out
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;