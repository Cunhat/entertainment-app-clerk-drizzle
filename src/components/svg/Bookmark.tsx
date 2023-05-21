import React from "react"

export const Bookmark: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="12"
      height="14"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
        stroke="#FFF"
        stroke-width="1.5"
      />
    </svg>
  )
}
