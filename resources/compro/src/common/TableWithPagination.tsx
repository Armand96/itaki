"use client";

import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";

export type Order = "asc" | "desc";

export interface Column<T = any> {
  key: keyof T & string;
  label: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
    width?: string;       // contoh: "200px"
  sortable?: boolean;
  sortAccessor?: (row: T) => string | number | Date | null | undefined;
}

export interface TableWithPaginationProps<T = any> {
  columns: Column<T>[];
  data: T[];

  /** Current page (1-based) */
  currentPage: number;
  pageCount?: number;
  lastPage?: number; // alias
  onChangeRows: (pageSize: number) => void;

  onPageChange: (page: number) => void;

  emptyMessage?: string;

  /** Sorting */
  serverSideSort?: boolean;
  initialSort?: { key: keyof T & string; order?: Order };
  onSortChange?: (sort: { key: string; order: Order }) => void;
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
  onChangeRows,
}: TableWithPaginationProps<T>) {
  const totalPages = Math.max(1, lastPage ?? pageCount ?? 1);

  // mapping columns ke format react-data-table-component
  const mappedColumns: TableColumn<T>[] = columns.map((col) => ({
    name: col.label,
    selector: (row: T) => {
      if (col.sortAccessor) return col.sortAccessor(row) as any;
      return row[col.key];
    },
     width: col.width,
    sortable: !!col.sortable,
    cell: (row: T) =>
      col.render ? col.render(row[col.key], row) : (row[col.key] as any),
  }));

const customStyles = {
  table: {
    style: {
      border: "2px solid #ccc",
    },
  },
  headRow: {
    style: {
      borderBottom: "2px solid #ccc",
    },
  },
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: "bold",
      borderRight: "2px solid #ccc",
      borderBottom: "2px solid #ccc",
    },
  },
  rows: {
    style: {
      minHeight: "56px",
      borderBottom: "1.5px solid #ccc",
    },
  },
  cells: {
    style: {
      fontSize: "15px",
      borderRight: "1.5px solid #ccc",
    },
  },
};


  return (
    <DataTable
      columns={mappedColumns}
      data={data}
      persistTableHead
      noDataComponent={emptyMessage}
      highlightOnHover
      striped
      responsive
        customStyles={customStyles}
      /** Pagination */
      pagination
      paginationServer={true}
      paginationPerPage={pageCount}
      paginationTotalRows={totalPages}
      paginationDefaultPage={currentPage}
    onChangeRowsPerPage={(pageCount) => onChangeRows(pageCount)}
      onChangePage={(page) => onPageChange(page)}
      /** Sorting */
      sortServer={serverSideSort}
      onSort={(column, sortDirection) => {
        if (serverSideSort) {
          onSortChange?.({
            key: column.selector as string,
            order: sortDirection as Order,
          });
        }
      }}
      defaultSortFieldId={
        initialSort ? String(initialSort.key) : undefined
      }
      defaultSortAsc={initialSort?.order !== "desc"}
    />
  );
}
