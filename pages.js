/* ═══════════════════════════════════════
   BOSS Solutions — All Page Templates
   ═══════════════════════════════════════ */

// ─── SHARED CTA BLOCK ───
function ctaBlock(title, subtitle) {
  return `
  <section class="cta-section">
    <div class="cta-glow"></div>
    <div class="container">
      <div class="cta-inner reveal">
        <div class="section-label center">Get Started</div>
        <h2>${title || 'Ready to transform your operations?'}</h2>
        <p>${subtitle || 'See why 99%+ of our customers stay with BOSS Solutions. Schedule a personalized demo and discover how we can streamline your workflows.'}</p>
        <div class="cta-actions">
          <a class="btn btn-primary btn-lg" onclick="nav('/demo')">Schedule Your Demo ${arrowSVG}</a>
          <a class="btn btn-outline btn-lg" onclick="nav('/contact')">Contact Sales</a>
        </div>
      </div>
    </div>
  </section>`;
}

// ──────────────────────────────────────
// HOME PAGE
// ──────────────────────────────────────
function pageHome() {
  document.getElementById('app').innerHTML = `
  <!-- HERO -->
  <section class="hero">
    <div class="hero-bg-grid"></div>
    <div class="hero-glow"></div>
    <div class="hero-glow-warm"></div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-badge">
          <div class="hero-badge-dot"></div>
          SOC 2 Type II Certified — Your data security is our priority
        </div>
        <h1>Service management<br><span class="accent">reimagined.</span><br>Damage prevention<br><span class="warm">simplified.</span></h1>
        <p class="hero-sub">BOSS Solutions delivers award-winning ITSM and 811 damage prevention platforms trusted by utilities, governments, and enterprises to automate workflows and protect critical infrastructure.</p>
        <div class="hero-actions">
          <a class="btn btn-primary btn-lg" onclick="nav('/demo')">Request a Demo ${arrowSVG}</a>
          <a class="btn btn-outline btn-lg" onclick="nav('/bossdesk')">Explore Products</a>
        </div>
        <div class="hero-stats">
          <div class="hero-stat"><h3>99<span class="accent">%+</span></h3><p>Customer retention</p></div>
          <div class="hero-stat"><h3>20<span class="accent">+</span></h3><p>Years in business</p></div>
          <div class="hero-stat"><h3>500<span class="accent">+</span></h3><p>Organizations served</p></div>
        </div>
      </div>
    </div>
  </section>

  <!-- LOGOS -->
  <section class="logos-bar">
    <div class="container">
      <div class="logos-label">Trusted by industry leaders</div>
      <div class="logos-row">
        <div class="logo-item">Google Fiber</div>
        <div class="logo-item">CenterPoint Energy</div>
        <div class="logo-item">PSEG</div>
        <div class="logo-item">The Breakers</div>
        <div class="logo-item">HOLT CAT</div>
        <div class="logo-item">Forsyth County</div>
      </div>
    </div>
  </section>

  <!-- PRODUCTS -->
  <section class="section" id="products-section">
    <div class="container">
      <div class="section-header center reveal">
        <div class="section-label center">Products</div>
        <h2>Two powerful platforms.<br>One trusted company.</h2>
        <p>Whether you're managing IT service requests or protecting underground utilities, BOSS Solutions has the platform built for your operational reality.</p>
      </div>
      <div class="product-cards">
        <div class="product-card cyan reveal reveal-delay-1">
          <div class="product-card-glow"></div>
          <div class="product-icon"><svg width="24" height="24" fill="none" stroke="var(--accent)" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div>
          <h3>BOSSDesk®</h3>
          <div class="product-sub">IT Service Management & Help Desk</div>
          <p class="desc">A fully integrated ITSM platform with help desk ticketing, asset management, self-service portal, and enterprise-wide workflow automation — available on cloud or on-premise.</p>
          <div class="feature-tags">
            <span class="feature-tag new">✦ AI-Powered</span>
            <span class="feature-tag new">✦ Power BI</span>
            <span class="feature-tag">Incident Mgmt</span>
            <span class="feature-tag">Change Mgmt</span>
            <span class="feature-tag">Asset Tracking</span>
            <span class="feature-tag">Self-Service</span>
            <span class="feature-tag">Service Catalog</span>
            <span class="feature-tag">Mobile Apps</span>
          </div>
          <a class="btn btn-primary" onclick="nav('/bossdesk')">Explore BOSSDesk →</a>
        </div>
        <div class="product-card orange reveal reveal-delay-2">
          <div class="product-card-glow"></div>
          <div class="product-icon"><svg width="24" height="24" fill="none" stroke="var(--accent-warm)" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
          <h3>BOSS811®</h3>
          <div class="product-sub">811 One-Call Damage Prevention</div>
          <p class="desc">Modern, map-based 811 locate ticket management for utilities, municipalities, and locators — with risk identification, damage tracking, and ArcGIS integration built in.</p>
          <div class="feature-tags">
            <span class="feature-tag new-warm">✦ Risk & Damage</span>
            <span class="feature-tag new-warm">✦ Facility Mapping</span>
            <span class="feature-tag">Locate Tickets</span>
            <span class="feature-tag">GIS Maps</span>
            <span class="feature-tag">Alert System</span>
            <span class="feature-tag">Manifest Marking</span>
            <span class="feature-tag">Mobile Field App</span>
            <span class="feature-tag">Driving Routes</span>
          </div>
          <a class="btn btn-warm" onclick="nav('/boss811')">Explore BOSS811 →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- RETENTION -->
  <section class="section">
    <div class="container">
      <div class="retention-inner">
        <div class="retention-visual reveal">
          <div class="retention-ring"></div>
          <div class="retention-number">99%+</div>
          <span class="retention-suffix">Customer Retention</span>
        </div>
        <div class="retention-content reveal reveal-delay-2">
          <div class="section-label">Why customers stay</div>
          <h2>Excellence that keeps customers coming back, year after year.</h2>
          <p style="color:var(--text-secondary);line-height:1.8;margin-bottom:36px;">Our success isn't built solely on exceptional software — it's built on strong relationships. We collaborate with your team to achieve remarkable results, which is why more than 99% of our customers continue to choose BOSS Solutions.</p>
          <div class="proof-badges">
            <div class="proof-badge"><div class="proof-badge-icon cyan">⭐</div><span>Capterra 4.5+ Rating</span></div>
            <div class="proof-badge"><div class="proof-badge-icon gold">🏆</div><span>Gartner Recognized</span></div>
            <div class="proof-badge"><div class="proof-badge-icon green">🛡</div><span>SOC 2 Type II</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- WHO WE SERVE -->
  <section class="section alt">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">Solutions</div>
        <h2>Built for the teams who keep things running.</h2>
        <p>From IT departments to utility crews, BOSS Solutions scales to fit your operational needs.</p>
      </div>
      <div class="serve-grid">
        <div class="serve-card reveal reveal-delay-1"><span class="serve-card-icon">🏛️</span><h4>Government & Municipalities</h4><p>City and county IT departments use BOSSDesk to manage service requests across departments, while public works teams rely on BOSS811 for dig ticket compliance.</p></div>
        <div class="serve-card reveal reveal-delay-2"><span class="serve-card-icon">⚡</span><h4>Utilities & Energy</h4><p>Electric, gas, water, and telecom providers automate 811 locate workflows and damage prevention with BOSS811's map-based tools and risk monitoring.</p></div>
        <div class="serve-card reveal reveal-delay-3"><span class="serve-card-icon">🎓</span><h4>Education & Universities</h4><p>Higher education IT teams leverage BOSSDesk for campus-wide service management, self-service portals, and asset tracking across departments.</p></div>
        <div class="serve-card reveal reveal-delay-1"><span class="serve-card-icon">🏨</span><h4>Hospitality & Enterprise</h4><p>Luxury resorts and large enterprises use BOSSDesk to streamline IT and facilities maintenance, improving guest and employee satisfaction.</p></div>
        <div class="serve-card reveal reveal-delay-2"><span class="serve-card-icon">🔧</span><h4>Locating & Excavation</h4><p>Contract locators and excavation companies use BOSS811 for manifest marking, optimized driving routes, and field-ready mobile tools.</p></div>
        <div class="serve-card reveal reveal-delay-3"><span class="serve-card-icon">🏗️</span><h4>Construction & Engineering</h4><p>Construction firms and engineering teams rely on BOSS811 to manage dig notifications and avoid costly utility strikes before breaking ground.</p></div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="section">
    <div class="container">
      <div class="section-header center reveal">
        <div class="section-label center">Customer Stories</div>
        <h2>Hear from the teams we empower.</h2>
        <p>Real organizations. Real results. Here's what our customers have to say.</p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card reveal reveal-delay-1">
          <div class="testimonial-stars">★★★★★</div>
          <blockquote>"The best helpdesk software I have used in my 20+ years of helpdesk experience. The deployment capabilities and the reports help reduce my workload by at least 60%."</blockquote>
          <div class="testimonial-author"><div class="testimonial-avatar">VM</div><div class="testimonial-meta"><strong>Van M.</strong><span>Forsyth County, GA</span></div></div>
        </div>
        <div class="testimonial-card reveal reveal-delay-2">
          <div class="testimonial-stars">★★★★★</div>
          <blockquote>"BOSS Solutions combines enterprise-grade functionality with genuine ease of use. Their support team is the most responsive we've ever worked with — bar none."</blockquote>
          <div class="testimonial-author"><div class="testimonial-avatar warm">TB</div><div class="testimonial-meta"><strong>The Breakers</strong><span>Palm Beach, FL</span></div></div>
        </div>
        <div class="testimonial-card reveal reveal-delay-3">
          <div class="testimonial-stars">★★★★★</div>
          <blockquote>"BOSS811 transformed how we handle locate tickets. The map-based workflows and mobile access have dramatically improved our field team's productivity."</blockquote>
          <div class="testimonial-author"><div class="testimonial-avatar green">CP</div><div class="testimonial-meta"><strong>Operations Lead</strong><span>CenterPoint Energy</span></div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURES BENTO -->
  <section class="section alt">
    <div class="container">
      <div class="section-header center reveal">
        <div class="section-label center">Platform Capabilities</div>
        <h2>Everything you need. Nothing you don't.</h2>
        <p>Powerful features across both platforms, designed with simplicity at the core.</p>
      </div>
      <div class="bento-grid">
        <div class="bento-item span-2 reveal"><span class="bento-icon">🤖</span><h4>AI-Powered Automation</h4><p>BOSSDesk AI classifies tickets, suggests resolutions, and automates routing — so your team focuses on what matters most.</p></div>
        <div class="bento-item reveal reveal-delay-1"><span class="bento-icon">📊</span><h4>Power BI Integration</h4><p>Deep analytics and custom dashboards with native Power BI connectivity.</p></div>
        <div class="bento-item reveal reveal-delay-2"><span class="bento-icon">🗺️</span><h4>GIS Map Workflows</h4><p>ArcGIS-integrated map views for visual locate ticket management.</p></div>
        <div class="bento-item reveal reveal-delay-1"><span class="bento-icon">📱</span><h4>Mobile-First</h4><p>Native mobile apps for ITSM and field locate work.</p></div>
        <div class="bento-item reveal reveal-delay-2"><span class="bento-icon">🔄</span><h4>Workflow Engine</h4><p>Visual workflow builder for approval chains and automations.</p></div>
        <div class="bento-item span-2 reveal reveal-delay-3"><span class="bento-icon">⚠️</span><h4>Risk & Damage Prevention</h4><p>Proactive risk identification, damage investigation workflows, and trend analysis — protecting your infrastructure before problems arise.</p></div>
        <div class="bento-item reveal"><span class="bento-icon">🛎️</span><h4>Self-Service Portal</h4><p>Branded portal with knowledge base and service catalog.</p></div>
        <div class="bento-item reveal reveal-delay-1"><span class="bento-icon">📋</span><h4>Asset Management</h4><p>Full lifecycle asset tracking with discovery and inventory.</p></div>
        <div class="bento-item reveal reveal-delay-2"><span class="bento-icon">☁️</span><h4>Cloud or On-Premise</h4><p>Deploy SaaS, private cloud, or fully on-premise.</p></div>
        <div class="bento-item reveal reveal-delay-3"><span class="bento-icon">🔐</span><h4>Enterprise Security</h4><p>SOC 2 Type II, TX-RAMP, and Texas DIR certified.</p></div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section">
    <div class="container">
      <div class="section-header center reveal">
        <div class="section-label center">FAQ</div>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div class="faq-list reveal">
        <div class="faq-item">
          <div class="faq-question">Who is BOSS Solutions®?<div class="faq-toggle">+</div></div>
          <div class="faq-answer"><p>BOSS Solutions® provides innovative software for automating service management and damage prevention. Our solutions — BOSSDesk for IT and enterprise service management and BOSS811 for 811 One Call Locate ticket management — help organizations improve efficiency, visibility, and customer satisfaction.</p></div>
        </div>
        <div class="faq-item">
          <div class="faq-question">How do BOSSDesk® and BOSS811® differ?<div class="faq-toggle">+</div></div>
          <div class="faq-answer"><p>While both share the same powerful platform and user-friendly design, BOSSDesk focuses on internal service management — including IT help desks, facilities, and HR. BOSS811 is designed for managing 811 dig tickets and preventing utility damage for municipalities, utilities, and locators.</p></div>
        </div>
        <div class="faq-item">
          <div class="faq-question">Who uses BOSS Solutions® products?<div class="faq-toggle">+</div></div>
          <div class="faq-answer"><p>Our solutions serve a wide range of organizations, including city and county governments, utilities, universities, and enterprises. From IT departments managing service requests to utility companies tracking dig tickets, BOSS software scales to fit your operational needs.</p></div>
        </div>
        <div class="faq-item">
          <div class="faq-question">What makes BOSS Solutions® different?<div class="faq-toggle">+</div></div>
          <div class="faq-answer"><p>Unlike many competing systems, BOSS Solutions® combines enterprise-grade functionality with ease of use. Customers consistently cite our stellar support team, fast implementation, and 99%+ retention rate as key reasons they continue to choose BOSS year after year.</p></div>
        </div>
      </div>
    </div>
  </section>

  ${ctaBlock()}
  `;
}

// ──────────────────────────────────────
// BOSSDESK PAGE
// ──────────────────────────────────────
function pageBossDesk() {
  document.getElementById('app').innerHTML = `
  <section class="page-hero">
    <div class="hero-bg-grid"></div>
    <div class="hero-glow"></div>
    <div class="container" style="position:relative;z-index:1;">
      <div class="section-label">IT Service Management</div>
      <h1>BOSSDesk®<br><span class="accent">Help Desk & ITSM</span></h1>
      <p class="hero-sub">An integrated, award-winning Help Desk Ticketing System and IT Service Management platform. Cloud or on-premise. One platform for incident, change, problem management, asset tracking, and enterprise-wide automation.</p>
      <div class="hero-actions" style="animation:fadeInUp .7s .2s var(--transition) both;">
        <a class="btn btn-primary btn-lg" onclick="nav('/demo')">Request a Demo ${arrowSVG}</a>
        <a class="btn btn-outline btn-lg" onclick="nav('/pricing')">View Pricing</a>
        <a class="btn btn-ghost btn-lg" onclick="nav('/bossdesk-ai')">🤖 Explore BOSSDesk AI</a>
      </div>
    </div>
  </section>

  <section class="section alt">
    <div class="container">
      <div class="section-header center reveal">
        <div class="section-label center">Core Features</div>
        <h2>Everything your IT team needs in one platform.</h2>
        <p>BOSSDesk streamlines IT operations with powerful ticketing, asset management, and workflow automation — reducing resolution times and improving user satisfaction.</p>
      </div>
      <div class="feature-list">
        <div class="feature-item reveal"><div class="feature-item-icon cyan">🎫</div><div><h4>Help Desk Ticketing</h4><p>Centralized ticket management with SLA tracking, priority routing, and multi-channel intake — email, portal, mobile, and chat.</p></div></div>
        <div class="feature-item reveal reveal-delay-1"><div class="feature-item-icon cyan">⚡</div><div><h4>Incident Management</h4><p>ITIL-aligned incident workflows with automated escalation, priority classification, and root cause tracking.</p></div></div>
        <div class="feature-item reveal reveal-delay-1"><div class="feature-item-icon cyan">🔄</div><div><h4>Change Management</h4><p>Structured change request workflows with approval chains, risk assessment, and CAB scheduling.</p></div></div>
        <div class="feature-item reveal reveal-delay-2"><div class="feature-item-icon cyan">🔍</div><div><h4>Problem Management</h4><p>Identify recurring issues, link related incidents, and track known errors to prevent future disruptions.</p></div></div>
        <div class="feature-item reveal"><div class="feature-item-icon cyan">📋</div><div><h4>Asset Management</h4><p>Full lifecycle asset tracking with discovery, inventory management, and configuration tracking across your organization.</p></div></div>
        <div class="feature-item reveal reveal-delay-1"><div class="feature-item-icon cyan">🛎️</div><div><h4>Self-Service Portal</h4><p>Branded portal with knowledge base, service catalog, and ticket status tracking for end users.</p></div></div>
        <div class="feature-item reveal reveal-delay-1"><div class="feature-item-icon cyan">📊</div><div><h4>Reporting & Analytics</h4><p>Built-in dashboards, custom reports, and native Power BI integration for deep operational insights.</p></div></div>
        <div class="feature-item reveal reveal-delay-2"><div class="feature-item-icon cyan">📱</div><div><h4>Mobile Apps</h4><p>Native iOS and Android apps for techs and end users — manage tickets, approve requests, and track assets on the go.</p></div></div>
        <div class="feature-item reveal"><div class="feature-item-icon cyan">🔗</div><div><h4>Service Catalog</h4><p>Customizable service request forms and automated workflows that standardize service delivery across departments.</p></div></div>
        <div class="feature-item reveal reveal-delay-1"><div class="feature-item-icon cyan">✅</div><div><h4>Approvals Module</h4><p>Multi-tier approval workflows with delegation, escalation rules, and mobile approval capabilities.</p></div></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">Industries</div>
        <h2>BOSSDesk works wherever IT teams do.</h2>
      </div>
      <div class="serve-grid">
        <div class="serve-card reveal"><span class="serve-card-icon">🏛️</span><h4>Government</h4><p>State, county, and city IT departments rely on BOSSDesk for cross-departmental service management and compliance.</p></div>
        <div class="serve-card reveal reveal-delay-1"><span class="serve-card-icon">🎓</span><h4>Education</h4><p>Universities and school districts use BOSSDesk for campus IT, student services, and facilities management.</p></div>
        <div class="serve-card reveal reveal-delay-2"><span class="serve-card-icon">🏨</span><h4>Hospitality</h4><p>Luxury hotels and resorts streamline IT and maintenance operations to keep guest experiences seamless.</p></div>
        <div class="serve-card reveal"><span class="serve-card-icon">🏢</span><h4>Enterprise</h4><p>Large organizations use BOSSDesk for IT, HR, and facilities management across multiple departments and locations.</p></div>
        <div class="serve-card reveal reveal-delay-1"><span class="serve-card-icon">⚡</span><h4>Utilities</h4><p>Utility companies manage internal IT operations and coordinate with field teams using BOSSDesk.</p></div>
        <div class="serve-card reveal reveal-delay-2"><span class="serve-card-icon">🏥</span><h4>Healthcare</h4><p>Healthcare IT teams leverage BOSSDesk for HIPAA-aware service management and equipment tracking.</p></div>
      </div>
    </div>
  </section>

  ${ctaBlock('See BOSSDesk in action.', 'Schedule a personalized demo to see how BOSSDesk can transform your IT service management.')}
  `;
}

// ──────────────────────────────────────
// BOSSDESK AI PAGE
// ──────────────────────────────────────
function pageBossDeskAI() {
  document.getElementById('app').innerHTML = `
  <section class="page-hero">
    <div class="hero-bg-grid"></div>
    <div class="hero-glow"></div>
    <div class="container" style="position:relative;z-index:1;">
      <div class="section-label">New Feature</div>
      <h1>BOSSDesk <span class="accent">AI</span></h1>
      <p class="hero-sub">Intelligent automation meets IT service management. BOSSDesk AI uses machine learning to classify tickets, suggest resolutions, route requests, and free your team to focus on high-value work.</p>
      <div class="hero-actions" style="animation:fadeInUp .7s .2s var(--transition) both;">
        <a class="btn btn-primary btn-lg" onclick="nav('/demo')">See AI in Action ${arrowSVG}</a>
        <a class="btn btn-outline btn-lg" onclick="nav('/bossdesk')">Back to BOSSDesk</a>
      </div>
    </div>
  </section>

  <section class="section alt">
    <div class="container">
      <div class="section-header center reveal">
        <div class="section-label center">AI Capabilities</div>
        <h2>Smarter service management, powered by AI.</h2>
        <p>BOSSDesk AI integrates directly into your existing workflows — no separate tools or complex setup required.</p>
      </div>
      <div class="feature-list">
        <div class="feature-item reveal"><div class="feature-item-icon cyan">🧠</div><div><h4>Intelligent Ticket Classification</h4><p>AI automatically categorizes and prioritizes incoming tickets based on content, reducing manual triage time.</p></div></div>
        <div class="feature-item reveal reveal-delay-1"><div class="feature-item-icon cyan">💡</div><div><h4>Resolution Suggestions</h4><p>AI analyzes past tickets and knowledge base articles to suggest solutions, accelerating first-contact resolution.</p></div></div>
        <div class="feature-item reveal"><div class="feature-item-icon cyan">🔀</div><div><h4>Smart Routing</h4><p>Automatically route tickets to the right team or technician based on skill set, workload, and ticket complexity.</p></div></div>
        <div class="feature-item reveal reveal-delay-1"><div class="feature-item-icon cyan">📈</div><div><h4>Predictive Analytics</h4><p>Identify trends, predict ticket volume spikes, and surface recurring issues before they become major problems.</p></div></div>
        <div class="feature-item reveal"><div class="feature-item-icon cyan">💬</div><div><h4>AI-Assisted Responses</h4><p>Generate professional, context-aware response drafts for technicians, saving time on routine communications.</p></div></div>
        <div class="feature-item reveal reveal-delay-1"><div class="feature-item-icon cyan">📊</div><div><h4>Power BI Integration</h4><p>Combine AI insights with Power BI for advanced reporting, trend analysis, and executive dashboards.</p></div></div>
      </div>
    </div>
  </section>

  ${ctaBlock('Ready to put AI to work for your IT team?', 'Schedule a demo and see BOSSDesk AI classify, route, and resolve tickets in real time.')}
  `;
}

// ──────────────────────────────────────
// BOSS811 PAGE
// ──────────────────────────────────────
function pageBoss811() {
  document.getElementById('app').innerHTML = `
  <section class="page-hero">
    <div class="hero-bg-grid"></div>
    <div class="hero-glow-warm" style="top:-20%;right:-10%;left:auto;bottom:auto;"></div>
    <div class="container" style="position:relative;z-index:1;">
      <div class="section-label warm">811 Damage Prevention</div>
      <h1>BOSS811®<br><span class="warm">Locate Ticket Management</span></h1>
      <p class="hero-sub">A modern, map-based 811 One Call locate ticketing solution for utilities, municipalities, and contract locators. Automate ticket processing, streamline workflows, and prevent underground utility damage.</p>
      <div class="hero-actions" style="animation:fadeInUp .7s .2s var(--transition) both;">
        <a class="btn btn-warm btn-lg" onclick="nav('/demo')">Request a Demo ${arrowSVG}</a>
        <a class="btn btn-outline btn-lg" onclick="nav('/pricing')">View Plans</a>
        <a class="btn btn-ghost btn-lg" onclick="nav('/boss811-risk')">⚠️ Risk & Damage Modules</a>
      </div>
    </div>
  </section>

  <section class="section alt">
    <div class="container">
      <div class="section-header center reveal">
        <div class="section-label warm center">Core Features</div>
        <h2>Complete 811 ticket management, reimagined.</h2>
        <p>BOSS811 replaces outdated processes with map-based workflows, automated routing, and real-time field tools.</p>
      </div>
      <div class="feature-list">
        <div class="feature-item reveal"><div class="feature-item-icon warm">🎫</div><div><h4>One Call Ticket Management</h4><p>Receive, process, and manage 811 locate tickets from any One Call center with automated ingestion and parsing.</p></div></div>
        <div class="feature-item reveal reveal-delay-1"><div class="feature-item-icon warm">🗺️</div><div><h4>Map-Based Workflows</h4><p>Visualize tickets on interactive maps with ArcGIS integration, facility overlays, and polygon-based area management.</p></div></div>
        <div class="feature-item reveal"><div class="feature-item-icon warm">📍</div><div><h4>Facility Mapping & Annotation</h4><p>Annotate and mark underground facilities directly on digital maps — replacing paper-based manifest marking.</p></div></div>
        <div class="feature-item reveal reveal-delay-1"><div class="feature-item-icon warm">🚗</div><div><h4>Optimized Driving Routes</h4><p>AI-powered route optimization for locators to minimize drive time and maximize tickets completed per day.</p></div></div>
        <div class="feature-item reveal"><div class="feature-item-icon warm">🔔</div><div><h4>Alerts & Notifications</h4><p>Real-time alerts for new tickets, due dates, positive responses, and status changes across web and mobile.</p></div></div>
        <div class="feature-item reveal reveal-delay-1"><div class="feature-item-icon warm">📱</div><div><h4>Mobile Field App</h4><p>Fully featured mobile app for locators to view tickets, update statuses, capture photos, and mark facilities in the field.</p></div></div>
        <div class="feature-item reveal"><div class="feature-item-icon warm">⚠️</div><div><h4>Risk Identification</h4><p>Proactive risk scoring and monitoring to identify high-risk areas and prevent damage before it occurs.</p></div></div>
        <div class="feature-item reveal reveal-delay-1"><div class="feature-item-icon warm">📊</div><div><h4>Damage Investigation</h4><p>Built-in damage reporting and investigation workflows with root cause analysis and trend tracking.</p></div></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label warm">Industries</div>
        <h2>BOSS811 protects infrastructure everywhere.</h2>
      </div>
      <div class="serve-grid">
        <div class="serve-card reveal"><span class="serve-card-icon">⚡</span><h4>Electric & Gas Utilities</h4><p>Manage high-volume locate tickets across large service territories with map-based visualization and automated workflows.</p></div>
        <div class="serve-card reveal reveal-delay-1"><span class="serve-card-icon">💧</span><h4>Water & Sewer</h4><p>Track water and sewer line locates with facility mapping, risk scoring, and compliance-ready documentation.</p></div>
        <div class="serve-card reveal reveal-delay-2"><span class="serve-card-icon">📡</span><h4>Telecom & Fiber</h4><p>Protect fiber and telecom infrastructure with high-volume ticket processing and field-ready mobile tools.</p></div>
        <div class="serve-card reveal"><span class="serve-card-icon">🏛️</span><h4>Municipalities</h4><p>City and county public works departments manage multi-utility locate operations in a single platform.</p></div>
        <div class="serve-card reveal reveal-delay-1"><span class="serve-card-icon">🔧</span><h4>Contract Locators</h4><p>Third-party locating companies maximize productivity with route optimization and mobile manifest marking.</p></div>
        <div class="serve-card reveal reveal-delay-2"><span class="serve-card-icon">🏗️</span><h4>Excavation Companies</h4><p>Excavation and construction firms manage dig notifications and ensure compliance before breaking ground.</p></div>
      </div>
    </div>
  </section>

  ${ctaBlock('See BOSS811 in action.', 'Schedule a personalized demo to learn how BOSS811 can modernize your locate operations and prevent damage.')}
  `;
}

// ──────────────────────────────────────
// BOSS811 RISK & DAMAGE PAGE
// ──────────────────────────────────────
function pageBoss811Risk() {
  document.getElementById('app').innerHTML = `
  <section class="page-hero">
    <div class="hero-bg-grid"></div>
    <div class="hero-glow-warm" style="top:-20%;right:-10%;left:auto;bottom:auto;"></div>
    <div class="container" style="position:relative;z-index:1;">
      <div class="section-label warm">New Modules</div>
      <h1>Risk & Damage<br><span class="warm">Prevention Workflows</span></h1>
      <p class="hero-sub">Go beyond ticket management. BOSS811's new Risk & Damage modules help you proactively identify hazards, investigate incidents, and analyze trends to protect your infrastructure.</p>
      <div class="hero-actions" style="animation:fadeInUp .7s .2s var(--transition) both;">
        <a class="btn btn-warm btn-lg" onclick="nav('/demo')">Request a Demo ${arrowSVG}</a>
        <a class="btn btn-outline btn-lg" onclick="nav('/boss811')">Back to BOSS811</a>
      </div>
    </div>
  </section>

  <section class="section alt">
    <div class="container">
      <div class="section-header center reveal">
        <h2>Prevent damage before it happens.</h2>
        <p>These modules integrate directly into BOSS811, giving your team the tools to move from reactive to proactive damage prevention.</p>
      </div>
      <div class="feature-list">
        <div class="feature-item reveal"><div class="feature-item-icon warm">📊</div><div><h4>Risk Scoring & Monitoring</h4><p>Assign risk scores to areas based on historical data, ticket density, and facility proximity to flag high-risk zones.</p></div></div>
        <div class="feature-item reveal reveal-delay-1"><div class="feature-item-icon warm">🔍</div><div><h4>Damage Investigation</h4><p>Structured damage reporting with photo capture, root cause categorization, and responsibility assignment.</p></div></div>
        <div class="feature-item reveal"><div class="feature-item-icon warm">📈</div><div><h4>Trend Analysis</h4><p>Visualize damage patterns over time to identify systemic issues and prioritize preventive investments.</p></div></div>
        <div class="feature-item reveal reveal-delay-1"><div class="feature-item-icon warm">📋</div><div><h4>Automated Workflows</h4><p>Trigger investigation workflows automatically when damage events are reported, ensuring consistent documentation.</p></div></div>
      </div>
    </div>
  </section>

  ${ctaBlock('Add Risk & Damage to your BOSS811.', 'Contact our team to learn how these new modules can be added to your existing BOSS811 deployment.')}
  `;
}

// ──────────────────────────────────────
// PRICING PAGE
// ──────────────────────────────────────
function pagePricing() {
  document.getElementById('app').innerHTML = `
  <section class="page-hero">
    <div class="hero-bg-grid"></div>
    <div class="hero-glow"></div>
    <div class="container" style="position:relative;z-index:1;">
      <div class="section-label">Pricing</div>
      <h1>Plans that scale<br><span class="accent">with your team.</span></h1>
      <p class="hero-sub">Flexible pricing for both BOSSDesk and BOSS811. No hidden fees. U.S.-based support included with every plan.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-header center reveal">
        <h2>BOSSDesk® Plans</h2>
        <p>Choose the plan that fits your IT team's needs. All plans include implementation support and U.S.-based customer service.</p>
      </div>
      <div class="pricing-grid" style="max-width:1000px;margin:0 auto;">
        <div class="pricing-card reveal">
          <h4>Essentials</h4>
          <div class="price" style="color:var(--accent);">Custom</div>
          <div class="price-note">Per technician / month</div>
          <p class="price-desc">For smaller IT teams getting started with professional service management.</p>
          <ul class="pricing-features">
            <li>Help Desk Ticketing</li>
            <li>Self-Service Portal</li>
            <li>Knowledge Base</li>
            <li>Email Integration</li>
            <li>Basic Reporting</li>
            <li>Mobile App Access</li>
          </ul>
          <a class="btn btn-outline" style="width:100%;justify-content:center;" onclick="nav('/demo')">Get a Quote</a>
        </div>
        <div class="pricing-card featured reveal reveal-delay-1">
          <h4>Professional</h4>
          <div class="price" style="color:var(--accent);">Custom</div>
          <div class="price-note">Per technician / month</div>
          <p class="price-desc">Full ITSM capabilities for growing IT organizations.</p>
          <ul class="pricing-features">
            <li>Everything in Essentials</li>
            <li>Incident, Change & Problem Mgmt</li>
            <li>Asset Management</li>
            <li>Service Catalog</li>
            <li>Workflow Automation</li>
            <li>Approvals Module</li>
            <li>Power BI Integration</li>
            <li>BOSSDesk AI</li>
          </ul>
          <a class="btn btn-primary" style="width:100%;justify-content:center;" onclick="nav('/demo')">Get a Quote</a>
        </div>
        <div class="pricing-card reveal reveal-delay-2">
          <h4>Enterprise</h4>
          <div class="price" style="color:var(--accent);">Custom</div>
          <div class="price-note">Custom licensing</div>
          <p class="price-desc">For large organizations needing on-premise deployment and advanced customization.</p>
          <ul class="pricing-features">
            <li>Everything in Professional</li>
            <li>On-Premise Deployment</li>
            <li>Custom Integrations</li>
            <li>Dedicated Account Manager</li>
            <li>Advanced SLA Management</li>
            <li>SSO & Active Directory</li>
            <li>Priority Support</li>
          </ul>
          <a class="btn btn-outline" style="width:100%;justify-content:center;" onclick="nav('/contact')">Contact Sales</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section alt">
    <div class="container">
      <div class="section-header center reveal">
        <h2>BOSS811® Plans</h2>
        <p>Scalable plans for utilities, municipalities, and locating companies of all sizes.</p>
      </div>
      <div class="pricing-grid" style="max-width:700px;margin:0 auto;grid-template-columns:repeat(2,1fr);">
        <div class="pricing-card reveal">
          <h4>Standard</h4>
          <div class="price" style="color:var(--accent-warm);">Custom</div>
          <div class="price-note">Based on ticket volume</div>
          <p class="price-desc">Core 811 ticket management for organizations getting started.</p>
          <ul class="pricing-features">
            <li>One Call Ticket Ingestion</li>
            <li>Map-Based Workflows</li>
            <li>Mobile Field App</li>
            <li>Alerts & Notifications</li>
            <li>Standard Reporting</li>
          </ul>
          <a class="btn btn-outline" style="width:100%;justify-content:center;" onclick="nav('/demo')">Get a Quote</a>
        </div>
        <div class="pricing-card featured reveal reveal-delay-1" style="border-color:rgba(255,107,53,.25);box-shadow:0 0 40px var(--accent-warm-glow);">
          <h4>Premium</h4>
          <div class="price" style="color:var(--accent-warm);">Custom</div>
          <div class="price-note">Based on ticket volume</div>
          <p class="price-desc">Full-featured damage prevention for enterprise utilities.</p>
          <ul class="pricing-features">
            <li>Everything in Standard</li>
            <li>Risk Identification Module</li>
            <li>Damage Investigation</li>
            <li>Facility Mapping & Annotation</li>
            <li>ArcGIS Integration</li>
            <li>Route Optimization</li>
            <li>Advanced Analytics</li>
          </ul>
          <a class="btn btn-warm" style="width:100%;justify-content:center;" onclick="nav('/demo')">Get a Quote</a>
        </div>
      </div>
    </div>
  </section>

  ${ctaBlock('Need a custom quote?', 'Our team will work with you to build a plan that matches your organization\'s size and requirements.')}
  `;
}

// ──────────────────────────────────────
// SERVICES PAGE
// ──────────────────────────────────────
function pageServices() {
  document.getElementById('app').innerHTML = `
  <section class="page-hero">
    <div class="hero-bg-grid"></div>
    <div class="hero-glow"></div>
    <div class="container" style="position:relative;z-index:1;">
      <div class="section-label">Services</div>
      <h1>Expert services to<br><span class="accent">maximize your success.</span></h1>
      <p class="hero-sub">From implementation to training to ongoing professional services, our U.S.-based team ensures you get the most out of your BOSS Solutions investment.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;">
        <div>
          <div class="section-header reveal" style="margin-bottom:40px;">
            <h2>Our approach to your success.</h2>
            <p>We believe great software deserves great support. Every BOSS Solutions customer gets access to our complete services portfolio.</p>
          </div>
          <div class="timeline reveal">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <h4>Implementation</h4>
              <p>Our team works alongside yours to configure, customize, and deploy BOSSDesk or BOSS811 — ensuring a smooth rollout that matches your unique workflows and requirements.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <h4>Training</h4>
              <p>Comprehensive onboarding and training programs for administrators, technicians, and end users. We offer live sessions, on-demand resources, and customized curriculum.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <h4>Professional Services</h4>
              <p>Need custom integrations, workflow design, or data migration? Our professional services team delivers expert consulting to extend your platform's capabilities.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <h4>Ongoing Support</h4>
              <p>Award-winning, U.S.-based customer support available via phone, email, and portal. Our 99%+ retention rate speaks to the quality of our ongoing care.</p>
            </div>
          </div>
        </div>
        <div>
          <div class="serve-card reveal" style="margin-bottom:20px;"><span class="serve-card-icon">🚀</span><h4>Fast Implementation</h4><p>Most deployments are completed within weeks, not months. Our structured approach gets your team up and running quickly.</p></div>
          <div class="serve-card reveal reveal-delay-1" style="margin-bottom:20px;"><span class="serve-card-icon">👥</span><h4>Dedicated Resources</h4><p>You get a dedicated implementation specialist and account manager who know your organization inside and out.</p></div>
          <div class="serve-card reveal reveal-delay-2" style="margin-bottom:20px;"><span class="serve-card-icon">🇺🇸</span><h4>100% U.S.-Based</h4><p>Every member of our support and services team is based in the United States for reliable, responsive communication.</p></div>
          <div class="serve-card reveal reveal-delay-3"><span class="serve-card-icon">📞</span><h4>Multi-Channel Support</h4><p>Reach us by phone, email, or through the support portal — whatever works best for your team.</p></div>
        </div>
      </div>
    </div>
  </section>

  ${ctaBlock('Ready to get started?', 'Our services team is ready to help you plan and execute a successful deployment.')}
  `;
}

// ──────────────────────────────────────
// SUPPORT PAGE
// ──────────────────────────────────────
function pageSupport() {
  document.getElementById('app').innerHTML = `
  <section class="page-hero">
    <div class="hero-bg-grid"></div>
    <div class="hero-glow"></div>
    <div class="container" style="position:relative;z-index:1;">
      <div class="section-label">Support</div>
      <h1>Award-winning<br><span class="accent">customer support.</span></h1>
      <p class="hero-sub">Our 100% U.S.-based support team is here to help. Whether you need technical assistance, training, or guidance, we're just a call or click away.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="serve-grid" style="grid-template-columns:repeat(2,1fr);max-width:800px;margin:0 auto;">
        <div class="serve-card reveal" style="text-align:center;">
          <span class="serve-card-icon" style="display:flex;justify-content:center;">📧</span>
          <h4>Email Support</h4>
          <p>Send us an email and our team will respond promptly.</p>
          <p style="color:var(--accent);font-weight:600;margin-top:12px;">support@boss-solutions.com</p>
        </div>
        <div class="serve-card reveal reveal-delay-1" style="text-align:center;">
          <span class="serve-card-icon" style="display:flex;justify-content:center;">📞</span>
          <h4>Phone Support</h4>
          <p>Call our U.S.-based team for immediate assistance.</p>
          <p style="color:var(--accent);font-weight:600;margin-top:12px;">678.684.1200</p>
        </div>
        <div class="serve-card reveal" style="text-align:center;">
          <span class="serve-card-icon" style="display:flex;justify-content:center;">💬</span>
          <h4>Support Portal</h4>
          <p>Submit and track tickets through your dedicated support portal.</p>
          <a class="btn btn-ghost btn-sm" style="margin-top:12px;" href="https://forum.bossdesk.io/login" target="_blank">Open Portal</a>
        </div>
        <div class="serve-card reveal reveal-delay-1" style="text-align:center;">
          <span class="serve-card-icon" style="display:flex;justify-content:center;">📚</span>
          <h4>Knowledge Base</h4>
          <p>Browse articles, guides, and how-tos in our self-service knowledge base.</p>
          <a class="btn btn-ghost btn-sm" style="margin-top:12px;" onclick="nav('/webinars')">Browse Resources</a>
        </div>
      </div>
    </div>
  </section>

  ${ctaBlock()}
  `;
}

// ──────────────────────────────────────
// RESOURCES / WEBINARS / SUCCESS / TESTIMONIALS
// ──────────────────────────────────────
function pageWebinars() {
  document.getElementById('app').innerHTML = `
  <section class="page-hero">
    <div class="hero-bg-grid"></div><div class="hero-glow"></div>
    <div class="container" style="position:relative;z-index:1;">
      <div class="section-label">Resources</div>
      <h1>Webinar <span class="accent">Hub</span></h1>
      <p class="hero-sub">On-demand and upcoming webinars covering BOSSDesk, BOSS811, best practices, and industry insights. Learn from experts and see product demos.</p>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="news-grid">
        <div class="news-card reveal"><div class="news-card-image">🎥</div><div class="news-card-body"><div class="news-card-tag">Upcoming Webinar</div><h4>BOSSDesk® 101 — Introduction to IT Service Management</h4><p>February 25, 2026 at 2:00 PM ET — Featuring Bob Gruett. Perfect for new users and teams evaluating BOSSDesk.</p></div></div>
        <div class="news-card reveal reveal-delay-1"><div class="news-card-image">🎥</div><div class="news-card-body"><div class="news-card-tag">On-Demand</div><h4>BOSS811 Deep Dive — Map-Based Workflows & Risk Identification</h4><p>Explore BOSS811's advanced features including GIS integration, risk scoring, and damage prevention tools.</p></div></div>
        <div class="news-card reveal reveal-delay-2"><div class="news-card-image">🎥</div><div class="news-card-body"><div class="news-card-tag">On-Demand</div><h4>BOSSDesk AI — Automating IT Service Management with Intelligence</h4><p>See how AI-powered ticket classification, routing, and resolution suggestions work inside BOSSDesk.</p></div></div>
        <div class="news-card reveal"><div class="news-card-image">🎥</div><div class="news-card-body"><div class="news-card-tag">On-Demand</div><h4>Asset Management Best Practices with BOSSDesk</h4><p>Learn how to implement full lifecycle asset tracking and integrate with your service desk.</p></div></div>
        <div class="news-card reveal reveal-delay-1"><div class="news-card-image">🎥</div><div class="news-card-body"><div class="news-card-tag">On-Demand</div><h4>From Paper to Digital — Modernizing 811 Operations</h4><p>How utilities are transitioning from manual processes to BOSS811's digital platform.</p></div></div>
        <div class="news-card reveal reveal-delay-2"><div class="news-card-image">🎥</div><div class="news-card-body"><div class="news-card-tag">On-Demand</div><h4>Power BI + BOSSDesk — Advanced Analytics for IT Leaders</h4><p>Build executive dashboards and custom reports using native Power BI integration.</p></div></div>
      </div>
    </div>
  </section>
  ${ctaBlock()}`;
}

function pageSuccessStories() {
  document.getElementById('app').innerHTML = `
  <section class="page-hero">
    <div class="hero-bg-grid"></div><div class="hero-glow"></div>
    <div class="container" style="position:relative;z-index:1;">
      <div class="section-label">Customer Stories</div>
      <h1>Success <span class="accent">Stories</span></h1>
      <p class="hero-sub">See how organizations across industries use BOSS Solutions to transform their operations and deliver exceptional results.</p>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="news-grid">
        <div class="news-card reveal" onclick="nav('/success-stories')"><div class="news-card-image">🏨</div><div class="news-card-body"><div class="news-card-tag">Hospitality</div><h4>How The Breakers Achieved Operational Excellence with BOSSDesk®</h4><p>This prestigious luxury resort improved service response times, optimized asset management, and transformed maintenance.</p></div></div>
        <div class="news-card reveal reveal-delay-1"><div class="news-card-image">🏛️</div><div class="news-card-body"><div class="news-card-tag">Government</div><h4>Forsyth County Streamlines IT Operations with BOSSDesk</h4><p>How a Georgia county reduced IT workload by 60% with BOSSDesk's deployment and reporting capabilities.</p></div></div>
        <div class="news-card reveal reveal-delay-2"><div class="news-card-image">⚡</div><div class="news-card-body"><div class="news-card-tag">Utility</div><h4>CenterPoint Energy Modernizes Locate Operations with BOSS811</h4><p>One of the largest U.S. utilities transformed their 811 ticket management with map-based workflows.</p></div></div>
        <div class="news-card reveal"><div class="news-card-image">📡</div><div class="news-card-body"><div class="news-card-tag">Telecom</div><h4>Google Fiber Streamlines Damage Prevention with BOSS811</h4><p>How Google Fiber uses BOSS811 to manage high-volume locate tickets across expanding markets.</p></div></div>
        <div class="news-card reveal reveal-delay-1"><div class="news-card-image">🎓</div><div class="news-card-body"><div class="news-card-tag">Education</div><h4>University IT Department Transforms Service Delivery</h4><p>A major university implemented BOSSDesk to centralize IT support across 50+ departments.</p></div></div>
        <div class="news-card reveal reveal-delay-2"><div class="news-card-image">🔧</div><div class="news-card-body"><div class="news-card-tag">Contract Locating</div><h4>HOLT CAT Improves Field Productivity with BOSS811 Mobile</h4><p>How HOLT of California equipped their field locators with mobile tools that boosted daily completions.</p></div></div>
      </div>
    </div>
  </section>
  ${ctaBlock()}`;
}

function pageTestimonials() {
  document.getElementById('app').innerHTML = `
  <section class="page-hero">
    <div class="hero-bg-grid"></div><div class="hero-glow"></div>
    <div class="container" style="position:relative;z-index:1;">
      <div class="section-label">Reviews</div>
      <h1>Customer <span class="accent">Testimonials</span></h1>
      <p class="hero-sub">Don't take our word for it — hear directly from the teams who use BOSS Solutions every day.</p>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="testimonials-grid" style="max-width:100%;">
        <div class="testimonial-card reveal"><div class="testimonial-stars">★★★★★</div><blockquote>"The best helpdesk software I have used in my 20+ years of helpdesk experience. The deployment capabilities and the reports help reduce my workload by at least 60%."</blockquote><div class="testimonial-author"><div class="testimonial-avatar">VM</div><div class="testimonial-meta"><strong>Van M.</strong><span>Forsyth County, GA</span></div></div></div>
        <div class="testimonial-card reveal reveal-delay-1"><div class="testimonial-stars">★★★★★</div><blockquote>"BOSS Solutions combines enterprise-grade functionality with genuine ease of use. Their support team is the most responsive we've ever worked with."</blockquote><div class="testimonial-author"><div class="testimonial-avatar warm">TB</div><div class="testimonial-meta"><strong>The Breakers</strong><span>Palm Beach, FL</span></div></div></div>
        <div class="testimonial-card reveal reveal-delay-2"><div class="testimonial-stars">★★★★★</div><blockquote>"BOSS811 transformed how we handle locate tickets. The map-based workflows and mobile access have dramatically improved our field team's productivity."</blockquote><div class="testimonial-author"><div class="testimonial-avatar green">CP</div><div class="testimonial-meta"><strong>Operations Lead</strong><span>CenterPoint Energy</span></div></div></div>
        <div class="testimonial-card reveal"><div class="testimonial-stars">★★★★★</div><blockquote>"Implementation was incredibly smooth. The BOSS team worked side by side with us, and we were fully operational within weeks. No other vendor offered that level of commitment."</blockquote><div class="testimonial-author"><div class="testimonial-avatar">JR</div><div class="testimonial-meta"><strong>IT Director</strong><span>Government Agency</span></div></div></div>
        <div class="testimonial-card reveal reveal-delay-1"><div class="testimonial-stars">★★★★★</div><blockquote>"We evaluated several ITSM platforms and BOSSDesk stood out for its balance of power and simplicity. The self-service portal alone saved us hundreds of hours."</blockquote><div class="testimonial-author"><div class="testimonial-avatar warm">SK</div><div class="testimonial-meta"><strong>CIO</strong><span>University</span></div></div></div>
        <div class="testimonial-card reveal reveal-delay-2"><div class="testimonial-stars">★★★★★</div><blockquote>"The BOSS811 mobile app changed the game for our locators. Route optimization alone saved 30 minutes per tech per day. The ROI was immediate."</blockquote><div class="testimonial-author"><div class="testimonial-avatar green">DL</div><div class="testimonial-meta"><strong>Locate Supervisor</strong><span>Utility Company</span></div></div></div>
      </div>
      <div style="text-align:center;margin-top:48px;" class="reveal">
        <a class="btn btn-outline btn-lg" href="https://www.capterra.com/p/144825/BOSS-Solutions/#reviews" target="_blank" rel="noopener">Read More on Capterra →</a>
      </div>
    </div>
  </section>
  ${ctaBlock()}`;
}

// ──────────────────────────────────────
// NEWS PAGES (Blog, Events, Press)
// ──────────────────────────────────────
function pageBlog() {
  document.getElementById('app').innerHTML = `
  <section class="page-hero">
    <div class="hero-bg-grid"></div><div class="hero-glow"></div>
    <div class="container" style="position:relative;z-index:1;">
      <div class="section-label">News</div>
      <h1><span class="accent">Blog</span></h1>
      <p class="hero-sub">Insights, best practices, and industry perspectives from the BOSS Solutions team.</p>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="news-grid">
        <div class="news-card reveal"><div class="news-card-image">📝</div><div class="news-card-body"><div class="news-card-tag">ITSM</div><h4>5 Signs Your Help Desk Software Needs an Upgrade</h4><p>Discover the warning signs that indicate it's time to modernize your IT service management platform.</p></div></div>
        <div class="news-card reveal reveal-delay-1"><div class="news-card-image">📝</div><div class="news-card-body"><div class="news-card-tag">AI</div><h4>How AI Is Transforming IT Service Desks in 2026</h4><p>From ticket classification to predictive analytics — the role of AI in modern ITSM.</p></div></div>
        <div class="news-card reveal reveal-delay-2"><div class="news-card-image">📝</div><div class="news-card-body"><div class="news-card-tag">811</div><h4>The True Cost of Underground Utility Damage</h4><p>Understanding the financial, safety, and operational impact of utility strikes and how to prevent them.</p></div></div>
        <div class="news-card reveal"><div class="news-card-image">📝</div><div class="news-card-body"><div class="news-card-tag">Best Practices</div><h4>Building a World-Class Self-Service Portal</h4><p>Reduce ticket volume and improve user satisfaction with an effective self-service strategy.</p></div></div>
        <div class="news-card reveal reveal-delay-1"><div class="news-card-image">📝</div><div class="news-card-body"><div class="news-card-tag">Security</div><h4>SOC 2 Type II: What It Means for Your Data</h4><p>Understanding compliance certifications and why they matter for your service management platform.</p></div></div>
        <div class="news-card reveal reveal-delay-2"><div class="news-card-image">📝</div><div class="news-card-body"><div class="news-card-tag">Industry</div><h4>The State of Damage Prevention Technology in 2026</h4><p>How digital tools are reshaping 811 operations across the utility industry.</p></div></div>
      </div>
    </div>
  </section>
  ${ctaBlock()}`;
}

function pageEvents() {
  document.getElementById('app').innerHTML = `
  <section class="page-hero">
    <div class="hero-bg-grid"></div><div class="hero-glow"></div>
    <div class="container" style="position:relative;z-index:1;">
      <div class="section-label">Events</div>
      <h1>Upcoming <span class="accent">Events</span></h1>
      <p class="hero-sub">Meet the BOSS Solutions team at conferences and webinars throughout the year.</p>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="news-grid" style="grid-template-columns:repeat(2,1fr);max-width:900px;margin:0 auto;">
        <div class="news-card reveal"><div class="news-card-image">📅</div><div class="news-card-body"><div class="news-card-tag">Webinar — Feb 25, 2026</div><h4>BOSSDesk® 101 — Introduction Webinar</h4><p>2:00 PM ET — Featuring Bob Gruett. Perfect for new users and teams evaluating BOSSDesk.</p></div></div>
        <div class="news-card reveal reveal-delay-1"><div class="news-card-image">📅</div><div class="news-card-body"><div class="news-card-tag">Conference — 2026</div><h4>Damage Prevention Convention & Expo</h4><p>Visit BOSS Solutions at the CGA Excavation Safety Conference. See BOSS811 demos live.</p></div></div>
        <div class="news-card reveal"><div class="news-card-image">📅</div><div class="news-card-body"><div class="news-card-tag">Conference — 2026</div><h4>HDI Conference & Expo</h4><p>Connect with the BOSSDesk team at HDI's premier IT service management event.</p></div></div>
        <div class="news-card reveal reveal-delay-1"><div class="news-card-image">📅</div><div class="news-card-body"><div class="news-card-tag">Webinar — Monthly</div><h4>BOSS Solutions Product Update Webinars</h4><p>Monthly deep dives into new features, tips, and best practices for existing customers.</p></div></div>
      </div>
    </div>
  </section>
  ${ctaBlock()}`;
}

function pagePress() {
  document.getElementById('app').innerHTML = `
  <section class="page-hero">
    <div class="hero-bg-grid"></div><div class="hero-glow"></div>
    <div class="container" style="position:relative;z-index:1;">
      <div class="section-label">Press</div>
      <h1>News & <span class="accent">Press Releases</span></h1>
      <p class="hero-sub">The latest announcements, product launches, and company news from BOSS Solutions.</p>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="news-grid">
        <div class="news-card reveal"><div class="news-card-image">📰</div><div class="news-card-body"><div class="news-card-tag">Press Release</div><h4>BOSS Solutions Achieves SOC 2 Type II Compliance</h4><p>Demonstrating our commitment to enterprise-grade data security and operational trust.</p></div></div>
        <div class="news-card reveal reveal-delay-1"><div class="news-card-image">📰</div><div class="news-card-body"><div class="news-card-tag">Product News</div><h4>Introducing BOSSDesk AI — Intelligent Automation for ITSM</h4><p>New AI capabilities for ticket classification, resolution suggestions, and smart routing.</p></div></div>
        <div class="news-card reveal reveal-delay-2"><div class="news-card-image">📰</div><div class="news-card-body"><div class="news-card-tag">Product News</div><h4>BOSS811 Launches Risk & Damage Prevention Modules</h4><p>New tools for proactive risk identification and structured damage investigation workflows.</p></div></div>
        <div class="news-card reveal"><div class="news-card-image">📰</div><div class="news-card-body"><div class="news-card-tag">Recognition</div><h4>BOSS Solutions Named Outstanding Performer by Gartner</h4><p>Another industry recognition for the BOSS Solutions Suite platform.</p></div></div>
        <div class="news-card reveal reveal-delay-1"><div class="news-card-image">📰</div><div class="news-card-body"><div class="news-card-tag">Product News</div><h4>Power BI Integration Now Available for BOSSDesk</h4><p>Connect BOSSDesk to Power BI for advanced analytics, custom dashboards, and executive reporting.</p></div></div>
        <div class="news-card reveal reveal-delay-2"><div class="news-card-image">📰</div><div class="news-card-body"><div class="news-card-tag">Company News</div><h4>BOSS Solutions Maintains 99%+ Customer Retention Rate</h4><p>Based on 2024 customer data, reflecting our continued commitment to service excellence.</p></div></div>
      </div>
    </div>
  </section>
  ${ctaBlock()}`;
}

// ──────────────────────────────────────
// ABOUT PAGE
// ──────────────────────────────────────
function pageAbout() {
  document.getElementById('app').innerHTML = `
  <section class="page-hero">
    <div class="hero-bg-grid"></div><div class="hero-glow"></div>
    <div class="container" style="position:relative;z-index:1;">
      <div class="section-label">Company</div>
      <h1>About <span class="accent">BOSS Solutions</span></h1>
      <p class="hero-sub">For over 20 years, BOSS Solutions has delivered innovative software that helps organizations manage IT services and protect underground infrastructure. We're a U.S.-based company driven by a passion for customer success.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;">
        <div class="reveal">
          <div class="section-label">Our Mission</div>
          <h2 style="font-family:var(--font-display);font-size:clamp(1.8rem,3vw,2.4rem);font-weight:700;letter-spacing:-0.02em;margin-bottom:20px;">Empowering organizations to work smarter.</h2>
          <p style="color:var(--text-secondary);line-height:1.8;margin-bottom:20px;">BOSS Solutions was founded on a simple belief: that service management software should be powerful, intuitive, and backed by a team that genuinely cares about your success.</p>
          <p style="color:var(--text-secondary);line-height:1.8;">Today, more than 500 organizations trust BOSS Solutions for their most critical operations — from managing IT help desks to preventing underground utility damage. Our 99%+ customer retention rate is a testament to the relationships we build.</p>
        </div>
        <div>
          <div class="serve-card reveal" style="margin-bottom:16px;"><span class="serve-card-icon">🇺🇸</span><h4>100% U.S.-Based</h4><p>Our entire team — engineering, support, and services — is based in the United States.</p></div>
          <div class="serve-card reveal reveal-delay-1" style="margin-bottom:16px;"><span class="serve-card-icon">🏆</span><h4>Award-Winning</h4><p>Recognized by Gartner, Capterra, GetApp, and Software Advice for product excellence.</p></div>
          <div class="serve-card reveal reveal-delay-2" style="margin-bottom:16px;"><span class="serve-card-icon">🔐</span><h4>Security First</h4><p>SOC 2 Type II certified, TX-RAMP approved, and Texas DIR certified for government-grade compliance.</p></div>
          <div class="serve-card reveal reveal-delay-3"><span class="serve-card-icon">🤝</span><h4>Customer Obsessed</h4><p>99%+ retention rate. We don't just sell software — we partner with our customers for long-term success.</p></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section alt">
    <div class="container">
      <div class="section-header center reveal">
        <h2>Careers at BOSS Solutions</h2>
        <p>We're always looking for talented people who share our passion for building great software and delivering exceptional customer experiences. Interested? Get in touch.</p>
      </div>
      <div style="text-align:center;" class="reveal">
        <a class="btn btn-primary btn-lg" onclick="nav('/contact')">Contact Us About Careers ${arrowSVG}</a>
      </div>
    </div>
  </section>

  ${ctaBlock()}`;
}

// ──────────────────────────────────────
// CONTACT PAGE
// ──────────────────────────────────────
function pageContact() {
  document.getElementById('app').innerHTML = `
  <section class="page-hero">
    <div class="hero-bg-grid"></div><div class="hero-glow"></div>
    <div class="container" style="position:relative;z-index:1;">
      <div class="section-label">Get in Touch</div>
      <h1>Contact <span class="accent">Us</span></h1>
      <p class="hero-sub">Have a question, need a quote, or want to learn more? Our team is ready to help.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:80px;max-width:1000px;margin:0 auto;">
        <div>
          <h3 style="font-family:var(--font-display);font-weight:700;font-size:1.4rem;margin-bottom:24px;">Send us a message</h3>
          <div id="contact-success" class="success-msg" style="margin-bottom:20px;">✓ Thank you! Your message has been sent. Our team will respond shortly.</div>
          <form id="contact-form" onsubmit="handleContactSubmit(event)">
            <div class="form-row">
              <div class="form-group"><label class="form-label">First Name *</label><input class="form-input" required placeholder="John"></div>
              <div class="form-group"><label class="form-label">Last Name *</label><input class="form-input" required placeholder="Smith"></div>
            </div>
            <div class="form-group"><label class="form-label">Email *</label><input class="form-input" type="email" required placeholder="john@company.com"></div>
            <div class="form-group"><label class="form-label">Company</label><input class="form-input" placeholder="Your Organization"></div>
            <div class="form-group"><label class="form-label">Product Interest</label><select class="form-select"><option>Select a product</option><option>BOSSDesk</option><option>BOSS811</option><option>Both</option><option>Other</option></select></div>
            <div class="form-group"><label class="form-label">Message *</label><textarea class="form-textarea" required placeholder="How can we help?"></textarea></div>
            <button type="submit" class="btn btn-primary btn-lg">Send Message ${arrowSVG}</button>
          </form>
        </div>
        <div>
          <h3 style="font-family:var(--font-display);font-weight:700;font-size:1.4rem;margin-bottom:24px;">Contact information</h3>
          <div class="serve-card" style="margin-bottom:16px;"><span class="serve-card-icon">📧</span><h4>Email Sales</h4><p style="color:var(--accent);">sales@boss-solutions.com</p></div>
          <div class="serve-card" style="margin-bottom:16px;"><span class="serve-card-icon">📞</span><h4>Call Us</h4><p style="color:var(--accent);">678.684.1200</p></div>
          <div class="serve-card" style="margin-bottom:16px;"><span class="serve-card-icon">📍</span><h4>Headquarters</h4><p>Atlanta, Georgia<br>United States</p></div>
          <div class="serve-card"><span class="serve-card-icon">🕐</span><h4>Business Hours</h4><p>Monday – Friday<br>9:00 AM – 6:00 PM ET</p></div>
        </div>
      </div>
    </div>
  </section>`;
}

function handleContactSubmit(e) {
  e.preventDefault();
  document.getElementById('contact-success').classList.add('show');
  e.target.reset();
  document.getElementById('contact-success').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ──────────────────────────────────────
// DEMO PAGE
// ──────────────────────────────────────
function pageDemo() {
  document.getElementById('app').innerHTML = `
  <section class="page-hero">
    <div class="hero-bg-grid"></div><div class="hero-glow"></div>
    <div class="container" style="position:relative;z-index:1;">
      <div class="section-label">Get Started</div>
      <h1>Request a <span class="accent">Demo</span></h1>
      <p class="hero-sub">See BOSSDesk or BOSS811 in action with a personalized walkthrough tailored to your organization's needs. No commitment required.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:80px;max-width:1000px;margin:0 auto;">
        <div>
          <h3 style="font-family:var(--font-display);font-weight:700;font-size:1.4rem;margin-bottom:24px;">Schedule your demo</h3>
          <div id="demo-success" class="success-msg" style="margin-bottom:20px;">✓ Thank you! We'll be in touch within 1 business day to schedule your personalized demo.</div>
          <form id="demo-form" onsubmit="handleDemoSubmit(event)">
            <div class="form-row">
              <div class="form-group"><label class="form-label">First Name *</label><input class="form-input" required placeholder="John"></div>
              <div class="form-group"><label class="form-label">Last Name *</label><input class="form-input" required placeholder="Smith"></div>
            </div>
            <div class="form-group"><label class="form-label">Work Email *</label><input class="form-input" type="email" required placeholder="john@company.com"></div>
            <div class="form-group"><label class="form-label">Company *</label><input class="form-input" required placeholder="Your Organization"></div>
            <div class="form-group"><label class="form-label">Job Title</label><input class="form-input" placeholder="IT Director, Operations Manager, etc."></div>
            <div class="form-group"><label class="form-label">Product Interest *</label><select class="form-select" required><option value="">Select a product</option><option>BOSSDesk — ITSM & Help Desk</option><option>BOSS811 — 811 Damage Prevention</option><option>Both Products</option></select></div>
            <div class="form-group"><label class="form-label">Team Size</label><select class="form-select"><option value="">Select team size</option><option>1–10</option><option>11–50</option><option>51–200</option><option>201–500</option><option>500+</option></select></div>
            <div class="form-group"><label class="form-label">Anything else we should know?</label><textarea class="form-textarea" placeholder="Specific features, timeline, or requirements..."></textarea></div>
            <button type="submit" class="btn btn-primary btn-lg" style="width:100%;justify-content:center;">Submit Demo Request ${arrowSVG}</button>
          </form>
        </div>
        <div>
          <h3 style="font-family:var(--font-display);font-weight:700;font-size:1.4rem;margin-bottom:24px;">What to expect</h3>
          <div class="timeline" style="margin-top:8px;">
            <div class="timeline-item"><div class="timeline-dot"></div><h4>1. Submit your request</h4><p>Fill out the form and our team will reach out within 1 business day.</p></div>
            <div class="timeline-item"><div class="timeline-dot"></div><h4>2. Brief discovery call</h4><p>We'll learn about your organization, challenges, and goals to tailor the demo.</p></div>
            <div class="timeline-item"><div class="timeline-dot"></div><h4>3. Personalized demo</h4><p>See the platform in action with scenarios that match your actual workflows.</p></div>
            <div class="timeline-item"><div class="timeline-dot"></div><h4>4. Custom proposal</h4><p>Receive a pricing quote and implementation plan tailored to your needs.</p></div>
          </div>
          <div style="margin-top:40px;padding:28px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);">
            <p style="font-size:.92rem;color:var(--text-secondary);line-height:1.7;">💬 <strong style="color:var(--text-primary);">Prefer to talk now?</strong><br>Call us at <span style="color:var(--accent);font-weight:600;">678.684.1200</span> or email <span style="color:var(--accent);font-weight:600;">sales@boss-solutions.com</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function handleDemoSubmit(e) {
  e.preventDefault();
  document.getElementById('demo-success').classList.add('show');
  e.target.reset();
  document.getElementById('demo-success').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ──────────────────────────────────────
// PARTNERS PAGE
// ──────────────────────────────────────
function pagePartners() {
  document.getElementById('app').innerHTML = `
  <section class="page-hero">
    <div class="hero-bg-grid"></div><div class="hero-glow"></div>
    <div class="container" style="position:relative;z-index:1;">
      <div class="section-label">Partners</div>
      <h1>Partner <span class="accent">Program</span></h1>
      <p class="hero-sub">Join the BOSS Solutions partner ecosystem. Whether you're a reseller, consultant, or technology partner, we have a program built for mutual growth.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="serve-grid" style="grid-template-columns:repeat(3,1fr);">
        <div class="serve-card reveal"><span class="serve-card-icon">🤝</span><h4>Reseller Partners</h4><p>Sell BOSSDesk and BOSS811 to your customers with full sales and technical support from our team.</p></div>
        <div class="serve-card reveal reveal-delay-1"><span class="serve-card-icon">🔗</span><h4>Technology Partners</h4><p>Integrate your products with BOSS Solutions' platforms to create joint solutions and expand your market.</p></div>
        <div class="serve-card reveal reveal-delay-2"><span class="serve-card-icon">📋</span><h4>Consulting Partners</h4><p>Recommend and implement BOSS Solutions for your clients with dedicated partner resources and training.</p></div>
      </div>
      <div style="text-align:center;margin-top:64px;" class="reveal">
        <h3 style="font-family:var(--font-display);font-weight:700;font-size:1.4rem;margin-bottom:16px;">Interested in becoming a partner?</h3>
        <p style="color:var(--text-secondary);margin-bottom:32px;">Contact our partnerships team to learn about program benefits, incentives, and how to get started.</p>
        <a class="btn btn-primary btn-lg" onclick="nav('/contact')">Contact Partnerships ${arrowSVG}</a>
      </div>
    </div>
  </section>
  ${ctaBlock()}`;
}

// ──────────────────────────────────────
// PRIVACY & TERMS
// ──────────────────────────────────────
function pagePrivacy() {
  document.getElementById('app').innerHTML = `
  <section class="page-hero" style="padding-bottom:0;">
    <div class="hero-bg-grid"></div>
    <div class="container" style="position:relative;z-index:1;">
      <h1>Privacy <span class="accent">Policy</span></h1>
    </div>
  </section>
  <section class="section" style="padding-top:40px;">
    <div class="container" style="max-width:800px;">
      <div style="color:var(--text-secondary);line-height:1.9;font-size:.95rem;">
        <p><strong style="color:var(--text-primary);">Last Updated: January 2025</strong></p><br>
        <p>Business Oriented Software Solutions, Inc. ("BOSS Solutions," "we," "us," or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our products.</p><br>
        <h3 style="font-family:var(--font-display);font-weight:700;color:var(--text-primary);margin:24px 0 12px;">Information We Collect</h3>
        <p>We may collect personal information that you voluntarily provide to us when you express interest in obtaining information about us or our products, when you participate in activities on our website, or when you contact us. This includes names, email addresses, phone numbers, company information, and any other data you choose to provide.</p><br>
        <h3 style="font-family:var(--font-display);font-weight:700;color:var(--text-primary);margin:24px 0 12px;">How We Use Your Information</h3>
        <p>We use the information we collect to provide, operate, and maintain our products and services; improve, personalize, and expand our offerings; understand and analyze usage patterns; communicate with you for customer service, updates, and marketing purposes; and comply with legal obligations.</p><br>
        <h3 style="font-family:var(--font-display);font-weight:700;color:var(--text-primary);margin:24px 0 12px;">Data Security</h3>
        <p>We implement appropriate technical and organizational security measures designed to protect the security of your personal information. As a SOC 2 Type II certified company, we adhere to rigorous security standards for data handling and protection.</p><br>
        <h3 style="font-family:var(--font-display);font-weight:700;color:var(--text-primary);margin:24px 0 12px;">Contact Us</h3>
        <p>If you have questions about this privacy policy, please contact us at <span style="color:var(--accent);">privacy@boss-solutions.com</span> or call <span style="color:var(--accent);">678.684.1200</span>.</p>
      </div>
    </div>
  </section>`;
}

function pageTerms() {
  document.getElementById('app').innerHTML = `
  <section class="page-hero" style="padding-bottom:0;">
    <div class="hero-bg-grid"></div>
    <div class="container" style="position:relative;z-index:1;">
      <h1>Terms & <span class="accent">Conditions</span></h1>
    </div>
  </section>
  <section class="section" style="padding-top:40px;">
    <div class="container" style="max-width:800px;">
      <div style="color:var(--text-secondary);line-height:1.9;font-size:.95rem;">
        <p><strong style="color:var(--text-primary);">Last Updated: January 2025</strong></p><br>
        <p>These Terms and Conditions ("Terms") govern your use of the BOSS Solutions website and products. By accessing or using our services, you agree to be bound by these Terms.</p><br>
        <h3 style="font-family:var(--font-display);font-weight:700;color:var(--text-primary);margin:24px 0 12px;">Use of Services</h3>
        <p>Our products and services are intended for business use by authorized users. You agree to use our services in compliance with all applicable laws, regulations, and these Terms. You may not use our services for any unlawful or unauthorized purpose.</p><br>
        <h3 style="font-family:var(--font-display);font-weight:700;color:var(--text-primary);margin:24px 0 12px;">Intellectual Property</h3>
        <p>All content, features, and functionality of our website and products — including text, graphics, logos, icons, software, and code — are the exclusive property of Business Oriented Software Solutions, Inc. and are protected by copyright, trademark, and other intellectual property laws.</p><br>
        <h3 style="font-family:var(--font-display);font-weight:700;color:var(--text-primary);margin:24px 0 12px;">Limitation of Liability</h3>
        <p>To the fullest extent permitted by applicable law, BOSS Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.</p><br>
        <h3 style="font-family:var(--font-display);font-weight:700;color:var(--text-primary);margin:24px 0 12px;">Contact</h3>
        <p>For questions about these Terms, please contact us at <span style="color:var(--accent);">legal@boss-solutions.com</span> or call <span style="color:var(--accent);">678.684.1200</span>.</p>
      </div>
    </div>
  </section>`;
}

// ──────────────────────────────────────
// 404 PAGE
// ──────────────────────────────────────
function page404() {
  document.getElementById('app').innerHTML = `
  <section class="hero" style="min-height:calc(100vh - var(--header-h) - 200px);text-align:center;">
    <div class="container">
      <div style="max-width:500px;margin:0 auto;">
        <div style="font-size:6rem;margin-bottom:24px;opacity:.3;">404</div>
        <h1 style="font-family:var(--font-display);font-size:2rem;font-weight:800;margin-bottom:16px;">Page not found</h1>
        <p style="color:var(--text-secondary);margin-bottom:32px;">The page you're looking for doesn't exist or has been moved.</p>
        <a class="btn btn-primary btn-lg" onclick="nav('/')">Back to Home ${arrowSVG}</a>
      </div>
    </div>
  </section>`;
}
