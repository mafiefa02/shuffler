import { Container } from "./container";
import { Socials } from "./socials";

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-background">
      <Container className="py-2 text-sm">
        <div className="flex items-center justify-between gap-2 text-muted-foreground">
          <p className="text-xs sm:text-sm">
            <span className="hidden font-medium sm:inline">
              &copy; 2025 shuffler; |{" "}
            </span>
            afief abdurrahman
          </p>
          <Socials />
        </div>
      </Container>
    </footer>
  );
};
