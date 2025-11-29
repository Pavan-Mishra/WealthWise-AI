"use client"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
              <span className="text-background font-semibold text-sm">W</span>
            </div>
            <span className="font-semibold text-foreground">WealthWise</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {["About", "Features", "Roadmap", "Team", "GitHub"].map((link) => (
              <a
                key={link}
                href={link === "GitHub" ? "https://github.com" : `#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                target={link === "GitHub" ? "_blank" : undefined}
                rel={link === "GitHub" ? "noopener noreferrer" : undefined}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">© 2025 WealthWise AI</p>
        </div>
      </div>
    </footer>
  )
}
