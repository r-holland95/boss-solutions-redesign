/* ═══════════════════════════════════════
   BOSS Solutions — Shared Components
   Header + Footer
   ═══════════════════════════════════════ */

function renderHeader() {
  return `
  <header id="site-header">
    <div class="nav-inner">
      <div class="logo" onclick="nav('/')">BOSS<span>.</span></div>
      <div class="nav-links">
        <div class="nav-dropdown">
          <div class="nav-link" data-nav="products">Products ▾</div>
          <div class="nav-dropdown-menu">
            <div class="nav-dropdown-item" onclick="nav('/bossdesk')"><strong>BOSSDesk®</strong><small>ITSM & Help Desk Platform</small></div>
            <div class="nav-dropdown-item" onclick="nav('/bossdesk-ai')"><strong>BOSSDesk AI</strong><small>AI-Powered Automation</small></div>
            <div class="nav-dropdown-item" onclick="nav('/boss811')"><strong>BOSS811®</strong><small>811 Damage Prevention</small></div>
            <div class="nav-dropdown-item" onclick="nav('/boss811-risk')"><strong>Risk & Damage</strong><small>Investigation Workflows</small></div>
            <div class="nav-dropdown-item" onclick="nav('/pricing')"><strong>Pricing</strong><small>Plans & Packages</small></div>
          </div>
        </div>
        <div class="nav-dropdown">
          <div class="nav-link" data-nav="services">Services ▾</div>
          <div class="nav-dropdown-menu">
            <div class="nav-dropdown-item" onclick="nav('/services')"><strong>All Services</strong><small>Implementation, Training & More</small></div>
            <div class="nav-dropdown-item" onclick="nav('/support')"><strong>Support</strong><small>U.S.-Based Customer Support</small></div>
          </div>
        </div>
        <div class="nav-dropdown">
          <div class="nav-link" data-nav="resources">Resources ▾</div>
          <div class="nav-dropdown-menu">
            <div class="nav-dropdown-item" onclick="nav('/webinars')"><strong>Webinar Hub</strong><small>On-Demand & Upcoming</small></div>
            <div class="nav-dropdown-item" onclick="nav('/success-stories')"><strong>Success Stories</strong><small>Customer Case Studies</small></div>
            <div class="nav-dropdown-item" onclick="nav('/testimonials')"><strong>Testimonials</strong><small>Video & Written Reviews</small></div>
          </div>
        </div>
        <div class="nav-dropdown">
          <div class="nav-link" data-nav="news">News ▾</div>
          <div class="nav-dropdown-menu">
            <div class="nav-dropdown-item" onclick="nav('/blog')"><strong>Blog</strong><small>Insights & Articles</small></div>
            <div class="nav-dropdown-item" onclick="nav('/events')"><strong>Events</strong><small>Upcoming Conferences</small></div>
            <div class="nav-dropdown-item" onclick="nav('/press')"><strong>News & Press</strong><small>Latest Announcements</small></div>
          </div>
        </div>
        <div class="nav-link" data-nav="about" onclick="nav('/about')">About</div>
      </div>
      <div class="nav-actions">
        <a class="btn btn-ghost btn-sm" onclick="nav('/support')">Support</a>
        <a class="btn btn-primary btn-sm" onclick="nav('/demo')">Request Demo</a>
      </div>
      <button class="hamburger" onclick="toggleMobile()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
  <div class="mobile-menu" id="mobile-menu">
    <a onclick="nav('/'); closeMobile()">Home</a>
    <div class="mobile-nav-item" style="color:var(--accent); font-size:.85rem; border:none; padding:20px 0 4px;">PRODUCTS</div>
    <div class="mobile-sub">
      <a onclick="nav('/bossdesk'); closeMobile()">BOSSDesk®</a>
      <a onclick="nav('/bossdesk-ai'); closeMobile()">BOSSDesk AI</a>
      <a onclick="nav('/boss811'); closeMobile()">BOSS811®</a>
      <a onclick="nav('/boss811-risk'); closeMobile()">Risk & Damage</a>
      <a onclick="nav('/pricing'); closeMobile()">Pricing</a>
    </div>
    <div class="mobile-nav-item" style="color:var(--accent); font-size:.85rem; border:none; padding:20px 0 4px;">SERVICES</div>
    <div class="mobile-sub">
      <a onclick="nav('/services'); closeMobile()">All Services</a>
      <a onclick="nav('/support'); closeMobile()">Support</a>
    </div>
    <div class="mobile-nav-item" style="color:var(--accent); font-size:.85rem; border:none; padding:20px 0 4px;">RESOURCES</div>
    <div class="mobile-sub">
      <a onclick="nav('/webinars'); closeMobile()">Webinar Hub</a>
      <a onclick="nav('/success-stories'); closeMobile()">Success Stories</a>
      <a onclick="nav('/testimonials'); closeMobile()">Testimonials</a>
    </div>
    <div class="mobile-nav-item" style="color:var(--accent); font-size:.85rem; border:none; padding:20px 0 4px;">NEWS</div>
    <div class="mobile-sub">
      <a onclick="nav('/blog'); closeMobile()">Blog</a>
      <a onclick="nav('/events'); closeMobile()">Events</a>
      <a onclick="nav('/press'); closeMobile()">News & Press</a>
    </div>
    <a onclick="nav('/about'); closeMobile()">About</a>
    <a onclick="nav('/contact'); closeMobile()">Contact</a>
    <a onclick="nav('/partners'); closeMobile()">Partners</a>
    <div style="padding-top:16px;">
      <a class="btn btn-primary" style="width:100%;justify-content:center;border-bottom:none;" onclick="nav('/demo'); closeMobile()">Request Demo</a>
    </div>
  </div>`;
}

function renderFooter() {
  return `
  <footer id="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo" onclick="nav('/')" style="margin-bottom:0;">BOSS<span>.</span></div>
          <p>Innovative software for IT service management and underground utility damage prevention. Award-winning, U.S.-based support.</p>
          <div class="footer-socials">
            <a href="https://twitter.com/BOSS2U" target="_blank" rel="noopener" aria-label="Twitter">𝕏</a>
            <a href="https://www.linkedin.com/company/boss/" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
            <a href="https://www.youtube.com/channel/UCcu86NA0zbZ7ppI8fR8Vaag" target="_blank" rel="noopener" aria-label="YouTube">▶</a>
          </div>
        </div>
        <div class="footer-col">
          <h5>Products</h5>
          <ul>
            <li><a onclick="nav('/bossdesk')">BOSSDesk</a></li>
            <li><a onclick="nav('/boss811')">BOSS811</a></li>
            <li><a onclick="nav('/bossdesk-ai')">BOSSDesk AI</a></li>
            <li><a onclick="nav('/pricing')">Pricing</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a onclick="nav('/services')">Implementation</a></li>
            <li><a onclick="nav('/services')">Training</a></li>
            <li><a onclick="nav('/services')">Professional</a></li>
            <li><a onclick="nav('/support')">Support</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Resources</h5>
          <ul>
            <li><a onclick="nav('/webinars')">Webinar Hub</a></li>
            <li><a onclick="nav('/success-stories')">Success Stories</a></li>
            <li><a onclick="nav('/blog')">Blog</a></li>
            <li><a onclick="nav('/events')">Events</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Company</h5>
          <ul>
            <li><a onclick="nav('/about')">About Us</a></li>
            <li><a onclick="nav('/about')">Careers</a></li>
            <li><a onclick="nav('/partners')">Partners</a></li>
            <li><a onclick="nav('/contact')">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Business Oriented Software Solutions Inc. All rights reserved.</p>
        <div class="footer-certs">
          <span class="cert-badge">SOC 2 TYPE II</span>
          <span class="cert-badge">TX-RAMP</span>
          <span class="cert-badge">TX DIR</span>
        </div>
        <div class="footer-legal">
          <a onclick="nav('/privacy')">Privacy Policy</a>
          <a onclick="nav('/terms')">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>`;
}

function toggleMobile() {
  const menu = document.getElementById('mobile-menu');
  const btn = document.querySelector('.hamburger');
  menu.classList.toggle('active');
  btn.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}
function closeMobile() {
  document.getElementById('mobile-menu')?.classList.remove('active');
  document.querySelector('.hamburger')?.classList.remove('open');
  document.body.style.overflow = '';
}

// Arrow SVG helper
const arrowSVG = `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
