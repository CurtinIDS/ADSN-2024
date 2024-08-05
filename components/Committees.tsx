import Link from "next/link";

const Committees = () => {
  return (
    <div
      id="committees"
      className="p-10 relative flex flex-col items-center w-full bg-white text-black"
    >
      <h1 className="p-6 font-extrabold tracking-wide text-4xl text-center">
        Committees
      </h1>

      <div
        id="members"
        className="flex flex-row gap-6 items-center w-full max-w-6xl"
      >
        <div className="flex-1 py-6 px-10 flex flex-col">
          <p className="text-xl pb-4 ">Program Committee</p>
          <ul className="marker:text-green-button list-disc list-inside">
            <li>Prof Dino Sejdinovic, Adelaide (Chair)</li>
            <li>Prof Nicola Armstrong, Curtin</li>
            <li>Dr Melissa Humphries, Adelaide</li>
            <li>Prof Lewis Mitchell, Adelaide</li>
            <li>Dr Emi Tanaka, ANU</li>
            <li>Dr Gentry White, QUT</li>
            <li>Prof Andrew Zammit Mangion, Wollongong</li>
            <li>Tim Macuga, QUT</li>
          </ul>
        </div>
        <div className="flex-1 py-6 px-10 flex flex-col">
          <p className="text-xl pb-4">
            Organizing Committee (
            <Link
              href="https://datascience.curtin.edu.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CIDS
            </Link>
            )
          </p>
          <ul className="marker:text-green-button list-disc list-inside select-end">
            <li>Prof Melanie Johnston-Hollitt (CIDS Director)</li>
            <li>Dr Uno Fang (Chair)</li>
            <li>Dr Daniel Marrable (Deputy Chair)</li>
            <li>Calvin Pang</li>
            <li>Dario Limongi</li>
            <li>Juanaili Hultzsch</li>
            <li>Leigh Tyers</li>
            <li>Shan Shan Ng</li>
            <li>Trish Radotic</li>
            <li>Youngwoo (Paul) Kim</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Committees;
