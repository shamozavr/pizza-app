import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="280" rx="2" ry="2" width="280" height="24" />
    <circle cx="140" cy="140" r="130" />
    <rect x="0" y="330" rx="0" ry="0" width="280" height="72" />
    <rect x="0" y="428" rx="0" ry="0" width="280" height="44" />
  </ContentLoader>
);

export default Skeleton;
