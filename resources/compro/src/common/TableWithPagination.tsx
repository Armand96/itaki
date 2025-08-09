"use client";

import React from "react";
import ReactPaginate from "react-paginate";

interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface TableWithPaginationProps {
  columns: Column[];
  data: any[];
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  emptyMessage?: string;
}

export default function TableWithPagination({
  columns,
  data,
  currentPage,
  pageCount,
  onPageChange,
  emptyMessage = "Tidak ada data",
}: TableWithPaginationProps) {
  return (
    <div className="table-responsive rounded">
      <table className="table table-bordered align-middle mb-0">
        <thead>
          <tr style={{ whiteSpace: "nowrap"}}>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, idx) => (
              <tr key={idx}>
                {columns.map((col) => (
                  <td key={col.key}>
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center py-4">
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <small className="text-muted">
          Page {currentPage + 1} from {pageCount}
        </small>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={(e) => onPageChange(e.selected)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="<"
          containerClassName="pagination mb-0"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </div>

      <style jsx>{`
        table thead {
          background-color: #2920d2;
          color: white;
        }
        .page-link {
          color: white;
          background-color: #2920d2;
          border: none;
        }
        .page-item.active .page-link {
          background-color: #150ea8;
        }
      `}</style>
    </div>
  );
}
