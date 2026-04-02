/**
 * AzarGuide Homepage
 * Structured Grammar Navigation (Final Clean Version)
 */

/* =========================
   DATA CHAPTERS
========================= */
const chapters = [
  { id: 1, title: "Overview of Verb Tenses", category: "tenses", range: "1-1 → 1-6", desc: "Introduction to simple, progressive, perfect, and perfect progressive tenses." },
  { id: 2, title: "Present and Past: Simple & Progressive", category: "tenses", range: "2-1 → 2-12", desc: "Understanding present and past forms in both simple and continuous usage." },
  { id: 3, title: "Perfect & Perfect Progressive Tenses", category: "tenses", range: "3-1 → 3-4", desc: "Deep dive into present perfect, past perfect, and their continuous forms." },
  { id: 4, title: "Future Time", category: "tenses", range: "4-1 → 4-7", desc: "Using will, be going to, and present forms for future meaning." },
  { id: 5, title: "Review of Verb Tenses", category: "tenses", range: "5-1 → 5-2", desc: "Comprehensive review of all verb tense systems." },

  { id: 6, title: "Subject-Verb Agreement", category: "grammar", range: "6-1 → 6-5", desc: "Matching subjects and verbs correctly in different structures." },
  { id: 7, title: "Nouns", category: "grammar", range: "7-1 → 7-13", desc: "Count vs noncount nouns, quantity expressions, and modifiers." },
  { id: 8, title: "Pronouns", category: "grammar", range: "8-1 → 8-7", desc: "Forms, agreement, and usage of pronouns." },

  { id: 9, title: "Modals (Part 1)", category: "modals", range: "9-1 → 9-11", desc: "Basic modal verbs: can, must, should, may, etc." },
  { id: 10, title: "Modals (Part 2)", category: "modals", range: "10-1 → 10-10", desc: "Advanced modal usage and degrees of certainty." },
  { id: 11, title: "The Passive", category: "voice", range: "11-1 → 11-8", desc: "Form and use of passive voice in different tenses." },

  { id: 12, title: "Noun Clauses", category: "clauses", range: "12-1 → 12-9", desc: "That-clauses, if/whether, and reported speech." },
  { id: 13, title: "Adjective Clauses", category: "clauses", range: "13-1 → 13-15", desc: "Relative clauses using who, which, that, etc." },

  { id: 14, title: "Gerunds & Infinitives (Part 1)", category: "verb", range: "14-1 → 14-11", desc: "Basic patterns of gerunds and infinitives." },
  { id: 15, title: "Gerunds & Infinitives (Part 2)", category: "verb", range: "15-1 → 15-9", desc: "Advanced structures and transformations." },

  { id: 16, title: "Coordinating Conjunctions", category: "connectors", range: "16-1 → 16-3", desc: "Using and, but, or, so in sentence structures." },

  { id: 17, title: "Adverb Clauses", category: "clauses", range: "17-1 → 17-9", desc: "Time, cause, contrast, and condition clauses." },
  { id: 18, title: "Reduction of Adverb Clauses", category: "clauses", range: "18-1 → 18-5", desc: "Transforming clauses into phrases." },

  { id: 19, title: "Connectives (Cause, Contrast, Condition)", category: "connectors", range: "19-1 → 19-9", desc: "Linking ideas using logical connectors." },
  { id: 20, title: "Conditionals & Wishes", category: "conditionals", range: "20-1 → 20-11", desc: "If-clauses, unreal situations, and wishes." }
];

/* =========================
   GROUP SYSTEM (KEY UPGRADE)
========================= */
const groupedChapters = {
  "Chapter 01-05 | Verb Tenses System": ["tenses"],
  "Chapter 06-08 |Core Grammar": ["grammar"],
  "Chapter 09-11 |Modals & Voice": ["modals", "voice"],
  "Chapter 12-13-17-18 |Clause System": ["clauses"],
  "Chapter 14-15 | Verb Forms": ["verb"],
  "Chapter 16-20 |Connectors & Logic": ["connectors", "conditionals"]
};

/* =========================
   DOM
========================= */
const listContainer = document.getElementById("grammarList");
const searchInput = document.getElementById("searchInput");
const chips = document.querySelectorAll(".chip");

let activeFilter = "all";


/* =========================
   RENDER FUNCTION (GROUPED)
========================= */
function renderChapters(data) {
  if (!data.length) {
    listContainer.innerHTML = `
      <div class="empty-state">
        <h3>Materi tidak ditemukan.</h3>
        <p>Coba kata kunci lain atau ubah filter.</p>
      </div>
    `;
    handleScrollReveal();
    return;
  }

  let html = "";

  // Loop utama untuk mengelompokkan materi berdasarkan grup yang didefinisikan di atas
  for (const groupName in groupedChapters) {
    const categories = groupedChapters[groupName];

    const filtered = data.filter(ch =>
      categories.includes(ch.category)
    );

    if (!filtered.length) continue;

    // Logika menentukan rentang ID (misal: 01-05)
    const ids = filtered.map(ch => ch.id);
    const min = Math.min(...ids);
    const max = Math.max(...ids);

    const rangeLabel = min === max 
    ? `CH ${String(min).padStart(2, "0")}` 
    : `CH ${String(min).padStart(2, "0")}–${String(max).padStart(2, "0")}`;

    html += `
      <div class="chapter-group">
        <div class="group-header">
          <h3 class="group-title">${groupName}</h3>
          <span class="group-range">${rangeLabel}</span>
        </div>

        ${filtered.map(item => {
          const paddedId = String(item.id).padStart(2, "0");
          return `
            <article class="chapter-row reveal" tabindex="0">
  <div class="chapter-number">${paddedId}</div>

  <div class="chapter-info">
    <h3>${item.title}</h3>
    <p>${item.desc}</p>
  </div>

  <div class="chapter-meta">
    <span class="chapter-range">${item.range || ""}</span>
    <span class="chapter-arrow">→</span>
  </div>
</article>
          `;
        }).join("")}
      </div>
    `;
  } // Penutup Loop FOR

  listContainer.innerHTML = html;

  attachRowEvents();
  handleScrollReveal();
} // Penutup Fungsi RENDER

/* =========================
   SEARCH + FILTER
========================= */
function getFilteredChapters() {
  const term = searchInput.value.trim().toLowerCase();

  return chapters.filter((chapter) => {
    const matchesSearch =
      chapter.title.toLowerCase().includes(term) ||
      chapter.desc.toLowerCase().includes(term);

    const matchesCategory =
      activeFilter === "all" || chapter.category === activeFilter;

    return matchesSearch && matchesCategory;
  });
}

function updateActiveChip(filter) {
  chips.forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.filter === filter);
  });
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    activeFilter = chip.dataset.filter;
    updateActiveChip(activeFilter);
    renderChapters(getFilteredChapters());
  });
});

searchInput.addEventListener("input", () => {
  renderChapters(getFilteredChapters());
});

/* =========================
   EVENTS (CLICK ROW)
========================= */
function attachRowEvents() {
  document.querySelectorAll(".chapter-row").forEach((row) => {
    row.addEventListener("click", () => {
      const title = row.querySelector("h3")?.textContent || "Chapter";
      console.log("Open:", title);
    });

    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        row.click();
      }
    });
  });
}

/* =========================
   SCROLL REVEAL
========================= */
function handleScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  const revealPoint = 90;

  reveals.forEach((el) => {
    const revealTop = el.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

/* =========================
   INIT
========================= */
window.addEventListener("scroll", handleScrollReveal);

window.addEventListener("DOMContentLoaded", () => {
  renderChapters(chapters);
  handleScrollReveal();
});