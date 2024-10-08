import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-black text-white font-extrabold p-3 md:py-8 flex justify-center"
    >
      <div className="grid grid-cols-2 grid-rows-2 md:gap-8 w-full max-w-6xl md:py-10 md:px-24">
        <div className="col-span-2">
          <p className="pb-2 md:pb-4">Presenting Partners</p>
          <div className="flex flex-row items-center justify-center md:justify-normal space-x-4">
            <div>
              <Link
                href="https://www.australiandatascience.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/ADSN-2024/ADSN-Logo-White-Stacked.png"
                  alt="ADSN Logo"
                  width="0"
                  height="0"
                  className="w-auto h-[70px]"
                  priority
                />
              </Link>
            </div>
            <div>
              <Link
                href="https://datascience.curtin.edu.au/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/ADSN-2024/Curtin_Logo.png"
                  alt="Curtin University Logo"
                  width="0"
                  height="0"
                  className="w-auto h-[70px]"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 p-3">
          <p>&copy; Australian Data Science Network. All rights reserved.</p>
        </div>
        <div className="mt-8 p-3 text-center md:text-left">
          <ul className="list-none p-0 m-0">
            <li className="mb-2">
              <Link
                href="https://www.linkedin.com/company/curtin-institute-for-data-science/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline hover:no-underline"
              >
                Social Media
              </Link>
            </li>
            <li>
              <Link
                href="mailto:adsn2024@curtin.edu.au"
                className="text-white no-underline hover:no-underline"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
