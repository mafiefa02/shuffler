import { GithubIcon, GlobeIcon, LinkedinIcon } from "lucide-react";
import { Button } from "./ui/button";

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
        <Button
          key={social.href}
          size="icon"
          variant="ghost"
        >
          {social.icon}
        </Button>
      ))}
    </div>
  );
};
