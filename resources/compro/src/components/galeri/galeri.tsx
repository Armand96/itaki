"use client";
import useLoading from "@/store/useLoading";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { Modal, Button } from "react-bootstrap";
import FetchData from "../../../services/FetchData";

export const portfolio_filters = [
  { label: "All", value: "*" },
  { label: "Business", value: "business" },
  { label: "Consulting", value: "consultancy" },
  { label: "Creative", value: "security" },
];

export default function GaleriArea() {
  const setLoading = useLoading((state) => state.setLoading);
  const [dataList, setDataList] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLocalLoading] = useState(false);

  // State modal
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedDesc, setSelectedDesc] = useState<string | null>(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (img: string, desc: string) => {
    setSelectedImage(img);
    setSelectedDesc(desc);
    setShowModal(true);
  };

  const fetchGallery = useCallback(async () => {
    if (loading || !hasMore) return;
    setLocalLoading(true);
    try {
      const res = await FetchData.GetGalleri(`?data_per_page=10&page=${page}`);
      if (res?.data?.length) {
        setDataList((prev) => [...prev, ...res.data]);
        if (res.data.length < 10) setHasMore(false);
      } else {
        setHasMore(false);
      }
    } finally {
      setLocalLoading(false);
      setLoading(false);
    }
  }, [page, loading, hasMore, setLoading]);

  useEffect(() => {
    fetchGallery();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 300 &&
        hasMore &&
        !loading
      ) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  return (
    <>
      <div className="luminix-padding-section">
        <div className="container">
          <div className="luminix-section-title center">
            <h2 style={{ fontSize: "36px" }}>Galleri dari kegiatan Kami</h2>
          </div>
          <div
            className="row luminix-portfolio-column"
            id="luminix-portfolio-grid"
          >
            {dataList.map((item: any) => (
              <div
                key={item.id}
                className="col-xl-6 col-lg-6 col-md-6 col-sm-6 collection-grid-item"
              >
                <div className="luminix-p-wrap wrap2">
                  <div
                    className="luminix-p-thumb"
                    role="button"
                    onClick={() =>
                      handleShow(
                        `${process.env.NEXT_PUBLIC_URL}storage/${item?.image}`,
                        item.description
                      )
                    }
                  >
                    <Image
                      width={550}
                      height={550}
                      src={`${process.env.NEXT_PUBLIC_URL}storage/${item?.image}`}
                      alt={item.title}
                    //   className="img-fluid"
                    />
                    <div className="luminix-p-content">
                      <h5>{item.description}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ textAlign: "center", width: "100%" }}>
                <p>Loading...</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Body className="text-center">
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Preview"
              width={900}
              height={900}
              className="img-fluid"
            />
          )}
          {selectedDesc && <p className="mt-3">{selectedDesc}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
