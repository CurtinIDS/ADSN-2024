import SponsorshipRow from "./SponsorshipRow";
import AdsnButton from "@/components/AdsnButton";

const Sponsorship = () => {
  return (
    <div
      id="sponsorship"
      className="bg-white scroll-mt-10 flex-1 flex flex-col w-full items-center"
    >
      <div className="flex justify-center text-center">
        <p className="font-extrabold p-3 md:text-4xl md:p-10 text-blue-navbar">
          Sponsorship Packages
        </p>
      </div>
      <div className="flex justify-center p-3 md:p-10 items-center w-full">
        <table className="table-fixed w-full max-w-6xl text-left rtl:text-right border-separate border-spacing-1 md:border-spacing-3">
          <colgroup>
            <col className="w-3/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
          </colgroup>
          <thead>
            <tr className="bg-blue-navbar text-white text-center text-xs md:text-xl font-semibold">
              <th scope="col" className="p-1 md:px-6 md:py-4 ">
                <div>BENEFITS</div>
              </th>
              <th scope="col" className="p-1 md:px-6 md:py-4">
                <div>
                  <span className="md:hidden">PLAT</span>
                  <span className="hidden md:inline">PLATINUM</span>
                </div>
                <div>($5000)</div>
              </th>
              <th scope="col" className="p-1 md:px-6 md:py-4">
                <div>GOLD</div>
                <div>($3000)</div>
              </th>
              <th scope="col" className="p-1 md:px-6 md:py-4">
                <div>SILVER</div>
                <div>($2000)</div>
              </th>
              <th scope="col" className="p-1 md:px-6 md:py-4">
                <div>BRONZE</div>
                <div>($1000)</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <SponsorshipRow
              benefits="LOGO ACROSS ALL MARKETING"
              platinum="✔"
              gold="✔"
              silver="✔"
              bronze="✔"
            />
            <SponsorshipRow
              benefits="SPECIAL THANK-YOU SPONSOR POSTS"
              platinum="✔"
              gold="✔"
              silver="✔"
              bronze="✔"
            />
            <SponsorshipRow
              benefits="ADSN EVENT BANNER SPONSOR"
              platinum="✔"
              gold="✔"
              silver="✔"
              bronze="✔"
            />
            <SponsorshipRow
              benefits="DIGITAL GRAPHICS TO SHARE"
              platinum="✔"
              gold="✔"
              silver="✔"
              bronze="✔"
            />
            <SponsorshipRow
              benefits="ACKNOWLEDGEMENT AT EVENTS"
              benefitsMobile="ACKNOWLEDGE AT EVENTS"
              platinum="✔"
              gold="✔"
              silver="✔"
              bronze="✔"
            />
            <SponsorshipRow
              benefits="FULL TRESTLE TABLE (BOOTH)"
              platinum="1"
              gold=""
              silver=""
              bronze=""
            />
            <SponsorshipRow
              benefits="PULL-UP BANNERS"
              platinum="3"
              gold="2"
              silver="1"
              bronze="1"
            />
            <SponsorshipRow
              benefits="INDUSTRY TALK MINUTE"
              platinum="20"
              gold=""
              silver=""
              bronze=""
            />
            <SponsorshipRow
              benefits="CONFERENCE PASSES"
              platinum="3"
              gold="2"
              silver="2"
              bronze="1"
            />
            <SponsorshipRow
              benefits="PANEL DISCUSSION WITH RESEARCHERS"
              platinum="1"
              gold="1"
              silver=""
              bronze=""
            />
            <SponsorshipRow
              benefits="COCKTAIL TABLE EXHIBIT STAND"
              platinum=""
              gold="1"
              silver=""
              bronze=""
            />
          </tbody>
        </table>
      </div>
      <div className="flex justify-center text-center">
        <p className="font-extrabold p-3 md:text-4xl md:p-10 text-blue-navbar">
          Show your support in data science
        </p>
      </div>
      <AdsnButton text="Contact Us"
        url="mailto:adsn2024@curtin.edu.au" />
      <br />
    </div>
  );
};

export default Sponsorship;
