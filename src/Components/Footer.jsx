import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-100 dark:bg-gray-900  p-10 w-11/12 lg:w-full mx-auto text-gray-800 dark:text-gray-200 ">
      {/* Main Content */}

      <aside className="flex items-center justify-center flex-col lg:justify-between lg:flex-row container max-w-7xl mx-auto">
        <p className="text-gray-800 dark:text-gray-200 text-center lg:text-left">
          © {new Date().getFullYear()} TaskPilot - All rights reserved.
        </p>
        <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
          <a
            className="rounded-full bg-gray-200 dark:bg-gray-700 p-2"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-[#1877F2]" />
          </a>
          <a
            className="rounded-full bg-gray-200 dark:bg-gray-700 p-2"
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-[#1DA1F2]" />
          </a>
          <a
            className="rounded-full bg-gray-200 dark:bg-gray-700 p-2"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-[#F56040]" />
          </a>
          <a
            className="rounded-full bg-gray-200 dark:bg-gray-700 p-2"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-[#0077B5]" />
          </a>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
