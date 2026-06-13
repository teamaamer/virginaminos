/* Product detail page — renders from PRODUCTS by ?slug= */
(function () {
  initShell("products");

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const product = PRODUCTS.find((p) => p.slug === slug);
  const root = document.getElementById("pdpRoot");

  if (!product) {
    document.title = "Product not found — Virgin Aminos";
    root.innerHTML = `
      <div class="center" style="padding:60px 0;">
        <h1 class="section-title">Product not found</h1>
        <p class="section-sub" style="margin:0 auto 24px;">The product you're looking for isn't available. Browse the full catalog instead.</p>
        <a class="btn btn-primary" href="products.html">View Catalog</a>
      </div>`;
    return;
  }

  const catLabel = CATEGORY_LABELS[product.category] || product.category;
  const catUrl = categoryUrl(product.category);
  const waName = product.cardName || product.name;
  const hasSizes = Array.isArray(product.sizes) && product.sizes.length > 0;
  document.title = `${product.name} — ${catLabel} | Virgin Aminos`;

  const media = product.image
    ? `<img src="${product.image}" alt="${product.name} research peptide vial" onerror="imgFallback(this)">`
    : ICONS.vial;

  // Size block: selector for multi-size, static chip for single-size.
  let sizeBlock = "";
  if (hasSizes) {
    sizeBlock = `
      <div class="size-label">Select Size</div>
      <div class="size-options" id="sizeOptions">
        ${product.sizes.map((s, i) =>
          `<button type="button" class="size-pill" data-i="${i}">${s.size}</button>`).join("")}
      </div>
      <div class="size-hint" id="sizeHint">Please select a size to continue.</div>`;
  } else if (product.size) {
    sizeBlock = `<span class="pdp-size">Size: ${product.size}</span>`;
  }

  root.innerHTML = `
    <nav class="breadcrumb" style="color:var(--muted);margin-bottom:22px;">
      <a href="index.html">Home</a> / <a href="${catUrl}">${catLabel}</a> / <span style="color:var(--deep-blue);">${product.name}</span>
    </nav>
    <div class="pdp">
      <div class="pdp-media">
        <span class="ruo-tag">Research Use Only</span>
        ${media}
      </div>
      <div class="pdp-info">
        <span class="product-cat">${catLabel}</span>
        <h1>${product.name}</h1>
        ${sizeBlock}
        <div class="pdp-price" id="pdpPrice">${product.price}</div>
        <p class="pdp-desc">${product.description || ""}</p>
        ${product.bullets ? `<ul class="pdp-bullets">${product.bullets
          .map((b) => `<li>${ICONS.check}<span>${b}</span></li>`).join("")}</ul>` : ""}
        <div class="pdp-buy">
          <div class="qty">
            <button type="button" id="qtyMinus" aria-label="Decrease quantity">−</button>
            <input type="number" id="qtyInput" value="1" min="1" max="999" aria-label="Quantity">
            <button type="button" id="qtyPlus" aria-label="Increase quantity">+</button>
          </div>
          <a class="btn btn-primary${hasSizes ? " is-disabled" : ""}" id="buyBtn" href="#" target="_blank" rel="noopener" ${hasSizes ? 'aria-disabled="true"' : ""}>
            ${ICONS.whatsapp}<span>Buy on WhatsApp</span>
          </a>
        </div>
        <label class="addon">
          <input type="checkbox" id="bacAddon">
          <span class="addon-text">Reconstitution Solution (10ml) BAC Water <b>(+$19.97)</b></span>
        </label>
        <div class="pdp-notes">
          <div class="pdp-note">${ICONS.check}<span>Buy 10 vials and get 15% Discount.</span></div>
          <div class="pdp-note">${ICONS.whatsapp_line}<span>For wholesale orders, contact us on WhatsApp.</span></div>
        </div>
      </div>
    </div>`;

  const qtyInput = document.getElementById("qtyInput");
  const buyBtn = document.getElementById("buyBtn");
  const priceEl = document.getElementById("pdpPrice");
  const bac = document.getElementById("bacAddon");

  let selected = hasSizes ? null : { size: product.size, price: product.price };

  function buildLink() {
    if (!selected) {
      buyBtn.href = "#";
      buyBtn.classList.add("is-disabled");
      buyBtn.setAttribute("aria-disabled", "true");
      return;
    }
    let qty = parseInt(qtyInput.value, 10);
    if (isNaN(qty) || qty < 1) qty = 1;
    const linePrice = selected.price || product.price;
    let text = `Hi Virgin Aminos, I want to order ${waName} ${selected.size} - ${linePrice}`;
    if (qty > 1) text += ` (Qty: ${qty})`;
    if (bac && bac.checked) text += ` — Add Reconstitution Solution (10ml) BAC Water +$19.97`;
    buyBtn.href = `https://wa.me/${VA.phone}?text=${encodeURIComponent(text)}`;
    buyBtn.classList.remove("is-disabled");
    buyBtn.removeAttribute("aria-disabled");
  }

  // Block clicks until a size is chosen.
  buyBtn.addEventListener("click", (e) => {
    if (!selected) {
      e.preventDefault();
      const hint = document.getElementById("sizeHint");
      if (hint) { hint.textContent = "Please select a size before ordering."; hint.style.color = "#d23"; }
    }
  });

  if (hasSizes) {
    const opts = document.getElementById("sizeOptions");
    opts.querySelectorAll(".size-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        opts.querySelectorAll(".size-pill").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        selected = product.sizes[parseInt(btn.dataset.i, 10)];
        priceEl.textContent = selected.price || product.price;
        const hint = document.getElementById("sizeHint");
        if (hint) { hint.textContent = `Selected: ${selected.size}`; hint.style.color = "var(--accent)"; }
        buildLink();
      });
    });
  }

  document.getElementById("qtyMinus").addEventListener("click", () => {
    qtyInput.value = Math.max(1, (parseInt(qtyInput.value, 10) || 1) - 1);
    buildLink();
  });
  document.getElementById("qtyPlus").addEventListener("click", () => {
    qtyInput.value = Math.min(999, (parseInt(qtyInput.value, 10) || 1) + 1);
    buildLink();
  });
  qtyInput.addEventListener("input", buildLink);
  if (bac) bac.addEventListener("change", buildLink);

  buildLink();
})();
