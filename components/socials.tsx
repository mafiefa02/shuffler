import { GithubIcon, GlobeIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const SOCIALS = [
  {
    name: "Personal Website",
    href: "https://afiefabd.com",
    icon: <GlobeIcon />,
  },
  {
    name: "GitHub",
    href: "https://github.com/mafiefa02",
    icon: <GithubIcon />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mafiefa",
    icon: <LinkedinIcon />,
  },
];

export const Socials = () => {
  return (
    <div className="flex items-center gap-1">
      {SOCIALS.map((social) => (
        <Link
          key={social.href}
          href={social.href}
          target="_blank"
          className={buttonVariants({ size: "icon", variant: "ghost" })}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};
