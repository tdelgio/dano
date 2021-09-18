import React from "react"

export const MenuIcon = ({ display }) => {
  return display === "block" ? (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          fill="#5F6368"
        />
      </svg>
    </div>
  ) : (
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition ease-in delay-100"
        >
          <path
            d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
            fill="#5F6368"
          />
        </svg>
      </div>
    );
};

export const WorkIcon = () => (
  <svg
    width="40"
    height="38"
    viewBox="0 0 40 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 8V4H16V8H24ZM4 12V34H36V12H4ZM36 8C38.22 8 40 9.78 40 12V34C40 36.22 38.22 38 36 38H4C1.78 38 0 36.22 0 34L0.02 12C0.02 9.78 1.78 8 4 8H12V4C12 1.78 13.78 0 16 0H24C26.22 0 28 1.78 28 4V8H36Z"
      fill="#5F6368"
    />
  </svg>
)

export const Turn = () => (
  <svg
    width="36"
    height="40"
    viewBox="0 0 36 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 16L27.18 13.16L14 26.34L8.82 21.18L6 24L14 32L30 16ZM32 4H23.64C22.8 1.68 20.6 0 18 0C15.4 0 13.2 1.68 12.36 4H4C3.72 4 3.46 4.02 3.2 4.08C2.42 4.24 1.72 4.64 1.18 5.18C0.82 5.54 0.52 5.98 0.32 6.46C0.12 6.92 0 7.44 0 8V36C0 36.54 0.12 37.08 0.32 37.56C0.52 38.04 0.82 38.46 1.18 38.84C1.72 39.38 2.42 39.78 3.2 39.94C3.46 39.98 3.72 40 4 40H32C34.2 40 36 38.2 36 36V8C36 5.8 34.2 4 32 4ZM18 3.5C18.82 3.5 19.5 4.18 19.5 5C19.5 5.82 18.82 6.5 18 6.5C17.18 6.5 16.5 5.82 16.5 5C16.5 4.18 17.18 3.5 18 3.5ZM32 36H4V8H32V36Z"
      fill="#5F6368"
    />
  </svg>
)
