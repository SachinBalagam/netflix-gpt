const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-[20%] px-12 absolute aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/4">{description}</p>
      <div>
        <button className="bg-white text-black text-xl px-12 py-3 mr-3 rounded-md cursor-pointer  hover:bg-opacity-50">
          Play
        </button>
        <button className="bg-gray-600 text-white hover:bg-opacity-50 text-xl px-12 py-3 rounded-md cursor-pointer ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
