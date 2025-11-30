import { Container } from "@/components/container";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Container className="mx-auto flex max-w-prose flex-1 flex-col justify-center gap-5">
      <section className="flex flex-col gap-5">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">
            so... what is{" "}
            <span className="text-4xl text-primary">shuffler;</span>? 🤔
          </h1>

          <p>
            do you ever have a need to{" "}
            <span className="border-b border-primary">
              distribute works evenly
            </span>{" "}
            among your team members? need not worry no more! shuffler; is an
            application to randomly and evenly distribute any assignments you
            have among your team!
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <h1 className="text-2xl font-semibold">
          umm... and{" "}
          <span className="text-3xl text-primary sm:text-4xl">
            how do you use it?
          </span>
        </h1>

        <p>
          easy! write out all the assignments and assignee you need on each of
          the input field
        </p>

        <h3 className="text-xl">
          then just click shuffle, and you&apos;re done!
        </h3>

        <p>
          you&apos;ll see the result below, and copy them to your clipboard
          using the copy button right on the left of the shuffle button.
        </p>
      </section>

      <section className="space-y-2 rounded-lg bg-primary/5 p-6">
        <pre className="w-full font-mono text-xl text-wrap text-primary">
          example of result
        </pre>
        <pre className="font-mono text-wrap">
          Josh: cleaning up the desktop, covering up the evidence, on watch duty
        </pre>
        <pre className="font-mono text-wrap">
          Angela: contacting the victim beforehand, making sure no trace is left
        </pre>
      </section>

      <section>
        if you have any feedback or you want to contribute, please don&apos;t
        hesitate to
        <Link
          href="https://afiefabd.com"
          target="_blank"
          className={buttonVariants({
            variant: "link",
            className: "inline-flex h-fit! px-1! py-0! text-base! underline",
          })}
        >
          contact me
        </Link>
        or visit this
        <Link
          href="https://github.com/mafiefa02/shuffler"
          target="_blank"
          className={buttonVariants({
            variant: "link",
            className: "inline-flex h-fit! px-1! py-0! text-base! underline",
          })}
        >
          app repo!
        </Link>
        😁
      </section>
    </Container>
  );
}
