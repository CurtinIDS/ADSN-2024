import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-black text-white font-extrabold p-6 md:py-10 flex justify-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {/* Presenting Partners */}
        <div className="col-span-1 md:col-span-2 text-center md:text-left">
          <p className="text-2xl pb-4">Presenting Partners</p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 md:space-x-8">
            <Link
              href="https://www.australiandatascience.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/ADSN-2024/ADSN-Logo-White-Stacked.png"
                alt="ADSN Logo"
                width={150}
                height={100}
                className="h-[100px] w-auto"
                priority
              />
            </Link>
            <Link
              href="https://datascience.curtin.edu.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/ADSN-2024/Curtin_Logo.png"
                alt="Curtin University Logo"
                width={150}
                height={80}
                className="h-[100px] w-auto"
                priority
              />
            </Link>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="col-span-1 md:col-span-2 text-center md:text-left">
          <p className="text-2xl pb-4">Our Sponsors</p>
          <div className="space-y-6">
            {/* Platinum */}
            <div>
              <p className="pb-2 text-lg text-gray-400">Platinum Sponsors</p>
              <div className="text-sm flex flex-wrap justify-center md:justify-start space-x-6 md:space-x-8">
                <p>Coming Soon</p>
              </div>
            </div>

            {/* Gold */}
            <div>
              <p className="pb-2 text-lg text-gray-400">Glod Sponsors</p>
              <div className="text-sm flex flex-wrap justify-center md:justify-start space-x-6 md:space-x-8">
                <p>Coming Soon</p>
              </div>
            </div>

            {/* Silver */}
            <div>
              <p className="pb-2 text-lg text-gray-400">Silver Sponsors</p>
              <div className="text-sm flex flex-wrap justify-center md:justify-start space-x-6 md:space-x-8">
                <p>Coming Soon</p>
              </div>
            </div>

            {/* Bronze */}
            <div>
              <p className="pb-2 text-lg text-gray-400">Bronze Sponsors</p>
              <div className="flex flex-wrap justify-center md:justify-start space-x-6 md:space-x-8">
                <Link
                  href="https://zhamatix.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-300"
                >
                  <Image
                    src="/ADSN-2024/sponsor_logos/zhamatix_logo.png"
                    alt="Bronze Sponsor Logo"
                    width={150}
                    height={70}
                    className="h-[70px] w-auto"
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="col-span-1 lg:col-span-3 text-center md:text-left mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
            {/* Legal Information */}
            <div>
              <p className="text-sm text-gray-400">&copy; 2024 Australian Data Science Network. All rights reserved.</p>
            </div>

            {/* Social Media and Contact Links */}
            <div>
              <ul className="list-none flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                <li className="flex items-center space-x-2">
                  <Image
                    src="/ADSN-2024/icons/linkedin.png"
                    alt="LinkedIn Icon"
                    width={24}
                    height={24}
                    className="h-[24px] w-[24px]"
                    priority
                  />
                  <Link
                    href="https://www.linkedin.com/company/curtin-institute-for-data-science/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white no-underline hover:underline transition duration-300"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/ADSN-2024/icons/email.png"
                    alt="Email Icon"
                    width={24}
                    height={24}
                    className="h-[24px] w-[24px]"
                    priority
                  />
                  <Link
                    href="mailto:adsn2024@curtin.edu.au"
                    className="text-white no-underline hover:underline transition duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
