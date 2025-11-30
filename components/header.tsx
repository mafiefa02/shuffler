import { CircleQuestionMarkIcon } from "lucide-react";
import Link from "next/link";
import { Container } from "./container";
import { buttonVariants } from "./ui/button";

export const Header = () => {
  return (
    <header className="border-b bg-background">
      <Container className="mx-auto flex items-center justify-between py-4">
        <Link
          href="/"
          className={buttonVariants({
            variant: "link",
            className: "h-fit! px-1! py-0! text-xl font-bold!",
          })}
        >
          shuffler;
        </Link>
        <Link
          href="/about"
          className={buttonVariants({ variant: "outline", className: "group" })}
        >
          <CircleQuestionMarkIcon className="group-hover:text-primary" /> about
        </Link>
      </Container>
    </header>
  );
};
