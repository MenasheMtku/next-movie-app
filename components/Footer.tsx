const Footer = () => {
  const year = new Date().getFullYear();
  const name = "Menashe Mtku";

  return (
    <footer className="h-28 w-full bg-foreground p-4 text-center text-background">
      <div className="flex h-full items-center justify-center">
        <p className="text-lg">
          &copy; {year} - All rights reserved to {name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
