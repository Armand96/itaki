"use client"

import { useState } from "react";
import ReactPaginate from "react-paginate";

interface SeminarData {
  namaEvent: string;
  tglEvent: string;
  statusEvent: string;
  detail: string;
}

const SeminarTable = () => {
  const allData: SeminarData[] = Array.from({ length: 40 }).map((_, i) => ({
    namaEvent: `Event ${i + 1}`,
    tglEvent: `2025-08-${String((i % 30) + 1).padStart(2, "0")}`,
    statusEvent: i % 2 === 0 ? "Aktif" : "Selesai",
    detail: "Detail informasi",
  }));

  const itemsPerPage = 5;
  const pageCount = Math.ceil(allData.length / itemsPerPage);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentData = allData.slice(itemOffset, endOffset);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % allData.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="container py-5">
      {/* Filter Tanggal */}
      <div className="row mb-4 g-3">
        <div className="col-auto">
          <input type="date" className="form-control shadow-sm px-3" />
        </div>
        <div className="col-auto">
          <input type="date" className="form-control shadow-sm  px-3" />
        </div>
      </div>

      {/* Tabel */}
      <div className="table-responsive shadow-sm rounded">
        <table className="table table-hover table-bordered align-middle mb-0">
          <thead className="table-primary">
            <tr>
              <th className="text-center">Nama Event</th>
              <th>Tgl Event</th>
              <th>Status Event</th>
              <th className="text-center">Detail</th>
            </tr>
          </thead>
          <tbody>
            {currentData.length ? currentData.map((item, idx) => (
              <tr key={idx}>
                <td className="fw-medium text-center">{item.namaEvent}</td>
                <td>{item.tglEvent}</td>
                <td>
                  <span className={`badge  text-center ${item.statusEvent === "Aktif" ? "bg-success" : "bg-secondary"}`}>
                    {item.statusEvent}
                  </span>
                </td>
<td className="text-center">
        <button className="btn btn-sm btn-outline-primary rounded-pill px-3">
          Detail
        </button>
      </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={4} className="text-center py-4">Tidak ada data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Info Halaman */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <small className="text-muted">
          Page {Math.floor(itemOffset / itemsPerPage) + 1} from {pageCount}
        </small>

        {/* React Paginate */}
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="<"
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default SeminarTable;
