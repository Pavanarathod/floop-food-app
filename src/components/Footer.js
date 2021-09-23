const Footer = () => {
  return (
    <footer className="min-h-screen sm:min-h-[60vh] bg-yellow-400 sm:grid sm:grid-cols-2">
      <div className="py-5 px-10 grid place-items-center">
        <img
          src="/images/FooterOne.png"
          alt=""
          className="h-[400px] w-[400px] object-contain"
        />
      </div>

      {/* two */}
      <div className=" py-5 px-3">
        <div className="flex justify-start">
          <img src="/images/LogoWhite.png" alt="" className="" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 py-5">
          <div>
            <h1 className="text-lg text-gray-900 font-bold tracking-wider">
              COMPANY
            </h1>
            <ul className="flex flex-col space-y-3 items-start pt-1">
              <li className="hover:underline cursor-pointer">About Us</li>
              <li className="hover:underline cursor-pointer">Team</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Floop Blog</li>
              <li className="hover:underline cursor-pointer">
                Floop Corporate
              </li>
              <li className="hover:underline cursor-pointer">Bug Bounty</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg text-gray-900 font-bold tracking-wider">
              Contack
            </h1>
            <ul className="flex flex-col space-y-3 items-start pt-1">
              <li className="hover:underline cursor-pointer">Help & Support</li>
              <li className="hover:underline cursor-pointer">
                Partner with us
              </li>
              <li className="hover:underline cursor-pointer">Help Poor</li>
              <li className="hover:underline cursor-pointer">Ride with us</li>
            </ul>
          </div>
          <div className="pt-5 sm:pt-0">
            <h1 className="text-lg text-gray-900 font-bold tracking-wider">
              LEGAL
            </h1>
            <ul className="flex flex-col space-y-3 items-start pt-1">
              <li className="hover:underline cursor-pointer">
                Terms & Condition
              </li>
              <li className="hover:underline cursor-pointer">
                Refund & Canselation
              </li>
              <li className="hover:underline cursor-pointer">
                Privacy and Policy
              </li>
              <li className="hover:underline cursor-pointer">Cookie Policy</li>
              <li className="hover:underline cursor-pointer">
                Floop Corporate
              </li>
              <li className="hover:underline cursor-pointer">
                Phishing & Fraud
              </li>
            </ul>
          </div>
        </div>
        <div className="flex space-x-4 py-5">
          <img
            src="/images/instagram.png"
            alt=""
            className="h-5 cursor-pointer"
          />
          <img
            src="/images/twitter.png"
            alt=""
            className="h-5 cursor-pointer"
          />
          <img src="/images/Gmail.png" alt="" className="h-5 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
