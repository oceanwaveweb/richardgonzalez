const Loader = () => {
  return (
    <CutoutTextLoader
      background="black"
      imgUrl="https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  );
};

const CutoutTextLoader = ({
  background,
  imgUrl,
}: {
  background: string;
  imgUrl: string;
}) => {
  return (
    <div className="relative h-screen w-screen">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      />
      <div
        style={{ background }}
        className="absolute inset-0 animate-pulse z-10"
      />
      <span
        className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none flex items-center justify-center"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontSize: "clamp(3rem, 12vw, 10rem)",
        }}
      >
        Loading...
      </span>
    </div>
  );
};

export default Loader;
