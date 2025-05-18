// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="px-6 py-6 border-t text-sm text-center text-muted-foreground">
      © {new Date().getFullYear()} Ament Capital. All rights reserved.
    </footer>
  );
}
