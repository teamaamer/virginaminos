/* Home page bootstrap */
(function () {
  initShell("home");

  // Hero visual — brand logo (white) on the dark stage
  const heroVial = document.getElementById("heroVial");
  if (heroVial) heroVial.innerHTML = `<img class="hero-logo-img" src="assets/img/logoameno.png" alt="Virgin Aminos">`;

  // Quality visual molecule
  const qv = document.getElementById("qualityVisual");
  if (qv) qv.insertAdjacentHTML("afterbegin", ICONS.dna);

  // Trust strip
  const trust = document.getElementById("trustStrip");
  if (trust) {
    const items = [
      [ICONS.shield, "High-Purity Production"],
      [ICONS.doc, "Third-Party Tested"],
      [ICONS.globe, "U.S.-Based Standards"],
      [ICONS.factory, "Controlled Environments"],
      [ICONS.whatsapp_line, "WhatsApp Ordering"],
    ];
    trust.innerHTML = items
      .map(([ic, label]) => `<div class="trust-item">${ic}<span>${label}</span></div>`)
      .join("");
  }

  // Why list
  const why = document.getElementById("whyList");
  if (why) {
    const lines = [
      "U.S.-based standards and controlled handling",
      "Third-party testing for identity and purity",
      "Clear product information and responsive support",
    ];
    why.innerHTML = lines
      .map((t) => `<div class="trust-item">${ICONS.check}<span>${t}</span></div>`)
      .join("");
  }

  // Carousel arrows icons
  const prev = document.getElementById("showcasePrev");
  const next = document.getElementById("showcaseNext");
  if (prev) prev.innerHTML = ICONS.arrowLeft;
  if (next) next.innerHTML = ICONS.arrow;

  // Support card
  buildSupportCard("supportCard");

  // Render dynamic sections
  renderFeatured(8);
  renderShowcase();
  wireBrowseCatalog();
})();
