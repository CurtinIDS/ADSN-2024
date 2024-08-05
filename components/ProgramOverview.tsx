const ProgramOverview = () => {
  return (
    <div className="px-4 py-8 bg-gray-300 justify-center items-center w-full">
      <h1 className="text-center font-extrabold tracking-wide text-4xl">
        PROGRAM OVERVIEW
      </h1>
      <h3 className="text-green-button text-center font-extrabold text-xl">
        ADSN CONFERENCE 2024
      </h3>
      <div className="flex flex-col md:flex-row text-white">
        <div className="bg-blue-navbar p-4 m-2 rounded-lg flex-1">
          <h4 className="font-bold">MONDAY 2 DECEMBER, 2024</h4>
          <ul className="list-disc list-outside marker:text-green-button">
            <li>Curtin University, Bentley Campus</li>
            <li>Keynote presentations and panel discussions</li>
            <li>Poster sessions</li>
            <li>Morning tea, lunch and afternoon tea</li>
          </ul>
        </div>
        <div className="bg-blue-navbar p-4 m-2 rounded-lg flex-1">
          <h4 className="font-bold">TUESDAY 3 DECEMBER, 2024</h4>
          <ul className="list-disc list-outside marker:text-green-button">
            <li>Curtin University, Bentley Campus</li>
            <li>Keynote presentations and panel discussions</li>
            <li>Poster sessions</li>
            <li>Morning tea, lunch and Sundowner with tea</li>
          </ul>
        </div>
        <div className="bg-blue-navbar p-4 m-2 rounded-lg flex-1">
          <h4 className="font-bold">WEDNESDAY 4 DECEMBER, 2024</h4>
          <ul className="list-disc list-outside marker:text-green-button">
            <li>The Hub, Bentley Technology Park</li>
            <li>Pawsey Supercomputer Tour</li>
            <li>Industry Engagement sessions</li>
            <li>Morning tea, lunch and afternoon tea</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgramOverview;
