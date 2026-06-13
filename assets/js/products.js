/* ===========================================================
   Virgin Aminos — Product grid: render / filter / search
   =========================================================== */

let activeCategory = "All";

// Short name used in WhatsApp messages / cards (blends use a compact label).
function orderName(p) { return p.cardName || p.name; }

// Swap a broken/missing product image for the inline vial graphic.
function imgFallback(img) {
  if (img.dataset.fallback) return;
  img.dataset.fallback = "1";
  img.insertAdjacentHTML("afterend", ICONS.vial);
  img.remove();
}

function productWaLink(p) {
  const n = orderName(p);
  // Multi-size: send the product name + price range (size chosen on the detail page).
  if (p.sizes && p.sizes.length) {
    return `https://wa.me/${VA.phone}?text=${encodeURIComponent(
      `Hi Virgin Aminos, I want to order ${n} - ${p.price}`
    )}`;
  }
  // Single size: strict "[NAME] [SIZE] - [PRICE]" format.
  if (p.size) return waProduct(n, p.size, p.price);
  return waOrder(p.name, p.dosage, p.price);
}

function productCardHTML(p) {
  const displayName = p.cardName || p.name;
  const detailUrl = p.slug ? `product.html?slug=${encodeURIComponent(p.slug)}` : null;
  const media = p.image
    ? `<img src="${p.image}" alt="${displayName} ${p.size || ""} research peptide vial" loading="lazy" onerror="imgFallback(this)">`
    : ICONS.vial;
  const mediaInner = `<span class="ruo-tag">Research Use Only</span>${media}`;
  const mediaBlock = detailUrl
    ? `<a class="product-media" href="${detailUrl}">${mediaInner}</a>`
    : `<div class="product-media">${mediaInner}</div>`;
  const nameBlock = detailUrl
    ? `<h3 class="product-name"><a href="${detailUrl}">${displayName}</a></h3>`
    : `<h3 class="product-name">${displayName}</h3>`;
  return `
  <article class="product-card" data-name="${p.name.toLowerCase()}" data-cat="${p.category}">
    ${mediaBlock}
    <span class="product-cat">${CATEGORY_LABELS[p.category] || p.category}</span>
    ${nameBlock}
    <div class="product-price">${p.price}</div>
    <a class="btn btn-primary" href="${productWaLink(p)}" target="_blank" rel="noopener">
      ${ICONS.whatsapp}<span>Buy on WhatsApp</span>
    </a>
  </article>`;
}

function renderProducts(list, gridId = "productGrid") {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  if (!list.length) {
    grid.innerHTML = `<div class="no-results">No peptides match your search. Try a different name or category.</div>`;
    return;
  }
  grid.innerHTML = list.map(productCardHTML).join("");
}

function renderFilterPills() {
  const host = document.getElementById("filterPills");
  if (!host) return;
  const cats = ["All", ...CATEGORIES];
  host.innerHTML = cats
    .map(
      (c) =>
        `<button class="filter-pill ${c === activeCategory ? "active" : ""}" data-cat="${c}">${
          c === "All" ? "All Products" : CATEGORY_LABELS[c] || c
        }</button>`
    )
    .join("");
  host.querySelectorAll(".filter-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      renderFilterPills();
      applyProductFilters();
    });
  });
}

function applyProductFilters() {
  const searchEl = document.getElementById("productSearchInput");
  const q = (searchEl ? searchEl.value : "").trim().toLowerCase();
  let list = PRODUCTS.slice();
  if (activeCategory !== "All") list = list.filter((p) => p.category === activeCategory);
  if (q) list = list.filter((p) => p.name.toLowerCase().includes(q) ||
    (CATEGORY_LABELS[p.category] || "").toLowerCase().includes(q));
  renderProducts(list);
}

/* Home page: featured products only */
function renderFeatured(limit = 8) {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, limit);
  renderProducts(featured, "featuredGrid");
}

/* Read URL params (?cat= / ?q=) to preselect filters on products page */
function applyUrlFilters() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  const q = params.get("q");
  if (cat && CATEGORIES.includes(cat)) activeCategory = cat;
  const searchEl = document.getElementById("productSearchInput");
  if (q && searchEl) searchEl.value = q;
}

/* Init for full catalog page */
function initCatalog() {
  applyUrlFilters();
  renderFilterPills();
  applyProductFilters();
  const searchEl = document.getElementById("productSearchInput");
  searchEl && searchEl.addEventListener("input", applyProductFilters);
}

/* Browse Catalog button -> smooth scroll to products on home */
function wireBrowseCatalog() {
  document.querySelectorAll("[data-scroll-target]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const sel = btn.getAttribute("data-scroll-target");
      const target = document.querySelector(sel);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/* Category showcase carousel */
function renderShowcase() {
  const track = document.getElementById("showcaseTrack");
  if (!track) return;
  track.innerHTML = SHOWCASE.map((s) => {
    const icon = ICONS[CATEGORY_ICONS[s.key]] || ICONS.molecule;
    return `<div class="cat-card">
      <div class="cat-icon">${icon}</div>
      <h3>${CATEGORY_LABELS[s.key] || s.key}</h3>
      <p>${s.desc}</p>
      <a class="cat-link" href="${categoryUrl(s.key)}">Explore ${ICONS.arrow}</a>
    </div>`;
  }).join("");

  const prev = document.getElementById("showcasePrev");
  const next = document.getElementById("showcaseNext");
  const step = 322;
  prev && prev.addEventListener("click", () => track.scrollBy({ left: -step, behavior: "smooth" }));
  next && next.addEventListener("click", () => track.scrollBy({ left: step, behavior: "smooth" }));
}
