export default function Footer() {
  return (
    <footer className="flex items-center justify-center p-10 text-muted-foreground antialiased">
      <p>&copy; Basswaves, {new Date().getFullYear()}</p>
    </footer>
  );
}
