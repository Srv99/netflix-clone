const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video pt-[10%] px-14 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-4 text-lg w-1/4 text-white">{description}</p>
      <div>
        <button className="bg-white hover:bg-red-700 hover:text-white text-black text-xl hover:bg-opacity-80 px-8 w-40 mx-2 rounded-md">
          ▶️ Play
        </button>
        <button className="bg-gray-600 hover:bg-white hover:text-black text-white px-8 wx-40 text-xl hover:bg-opacity-80 rounded-md">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
