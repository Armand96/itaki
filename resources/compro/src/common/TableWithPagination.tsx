"use client";

import React, { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";

// Sorting order type
export type Order = "asc" | "desc";

// Column definition (generic)
export interface Column<T = any> {
  key: keyof T & string;
  label: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
  /** Enable click-to-sort on this column */
  sortable?: boolean;
  /** Optional custom accessor for sorting */
  sortAccessor?: (row: T) => string | number | Date | null | undefined;
}

export interface TableWithPaginationProps<T = any> {
  columns: Column<T>[];
  data: T[];

  /** Current page (1-based) */
  currentPage: number;
  /** Total pages. Use either `pageCount` (preferred) or `lastPage` (legacy/alias). */
  pageCount?: number;
  lastPage?: number; // alias for pageCount (kept for compatibility)

  /** Callback when page changes. Receives 1-based page number */
  onPageChange: (page: number) => void;

  emptyMessage?: string;

  /** Sorting */
  serverSideSort?: boolean; // if true, we don't sort locally; we only emit onSortChange
  initialSort?: { key: keyof T & string; order?: Order };
  onSortChange?: (sort: { key: string; order: Order }) => void;
}

function isDate(x: any): x is Date {
  return x instanceof Date && !isNaN(x.valueOf());
}

function compareValues(a: any, b: any): number {
  // Normalize nullish
  if (a == null && b == null) return 0;
  if (a == null) return -1;
  if (b == null) return 1;

  // Date
  if (isDate(a) && isDate(b)) return a.getTime() - b.getTime();

  // Number (or numeric string)
  const na = typeof a === "number" ? a : Number(a);
  const nb = typeof b === "number" ? b : Number(b);
  if (!Number.isNaN(na) && !Number.isNaN(nb) && (typeof a === "number" || typeof b === "number")) {
    return na - nb;
  }

  // Fallback to string compare with numeric-aware localeCompare
  return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: "base" });
}

export default function TableWithPagination<T extends Record<string, any>>({
  columns,
  data,
  currentPage,
  pageCount,
  lastPage,
  onPageChange,
  emptyMessage = "Tidak ada data",
  serverSideSort = false,
  initialSort,
  onSortChange,
}: TableWithPaginationProps<T>) {
  const totalPages = Math.max(1, lastPage ?? pageCount ?? 1);

  // Sorting state (client-side by default)
  const [sortKey, setSortKey] = useState<string | null>(initialSort?.key ?? null);
  const [sortOrder, setSortOrder] = useState<Order>(initialSort?.order ?? "asc");

  const handleHeaderClick = (col: Column<T>) => {
    if (!col.sortable) return;

    const nextOrder: Order = sortKey === col.key ? (sortOrder === "asc" ? "desc" : "asc") : "asc";
    const nextKey = String(col.key);

    setSortKey(nextKey);
    setSortOrder(nextOrder);

    if (serverSideSort) {
      onSortChange?.({ key: nextKey, order: nextOrder });
    }
  };

  const sortedData = useMemo(() => {
    if (serverSideSort || !sortKey) return data;

    const col = columns.find((c) => String(c.key) === sortKey);
    if (!col) return data;

    const accessor = col.sortAccessor
      ? (row: T) => col.sortAccessor!(row)
      : (row: T) => row[sortKey as keyof T];

    return [...data].sort((a, b) => {
      const cmp = compareValues(accessor(a), accessor(b));
      return sortOrder === "asc" ? cmp : -cmp;
    });
  }, [data, serverSideSort, sortKey, sortOrder, columns]);

  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered align-middle mb-0">
        <thead>
          <tr style={{ whiteSpace: "nowrap", backgroundColor: "#2920D2", color: "#ffffff" }}>
            {columns.map((col) => {
              const isActive = sortKey === String(col.key);
              const ariaSort = col.sortable ? (isActive ? (sortOrder === "asc" ? "ascending" : "descending") : "none") : undefined;
              return (
                <th
                  key={String(col.key)}
                  onClick={() => handleHeaderClick(col)}
                  aria-sort={ariaSort as any}
                  style={{ cursor: col.sortable ? "pointer" : undefined, userSelect: "none" }}
                  scope="col"
                >
                  <span className="d-inline-flex align-items-center gap-1">
                    {col.label}
                    {col.sortable && (
                      <span aria-hidden>
                        {isActive ? (sortOrder === "asc" ? "▲" : "▼") : "↕"}
                      </span>
                    )}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sortedData?.length > 0 ? (
            sortedData.map((row, idx) => (
              <tr key={idx}>
                {columns.map((col) => (
                  <td key={String(col.key)}>
                    {col.render ? col.render(row[col.key], row) : (row[col.key] as any)}
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
        <small className="text-muted">Page {Math.min(currentPage, totalPages)} of {totalPages}</small>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={totalPages}
          onPageChange={(e) => onPageChange(e.selected + 1)} // convert 0-based -> 1-based
          forcePage={Math.max(0, Math.min(totalPages - 1, (currentPage || 1) - 1))}
          containerClassName="pagination mb-0"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
          disabledClassName="disabled"
        />
      </div>
    </div>
  );
}
