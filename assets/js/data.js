/* ===========================================================
   Virgin Aminos — Shared data + helpers
   =========================================================== */

const VA = {
  phone: "17148185255",
  phoneDisplay: "+1 (714) 818-5255",
  instagram: "https://www.instagram.com/_masreya?utm_source=qr",
  email: "info@virginaminos.com",
};

/* WhatsApp link builders ------------------------------------ */
function waOrder(name, dosage, price) {
  const parts = [`Hi Virgin Aminos, I want to order ${name}`];
  if (dosage) parts.push(`Dosage: ${dosage}`);
  if (price) parts.push(`Price: ${price}`);
  const text = parts.join(" — ");
  return `https://wa.me/${VA.phone}?text=${encodeURIComponent(text)}`;
}
function waSimple(name) {
  return `https://wa.me/${VA.phone}?text=${encodeURIComponent(
    `Hi Virgin Aminos, I want to order ${name}`
  )}`;
}
// Format: "...order [NAME] [SIZE] - [PRICE]"
function waProduct(name, size, price) {
  return `https://wa.me/${VA.phone}?text=${encodeURIComponent(
    `Hi Virgin Aminos, I want to order ${name} ${size} - ${price}`
  )}`;
}
function waQuestion() {
  return `https://wa.me/${VA.phone}?text=${encodeURIComponent(
    "Hi Virgin Aminos, I have a question about your products"
  )}`;
}

/* Categories ------------------------------------------------- */
const CATEGORIES = [
  "Hormonal",
  "Anti-Aging Products",
  "Immunity",
  "GLP Receptor Agonists",
  "Cognitive Enhancement",
  "Growth Hormone Secretagogue",
  "General Health/Wellness",
  "Recovery/Inflammation",
];

// Display labels for the dropdown / footer (per the brief)
const CATEGORY_LABELS = {
  "Hormonal": "Hormonal",
  "Anti-Aging Products": "Anti Aging",
  "Immunity": "Immunity",
  "GLP Receptor Agonists": "GLP Receptor Agonists",
  "Cognitive Enhancement": "Cognitive Enhancement",
  "Growth Hormone Secretagogue": "Growth Hormone Secretagogue",
  "General Health/Wellness": "General Health/Wellness",
  "Recovery/Inflammation": "Recovery/Inflammation",
};

// Short, research-focused blurb shown on each category landing page.
const CATEGORY_DESCRIPTIONS = {
  "Hormonal": "High-purity hormonal research compounds supplied as lyophilized powder for laboratory research use.",
  "Anti-Aging Products": "Research compounds studied in controlled settings for cellular, longevity, and peptide-interaction research models.",
  "Immunity": "Peptides explored in laboratory research focused on immune-signaling pathways and cellular response models.",
  "GLP Receptor Agonists": "GLP-class research peptides studied for receptor activity and metabolic signaling in controlled environments.",
  "Cognitive Enhancement": "Research peptides studied for neural signaling and cognitive pathway investigation in laboratory settings.",
  "Growth Hormone Secretagogue": "Secretagogue research compounds studied for signaling behavior and peptide interaction models.",
  "General Health/Wellness": "Research-grade compounds studied across general wellness and metabolic research applications.",
  "Recovery/Inflammation": "Research peptides and blends studied in controlled laboratory environments for recovery and inflammation research models.",
};

/* Products --------------------------------------------------- */
const PRODUCTS = [
  {
    name: "GLP3-R", category: "GLP Receptor Agonists", slug: "glp3-r", featured: true,
    image: "assets/img/glp-receptor-agonists/glp3-r.png",
    price: "$150.00 – $500.00",
    sizes: [{ size: "10mg" }, { size: "20mg" }, { size: "30mg" }, { size: "60mg" }],
    description: "GLP3-R is a research peptide compound supplied as a lyophilized powder for controlled laboratory and analytical research use. It is commonly studied in research environments for GLP receptor signaling, metabolic pathway models, and peptide interaction studies.",
    bullets: [
      "GLP receptor research compound",
      "Available in 10mg, 20mg, 30mg, and 60mg",
      "Supplied as lyophilized powder",
      "Intended for laboratory research use only",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "GLP2-T", category: "GLP Receptor Agonists", slug: "glp2-t",
    image: "assets/img/glp-receptor-agonists/glp2-t.png",
    price: "$100.00 – $480.00",
    sizes: [{ size: "10mg" }, { size: "20mg" }, { size: "30mg" }, { size: "60mg" }],
    description: "GLP2-T is a research peptide supplied for controlled laboratory use. It is studied in scientific settings for GLP-related signaling pathways, receptor activity models, and metabolic research applications.",
    bullets: [
      "GLP-related research peptide",
      "Available in 10mg, 20mg, 30mg, and 60mg",
      "Research use only",
      "Supplied as lyophilized powder",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "GLP1-S", category: "GLP Receptor Agonists", slug: "glp1-s",
    image: "assets/img/glp-receptor-agonists/glp1-s.png",
    price: "$100.00 – $270.00",
    sizes: [{ size: "10mg" }, { size: "20mg" }, { size: "30mg" }],
    description: "GLP1-S is a research peptide compound supplied for laboratory and analytical research use. It is commonly studied in controlled research environments for GLP receptor signaling, cellular response models, and metabolic pathway investigation.",
    bullets: [
      "GLP receptor research peptide",
      "Available in 10mg, 20mg, and 30mg",
      "Supplied as lyophilized powder",
      "Intended for laboratory research use only",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "NAD+", category: "Anti-Aging Products", slug: "nad", featured: true,
    image: "assets/img/anti-aging/NAD.png",
    price: "$100.00 – $190.00",
    sizes: [
      { size: "500mg", price: "$100.00" },
      { size: "1000mg", price: "$190.00" },
    ],
    description: "NAD+ is a research-grade coenzyme supplied in lyophilized powder form for laboratory and analytical research use. It is studied in controlled scientific settings for cellular and metabolic research applications.",
    bullets: [
      "Research-grade coenzyme",
      "Available in 500mg and 1000mg",
      "Supplied as lyophilized powder",
      "Intended for laboratory research use",
    ],
  },
  { name: "MOTS-C",       category: "General Health/Wellness",      dosage: "10mg vial", price: "$75.00 – $160.00", image: "assets/img/general-health-wellness/mots-c.png", featured: true },
  { name: "Tesamorelin",  category: "Growth Hormone Secretagogue",  dosage: "5mg vial", price: "$95.00", featured: true },
  {
    name: "GHK-Cu", category: "Anti-Aging Products", slug: "ghk-cu", featured: true,
    image: "assets/img/anti-aging/GHK-Cu.png",
    price: "$75.00 – $120.00",
    sizes: [
      { size: "50mg", price: "$75.00" },
      { size: "100mg", price: "$120.00" },
    ],
    description: "GHK-Cu is a copper peptide research compound supplied for laboratory use. It is commonly studied in controlled research environments for copper-binding behavior and peptide interaction models.",
    bullets: [
      "Copper peptide research compound",
      "Available in 50mg and 100mg",
      "Research use only",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "Epitalon (Epithalon)", category: "Anti-Aging Products", slug: "epitalon",
    image: "assets/img/anti-aging/Epitalon.png",
    price: "$65.00 – $150.00",
    sizes: [
      { size: "10mg", price: "$65.00" },
      { size: "50mg", price: "$150.00" },
    ],
    description: "Epitalon, also known as Epithalon, is a lab-made peptide compound supplied for research use. It is commonly studied in controlled laboratory environments for peptide signaling and molecular research.",
    bullets: [
      "Lab-made peptide compound",
      "Available in 10mg and 50mg",
      "Supplied as lyophilized powder",
      "Intended for research use only",
    ],
  },
  {
    name: "SS-31", category: "Anti-Aging Products", slug: "ss-31",
    image: "assets/img/anti-aging/SS-31.png",
    price: "$70.00 – $150.00",
    sizes: [
      { size: "10mg", price: "$70.00" },
      { size: "50mg", price: "$150.00" },
    ],
    description: "SS-31 is a synthetic peptide compound supplied for laboratory research use. It is studied in controlled research environments for mitochondrial-related peptide research and cellular investigation.",
    bullets: [
      "Synthetic peptide compound",
      "Available in 10mg and 50mg",
      "Supplied for laboratory research use",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "SNAP-8", category: "Anti-Aging Products", slug: "snap-8",
    size: "10mg", price: "$75.00",
    image: "assets/img/anti-aging/SNAP-8.png",
    description: "SNAP-8 is a synthetic peptide compound supplied for research and analytical use. It is studied in laboratory settings for peptide interaction, signaling behavior, and cosmetic science research models.",
    bullets: [
      "Synthetic peptide compound",
      "10mg vial",
      "Research use only",
      "Suitable for controlled laboratory settings",
    ],
  },
  {
    name: "Klow (GHK-CU/TB-500/BPC-157/KPV)", category: "Recovery/Inflammation", slug: "klow",
    cardName: "Klow",
    size: "50/10/10/10mg", price: "$195.00",
    image: "assets/img/recovery-inflammation/klow-ghk-cu-tb-500-bpc-157-kpv.png",
    description: "Klow is a multi-peptide research blend supplied as a lyophilized compound for controlled laboratory use. It combines GHK-Cu, TB-500, BPC-157, and KPV for advanced peptide interaction and recovery-pathway research models.",
    bullets: [
      "Combines GHK-Cu, TB-500, BPC-157, and KPV",
      "Supplied as a lyophilized compound",
      "Intended for controlled laboratory research use",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "Glow (GHK-CU/TB-500/BPC-157)", category: "Recovery/Inflammation", slug: "glow",
    cardName: "Glow",
    size: "70/10/10mg", price: "$175.00",
    image: "assets/img/recovery-inflammation/glow-ghk-cu-tb-500-bpc-157.png",
    description: "Glow is a research-focused peptide blend combining GHK-Cu, TB-500, and BPC-157. It is supplied for controlled laboratory research into peptide signaling, cellular response, and tissue-related pathway models.",
    bullets: [
      "Combines GHK-Cu, TB-500, and BPC-157",
      "Supplied as lyophilized powder",
      "Suitable for controlled research environments",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "Wolverine (BPC-157/TB-500)", category: "Recovery/Inflammation", slug: "wolverine",
    cardName: "Wolverine",
    size: "10/10mg", price: "$90.00",
    image: "assets/img/recovery-inflammation/wolverine-bpc-157-tb-500.png",
    description: "Wolverine is a dual peptide research blend combining BPC-157 and TB-500. It is intended for controlled laboratory research into peptide interaction, repair-related signaling, and recovery pathway models.",
    bullets: [
      "Dual peptide research blend",
      "Combines BPC-157 and TB-500",
      "Intended for controlled laboratory research use",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "BPC-157", category: "Recovery/Inflammation", slug: "bpc-157", featured: true,
    image: "assets/img/recovery-inflammation/bpc-157.png",
    price: "$60.00 – $80.00",
    sizes: [{ size: "5mg" }, { size: "10mg" }],
    description: "BPC-157 is a synthetic research peptide supplied as a lyophilized powder for laboratory and analytical research use. It is commonly studied in controlled environments for peptide signaling and cellular response models.",
    bullets: [
      "Synthetic research peptide",
      "Available in 5mg and 10mg",
      "Supplied as lyophilized powder",
      "Intended for laboratory research use only",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "ARA-290", category: "Recovery/Inflammation", slug: "ara-290",
    size: "10mg", price: "$70.00",
    image: "assets/img/recovery-inflammation/ara-290.png",
    description: "ARA-290 is a research peptide compound supplied for controlled laboratory use. It is commonly studied in scientific settings for cellular signaling, receptor interaction models, and inflammation-related pathway research.",
    bullets: [
      "Research peptide compound",
      "10mg vial",
      "Supplied for controlled laboratory use",
      "Research use only",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "MGF", category: "Recovery/Inflammation", slug: "mgf",
    size: "2mg", price: "$70.00",
    image: "assets/img/recovery-inflammation/mgf.png",
    description: "MGF is a research peptide supplied as a lyophilized powder for analytical and laboratory use. It is commonly examined in controlled research environments for peptide signaling and cellular response studies.",
    bullets: [
      "Research peptide compound",
      "2mg vial",
      "Supplied as lyophilized powder",
      "Intended for laboratory research use only",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "LL-37 (CAP-18)", category: "Recovery/Inflammation", slug: "ll-37",
    cardName: "LL-37 (CAP-18)",
    size: "5mg", price: "$90.00",
    image: "assets/img/recovery-inflammation/ll-37-cap-18.png",
    description: "LL-37, also known as CAP-18, is a research peptide compound supplied for laboratory research use. It is studied in controlled settings for antimicrobial peptide models, immune response pathways, and cellular interaction research.",
    bullets: [
      "Antimicrobial peptide research compound (CAP-18)",
      "5mg vial",
      "Supplied for laboratory research use",
      "Research use only",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "KPV", category: "Recovery/Inflammation", slug: "kpv",
    size: "10mg", price: "$85.00",
    image: "assets/img/recovery-inflammation/kpv.png",
    description: "KPV is a tripeptide research compound supplied for controlled laboratory and analytical use. It is commonly studied for peptide signaling, inflammatory response models, and cellular pathway research.",
    bullets: [
      "Tripeptide research compound",
      "10mg vial",
      "Supplied for controlled laboratory use",
      "Research use only",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "PEG-MGF", category: "Recovery/Inflammation", slug: "peg-mgf",
    size: "5mg", price: "$110.00",
    image: "assets/img/recovery-inflammation/peg-mgf.png",
    description: "PEG-MGF is a research peptide compound supplied as a lyophilized powder. It is commonly studied in controlled environments for peptide stability, signaling behavior, and cellular pathway research.",
    bullets: [
      "Research peptide compound",
      "5mg vial",
      "Supplied as lyophilized powder",
      "Intended for laboratory research use only",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "TB-500 Thymosin Beta-4", category: "Recovery/Inflammation", slug: "tb-500",
    image: "assets/img/recovery-inflammation/tb-500-thymosin-beta-4.png",
    price: "$60.00 – $80.00",
    sizes: [{ size: "5mg" }, { size: "10mg" }],
    description: "TB-500 Thymosin Beta-4 is a synthetic research peptide supplied for laboratory and analytical use. It is commonly studied in controlled research environments for peptide signaling, cellular response, and repair-pathway models.",
    bullets: [
      "Synthetic research peptide",
      "Available in 5mg and 10mg",
      "Supplied as lyophilized powder",
      "Intended for laboratory research use only",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "Wolverine + KPV (BPC-157/TB-500/MGF/KPV)", category: "Recovery/Inflammation", slug: "wolverine-kpv",
    cardName: "Wolverine + KPV",
    size: "10/2.5/1/1mg", price: "$140.00",
    image: "assets/img/recovery-inflammation/wolverine-kpv-bpc-157-tb-500-mgf-kpv.png",
    description: "Wolverine + KPV is a multi-peptide research blend combining BPC-157, TB-500, MGF, and KPV. It is designed for controlled laboratory research into peptide interaction and recovery-related pathway models.",
    bullets: [
      "Multi-peptide research blend",
      "Combines BPC-157, TB-500, MGF, and KPV",
      "Designed for controlled laboratory research",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "Wolverine + MGF (BPC-157/TB-500/MGF)", category: "Recovery/Inflammation", slug: "wolverine-mgf",
    cardName: "Wolverine + MGF",
    size: "10/2.5/1mg", price: "$110.00",
    image: "assets/img/recovery-inflammation/wolverine-mgf-bpc-157-tb-500-mgf.png",
    description: "Wolverine + MGF is a multi-peptide research blend combining BPC-157, TB-500, and MGF. It is supplied for controlled laboratory use in peptide signaling and cellular response research.",
    bullets: [
      "Multi-peptide research blend",
      "Combines BPC-157, TB-500, and MGF",
      "Supplied for controlled laboratory use",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "Semax", category: "Cognitive Enhancement", slug: "semax", featured: true,
    size: "10mg", price: "$65.00",
    image: "assets/img/cognitive-enhancement/semax.png",
    description: "Semax is a synthetic research peptide supplied as a lyophilized powder for controlled laboratory and analytical research use. It is commonly studied in research environments for peptide signaling, neurological pathway models, and cognitive function research applications.",
    bullets: [
      "Synthetic research peptide",
      "10mg vial",
      "Supplied as lyophilized powder",
      "Intended for laboratory research use only",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "Selank", category: "Cognitive Enhancement", slug: "selank", featured: true,
    size: "10mg", price: "$65.00",
    image: "assets/img/cognitive-enhancement/selank.png",
    description: "Selank is a synthetic peptide compound supplied for controlled laboratory research use. It is commonly studied in research settings for peptide interaction models, neurological signaling pathways, and analytical research applications.",
    bullets: [
      "Synthetic peptide compound",
      "10mg vial",
      "Research use only",
      "Supplied as lyophilized powder",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "Selank / Semax", category: "Cognitive Enhancement", slug: "selank-semax",
    size: "5/5mg", price: "$85.00",
    image: "assets/img/cognitive-enhancement/selank-semax.png",
    description: "Selank / Semax is a dual research peptide blend supplied for controlled laboratory study. It combines Selank and Semax in one lyophilized research compound for analytical peptide research applications.",
    bullets: [
      "Dual peptide research blend",
      "5/5mg vial",
      "Combines Selank and Semax",
      "Supplied as lyophilized powder",
      "Intended for research use only",
    ],
  },
  {
    name: "Pinealon", category: "Cognitive Enhancement", slug: "pinealon",
    size: "10mg", price: "$70.00",
    image: "assets/img/cognitive-enhancement/pinealon.png",
    description: "Pinealon is a synthetic tripeptide research compound supplied as a lyophilized powder for controlled laboratory use. It is commonly studied in analytical research environments for peptide signaling, cellular response models, and neurological research pathways.",
    bullets: [
      "Synthetic tripeptide research compound",
      "10mg vial",
      "Supplied as lyophilized powder",
      "Research use only",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "Thymosin Alpha-1", category: "Immunity", slug: "thymosin-alpha-1",
    size: "10mg", price: "$120.00",
    image: "assets/img/immunity/thymosin-alpha-1.png",
    description: "Thymosin Alpha-1 is a research peptide supplied as a lyophilized powder for laboratory and analytical research use. It is commonly studied in controlled research environments for immune system signaling, cellular response models, and peptide interaction studies.",
    bullets: [
      "Research peptide compound",
      "10mg vial",
      "Supplied as lyophilized powder",
      "Intended for laboratory research use only",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "SLU-PP-332", category: "Immunity", slug: "slu-pp-332",
    size: "10mg", price: "$80.00",
    image: "assets/img/immunity/slu-pp-332.png",
    description: "SLU-PP-332 is a research compound supplied for controlled laboratory study. It is commonly examined in research settings for metabolic pathway investigation, receptor activity models, and cellular response studies.",
    bullets: [
      "Research compound",
      "10mg vial",
      "Suitable for controlled laboratory research",
      "Research use only",
      "Produced to high-purity standards",
    ],
  },
  { name: "GHRP-6",       category: "Growth Hormone Secretagogue",  dosage: "5mg vial", price: "$60.00" },
  {
    name: "Cagrilintide", category: "GLP Receptor Agonists", slug: "cagrilintide",
    size: "10mg", price: "$135.00",
    image: "assets/img/glp-receptor-agonists/cagrilintide.png",
    description: "Cagrilintide is a research peptide compound supplied as a lyophilized powder for controlled laboratory study. It is commonly examined in scientific research settings for metabolic signaling, receptor activity, and peptide interaction models.",
    bullets: [
      "Research peptide compound",
      "10mg vial",
      "Supplied as lyophilized powder",
      "Intended for laboratory research use only",
      "Produced to high-purity standards",
    ],
  },
  { name: "Melanotan 1",  category: "General Health/Wellness",      dosage: "10mg vial", price: "$60.00", image: "assets/img/general-health-wellness/melanotan-1.png" },
  {
    name: "Oxytocin", category: "Hormonal", slug: "oxytocin",
    size: "10mg", dosage: "10mg", price: "$75.00",
    image: "assets/img/hormonal/Oxytocin.png",
    description: "Oxytocin is a synthetic peptide compound supplied as a lyophilized powder for laboratory research use. It is commonly studied in controlled research environments for its role in signaling pathways and molecular interaction models.",
    bullets: [
      "Synthetic Oxytocin compound",
      "Intended for analytical and laboratory research",
      "Suitable for controlled experimental settings",
      "Produced to high-purity standards",
    ],
  },
  { name: "Glutathione",  category: "General Health/Wellness",      dosage: "600mg / 1500mg vial", price: "$60.00 – $75.00" },
  {
    name: "PT-141", category: "Hormonal", slug: "pt-141",
    size: "10mg", dosage: "10mg", price: "$65.00",
    image: "assets/img/hormonal/PT-141.png",
    description: "PT-141 is a synthetic peptide compound supplied for research use only. It is studied in laboratory settings for receptor activity, signaling behavior, and controlled experimental research applications.",
    bullets: [
      "Synthetic PT-141 peptide",
      "Research use only",
      "Supplied as lyophilized powder",
      "Produced under high-purity standards",
    ],
  },
  {
    name: "Kisspeptin", category: "Hormonal", slug: "kisspeptin",
    size: "10mg", dosage: "10mg", price: "$80.00",
    image: "assets/img/hormonal/Kisspeptin.png",
    description: "Kisspeptin is a pharmaceutical-grade peptide supplied in stable lyophilized powder form for accurate laboratory research use. It is commonly studied in endocrine and signaling pathway research.",
    bullets: [
      "Pharmaceutical-grade peptide",
      "Stable lyophilized powder",
      "Intended for laboratory research use",
      "High-purity research compound",
    ],
  },
  {
    name: "HCG", category: "Hormonal", slug: "hcg",
    size: "5000iu", dosage: "5000iu", price: "$70.00",
    image: "assets/img/hormonal/HCG.png",
    description: "HCG is a hormone-based research compound supplied for laboratory and analytical research use. It is commonly studied in controlled research environments for endocrine-related investigation.",
    bullets: [
      "Hormonal research compound",
      "5000iu vial",
      "Intended for laboratory research use",
      "Produced to high-purity standards",
    ],
  },
  { name: "Ipamorelin",   category: "Growth Hormone Secretagogue",  dosage: "5mg vial", price: "$80.00" },
  { name: "CJC-1295",     category: "Growth Hormone Secretagogue",  dosage: "5mg vial", price: "$90.00" },
  { name: "Sermorelin",   category: "Growth Hormone Secretagogue",  dosage: "5mg vial", price: "$85.00" },
  {
    name: "Dihexa", category: "Cognitive Enhancement", slug: "dihexa",
    size: "10mg", price: "$75.00",
    image: "assets/img/cognitive-enhancement/dihexa.png",
    description: "Dihexa is a research peptide compound supplied as a lyophilized powder for laboratory and analytical research use. It is commonly studied in controlled research environments for peptide signaling, cellular response models, and neurological research pathways.",
    bullets: [
      "Research peptide compound",
      "10mg vial",
      "Suitable for controlled laboratory research",
      "Research use only",
      "Produced to high-purity standards",
    ],
  },
  {
    name: "DSIP", category: "Cognitive Enhancement", slug: "dsip",
    size: "5mg", price: "$70.00",
    image: "assets/img/cognitive-enhancement/dsip.png",
    description: "DSIP is a research peptide compound supplied for laboratory and analytical research use. It is commonly studied in controlled scientific settings for peptide signaling, neurological pathway models, and sleep-related research applications.",
    bullets: [
      "Research peptide compound",
      "5mg vial",
      "Supplied as lyophilized powder",
      "Intended for laboratory research use only",
      "Produced to high-purity standards",
    ],
  },
];

/* Category showcase metadata --------------------------------- */
const SHOWCASE = [
  { key: "Hormonal",                 desc: "Research compounds studied for hormonal signaling and balance pathways." },
  { key: "GLP Receptor Agonists",    desc: "GLP-class peptides explored in metabolic and receptor research." },
  { key: "Anti-Aging Products",      desc: "Compounds investigated for cellular longevity and regeneration studies." },
  { key: "Cognitive Enhancement",    desc: "Peptides researched for neural signaling and cognitive pathway studies." },
];

/* Inline SVG icon library ------------------------------------ */
const ICONS = {
  vial: `<svg viewBox="0 0 64 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="4" width="24" height="10" rx="3" fill="#9fb8d4"/>
    <rect x="22" y="13" width="20" height="8" rx="2" fill="#c9d8ec"/>
    <path d="M18 22h28v78c0 8-6 14-14 14s-14-6-14-14V22z" fill="#eef5ff" stroke="#9fb8d4" stroke-width="2"/>
    <path d="M18 62h28v38c0 8-6 14-14 14s-14-6-14-14V62z" fill="#0A8DCE" fill-opacity="0.85"/>
    <rect x="22" y="30" width="6" height="22" rx="3" fill="#ffffff" fill-opacity="0.6"/>
    <rect x="18" y="44" width="28" height="6" fill="#ffffff" fill-opacity="0.4"/>
  </svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15c-1.52 0-3.01-.41-4.3-1.18l-.31-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.35c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.69 8.24-8.23 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"/></svg>`,
  whatsapp_line: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21l1.6-4.5A8 8 0 1 1 8 18.5L3 21z"/><path d="M8.5 9.5c0 3 2.5 5.5 5.5 5.5" stroke-width="1.6"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/></svg>`,
  flask: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3"/><path d="M7.5 15h9"/></svg>`,
  molecule: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="2.4"/><circle cx="18" cy="7" r="2.4"/><circle cx="12" cy="16" r="2.4"/><circle cx="19" cy="18" r="1.8"/><path d="M7.8 7.6 10.4 14M16 8.4 13.4 14.6M14 16.8l3-.4"/></svg>`,
  dna: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 3c0 4 10 5 10 9s-10 5-10 9"/><path d="M17 3c0 4-10 5-10 9s10 5 10 9"/><path d="M8.5 6h7M8.5 18h7M7.5 9.5h9M7.5 14.5h9"/></svg>`,
  brain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8A3 3 0 0 0 8 18a2.5 2.5 0 0 0 4-2V5a2 2 0 0 0-3-1z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8A3 3 0 0 1 16 18a2.5 2.5 0 0 1-4-2"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10z"/></svg>`,
  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M5 20C4 12 9 5 20 4c1 9-4 15-12 15-1 0-2 0-3-.5z"/><path d="M5 20c4-7 8-9 11-10"/></svg>`,
  drop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/></svg>`,
  pulse: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2-6 4 12 2-6h6"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>`,
  factory: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 21V10l6 4V10l6 4V6l6 3v12H3z"/><path d="M7 21v-4M12 21v-4M17 21v-4"/></svg>`,
  doc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M14 3H6v18h12V7l-4-4z"/><path d="M14 3v4h4M8 13h8M8 17h6"/></svg>`,
  beaker: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M9 3v6l-4 8a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-4-8V3"/><path d="M8 3h8"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" stroke-linecap="round"/></svg>`,
};

/* category -> icon map */
const CATEGORY_ICONS = {
  "Hormonal": "drop",
  "Anti-Aging Products": "leaf",
  "Immunity": "shield",
  "GLP Receptor Agonists": "molecule",
  "Cognitive Enhancement": "brain",
  "Growth Hormone Secretagogue": "pulse",
  "General Health/Wellness": "heart",
  "Recovery/Inflammation": "flask",
};
