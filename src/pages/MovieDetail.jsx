import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { IMG_BASE_URL } from "../components/Movie";

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();

  return (
    <div className="pageDetail-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: "100px",
          paddingRight: "500px",
        }}
      >
        <img
          style={{
            width: "300px",
            height: "450px",
            padding: " 0 20px",
          }}
          src={IMG_BASE_URL + state.poster_path}
          alt="영화포스터 이미지"
        />
        <div
          style={{
            display: "flex",
            gap: "60px",
            lineHeight: "60px",
          }}
        >
          <div
            style={{
              fontSize: "32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p>제목</p>
            <p>평점</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "32px" }}>{title}</div>
            <span style={{ fontSize: "32px" }}>{state.vote_average}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
