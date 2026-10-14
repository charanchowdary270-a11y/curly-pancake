/**
 * ============================================================================
 * InternOrbit: Responsive Internship Board
 * Pure Vanilla JavaScript (ES6+) - Accessible, Responsive, Performant
 * ============================================================================
 */

'use strict';

// ----------------------------------------------------------------------------
// 1. Embedded Fallback Data
// Provides instant offline/file:// resilience while primary source is JSON
// ----------------------------------------------------------------------------
const FALLBACK_INTERNSHIPS = [
  {
    id: "intern-001",
    title: "Junior Frontend Web Developer Intern",
    company: "PixelCraft Interactive",
    domain: "Web Development",
    mode: "Remote",
    location: "San Francisco, CA (Remote)",
    duration: "3 Months",
    stipend: "$1,200 / month",
    description: "Collaborate with senior developers to build responsive UI components, optimize web performance, and implement accessible frontend interfaces for client applications.",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"],
    applyUrl: "https://example.com/apply/pixelcraft-frontend-intern",
    posted: "2 days ago"
  },
  {
    id: "intern-002",
    title: "Python Backend & API Intern",
    company: "NovaStream Technologies",
    domain: "Python",
    mode: "Hybrid",
    location: "Austin, TX",
    duration: "6 Months",
    stipend: "$1,500 / month",
    description: "Build and maintain RESTful API endpoints, implement asynchronous tasks with Celery, and write unit tests for data pipeline ingestion microservices.",
    skills: ["Python", "FastAPI", "PostgreSQL", "REST APIs", "PyTest"],
    applyUrl: "https://example.com/apply/novastream-python-backend",
    posted: "Just now"
  },
  {
    id: "intern-003",
    title: "Enterprise Java Developer Intern",
    company: "Apex Financial Systems",
    domain: "Java",
    mode: "On-site",
    location: "New York, NY",
    duration: "6 Months",
    stipend: "$1,800 / month",
    description: "Assist in modernizing core banking backend services using Spring Boot and Hibernate. Participate in daily standups and learn high-throughput transaction processing.",
    skills: ["Java", "Spring Boot", "Hibernate", "SQL", "JUnit"],
    applyUrl: "https://example.com/apply/apex-java-systems",
    posted: "3 days ago"
  },
  {
    id: "intern-004",
    title: "Data Science & Analytics Intern",
    company: "Quantix Insights",
    domain: "Data Science",
    mode: "Remote",
    location: "Boston, MA (Remote)",
    duration: "4 Months",
    stipend: "$1,400 / month",
    description: "Clean and preprocess large telemetry datasets, build exploratory dashboards in Tableau, and uncover actionable customer conversion insights.",
    skills: ["Python", "Pandas", "SQL", "Data Visualization", "Statistics"],
    applyUrl: "https://example.com/apply/quantix-data-science",
    posted: "1 week ago"
  },
  {
    id: "intern-005",
    title: "Machine Learning Research Intern",
    company: "Cerebral AI Labs",
    domain: "AI/ML",
    mode: "Hybrid",
    location: "Seattle, WA",
    duration: "6 Months",
    stipend: "$2,200 / month",
    description: "Work alongside research scientists on fine-tuning vision and transformer models, curating benchmark evaluation datasets, and tracking experiment weights.",
    skills: ["PyTorch", "Python", "Transformers", "NLP", "Model Evaluation"],
    applyUrl: "https://example.com/apply/cerebral-ml-intern",
    posted: "4 days ago"
  },
  {
    id: "intern-006",
    title: "Information Security Analyst Intern",
    company: "CyberShield Defense",
    domain: "Cybersecurity",
    mode: "On-site",
    location: "Reston, VA",
    duration: "3 Months",
    stipend: "$1,300 / month",
    description: "Monitor real-time network traffic for anomalous behavior, assist in vulnerability patch auditing, and contribute to internal incident response runbooks.",
    skills: ["Network Security", "Wireshark", "Linux", "SIEM", "Vulnerability Assessment"],
    applyUrl: "https://example.com/apply/cybershield-analyst",
    posted: "5 days ago"
  },
  {
    id: "intern-007",
    title: "Product & UI/UX Design Intern",
    company: "Kromatic Studio",
    domain: "UI/UX Design",
    mode: "Remote",
    location: "Los Angeles, CA (Remote)",
    duration: "3 Months",
    stipend: "$1,100 / month",
    description: "Conduct qualitative user interviews, craft wireframes and interactive high-fidelity prototypes in Figma, and maintain cross-platform component libraries.",
    skills: ["Figma", "User Research", "Wireframing", "Design Systems", "Prototyping"],
    applyUrl: "https://example.com/apply/kromatic-uiux-intern",
    posted: "3 days ago"
  },
  {
    id: "intern-008",
    title: "Full-Stack Web Engineering Intern",
    company: "Vanguard Web Solutions",
    domain: "Web Development",
    mode: "Remote",
    location: "Chicago, IL (Remote)",
    duration: "6 Months",
    stipend: "$1,600 / month",
    description: "Design modular web features from database migrations up to responsive CSS views. Pair-program with senior engineers and review pull requests.",
    skills: ["JavaScript", "Node.js", "Express", "HTML5/CSS3", "MongoDB"],
    applyUrl: "https://example.com/apply/vanguard-fullstack-intern",
    posted: "1 day ago"
  },
  {
    id: "intern-009",
    title: "Python Automation & Tooling Intern",
    company: "CloudForge DevOps",
    domain: "Python",
    mode: "Remote",
    location: "Denver, CO (Remote)",
    duration: "3 Months",
    stipend: "$1,250 / month",
    description: "Write automated CLI scripts and test fixtures in Python to validate cloud infrastructure configurations and speed up developer deployment cycles.",
    skills: ["Python", "Scripting", "Bash", "Docker", "CI/CD"],
    applyUrl: null, // Tests "Application link unavailable" state
    posted: "6 days ago"
  },
  {
    id: "intern-010",
    title: "Java Cloud Microservices Intern",
    company: "Solaris Cloud Systems",
    domain: "Java",
    mode: "Hybrid",
    location: "Atlanta, GA",
    duration: "6 Months",
    stipend: "$1,750 / month",
    description: "Contribute to enterprise message queue listeners, refactor legacy batch jobs, and monitor distributed tracing using Spring Cloud and Kafka.",
    skills: ["Java", "Spring Boot", "Kafka", "Docker", "Microservices"],
    applyUrl: "https://example.com/apply/solaris-microservices-intern",
    posted: "2 days ago"
  },
  {
    id: "intern-011",
    title: "Business Intelligence & Data Intern",
    company: "Harbor Data Corp",
    domain: "Data Science",
    mode: "On-site",
    location: "Dallas, TX",
    duration: "4 Months",
    stipend: "Unpaid (Academic Credit)",
    description: "Partner with marketing analysts to model campaign performance metrics, generate weekly executive reports, and perform data validation checks.",
    skills: ["SQL", "Excel / Sheets", "Tableau", "Data Modeling", "Communication"],
    applyUrl: "https://example.com/apply/harbor-bi-intern",
    posted: "1 week ago"
  },
  {
    id: "intern-012",
    title: "Computer Vision AI Intern",
    company: "Visionary AI",
    domain: "AI/ML",
    mode: "Remote",
    location: "Toronto, ON (Remote)",
    duration: "4 Months",
    stipend: "$2,000 / month",
    description: "Assist in preprocessing real-world image datasets, implementing object detection bounding box pipelines, and evaluating edge deployment latency.",
    skills: ["Python", "OpenCV", "PyTorch", "Computer Vision", "NumPy"],
    applyUrl: "https://example.com/apply/visionary-cv-intern",
    posted: "3 days ago"
  },
  {
    id: "intern-013",
    title: "Security Operations (SOC) Intern",
    company: "Aegis Cyber Defense",
    domain: "Cybersecurity",
    mode: "Hybrid",
    location: "San Jose, CA",
    duration: "6 Months",
    stipend: "$1,500 / month",
    description: "Triage security alert tickets, analyze suspicious phishing emails, and help automate routine indicator-of-compromise (IOC) lookups.",
    skills: ["Threat Analysis", "Splunk", "Python", "Phishing Analysis", "Networking"],
    applyUrl: "", // Tests "Application link unavailable" state
    posted: "4 days ago"
  },
  {
    id: "intern-014",
    title: "UX Researcher & Accessibility Intern",
    company: "Inclusion Labs",
    domain: "UI/UX Design",
    mode: "Remote",
    location: "Minneapolis, MN (Remote)",
    duration: "3 Months",
    stipend: "$1,350 / month",
    description: "Audit web digital applications against WCAG 2.1 AA accessibility standards, conduct user testing sessions with assistive technology users, and document usability guidelines.",
    skills: ["Accessibility (WCAG)", "Usability Testing", "Figma", "User Journey Mapping", "Empathy"],
    applyUrl: "https://example.com/apply/inclusionlabs-ux-intern",
    posted: "Just now"
  }
];

// ----------------------------------------------------------------------------
// 2. Application State & DOM Cache
// ----------------------------------------------------------------------------
const state = {
  allInternships: [],
  filteredInternships: [],
  filters: {
    query: '',
    domain: 'all',
    mode: 'all'
  },
  isLoading: true
};

const dom = {
  searchInput: document.getElementById('search-input'),
  searchClearBtn: document.getElementById('search-clear-btn'),
  domainFilter: document.getElementById('domain-filter'),
  modeFilter: document.getElementById('mode-filter'),
  resetFiltersBtn: document.getElementById('reset-filters-btn'),
  resultsCount: document.getElementById('results-count'),
  activeFilterTags: document.getElementById('active-filter-tags'),
  internshipsGrid: document.getElementById('internships-grid'),
  emptyState: document.getElementById('empty-state'),
  emptyResetBtn: document.getElementById('empty-reset-btn'),
  errorState: document.getElementById('error-state'),
  errorMessage: document.getElementById('error-message'),
  errorRetryBtn: document.getElementById('error-retry-btn'),
  currentYear: document.getElementById('current-year')
};

// ----------------------------------------------------------------------------
// 3. Helper Utilities
// ----------------------------------------------------------------------------

/**
 * Escapes HTML entities to safeguard against XSS injections
 * @param {string} str 
 * @returns {string} Safe HTML escaped string
 */
function escapeHTML(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Converts a domain name into a CSS class slug
 * @param {string} domain 
 * @returns {string} kebab-case slug
 */
function getDomainClass(domain) {
  return 'badge-' + (domain || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

/**
 * Converts a mode name into a CSS class slug
 * @param {string} mode 
 * @returns {string} kebab-case slug
 */
function getModeClass(mode) {
  return 'mode-' + (mode || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

// ----------------------------------------------------------------------------
// 4. Data Loading Service
// ----------------------------------------------------------------------------

/**
 * Loads internship data from JSON file with safe fallback handling
 */
async function loadInternships() {
  state.isLoading = true;
  showErrorState(false);
  showEmptyState(false);
  dom.internshipsGrid.innerHTML = `
    <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
      <p>Loading curated internship opportunities...</p>
    </div>
  `;
  dom.resultsCount.textContent = 'Loading internships...';

  try {
    const response = await fetch('data/internships.json');
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: Failed to fetch data/internships.json`);
    }
    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Received invalid or empty internship dataset.');
    }

    state.allInternships = data;
    console.info(`[InternOrbit] Successfully loaded ${data.length} listings from JSON.`);
  } catch (error) {
    console.warn('[InternOrbit] JSON fetch encounter:', error.message);
    
    // If running over file:// or fetch failed, gracefully utilize fallback data
    if (window.location.protocol === 'file:' || error.message.includes('Failed to fetch')) {
      console.info('[InternOrbit] Employing high-fidelity fallback dataset for file:// protocol.');
      state.allInternships = FALLBACK_INTERNSHIPS;
    } else {
      showErrorState(true, error.message);
      return;
    }
  } finally {
    state.isLoading = false;
  }

  // Initial render with current filters
  applyFilters();
}

// ----------------------------------------------------------------------------
// 5. Filtering & Search Logic
// ----------------------------------------------------------------------------

/**
 * Applies search query, domain filter, and mode filter simultaneously
 */
function applyFilters() {
  const query = state.filters.query.trim().toLowerCase();
  const domain = state.filters.domain;
  const mode = state.filters.mode;

  state.filteredInternships = state.allInternships.filter(item => {
    // 1. Domain Match
    const matchDomain = (domain === 'all') || (item.domain === domain);

    // 2. Mode Match
    const matchMode = (mode === 'all') || (item.mode === mode);

    // 3. Search Query Match (Title, Company, Domain, Location, Skills, Description)
    let matchQuery = true;
    if (query.length > 0) {
      const titleMatch = (item.title || '').toLowerCase().includes(query);
      const companyMatch = (item.company || '').toLowerCase().includes(query);
      const domainMatch = (item.domain || '').toLowerCase().includes(query);
      const locationMatch = (item.location || '').toLowerCase().includes(query);
      const descriptionMatch = (item.description || '').toLowerCase().includes(query);
      const skillsMatch = Array.isArray(item.skills) && item.skills.some(skill => 
        skill.toLowerCase().includes(query)
      );

      matchQuery = titleMatch || companyMatch || domainMatch || locationMatch || descriptionMatch || skillsMatch;
    }

    return matchDomain && matchMode && matchQuery;
  });

  renderResults();
  updateResultsCount();
  renderActiveFilterBadges();
}

/**
 * Renders internship cards into DOM
 */
function renderResults() {
  const total = state.filteredInternships.length;

  if (total === 0) {
    dom.internshipsGrid.innerHTML = '';
    showEmptyState(true);
    return;
  }

  showEmptyState(false);

  const cardsHtml = state.filteredInternships.map(item => {
    const isUnpaid = (item.stipend || '').toLowerCase().includes('unpaid');
    const hasValidApplyUrl = typeof item.applyUrl === 'string' && item.applyUrl.trim().length > 0;

    const skillsHtml = Array.isArray(item.skills)
      ? item.skills.map(s => `<span class="skill-tag">${escapeHTML(s)}</span>`).join('')
      : '';

    // Apply button or disabled unavailable badge
    let actionButtonHtml = '';
    if (hasValidApplyUrl) {
      actionButtonHtml = `
        <a 
          href="${escapeHTML(item.applyUrl)}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn btn-primary apply-btn"
          aria-label="Apply for ${escapeHTML(item.title)} at ${escapeHTML(item.company)} (opens in a new tab)"
        >
          <span>Apply Now</span>
          <svg class="external-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      `;
    } else {
      actionButtonHtml = `
        <button 
          type="button" 
          class="btn btn-disabled apply-btn" 
          disabled
          aria-disabled="true"
          title="Direct application link is not available for this sample role"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
          </svg>
          <span>Application link unavailable</span>
        </button>
      `;
    }

    return `
      <article class="internship-card" aria-labelledby="card-title-${item.id}">
        <div>
          <!-- Header: Category & Mode Badges -->
          <div class="card-header">
            <div class="card-badges">
              <span class="badge-domain ${getDomainClass(item.domain)}">
                ${escapeHTML(item.domain)}
              </span>
              <span class="badge-mode ${getModeClass(item.mode)}">
                ${escapeHTML(item.mode)}
              </span>
            </div>
            <span class="card-posted">${escapeHTML(item.posted || 'Recent')}</span>
          </div>

          <!-- Body: Title & Meta -->
          <div class="card-body">
            <h3 id="card-title-${item.id}" class="card-title">${escapeHTML(item.title)}</h3>
            <div class="card-company">
              <svg class="company-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                <line x1="9" y1="22" x2="9" y2="22.01"></line>
                <line x1="15" y1="22" x2="15" y2="22.01"></line>
                <line x1="9" y1="6" x2="9" y2="6.01"></line>
                <line x1="15" y1="6" x2="15" y2="6.01"></line>
                <line x1="9" y1="10" x2="9" y2="10.01"></line>
                <line x1="15" y1="10" x2="15" y2="10.01"></line>
                <line x1="9" y1="14" x2="9" y2="14.01"></line>
                <line x1="15" y1="14" x2="15" y2="14.01"></line>
              </svg>
              <span>${escapeHTML(item.company)}</span>
            </div>

            <!-- Meta List: Location, Duration, Stipend -->
            <div class="card-meta-list">
              <div class="meta-item">
                <svg class="meta-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>${escapeHTML(item.location)}</span>
              </div>
              <div class="meta-item">
                <svg class="meta-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Duration: <strong>${escapeHTML(item.duration)}</strong></span>
              </div>
              <div class="meta-item">
                <svg class="meta-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                <span class="meta-stipend ${isUnpaid ? 'unpaid' : ''}">${escapeHTML(item.stipend)}</span>
              </div>
            </div>

            <p class="card-description">${escapeHTML(item.description)}</p>

            <!-- Skills -->
            <div class="card-skills-wrapper" aria-label="Required skills">
              <div class="card-skills">
                ${skillsHtml}
              </div>
            </div>
          </div>
        </div>

        <!-- Footer: Action Button -->
        <div class="card-footer">
          ${actionButtonHtml}
        </div>
      </article>
    `;
  }).join('');

  dom.internshipsGrid.innerHTML = cardsHtml;
}

/**
 * Updates the readable live result count announcement
 */
function updateResultsCount() {
  const current = state.filteredInternships.length;
  const total = state.allInternships.length;

  if (current === total) {
    dom.resultsCount.innerHTML = `Showing all <strong>${total}</strong> internships`;
  } else if (current === 1) {
    dom.resultsCount.innerHTML = `Showing <strong>1</strong> matching internship (out of ${total})`;
  } else {
    dom.resultsCount.innerHTML = `Showing <strong>${current}</strong> of ${total} internships`;
  }
}

/**
 * Renders removable filter tags for currently active criteria
 */
function renderActiveFilterBadges() {
  dom.activeFilterTags.innerHTML = '';

  const tags = [];

  if (state.filters.query.trim().length > 0) {
    tags.push({
      type: 'query',
      label: `"${state.filters.query.trim()}"`
    });
  }

  if (state.filters.domain !== 'all') {
    tags.push({
      type: 'domain',
      label: state.filters.domain
    });
  }

  if (state.filters.mode !== 'all') {
    tags.push({
      type: 'mode',
      label: state.filters.mode
    });
  }

  tags.forEach(tag => {
    const badge = document.createElement('span');
    badge.className = 'filter-badge';
    badge.innerHTML = `
      <span>${escapeHTML(tag.label)}</span>
      <button 
        type="button" 
        class="badge-remove-btn" 
        aria-label="Remove filter: ${escapeHTML(tag.label)}"
        data-filter-type="${tag.type}"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    `;
    dom.activeFilterTags.appendChild(badge);
  });
}

// ----------------------------------------------------------------------------
// 6. State Display Management (Empty & Error States)
// ----------------------------------------------------------------------------

function showEmptyState(show) {
  if (show) {
    dom.emptyState.classList.remove('hidden');
    dom.internshipsGrid.classList.add('hidden');
  } else {
    dom.emptyState.classList.add('hidden');
    dom.internshipsGrid.classList.remove('hidden');
  }
}

function showErrorState(show, message = '') {
  if (show) {
    if (message) dom.errorMessage.textContent = message;
    dom.errorState.classList.remove('hidden');
    dom.internshipsGrid.classList.add('hidden');
    dom.emptyState.classList.add('hidden');
    dom.resultsCount.textContent = 'Error loading listings';
  } else {
    dom.errorState.classList.add('hidden');
  }
}

/**
 * Resets all search and filter controls to default values
 */
function resetAllFilters() {
  state.filters.query = '';
  state.filters.domain = 'all';
  state.filters.mode = 'all';

  dom.searchInput.value = '';
  dom.domainFilter.value = 'all';
  dom.modeFilter.value = 'all';
  dom.searchClearBtn.classList.add('hidden');

  applyFilters();
  dom.searchInput.focus();
}

// ----------------------------------------------------------------------------
// 7. Event Listeners Setup
// ----------------------------------------------------------------------------

function setupEventListeners() {
  // Live Search Input (as user types)
  dom.searchInput.addEventListener('input', (e) => {
    state.filters.query = e.target.value;
    if (e.target.value.trim().length > 0) {
      dom.searchClearBtn.classList.remove('hidden');
    } else {
      dom.searchClearBtn.classList.add('hidden');
    }
    applyFilters();
  });

  // Clear search input via 'X' button
  dom.searchClearBtn.addEventListener('click', () => {
    state.filters.query = '';
    dom.searchInput.value = '';
    dom.searchClearBtn.classList.add('hidden');
    applyFilters();
    dom.searchInput.focus();
  });

  // ESC Key to clear search if input is focused
  dom.searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dom.searchInput.value.length > 0) {
      state.filters.query = '';
      dom.searchInput.value = '';
      dom.searchClearBtn.classList.add('hidden');
      applyFilters();
    }
  });

  // Domain Filter Change
  dom.domainFilter.addEventListener('change', (e) => {
    state.filters.domain = e.target.value;
    applyFilters();
  });

  // Mode Filter Change
  dom.modeFilter.addEventListener('change', (e) => {
    state.filters.mode = e.target.value;
    applyFilters();
  });

  // Reset Filters Buttons (Main toolbar and Empty state)
  dom.resetFiltersBtn.addEventListener('click', resetAllFilters);
  dom.emptyResetBtn.addEventListener('click', resetAllFilters);

  // Active filter badge removal delegation
  dom.activeFilterTags.addEventListener('click', (e) => {
    const btn = e.target.closest('.badge-remove-btn');
    if (!btn) return;

    const filterType = btn.getAttribute('data-filter-type');
    if (filterType === 'query') {
      state.filters.query = '';
      dom.searchInput.value = '';
      dom.searchClearBtn.classList.add('hidden');
    } else if (filterType === 'domain') {
      state.filters.domain = 'all';
      dom.domainFilter.value = 'all';
    } else if (filterType === 'mode') {
      state.filters.mode = 'all';
      dom.modeFilter.value = 'all';
    }

    applyFilters();
  });

  // Error Retry Button
  dom.errorRetryBtn.addEventListener('click', () => {
    loadInternships();
  });

  // Dynamic Copyright Year
  if (dom.currentYear) {
    dom.currentYear.textContent = new Date().getFullYear();
  }
}

// ----------------------------------------------------------------------------
// 8. Application Initialization
// ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  loadInternships();
});
