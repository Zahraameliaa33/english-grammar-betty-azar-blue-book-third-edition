/**
 * AzarGuide Homepage
 * Structured Grammar Navigation (Final Clean Version)
 */


/* =========================
    DATA CHAPTERS (Azar 3rd Ed)
========================= */
const chapters = [
  { 
    id: 1, 
    title: "Overview of Verb Tenses", 
    category: "tenses", 
    level: "Basic", 
    range: "1-1 → 1-7", 
    desc: "Summary chart of tenses, spelling of -ing and -ed forms, and overview of simple, progressive, and perfect aspects." 
  },
  { 
    id: 2, 
    title: "Present and Past, Simple and Progressive", 
    category: "tenses", 
    level: "Basic", 
    range: "2-1 → 2-12", 
    desc: "Static verbs, using present and past progressive, and using used to/be used to for past habits." 
  },
  { 
    id: 3, 
    title: "Perfect and Perfect Progressive Tenses", 
    category: "tenses", 
    level: "Intermediate", 
    range: "3-1 → 3-5", 
    desc: "Present perfect vs. simple past, past perfect usage, and the duration-focused perfect progressive forms." 
  },
  { 
    id: 4, 
    title: "Future Time", 
    category: "tenses", 
    level: "Basic", 
    range: "4-1 → 4-7", 
    desc: "Expressing future with Will vs. Be Going To, using present tenses for future, and future progressive/perfect." 
  },
  { 
    id: 5, 
    title: "Review of Verb Tenses", 
    category: "tenses", 
    level: "Intermediate", 
    range: "5-1 → 5-2", 
    desc: "Comprehensive review and synthesis of all 12 English verb tenses in various contexts." 
  },
  { 
    id: 6, 
    title: "Subject-Verb Agreement", 
    category: "grammar", 
    level: "Basic", 
    range: "6-1 → 6-5", 
    desc: "Final -s/-es, basic agreement rules, using expressions of quantity, and there + be structures." 
  },
  { 
    id: 7, 
    title: "Nouns", 
    category: "grammar", 
    level: "Basic", 
    range: "7-1 → 7-13", 
    desc: "Plural forms, count vs. noncount nouns, articles (a, an, the), and expressions of quantity." 
  },
  { 
    id: 8, 
    title: "Pronouns", 
    category: "grammar", 
    level: "Basic", 
    range: "8-1 → 8-7", 
    desc: "Personal pronouns, reflexive pronouns, using other/another, and noun-pronoun agreement." 
  },
  { 
    id: 9, 
    title: "Modals, Part 1", 
    category: "modals", 
    level: "Intermediate", 
    range: "9-1 → 9-11", 
    desc: "Introduction to modals: expressing ability, permission, possibility, necessity, and giving advice." 
  },
  { 
    id: 10, 
    title: "Modals, Part 2", 
    category: "modals", 
    level: "Advanced", 
    range: "10-1 → 10-10", 
    desc: "Degrees of certainty, preference (would rather), and using modals in the past (could have, should have)." 
  },
  { 
    id: 11, 
    title: "The Passive", 
    category: "voice", 
    level: "Intermediate", 
    range: "11-1 → 11-8", 
    desc: "Forming the passive voice, stative passive, using 'by' phrase, and common 'get' passive expressions." 
  },
  { 
    id: 12, 
    title: "Noun Clauses", 
    category: "clauses", 
    level: "Advanced", 
    range: "12-1 → 12-9", 
    desc: "Introduction to noun clauses: using 'that', 'if/whether', question words, and reported speech (quoted speech)." 
  },
  { 
    id: 13, 
    title: "Adjective Clauses", 
    category: "clauses", 
    level: "Advanced", 
    range: "13-1 → 13-15", 
    desc: "Using relative pronouns (who, whom, which, that), punctuating adjective clauses, and using 'where' and 'when'." 
  },
  { 
    id: 14, 
    title: "Gerunds and Infinitives, Part 1", 
    category: "verb", 
    level: "Intermediate", 
    range: "14-1 → 14-11", 
    desc: "Common verbs followed by gerunds or infinitives, using 'go + -ing', and preposition + gerund combinations." 
  },
  { 
    id: 15, 
    title: "Gerunds and Infinitives, Part 2", 
    category: "verb", 
    level: "Advanced", 
    range: "15-1 → 15-9", 
    desc: "Passive infinitives/gerunds, using 'it' + infinitive, and verbs of perception (see, hear, feel)." 
  },
  { 
    id: 16, 
    title: "Coordinating Conjunctions", 
    category: "connectors", 
    level: "Basic", 
    range: "16-1 → 16-3", 
    desc: "Parallel structure and using conjunctions like and, but, or, so to link phrases and clauses." 
  },
  { 
    id: 17, 
    title: "Adverb Clauses", 
    category: "clauses", 
    level: "Advanced", 
    range: "17-1 → 17-9", 
    desc: "Using adverb clauses of time, cause and effect (because, since), and contrast (even though, although)." 
  },
  { 
    id: 18, 
    title: "Reduction of Adverb Clauses to Modifying Phrases", 
    category: "clauses", 
    level: "Advanced", 
    range: "18-1 → 18-5", 
    desc: "Techniques to shorten adverb clauses into modifying participial phrases for concise writing." 
  },
  { 
    id: 19, 
    title: "Connectives that Express Cause, Contrast, and Condition", 
    category: "connectors", 
    level: "Advanced", 
    range: "19-1 → 19-9", 
    desc: "Using transitions like 'therefore', 'however', 'otherwise', and 'consequently' in formal structures." 
  },
  { 
    id: 20, 
    title: "Conditional Sentences and Wishes", 
    category: "conditionals", 
    level: "Advanced", 
    range: "20-1 → 20-11", 
    desc: "Real vs. unreal conditionals (If-clauses), using 'were' instead of 'was', and expressing regrets with 'wish'." 
  }
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

function updateActiveChip(filter) {
  chips.forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.filter === filter);
  });
}

function getFilteredChapters() {
  if (activeFilter === "all") return chapters; // tampilkan semua
  return chapters.filter(ch => ch.category === activeFilter);
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    activeFilter = chip.dataset.filter;
    updateActiveChip(activeFilter);
    renderChapters(getFilteredChapters());
  });
});



/* =========================
   MODAL LOGIC
========================= */
/* =========================
    MODAL LOGIC (FINAL VERSION)
========================= */
const modal = document.getElementById("chapterModal");
const closeModalBtn = document.getElementById("closeModal");
const btnCancel = document.getElementById("btnCancel");
const btnLearn = document.getElementById("btnLearn"); // Pastikan variabel ini ada

function openModal(chapterId) {
  // 1. Cari data berdasarkan ID (konversi string ke number)
  const chapter = chapters.find(c => c.id === parseInt(chapterId));
  if (!chapter) return;

  // 2. Isi konten Modal secara dinamis
  document.getElementById("modalTitle").textContent = chapter.title;
  document.getElementById("modalDesc").textContent = chapter.desc;
  document.getElementById("modalLevel").textContent = chapter.level || "Basic";
  document.getElementById("modalCategory").textContent = chapter.category.toUpperCase();
  document.getElementById("modalRange").textContent = chapter.range;
  
  // 3. LOGIKA LINK: Format ID menjadi 2 digit (contoh: 1 -> 01)
  const paddedId = String(chapter.id).padStart(2, "0");
  
  // Update href tombol Start Learning
  // Ini akan mengarah ke: chapters/ch01.html, chapters/ch02.html, dst.
  btnLearn.href = `chapters/ch${paddedId}.html`; 

  // 4. Animasi Tampilkan Modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Kunci scroll background
}

// Fungsi Tutup Modal
function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto"; 
}

/* =========================
   EVENT DELEGATION (Penting!)
========================= */
// Kita pasang event listener di container utama, bukan di tiap row
listContainer.addEventListener("click", (e) => {
  // Cari apakah yang diklik adalah .chapter-row atau anak dari .chapter-row
  const row = e.target.closest(".chapter-row");
  
  if (row) {
    // Ambil ID dari angka di dalam .chapter-number
    const chapterId = row.querySelector(".chapter-number").textContent;
    openModal(chapterId);
  }
});

// Event untuk menutup modal
closeModalBtn.addEventListener("click", closeModal);
btnCancel.addEventListener("click", closeModal);

// Tutup jika klik area di luar kotak putih
window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Tutup dengan tombol Escape di keyboard
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

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