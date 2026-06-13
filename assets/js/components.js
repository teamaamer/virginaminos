/* ===========================================================
   Virgin Aminos — Shared header/footer + interactivity
   =========================================================== */

const LOGO_SVG = `<svg class="brand-logo" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="vaG" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0A8DCE"/><stop offset="1" stop-color="#0B2346"/>
    </linearGradient>
  </defs>
  <rect width="48" height="48" rx="14" fill="url(#vaG)"/>
  <path d="M16 11c0 7 16 8 16 13s-16 6-16 13" stroke="#fff" stroke-width="2.4" stroke-linecap="round" fill="none"/>
  <path d="M32 11c0 7-16 8-16 13s16 6 16 13" stroke="#8fd0f3" stroke-width="2.4" stroke-linecap="round" fill="none"/>
  <path d="M18 16h12M17.5 21h13M17.5 27h13M18 32h12" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity="0.85"/>
</svg>`;

function brandMarkup(variant = "") {
  const cls = variant === "footer" ? "brand brand--footer" : "brand";
  return `<a href="index.html" class="${cls}" aria-label="Virgin Aminos — home">
    <img class="brand-logo-img" src="assets/img/logoameno.png" alt="Virgin Aminos" width="624" height="400">
  </a>`;
}

// Each category has a dedicated landing page. Hormonal keeps its standalone file.
function categoryUrl(c) {
  if (c === "Hormonal") return "hormonal.html";
  if (c === "Immunity") return "immunity.html";
  if (c === "GLP Receptor Agonists") return "glp-receptor-agonists.html";
  if (c === "Cognitive Enhancement") return "cognitive-enhancement.html";
  if (c === "Recovery/Inflammation") return "recovery-inflammation.html";
  return `category.html?cat=${encodeURIComponent(c)}`;
}

function categoryDropdownItems() {
  return CATEGORIES.map(
    (c) => `<a href="${categoryUrl(c)}">${CATEGORY_LABELS[c]}</a>`
  ).join("");
}

function renderHeader(active) {
  const host = document.getElementById("site-header");
  if (!host) return;
  const is = (p) => (active === p ? "active" : "");
  host.innerHTML = `
  <header class="site-header">
    <div class="container header-inner">
      ${brandMarkup()}
      <nav class="main-nav">
        <a href="index.html" class="${is("home")}">Home</a>
        <a href="about.html" class="${is("about")}">About</a>
        <div class="has-dropdown">
          <button class="nav-toggle">Peptide Categories</button>
          <div class="dropdown">${categoryDropdownItems()}
            <a href="products.html" style="color:var(--accent);font-weight:800;margin-top:6px;">View All Products →</a>
          </div>
        </div>
        <a href="testing.html" class="${is("testing")}">Testing</a>
        <a href="contact.html" class="${is("contact")}">Contact</a>
      </nav>
      <div class="header-actions">
        <button class="icon-btn" id="searchBtn" aria-label="Search products">${ICONS.search}</button>
        <a class="icon-btn" href="${VA.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
        <a class="btn btn-primary header-order" href="${waQuestion()}" target="_blank" rel="noopener">${ICONS.whatsapp}<span>Order on WhatsApp</span></a>
        <button class="icon-btn hamburger" id="hamburgerBtn" aria-label="Open menu">${ICONS.menu}</button>
      </div>
    </div>
    <div class="search-bar" id="searchBar">
      <div class="container search-bar-inner">
        <input type="search" id="globalSearch" placeholder="Search peptides by name…" autocomplete="off">
        <button class="btn btn-navy" id="globalSearchGo">Search</button>
      </div>
    </div>
  </header>`;

  buildMobileDrawer();
  wireHeader();
}

function buildMobileDrawer() {
  const drawer = document.createElement("div");
  drawer.className = "mobile-drawer";
  drawer.id = "mobileDrawer";
  drawer.innerHTML = `
    <div class="drawer-panel">
      <div class="drawer-head">
        ${brandMarkup()}
        <button class="icon-btn" id="drawerClose" aria-label="Close menu">${ICONS.close}</button>
      </div>
      <nav class="drawer-nav">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="products.html">Products / Catalog</a>
        <div style="border-bottom:1px solid var(--line);">
          <a href="products.html" style="border-bottom:none;">Peptide Categories</a>
          <div class="drawer-sub">
            ${CATEGORIES.map((c) => `<a href="${categoryUrl(c)}">${CATEGORY_LABELS[c]}</a>`).join("")}
          </div>
        </div>
        <a href="testing.html">Testing / Quality</a>
        <a href="blog.html">Blog</a>
        <a href="contact.html">Contact</a>
      </nav>
      <div class="drawer-actions">
        <a class="btn btn-primary" style="flex:1" href="${waQuestion()}" target="_blank" rel="noopener">${ICONS.whatsapp} WhatsApp</a>
        <a class="icon-btn" href="${VA.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
      </div>
    </div>`;
  document.body.appendChild(drawer);
}

function wireHeader() {
  const hamburger = document.getElementById("hamburgerBtn");
  const drawer = document.getElementById("mobileDrawer");
  const close = document.getElementById("drawerClose");
  const open = () => drawer.classList.add("open");
  const shut = () => drawer.classList.remove("open");
  hamburger && hamburger.addEventListener("click", open);
  close && close.addEventListener("click", shut);
  drawer && drawer.addEventListener("click", (e) => { if (e.target === drawer) shut(); });

  // search toggle
  const searchBtn = document.getElementById("searchBtn");
  const searchBar = document.getElementById("searchBar");
  const searchInput = document.getElementById("globalSearch");
  const searchGo = document.getElementById("globalSearchGo");
  searchBtn && searchBtn.addEventListener("click", () => {
    searchBar.classList.toggle("open");
    if (searchBar.classList.contains("open")) setTimeout(() => searchInput.focus(), 150);
  });
  const runSearch = () => {
    const q = (searchInput.value || "").trim();
    // If a product grid is on the page, filter live; otherwise go to products page.
    if (document.getElementById("productGrid") && typeof applyProductFilters === "function") {
      window.location.hash = "products";
      const pageSearch = document.getElementById("productSearchInput");
      if (pageSearch) { pageSearch.value = q; }
      applyProductFilters();
    } else {
      window.location.href = `products.html?q=${encodeURIComponent(q)}`;
    }
  };
  searchGo && searchGo.addEventListener("click", runSearch);
  searchInput && searchInput.addEventListener("keydown", (e) => { if (e.key === "Enter") runSearch(); });
}

function renderFooter() {
  const host = document.getElementById("site-footer");
  if (!host) return;
  host.innerHTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          ${brandMarkup("footer")}
          <p>Virgin Aminos is a research peptide catalog dedicated to high-quality compounds, professional support, and a simple WhatsApp ordering experience.</p>
          <div class="footer-social">
            <a href="${VA.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
            <a href="${waQuestion()}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICONS.whatsapp}</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="testing.html">Testing</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Categories</h4>
          <ul>
            ${CATEGORIES.map((c) => `<li><a href="${categoryUrl(c)}">${CATEGORY_LABELS[c]}</a></li>`).join("")}
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <div class="footer-contact-row">${ICONS.whatsapp_line}<a href="${waQuestion()}" target="_blank" rel="noopener">${VA.phoneDisplay}</a></div>
          <div class="footer-contact-row">${ICONS.instagram}<a href="${VA.instagram}" target="_blank" rel="noopener">@_masreya</a></div>
          <div class="footer-contact-row">${ICONS.mail}<a href="mailto:${VA.email}">${VA.email}</a></div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Virgin Aminos. All rights reserved.</span>
        <span class="ruo">For Research Use Only — Not for human or veterinary use.</span>
      </div>
    </div>
  </footer>`;
}

function renderFab() {
  const fab = document.createElement("a");
  fab.className = "fab-whatsapp";
  fab.href = waQuestion();
  fab.target = "_blank";
  fab.rel = "noopener";
  fab.setAttribute("aria-label", "Chat on WhatsApp");
  fab.innerHTML = ICONS.whatsapp;
  document.body.appendChild(fab);
}

/* Bootstrap shell on every page */
function initShell(activePage) {
  renderHeader(activePage);
  renderFooter();
  renderFab();
}

/* Reusable Shipping & Support dark card (home, about, contact) */
function buildSupportCard(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = `
    <div>
      <span class="eyebrow" style="color:#8fd0f3;">Support</span>
      <h2 class="section-title">Shipping &amp; Support</h2>
      <p>Our support team is available Monday through Friday for product questions, custom orders, and wholesale inquiries.</p>
      <div class="support-actions">
        <a class="btn btn-primary" href="${waQuestion()}" target="_blank" rel="noopener">${ICONS.whatsapp} Contact on WhatsApp</a>
      </div>
    </div>
    <div class="support-contacts">
      <a class="support-contact" href="${waQuestion()}" target="_blank" rel="noopener">
        <span class="c-ico">${ICONS.whatsapp_line}</span>
        <span><b>${VA.phoneDisplay}</b><span>WhatsApp — Mon to Fri</span></span>
      </a>
      <a class="support-contact" href="${VA.instagram}" target="_blank" rel="noopener">
        <span class="c-ico">${ICONS.instagram}</span>
        <span><b>@_masreya</b><span>Follow us on Instagram</span></span>
      </a>
      <a class="support-contact" href="mailto:${VA.email}">
        <span class="c-ico">${ICONS.mail}</span>
        <span><b>${VA.email}</b><span>Email inquiries</span></span>
      </a>
    </div>`;
}

/* Quality & manufacturing cards (about + testing) */
const QUALITY_ITEMS = [
  ["globe", "U.S.-Based Standards", "Operations follow U.S.-based handling and documentation practices for dependable, repeatable results."],
  ["shield", "High-Purity Production", "Compounds are produced to high-purity targets with attention to identity and composition."],
  ["doc", "Third-Party Testing", "Independent laboratory testing helps verify identity and purity before products reach researchers."],
  ["factory", "Controlled Environments", "Storage and handling take place in controlled conditions to protect compound integrity."],
  ["beaker", "Batch-Level Accountability", "Each batch is tracked and documented, supporting transparency and consistent quality."],
];
function renderQuality(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = QUALITY_ITEMS.map(
    ([ic, title, body], i) => `
    <div class="quality-card">
      <div class="quality-icon">${ICONS[ic]}</div>
      <div class="quality-num">0${i + 1}</div>
      <h3>${title}</h3>
      <p>${body}</p>
    </div>`
  ).join("");
}
