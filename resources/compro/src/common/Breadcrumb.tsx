"use client";

import React from "react";
import { Carousel } from "react-bootstrap";

type BreadcrumbProps = {
  title: string;
  subtitle: string;
  images: string[]; // array image untuk carousel
};

const Breadcrumb = ({ title, subtitle, images }: BreadcrumbProps) => {
  return (
    <div className="position-relative">
      {/* Carousel Background */}
      <Carousel
        fade
        controls={false}
        indicators={false}
        interval={3000}
        pause={false}
      >
        {images.map((img, idx) => (
          <Carousel.Item key={idx}>
            <div
              className="d-block w-100"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "50vh",
                // minHeight: "400px",
              }}
            ></div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Overlay Content */}
      <div
        className="container position-absolute top-50 start-50 translate-middle text-center text-white new-breadcrumb"
        style={{ zIndex: 100 }}
      >
        <h1 className="breadcrumb-title fw-bold " style={{ fontSize: "85px", marginBottom: "40px"}}>{title}</h1>
        <p className="lead mb-0">{subtitle}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
