import React, { useState } from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  // Tạo mảng các trang để render
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-5">
      <button
        onClick={handlePrevClick}
        className="px-4 py-2 text-sm font-semibold bg-gray-200  hover:bg-gray-300 disabled:bg-gray-400"
        disabled={currentPage === 1}
      >
        {'«'}
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`px-4 py-2 text-sm font-semibold  ${
            currentPage === page
              ? 'bg-green-800 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNextClick}
        className="px-4 py-2 text-sm font-semibold bg-gray-200  hover:bg-gray-300 disabled:bg-gray-400"
        disabled={currentPage === totalPages}
      >
        {'»'}
      </button>
    </div>
  );
};

export default Pagination;
