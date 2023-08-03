import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="h-screen max-w-7xl mx-auto"
      style={{
        backgroundImage:
          "url(https://iotcdn.oss-ap-southeast-1.aliyuncs.com/subjects-in-arts.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full backdrop-blur-sm bg-gray-400/25 flex items-center justify-center">
        <div>
          <button className="px-7 py-4 rounded text-xl uppercase font-medium bg-white text-red-500">
            <Link href="/">View Subjects</Link>
          </button>
          <button className="px-7 py-4 rounded text-xl uppercase font-medium text-white bg-red-500 ml-3">
            <Link href="/addSubject">Add Subjects</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
