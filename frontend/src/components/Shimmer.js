import "./style.css";

const Shimmer = () => {
  return (
    <div>
      <div className="card pulse">
        <div className="shimmerBG media"></div>
        <div className="p-32">
          <div className="shimmerBG title-line"></div>
          <div className="shimmerBG title-line end"></div>

          <div className="shimmerBG content-line m-t-24"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line end"></div>
        </div>
      </div>
    </div>
  );
};

const ShimmerMain = () => {
  return (
    <div className="row mb-3">
      <div className="   ">
        {Array.from({ length: 3 }, () => (
          <div className="card-body  ">
            <Shimmer />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerMain;
