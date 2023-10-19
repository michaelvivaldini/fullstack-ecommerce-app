import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return <div className="bg-accent px-8 py-4 text-[0.625rem] opacity-75"><span className="font-semibold ">© 2023 Copyright FSW Store</span></div>;
};

export default Footer;
