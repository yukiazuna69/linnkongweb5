// Shared navigation and footer renderer
(function () {
  const pages = [
    { href: 'index.html', label: 'Hem' },
    { href: 'var-historia.html', label: 'Vår historia' },
    { href: 'brollopet.html', label: 'Bröllopet' },
    { href: 'info.html', label: 'Info' },
    { href: 'osa.html', label: 'Kambodjansk Ceremoni' },
    { href: 'onskelista.html', label: 'Önskelista' },
    { href: 'presentationer.html', label: 'Presentationer' },
    { href: 'bildgalleri.html', label: 'Bildgalleri' },
  ];

  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const navItems = pages
    .map(
      (p) =>
        `<li><a href="${p.href}"${currentPage === p.href ? ' class="active"' : ''}>${p.label}</a></li>`
    )
    .join('');

  document.getElementById('nav-placeholder').innerHTML = `
    <nav class="nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">Linn &amp; Mikael</a>
        <ul class="nav-menu" id="nav-menu">${navItems}</ul>
        <button class="nav-toggle" id="nav-toggle" aria-label="Meny">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `;

  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="footer-names">Linn &amp; Mikael</div>
      <div class="footer-date">29 Augusti 2026 &nbsp;·&nbsp; Nydala klosterkyrka &nbsp;·&nbsp; Asa Herrgård</div>
    </footer>
  `;

  // Toggle mobile menu
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
})();
