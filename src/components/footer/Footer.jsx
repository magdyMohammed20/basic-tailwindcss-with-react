import { links, social } from "./data";
const Footer = () => {
  const mapLinks = links.map((link) => (
    <li
      key={link.id}
      className="text-slate-400 mt-6 hover:text-indigo-500 transition-all duration-100 ease-linear">
      <a href="#">{link.name}</a>
    </li>
  ));

  const socials = social.map((link) => (
    <li
      key={link.id}
      className="text-slate-400 mt-6 hover:text-indigo-500 transition-all duration-100 ease-linear flex items-center gap-2">
      {link.icon}
      <a href="#">{link.name}</a>
    </li>
  ));
  return (
    <div className="main-container py-24 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ps-12">
        <div>
          <ul className="list-disc">{mapLinks}</ul>
        </div>

        <div className="mt-8 md:mt-0">
          <ul className="list-disc">{socials}</ul>
        </div>

        <div className="mt-12 md:mt-0">
          <div className="text-slate-500">
            <p>We change the way UI components librairies are used</p>
            <p className="my-6">Tailus Blocks ©</p>
          </div>

          <div className="text-white flex items-center gap-9">
            <a href="">Terms Of Service</a>
            <a href="">Privacy</a>
          </div>

          <div className="flex items-center gap-3  mt-6">
            <span className="text-gray-400">Need help?</span>
            <a href="" className="text-white">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
