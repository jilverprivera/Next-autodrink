import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";

const Networks = () => {
  return (
    <div className="absolute top-2/4 left-5 -translate-y-2/4">
      <a
        href="https://github.com/jilverprivera"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black h-10 w-10 mb-2 text-xl flex items-center justify-center"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/jilverprivera/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black h-10 w-10 mb-2 text-xl flex items-center justify-center"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.instagram.com/jilverprivera/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black h-10 w-10 mb-2 text-xl flex items-center justify-center"
      >
        <BsInstagram />
      </a>
      <a
        href="https://twitter.com/Jilverprivera"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black h-10 w-10 mb-2 text-xl flex items-center justify-center"
      >
        <BsTwitter />
      </a>
    </div>
  );
};

export default Networks;
