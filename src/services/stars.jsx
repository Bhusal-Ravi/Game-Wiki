const SharpStar = ({ className, fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill={fill} className={className}>
    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
  </svg>
)
const maxStars = 5
export function starsGen(rating) {
  const stars = []
  const roundedRating = Math.round(rating * 2) / 2

  for (let i = 1; i <= maxStars; i++) {
    if (i <= roundedRating) {
      stars.push(<SharpStar key={i} fill="#FBBF24" />)
    } else if (i - 0.5 === roundedRating) {
      stars.push(
        <div key={i} style={{ position: "relative" }}>
          <SharpStar fill="#D1D5DB" />
          <div style={{ position: "absolute", inset: 0, overflow: "hidden", width: "50%" }}>
            <SharpStar fill="#FBBF24" />
          </div>
        </div>,
      )
    } else {
      stars.push(<SharpStar key={i} fill="#D1D5DB" />)
    }
  }

  return <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>{stars}</div>
}




