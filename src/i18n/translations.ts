export type Locale = 'en' | 'hi';

export interface LanguageMeta {
  code: Locale;
  shortLabel: string;
  nativeName: string;
  englishName: string;
  scopeNote: string;
  scopeNoteLocalized: Record<Locale, string>;
}

export const PARTNER_ORGANIZATION_TYPES = [
  'Universities & Educational Institutions',
  'Brands',
  'Technology Companies',
  'Esports & Gaming Companies',
  'Investors & Operators',
  'Creators & Industry Leaders',
] as const;

export type PartnerOrgType = (typeof PARTNER_ORGANIZATION_TYPES)[number];

export const INQUIRY_FOCUS_AREAS = [
  'Strategic Partnership',
  'Market Entry',
  'College Esports',
  'Brand Strategy',
  'Partnership Development',
  'Program Development',
  'International Expansion',
  'IP & Brand Development',
  'Strategic Business Development',
] as const;

export type InquiryFocusArea = (typeof INQUIRY_FOCUS_AREAS)[number];

export const TIMELINE_OPTIONS = [
  'Immediate (0–3 Months)',
  'Upcoming Quarter (3–6 Months)',
  'Annual Initiative (6–12+ Months)',
  'Exploratory Discussion',
] as const;

export type TimelineOption = (typeof TIMELINE_OPTIONS)[number];

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  {
    code: 'en',
    shortLabel: 'EN',
    nativeName: 'English',
    englishName: 'English',
    scopeNote: 'Global',
    scopeNoteLocalized: {
      en: 'Global',
      hi: 'वैश्विक',
    },
  },
  {
    code: 'hi',
    shortLabel: 'हिन्दी',
    nativeName: 'हिन्दी',
    englishName: 'Hindi',
    scopeNote: 'Esports India',
    scopeNoteLocalized: {
      en: 'Esports India',
      hi: 'ईस्पोर्ट्स इंडिया',
    },
  },
];

const en = {
  nav: {
    ecosystem: 'Ecosystem',
    model: 'Model',
    partner: 'Partner',
    about: 'About Us',
    leadership: 'Leadership',
    contact: 'Contact',
    connect: 'Connect',
    languageLabel: 'Language',
    switchLanguageAria: 'Select website language',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
  },
  footer: {
    tagline:
      'The institutional future of esports. A comprehensive portfolio of 22+ brands spanning competitive gaming, collegiate education, and AI innovation.',
    ecosystemHeading: 'Ecosystem',
    ecosystemOverview: 'Ecosystem Overview',
    esportsLocalLabel: 'Esports Local',
    companyHeading: 'Company',
    aboutUs: 'About Us',
    model: 'Model',
    partner: 'Partner',
    leadership: 'Leadership',
    ventureStudio: 'Venture Studio',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    copyright: '© 2026 EsportsX Ecosystem. All Rights Reserved.',
    badgeLeft: 'Institutional Grade',
    badgeRight: 'Global Infrastructure',
  },
  sparkline: {
    engagement: 'Engagement',
    velocity: 'Institutional Velocity',
    trajectorySuffix: 'pts',
    trajectoryLabel: 'Trajectory',
  },
  landing: {
    heroKicker: '/ National Brand Group · Flagship Division',
    heroLine1: 'The Architecture',
    heroLine2: 'of Competitive',
    heroLine3: 'Gaming.',
    heroSubtitle:
      'EsportsX is the strategic holding platform behind the next generation of esports, gaming, and digital competition brands.',
    explorePortfolio: 'Explore Portfolio',
    meetFounder: 'Meet the Founder',
    tickerItems: [
      '1,000+ Premium Domains',
      '5 Active Divisions',
      '10+ Years in Collegiate Esports',
      'Ivy League to NCAA',
    ],
    strategicNetwork: 'Strategic Network /',
    marketKicker: '/ Market Convergence',
    marketTitle: 'The $1 Trillion Intersection',
    markets: [
      { val: '$200B+', label: 'Global Gaming', sub: 'Total Addressable Market' },
      { val: '$4.3B', label: 'Esports by 2028', sub: 'Projected Industry Size' },
      { val: '$605B', label: 'EdTech Market', sub: 'Digital Learning Sector' },
      { val: '$75B', label: 'AI Education', sub: 'Emerging Tech Vertical' },
    ],
    ecosystemBanner: {
      kicker: 'Institutional Scale · Live Execution',
      title: 'Built to Connect Competition, Education & Capital.',
      subtitle: 'Unified infrastructure powering global leagues, collegiate pipelines, and regional expansion.',
      cta: 'Explore Ecosystem Spotlights',
      alt: 'Competitive esports athletes and performance analysts moving through an architectural steel-and-concrete arena corridor',
    },
    filterLabel: 'Filter:',
    categories: {
      all: 'All Brands',
      compete: 'Competitive Tracks',
      edu: 'Education & Development',
      regional: 'Regional & Communities',
      infra: 'Infrastructure & Services',
      history: 'Strategic History',
      venture: 'Venture Studio',
    },
    spotlightsTitle: 'Ecosystem Spotlights',
    spotlightsRight: 'Featured Strategic Assets',
    featuredAsset: '/ Featured Asset',
    exploreImpact: 'Explore Strategic Impact',
    brandsSuffix: 'Brands',
    statesMore: '+ 40 more states active',
    hoverLearnMore: 'Hover to learn more →',
    flipBack: '← Flip back',
    learnMoreArrow: 'Learn More ↗',
    domainKicker: '/ Strategic Assets',
    domainTitle: 'Domain IP Fortress',
    domainDesc:
      "EsportsX controls the industry's most valuable digital real estate portfolio. 250+ premium domains covering every Power 5 university, the Ivy League, and key international markets.",
    domainMetric1Label: 'Standalone IP Value',
    domainMetric2Label: 'Power 5 Coverage',
    ventureTitle: 'Venture Studio',
    ventureRight: 'Innovation Engine',
    ventureBadge: 'Innovation',
    ventureTagline: 'The AI-driven engine behind the next generation of gaming innovation',
    ventureDesc:
      'Identifies, incubates, and accelerates the next generation of gaming innovation — targeting AI-powered gaming tools, esports infrastructure, immersive experiences, and creator economy platforms. Operating from the foundation of 650+ premium domains and strategic capital, the Studio brings new ventures from concept to market with unmatched asset backing.',
    ventureTags: [
      'AI Gaming Tools',
      'Esports Infrastructure',
      'Immersive Experiences',
      'Creator Economy',
      '650+ Domain Portfolio',
    ],
    focusAreasLabel: 'Focus Areas',
    ventureFocusAreas: [
      { title: 'AI-Powered Gaming', desc: 'Next-gen tools where AI enhances human competition' },
      { title: 'Esports Infrastructure', desc: 'B2B tools for tournament operators and institutions' },
      { title: 'Immersive Experiences', desc: 'XR and spatial computing for next-gen viewing' },
      { title: 'Creator Economy', desc: 'Monetization infrastructure for gaming content creators' },
    ],
    ventureExplore: '↗ Explore',
    ventureCtaHeading: 'Ready to Build the Future?',
    ventureCtaBtn: 'Connect with Venture Studio',
    leadershipTitle: 'Leadership',
    leadershipRight: 'Executive Board',
    founderRole: 'Founder & Chief Executive Officer',
    linkedinBtn: 'LinkedIn Profile',
    founderQuote:
      '"Three decades spanning Grammy-nominated music production, pioneering collegiate esports, and AI integration strategy. We are building the institutional future of gaming."',
    founderTags: [
      'Grammy-Nominated Executive',
      '12 Multi-Platinum Certifications',
      'College Esports Expo Founder',
      'AI Integration Pioneer',
      'HP · Intel · Red Bull Partner',
    ],
    partnersClientsLabel: 'Strategic Partners & Clients',
    advisoryBoardLabel: 'Advisory Board',
    advisoryBoard: [
      { title: 'Education Technology', desc: 'University leadership guiding institutional adoption and program development.' },
      { title: 'Esports Industry', desc: 'Professional team and tournament operations expertise with media rights experience.' },
      { title: 'Artificial Intelligence', desc: 'AI researchers guiding technology strategy and emerging capabilities.' },
      { title: 'Brand Marketing', desc: 'CMO-level gaming and entertainment executives advising sponsorship strategy.' },
    ],
    contactKicker: '/ Contact',
    contactTitleLine1: "Let's Build",
    contactTitleLine2: 'Something.',
    contactDesc:
      "Whether you're a brand partner, university, investor, or industry professional, we want to hear from you. Tell us a little about what you're working on.",
    directInquiry: 'Direct Inquiry',
    formFullName: 'Full Name',
    formOrganization: 'Organization',
    formEmail: 'Email Address',
    formRole: 'Role / Title',
    formMessage: 'Message',
    formPlaceholders: {
      name: 'Jane Smith',
      org: 'Acme Corp',
      email: 'jane@example.com',
      role: 'VP of Partnerships',
    },
    formMessagePlaceholder: 'Tell us about your project...',
    formSubmit: 'Send Message →',
    numbersTitle: 'Built Over a Decade.',
    counters: [
      'Premium Domains Under Management',
      'Active Brand Divisions',
      'Ivy League Institutions Engaged',
      'Alumni Commitments Secured, Collegiate Esports',
    ],
    esportsLocalOverride: {
      name: 'Esports Local',
      tagline: 'Premium localized infrastructure across global markets',
      desc: 'The regional expansion architecture — purpose-built platforms providing localized competitive infrastructure and vernacular content in each market, anchored by Esports India.',
    },
  },
  ecosystem: {
    heroKicker: '/ Ecosystem Architecture',
    heroTitle: 'Four Primary Ecosystem Pillars.',
    heroDesc:
      'The EsportsX ecosystem is structured around four primary divisions designed to capture value across every phase of the gaming lifecycle.',
    open3dGrid: 'Open 3D Portfolio Grid',
    view3dDivision: 'View 3D Division Cards',
    colProperty: 'Property Name',
    colFocus: 'Primary Focus & Strategic Function',
    colAudience: 'Target Audience',
    cardSuffix: '3D Card',
    hoverFocusHint: 'Hover for focus summary',
    tooltipLabel: 'Primary Focus & Strategic Function',
    tooltipAriaPrefix: 'Primary Focus & Strategic Function for',
    pillarShortNames: {
      'pillar-a': 'Pillar A: Competition',
      'pillar-b': 'Pillar B: Education & Development',
      'pillar-c': 'Pillar C: Branded Communities & Regional',
      'pillar-d': 'Pillar D: Infrastructure & Services',
    },
    pillarTitles: {
      'pillar-a': {
        title: 'Competition Division',
        subtitle: 'Structured Sports & League Frameworks',
        description:
          'The Competition Division bridges real-world sports tradition and digital gaming culture, establishing structured competitive frameworks around globally recognized sports categories.',
      },
      'pillar-b': {
        title: 'Education & Development Division',
        subtitle: 'Scholastic Frameworks & Performance Science',
        description:
          'The Education & Development Division provides accredited scholastic frameworks, varsity program infrastructure, performance science, and workforce development tools.',
      },
      'pillar-c': {
        title: 'Branded Communities & Regional Expansion',
        subtitle: 'Global Markets & Specialized Networks',
        description:
          'This division drives localized grassroots engagement, international market penetration (led by Esports India), and specialized demographic communities.',
      },
      'pillar-d': {
        title: 'Infrastructure & Services Division',
        subtitle: 'Institutional Operational Backbone',
        description:
          'The Infrastructure & Services Division acts as the institutional operational backbone for the global gaming economy.',
      },
    },
    indiaOverride: {
      propertyDisplay: 'Esports India',
      focus:
        "Subcontinental market lead with 50+ domain assets targeting India's 400M+ mobile gamers via vernacular content and mobile-first tournaments.",
      audience: 'Indian mobile gamers, regional sponsors, telecom partners',
      detailCopy:
        'Anchors South Asian expansion through multi-language support (Hindi, Tamil, Telugu, Bengali), local UPI payment integration, and mobile-first tournament bracketing.',
    },
    intlOverride: {
      propertyDisplay: 'International Regional Assets',
      focus:
        'Global expansion properties establishing authoritative local market presence across key international territories.',
      audience: 'Local competitive communities in Europe, LATAM, and Eurasia',
      detailCopy:
        'Includes authoritative geographic properties such as Esports UK, Esports Ireland, Esports Scotland, Esports Russia, Esports Argentina, and Esports Columbia.',
    },
    ventureKicker: '/ Innovation Engine',
    ventureTitle: 'EsportsX Venture Studio',
    ventureDesc:
      'Operating under National Brand Group, the EsportsX Venture Studio acts as an internal incubation engine that identifies, funds, and accelerates early-stage startups across AI gaming tools, EdTech, creator platforms, and gaming infrastructure.',
    ventureBtn1: 'Explore Venture Studio',
    ventureBtn2: 'See The EsportsX Model',
    outlookKicker: 'Strategic Summary & Outlook',
    outlookTitle: '4-Pillar Institutional Architecture.',
    outlookDesc:
      'The EsportsX ecosystem combines defensible domain IP, scalable cloud infrastructure, and a comprehensive 4-pillar brand portfolio to address the key growth vectors of the digital entertainment economy.',
    outlookBtn1: 'Explore 3D Portfolio Cards',
    outlookBtn2: 'Partner With EsportsX',
  },
  model: {
    heroKicker: '/ The EsportsX Model',
    heroTitle: 'From Digital Asset to Operating Opportunity.',
    heroDesc:
      'EsportsX takes a venture-development approach to esports: identify promising categories and underserved communities, activate specialized intellectual property, develop a market thesis, establish partnerships, create programming, and test real-world demand.',
    steps: [
      {
        num: '01',
        title: 'IP',
        desc: 'Specialized esports brands and digital assets.',
      },
      {
        num: '02',
        title: 'Intelligence',
        desc: 'Market research, institutional knowledge, and category expertise.',
      },
      {
        num: '03',
        title: 'Activation',
        desc: 'Content, pilots, events, education, and community.',
      },
      {
        num: '04',
        title: 'Partnerships',
        desc: 'Brands, universities, technology companies, operators, and investors.',
      },
      {
        num: '05',
        title: 'Commercialization',
        desc: 'Operating ventures, licensing, sponsorship, strategic partnerships, and transactions.',
      },
    ],
    criticalLabel: 'The critical question',
    criticalQuestion: 'What should this asset become?',
    criticalDesc:
      'An operating company, media property, event, educational platform, licensed brand, joint venture, strategic partnership—or an asset that creates greater value in someone else’s ecosystem? EsportsX provides the architecture for finding that answer.',
    buildKicker: '/ What We Build',
    buildTitle: 'Multiple Business Models. One Esports Platform.',
    businessModels: [
      {
        title: 'Strategic Advisory',
        desc: 'Strategy, market entry, business development, and institutional consulting.',
      },
      {
        title: 'Events & Experiences',
        desc: 'Conferences, competitions, campus activations, showcases, and experiential programs.',
      },
      {
        title: 'Brand Partnerships',
        desc: 'Sponsorship, activation, research, community engagement, and market development.',
      },
      {
        title: 'Education',
        desc: 'Curriculum, professional development, institutional programming, and workforce initiatives.',
      },
      {
        title: 'IP & Licensing',
        desc: 'Strategic commercialization of specialized esports brands and digital assets.',
      },
      {
        title: 'Market-Entry Programs',
        desc: 'Structured pathways into emerging geographic and demographic markets.',
      },
      {
        title: 'Research & Intelligence',
        desc: 'Insights into changing esports markets, business models, technologies, and communities.',
      },
      {
        title: 'Venture Development',
        desc: 'Incubating selected esports concepts into standalone operating opportunities.',
      },
    ],
    whyKicker: '/ Why EsportsX',
    whyTitle: 'Built From Inside the Evolution of Esports.',
    whyParagraphs: [
      'EsportsX is informed by years of work across collegiate esports, education, entertainment, technology, events, brand development, and competitive gaming.',
      'Founder Kevin Mitchell has worked across the development of the collegiate esports ecosystem as an educator, entrepreneur, advisor, and event creator.',
      'His esports work includes teaching esports at Emerson College, founding the College Esports Expo, helping develop collegiate competition and programming, creating esports education initiatives, and consulting with organizations across gaming, technology, entertainment, and institutional markets.',
    ],
    whyCallout:
      'The next generation of esports companies will be built at the intersections — not inside traditional industry boundaries.',
    ctaPartner: 'Partner With EsportsX',
    ctaPortfolio: 'Explore Portfolio',
  },
  partner: {
    heroKicker: '/ Partner With EsportsX',
    heroTitle: 'What Can We Build Together?',
    heroDesc:
      'EsportsX is looking to work with organizations that see competitive gaming as more than an advertising channel. We are interested in partners who want to build.',
    ctaContactUs: 'Contact Us',
    ctaExploreModel: 'Explore The Model',
    inquireBtn: 'Inquire',
    partnerCategories: [
      {
        id: 'Universities & Educational Institutions',
        title: 'Universities & Educational Institutions',
        desc: 'Build programs, events, research initiatives, curriculum, and student opportunities.',
      },
      {
        id: 'Brands',
        title: 'Brands',
        desc: 'Develop credible gaming activations, sponsorship platforms, and new ways to engage gaming communities.',
      },
      {
        id: 'Technology Companies',
        title: 'Technology Companies',
        desc: 'Test products, build demonstrations, create campus programs, and reach specialized gaming audiences.',
      },
      {
        id: 'Esports & Gaming Companies',
        title: 'Esports & Gaming Companies',
        desc: 'Explore new markets, communities, partnerships, and business models.',
      },
      {
        id: 'Investors & Operators',
        title: 'Investors & Operators',
        desc: 'Identify opportunities to develop, operate, license, acquire, or partner around specialized EsportsX properties.',
      },
      {
        id: 'Creators & Industry Leaders',
        title: 'Creators & Industry Leaders',
        desc: 'Build programming, communities, events, content, and new competitive-gaming experiences.',
      },
    ],
    advisoryKicker: '/ EsportsX Advisory',
    advisoryTitle: 'Navigate the Esports Economy With Greater Intelligence.',
    advisoryDesc:
      'Organizations frequently enter esports knowing they want to participate but without knowing where they belong. EsportsX helps answer that question.',
    advisoryPillars: [
      {
        id: 'Market Entry',
        title: 'Market Entry',
        desc: 'Identify where your organization fits within esports and gaming.',
      },
      {
        id: 'College Esports',
        title: 'College Esports',
        desc: 'Develop programs and partnerships across the collegiate marketplace.',
      },
      {
        id: 'Brand Strategy',
        title: 'Brand Strategy',
        desc: 'Create credible ways for brands to participate in gaming culture.',
      },
      {
        id: 'Partnership Development',
        title: 'Partnership Development',
        desc: 'Identify potential technology, institutional, commercial, and operating partners.',
      },
      {
        id: 'Program Development',
        title: 'Program Development',
        desc: 'Turn concepts into pilots, events, platforms, and repeatable programs.',
      },
      {
        id: 'International Expansion',
        title: 'International Expansion',
        desc: 'Explore specialized markets through locally relevant strategies and partnerships.',
      },
      {
        id: 'IP & Brand Development',
        title: 'IP & Brand Development',
        desc: 'Transform digital properties and category-specific brands into operating opportunities.',
      },
      {
        id: 'Strategic Business Development',
        title: 'Strategic Business Development',
        desc: 'Insight to help operators navigate the treacherous business landscape.',
      },
    ],
    ctaAdvisory: 'Contact Us · Advisory',
    visionKicker: '/ Our Vision',
    visionTitle: 'Esports Is Becoming Infrastructure.',
    visionDesc:
      'Competitive gaming is increasingly connected to how people socialize, learn, compete, create, build careers, experience entertainment, and participate in digital communities. That creates an opportunity far larger than esports competition alone.',
    visionEquation:
      'Competition × Education × Technology × Culture × Community × Global Markets',
    visionQuote:
      'The objective is not simply to participate in the esports industry. It is to help build what the esports industry becomes next.',
    ctaInquiry: 'Contact Us · Institutional Inquiry',
    ctaPortfolio: 'Explore Portfolio',
    modal: {
      kicker: 'Institutional Inquiries',
      title: 'Contact Us',
      subtitle:
        'Connect with the EsportsX leadership team regarding university programs, commercial partnerships, licensing, or institutional advisory.',
      closeAria: 'Close Contact Us modal',
      orgCategory: 'Organization Category',
      focusArea: 'Primary Focus Area',
      fullName: 'Full Name *',
      role: 'Title / Role *',
      organization: 'Institution / Organization *',
      email: 'Institutional Email *',
      phone: 'Phone Number (Optional)',
      timeline: 'Estimated Timeline',
      objectives: 'Objectives & Scope *',
      objectivesPlaceholder:
        'Describe your institutional program goals, target properties, campus initiatives, or strategic partnership objectives...',
      placeholders: {
        fullName: 'Dr. Jordan Mercer',
        role: 'Director of Esports / VP Strategy',
        organization: 'University / Brand / Capital Partner',
        email: 'j.mercer@institution.edu',
        phone: '+1 (617) 555-0192',
      },
      errors: {
        fullName: 'Please enter your full name.',
        organization: 'Please enter your institution or organization name.',
        role: 'Please provide your title or role.',
        email: 'Please enter a valid institutional or corporate email address.',
        phone: 'Please enter a valid phone number or leave blank.',
        message: 'Please summarize your goals or partnership objectives (10+ characters).',
      },
      orgTypeLabels: {
        'Universities & Educational Institutions': 'Universities & Educational Institutions',
        Brands: 'Brands',
        'Technology Companies': 'Technology Companies',
        'Esports & Gaming Companies': 'Esports & Gaming Companies',
        'Investors & Operators': 'Investors & Operators',
        'Creators & Industry Leaders': 'Creators & Industry Leaders',
      } as Record<PartnerOrgType, string>,
      focusAreaLabels: {
        'Strategic Partnership': 'Strategic Partnership',
        'Market Entry': 'Market Entry',
        'College Esports': 'College Esports',
        'Brand Strategy': 'Brand Strategy',
        'Partnership Development': 'Partnership Development',
        'Program Development': 'Program Development',
        'International Expansion': 'International Expansion',
        'IP & Brand Development': 'IP & Brand Development',
        'Strategic Business Development': 'Strategic Business Development',
      } as Record<InquiryFocusArea, string>,
      timelineLabels: {
        'Immediate (0–3 Months)': 'Immediate (0–3 Months)',
        'Upcoming Quarter (3–6 Months)': 'Upcoming Quarter (3–6 Months)',
        'Annual Initiative (6–12+ Months)': 'Annual Initiative (6–12+ Months)',
        'Exploratory Discussion': 'Exploratory Discussion',
      } as Record<TimelineOption, string>,
      directDesk: 'Direct Desk · info@esportsx.com',
      cancel: 'Cancel',
      submit: 'Submit Inquiry',
      successTitle: 'Institutional Inquiry Prepared',
      sendViaEmail: 'Send via Email Client',
      newInquiry: 'New Inquiry',
      closeBtn: 'Close',
    },
  },
  about: {
    kicker: '/ About Us',
    heroLine1: 'Where Strategy',
    heroLine2: 'Meets Competition.',
    strategicPillars: [
      {
        num: '01',
        title: 'Brand Development',
        desc: 'EsportsX identifies, acquires, and develops premium domain properties into fully realized brands across the gaming and esports ecosystem. Every brand in our portfolio is built with institutional-grade positioning from day one.',
      },
      {
        num: '02',
        title: 'Strategic Partnerships',
        desc: 'We connect brands, universities, and technology companies with the right properties, audiences, and activation platforms inside competitive gaming. Our relationships span the full spectrum from collegiate athletics to major entertainment.',
      },
      {
        num: '03',
        title: 'Ecosystem Building',
        desc: "EsportsX doesn't just occupy the gaming space — it architects it. Our divisions cover competitive gaming, collegiate education, regional networks, and creator ecosystems, giving partners a single entry point into a unified platform.",
      },
    ],
    flywheelCards: [
      {
        title: 'AI-Enabled Analytics',
        desc: 'AI-powered performance analytics, gameplay evaluation, and intelligent automation integrated across portfolio operations — creating compounding advantages competitors cannot replicate.',
      },
      {
        title: 'Domain IP Fortress',
        desc: '250+ premium esports domains valued at $75–100M, including every Power 5 university and Ivy League. A defensible, appreciating strategic asset.',
      },
      {
        title: 'Ecosystem Flywheel',
        desc: '22+ portfolio companies across competition, education, media, and infrastructure create compounding network effects where every division amplifies the whole.',
      },
    ],
    coreKicker: '/ Core Architecture',
    coreTitle: 'Executive Overview & Core Architecture',
    coreParagraphLead:
      'EsportsX operates as a multi-layered platform designed to unify competitive gaming, educational curriculum, artificial intelligence innovation, and global market expansion under its parent company,',
    coreParagraphOrg: 'National Brand Group (NBG)',
    coreParagraphMid:
      '. The organization addresses systemic vulnerabilities in the esports landscape—such as publisher monopolies, fragmented regional ecosystems, and financial instability—by deploying a hybrid business model that integrates',
    coreParagraphConsulting: 'strategic consulting',
    coreParagraphProduct: 'product creation',
    coreParagraphEnd: ', and an',
    coreParagraphStudio: 'AI-driven venture studio',
    stakeholdersLead: 'EsportsX serves five primary stakeholder groups:',
    stakeholders: [
      {
        title: 'Competitive Players',
        desc: 'Accessing structured leagues, talent pipelines, and monetization frameworks.',
      },
      {
        title: 'Educational Institutions',
        desc: 'Launching accredited varsity esports programs, K-12 curricula, and campus facilities.',
      },
      {
        title: 'Commercial Brands',
        desc: 'Engaging digitally native youth audiences through targeted sponsorships and authentic integrations.',
      },
      {
        title: 'Technology Innovators',
        desc: 'Incubating early-stage gaming, EdTech, and AI startups through the venture studio.',
      },
      {
        title: 'Investors',
        desc: 'Securing exposure to a scalable, diversified digital gaming ecosystem with defensible IP.',
      },
    ],
    assetsKicker: '/ 02 · Strategic Asset Foundation',
    assetsTitle: 'Strategic Asset Foundation: The 300+ Brand Microcosm',
    assetsParagraphLead:
      'An irreplaceable foundation of the EsportsX ecosystem is its proprietary digital asset portfolio, comprising',
    assetsParagraphHighlight: 'over 300 premium domain names and brand properties',
    assetsParagraphTail:
      '. This portfolio provides defensive barriers to entry, immediate market presence, and low-cost customer acquisition channels across international territories, Power 5 university athletic programs, metropolitan regions, and specialized industry verticals.',
    statDomainsLabel: 'Domain & Brand Properties',
    statUniversityLabel: 'University Athletic Footprint',
    defensibleTitle: 'Defensible Market Entry',
    defensibleDesc:
      'Immediate brand authority across international territories, metropolitan centers, and specialized industry verticals.',
    ctaEcosystem: 'Explore Ecosystem Pillars',
    ctaModel: 'The EsportsX Model',
    ctaPartner: 'Partner With Us',
  },
  brandDetail: {
    notFound: 'Brand Not Found',
    backToPortfolio: 'Back to Portfolio',
    backToEcosystem: 'Back to Ecosystem',
    ecosystemProperty: 'Ecosystem Property',
    strategicOverview: 'Strategic Overview',
    launchPlatform: 'Launch Platform',
    growthLabel: 'Growth Trajectory & Engagement',
    metricsLabel: 'Key Metrics & Data',
    brandAssets: 'Brand Assets',
    visualGallery: 'Visual Identity Gallery',
    integrationTitle: 'Ecosystem Integration',
    integrationSub: 'Strategic Positioning & Market Impact',
    opportunityKicker: '/ The Opportunity',
    marketDynamics: 'Market Dynamics',
    networkEffects: 'Network Effects',
    exploreMore: 'Explore More Ecosystem Properties',
    close: 'Close',
    categoryLabels: {
      core: 'Core Engine',
      compete: 'Competitive Tracks',
      edu: 'Education & Development',
      regional: 'Regional & Communities',
      infra: 'Infrastructure & Services',
      history: 'Strategic History',
      venture: 'Venture Studio',
    },
    opportunitySuffix: 'is positioned to redefine its sector in the digital age as a core pillar of the EsportsX ecosystem.',
    marketDynamicsSuffix:
      'By leveraging the convergence of AI and competitive gaming, it captures significant share across global audiences and creators.',
    networkEffectsCopy:
      'Seamlessly integrated with the broader EsportsX flywheel, this platform benefits from shared infrastructure, data intelligence, and cross-platform network effects that amplify reach and defensibility.',
  },
  legal: {
    titleMain: 'Legal',
    titleAccent: 'Framework',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    compliance: 'Institutional Compliance',
    lastUpdated: 'Last Updated: April 1, 2026',
    privacyIntro:
      'EsportsX ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and interact with our ecosystem brands.',
    collectionTitle: '1. Information Collection',
    collectionDesc:
      'We collect information that you provide directly to us, such as when you fill out a contact form, subscribe to a newsletter, or engage with our venture studio. This may include your name, email address, and professional affiliation.',
    useTitle: '2. Use of Information',
    useDesc:
      'We use the information we collect to provide, maintain, and improve our services, to communicate with you about strategic opportunities, and to protect the security of our ecosystem.',
    termsIntro:
      'By accessing or using the EsportsX website, you agree to be bound by these Terms of Service and all applicable laws and regulations.',
    ipTitle: '1. Intellectual Property',
    ipDesc:
      'The content, features, and functionality of this website, including but not limited to the "Architecture of Competitive Gaming" framework and our "Domain IP Fortress," are owned by EsportsX and are protected by international copyright, trademark, and other intellectual property laws.',
    assetsTitle: '2. Strategic Assets',
    assetsDesc:
      'Our portfolio of 250+ premium domains and associated brand identities are strategic assets. Unauthorized use or reproduction of these assets is strictly prohibited.',
    complianceLead:
      'EsportsX operates with institutional-grade compliance standards. For specific inquiries regarding our legal framework or regulatory positioning, please contact our strategic legal division at',
  },
};

type WidenDeep<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly WidenDeep<U>[]
    : { readonly [K in keyof T]: WidenDeep<T[K]> };

export type TranslationSet = WidenDeep<typeof en>;

const hi: TranslationSet = {
  nav: {
    ecosystem: 'इकोसिस्टम',
    model: 'मॉडल',
    partner: 'साझेदारी',
    about: 'हमारे बारे में',
    leadership: 'नेतृत्व',
    contact: 'संपर्क',
    connect: 'जुड़ें',
    languageLabel: 'भाषा',
    switchLanguageAria: 'वेबसाइट भाषा चुनें',
    openMenu: 'नेविगेशन मेनू खोलें',
    closeMenu: 'नेविगेशन मेनू बंद करें',
  },
  footer: {
    tagline:
      'ईस्पोर्ट्स का संस्थागत भविष्य। प्रतिस्पर्धी गेमिंग, कॉलेजिएट शिक्षा और एआई नवाचार के क्षेत्र में 22+ ब्रांड्स का एक व्यापक पोर्टफोलियो।',
    ecosystemHeading: 'इकोसिस्टम',
    ecosystemOverview: 'इकोसिस्टम अवलोकन',
    esportsLocalLabel: 'Esports Local (भारत)',
    companyHeading: 'कंपनी',
    aboutUs: 'हमारे बारे में',
    model: 'मॉडल',
    partner: 'साझेदारी',
    leadership: 'नेतृत्व',
    ventureStudio: 'वेंचर स्टूडियो',
    privacyPolicy: 'गोपनीयता नीति',
    termsOfService: 'सेवा की शर्तें',
    copyright: '© 2026 EsportsX इकोसिस्टम। सर्वाधिकार सुरक्षित।',
    badgeLeft: 'संस्थागत स्तर',
    badgeRight: 'वैश्विक बुनियादी ढाँचा',
  },
  sparkline: {
    engagement: 'सहभागिता',
    velocity: 'संस्थागत गति',
    trajectorySuffix: 'अंक',
    trajectoryLabel: 'प्रक्षेपवक्र',
  },
  landing: {
    heroKicker: '/ नेशनल ब्रांड ग्रुप · प्रमुख प्रभाग',
    heroLine1: 'प्रतिस्पर्धी गेमिंग',
    heroLine2: 'का रणनीतिक',
    heroLine3: 'आर्किटेक्चर।',
    heroSubtitle:
      'EsportsX अगली पीढ़ी के ईस्पोर्ट्स, गेमिंग और डिजिटल प्रतिस्पर्धा ब्रांड्स के पीछे का रणनीतिक होल्डिंग प्लेटफॉर्म है — जिसमें भारत के प्रमुख मोबाइल गेमिंग इकोसिस्टम भी शामिल हैं।',
    explorePortfolio: 'पोर्टफोलियो देखें',
    meetFounder: 'संस्थापक से मिलें',
    tickerItems: [
      '1,000+ प्रीमियम डोमेन',
      '5 सक्रिय प्रभाग',
      'कॉलेजिएट ईस्पोर्ट्स में 10+ वर्ष',
      'आईवी लीग से NCAA और Esports India तक',
    ],
    strategicNetwork: 'रणनीतिक नेटवर्क /',
    marketKicker: '/ बाज़ार संगम',
    marketTitle: '1 ट्रिलियन डॉलर का संगम',
    markets: [
      { val: '$200B+', label: 'वैश्विक गेमिंग', sub: 'कुल संभावित बाज़ार' },
      { val: '$4.3B', label: '2028 तक ईस्पोर्ट्स', sub: 'अनुमानित उद्योग आकार' },
      { val: '$605B', label: 'एडटेक बाज़ार', sub: 'डिजिटल लर्निंग क्षेत्र' },
      { val: '$75B', label: 'एआई शिक्षा', sub: 'उभरता तकनीकी क्षेत्र' },
    ],
    ecosystemBanner: {
      kicker: 'संस्थागत विस्तार · लाइव निष्पादन',
      title: 'प्रतिस्पर्धा, शिक्षा और पूंजी को जोड़ने वाला तंत्र।',
      subtitle: 'वैश्विक लीग, कॉलेजिएट कार्यक्रम और क्षेत्रीय विस्तार को सशक्त बनाने वाला एकीकृत बुनियादी ढाँचा।',
      cta: 'इकोसिस्टम स्पॉटलाइट्स देखें',
      alt: 'आधुनिक स्टील और कंक्रीट ईस्पोर्ट्स एरीना कॉरिडोर से गुजरते प्रतिस्पर्धी खिलाड़ी और विश्लेषक',
    },
    filterLabel: 'फ़िल्टर:',
    categories: {
      all: 'सभी ब्रांड्स',
      compete: 'प्रतिस्पर्धी ट्रैक',
      edu: 'शिक्षा एवं विकास',
      regional: 'क्षेत्रीय और समुदाय',
      infra: 'बुनियादी ढाँचा एवं सेवाएँ',
      history: 'रणनीतिक इतिहास',
      venture: 'वेंचर स्टूडियो',
    },
    spotlightsTitle: 'इकोसिस्टम स्पॉटलाइट्स',
    spotlightsRight: 'प्रमुख रणनीतिक संपत्तियाँ',
    featuredAsset: '/ प्रमुख संपत्ति',
    exploreImpact: 'रणनीतिक प्रभाव देखें',
    brandsSuffix: 'ब्रांड्स',
    statesMore: '+ 40 अन्य क्षेत्र सक्रिय',
    hoverLearnMore: 'अधिक जानने के लिए होवर करें →',
    flipBack: '← वापस मुड़ें',
    learnMoreArrow: 'अधिक जानें ↗',
    domainKicker: '/ रणनीतिक संपत्तियाँ',
    domainTitle: 'डोमेन IP दुर्ग',
    domainDesc:
      'EsportsX के पास उद्योग की सबसे मूल्यवान डिजिटल संपत्तियों का पोर्टफोलियो है — 250+ प्रीमियम डोमेन जो प्रमुख विश्वविद्यालयों और भारत सहित प्रमुख अंतर्राष्ट्रीय बाज़ारों को कवर करते हैं।',
    domainMetric1Label: 'स्वतंत्र IP मूल्य',
    domainMetric2Label: 'प्रमुख विश्वविद्यालय कवरेज',
    ventureTitle: 'वेंचर स्टूडियो',
    ventureRight: 'नवाचार इंजन',
    ventureBadge: 'नवाचार',
    ventureTagline: 'अगली पीढ़ी के गेमिंग नवाचार के पीछे का AI-संचालित इंजन',
    ventureDesc:
      'यह AI-संचालित गेमिंग टूल्स, ईस्पोर्ट्स इंफ्रास्ट्रक्चर, इमर्सिव अनुभवों और क्रिएटर इकोनॉमी प्लेटफॉर्म्स में अगले बड़े नवाचारों की पहचान कर उन्हें त्वरित करता है।',
    ventureTags: [
      'AI गेमिंग टूल्स',
      'ईस्पोर्ट्स इंफ्रास्ट्रक्चर',
      'इमर्सिव अनुभव',
      'क्रिएटर इकोनॉमी',
      '650+ डोमेन पोर्टफोलियो',
    ],
    focusAreasLabel: 'प्रमुख केंद्र बिंदु',
    ventureFocusAreas: [
      { title: 'AI-संचालित गेमिंग', desc: 'नेक्स्ट-जेन टूल्स जहाँ AI मानवीय प्रतिस्पर्धा को सशक्त बनाता है' },
      { title: 'ईस्पोर्ट्स इंफ्रास्ट्रक्चर', desc: 'टूर्नामेंट आयोजकों और संस्थानों के लिए B2B टूल्स' },
      { title: 'इमर्सिव अनुभव', desc: 'नेक्स्ट-जेन व्यूइंग के लिए XR और स्पैशियल कंप्यूटिंग' },
      { title: 'क्रिएटर इकोनॉमी', desc: 'गेमिंग कंटेंट क्रिएटर्स के लिए मोनेटाइजेशन इंफ्रास्ट्रक्चर' },
    ],
    ventureExplore: '↗ एक्सप्लोर करें',
    ventureCtaHeading: 'भविष्य का निर्माण करने के लिए तैयार?',
    ventureCtaBtn: 'वेंचर स्टूडियो से जुड़ें',
    leadershipTitle: 'नेतृत्व',
    leadershipRight: 'कार्यकारी बोर्ड',
    founderRole: 'संस्थापक एवं मुख्य कार्यकारी अधिकारी',
    linkedinBtn: 'LinkedIn प्रोफ़ाइल',
    founderQuote:
      '"ग्रैमी-नामांकित संगीत निर्माण, अग्रणी कॉलेजिएट ईस्पोर्ट्स और AI एकीकरण रणनीति के तीन दशक। हम गेमिंग का संस्थागत भविष्य बना रहे हैं।"',
    founderTags: [
      'ग्रैमी-नामांकित कार्यकारी',
      '12 मल्टी-प्लैटिनम प्रमाणपत्र',
      'कॉलेज ईस्पोर्ट्स एक्सपो संस्थापक',
      'AI एकीकरण अग्रदूत',
      'HP · Intel · Red Bull साझेदार',
    ],
    partnersClientsLabel: 'रणनीतिक साझेदार और ग्राहक',
    advisoryBoardLabel: 'सलाहकार बोर्ड',
    advisoryBoard: [
      { title: 'शिक्षा प्रौद्योगिकी', desc: 'संस्थागत अपनाने और कार्यक्रम विकास का मार्गदर्शन करने वाला विश्वविद्यालय नेतृत्व।' },
      { title: 'ईस्पोर्ट्स उद्योग', desc: 'मीडिया अधिकार अनुभव के साथ प्रोफेशनल टीम और टूर्नामेंट संचालन विशेषज्ञता।' },
      { title: 'आर्टिफिशियल इंटेलिजेंस', desc: 'प्रौद्योगिकी रणनीति और उभरती क्षमताओं का मार्गदर्शन करने वाले AI शोधकर्ता।' },
      { title: 'ब्रांड मार्केटिंग', desc: 'स्पॉन्सरशिप रणनीति पर सलाह देने वाले CMO-स्तरीय गेमिंग और एंटरटेनमेंट अधिकारी।' },
    ],
    contactKicker: '/ संपर्क',
    contactTitleLine1: 'आइए मिलकर',
    contactTitleLine2: 'निर्माण करें।',
    contactDesc:
      'चाहे आप ब्रांड पार्टनर हों, विश्वविद्यालय, निवेशक, या उद्योग विशेषज्ञ — हम आपसे जुड़ना चाहते हैं। अपने प्रोजेक्ट के बारे में बताएं।',
    directInquiry: 'सीधी पूछताछ',
    formFullName: 'पूरा नाम',
    formOrganization: 'संस्था / संगठन',
    formEmail: 'ईमेल पता',
    formRole: 'पद / भूमिका',
    formMessage: 'संदेश',
    formPlaceholders: {
      name: 'आरव शर्मा',
      org: 'संस्था / कंपनी का नाम',
      email: 'aarav@example.com',
      role: 'साझेदारी प्रमुख',
    },
    formMessagePlaceholder: 'अपने प्रोजेक्ट के बारे में बताएं...',
    formSubmit: 'संदेश भेजें →',
    numbersTitle: 'एक दशक की नींव।',
    counters: [
      'प्रबंधन के अधीन प्रीमियम डोमेन',
      'सक्रिय ब्रांड प्रभाग',
      'जुड़े हुए प्रमुख विश्वविद्यालय संस्थान',
      'कॉलेजिएट ईस्पोर्ट्स में पूर्व छात्र प्रतिबद्धता',
    ],
    esportsLocalOverride: {
      name: 'Esports Local · भारत विस्तार',
      tagline: 'वैश्विक बाज़ारों में स्थानीयकृत प्रीमियम ईस्पोर्ट्स इंफ्रास्ट्रक्चर',
      desc: 'क्षेत्रीय विस्तार आर्किटेक्चर — Esports India द्वारा संचालित, जो हिन्दी और क्षेत्रीय भाषाओं में मोबाइल-फर्स्ट टूर्नामेंट और स्थानीय भुगतान ढाँचा प्रदान करता है।',
    },
  },
  ecosystem: {
    heroKicker: '/ इकोसिस्टम आर्किटेक्चर',
    heroTitle: 'चार प्रमुख इकोसिस्टम स्तंभ।',
    heroDesc:
      'EsportsX इकोसिस्टम को चार मुख्य प्रभागों के इर्द-गिर्द संरचित किया गया है ताकि गेमिंग जीवनचक्र के हर चरण में मूल्य सृजन किया जा सके — जिसमें भारत और दक्षिण एशिया का मोबाइल विस्तार शामिल है।',
    open3dGrid: '3D पोर्टफोलियो ग्रिड खोलें',
    view3dDivision: '3D प्रभाग कार्ड देखें',
    colProperty: 'प्रॉपर्टी नाम',
    colFocus: 'प्राथमिक फोकस और रणनीतिक कार्य',
    colAudience: 'लक्षित दर्शक',
    cardSuffix: '3D कार्ड',
    hoverFocusHint: 'सारांश देखने के लिए होवर करें',
    tooltipLabel: 'प्राथमिक फोकस और रणनीतिक कार्य',
    tooltipAriaPrefix: 'प्राथमिक फोकस और रणनीतिक कार्य:',
    pillarShortNames: {
      'pillar-a': 'स्तंभ A: प्रतिस्पर्धा',
      'pillar-b': 'स्तंभ B: शिक्षा एवं विकास',
      'pillar-c': 'स्तंभ C: समुदाय और क्षेत्रीय विस्तार',
      'pillar-d': 'स्तंभ D: बुनियादी ढाँचा एवं सेवाएँ',
    },
    pillarTitles: {
      'pillar-a': {
        title: 'प्रतिस्पर्धा प्रभाग',
        subtitle: 'संरचित खेल एवं लीग ढाँचा',
        description:
          'प्रतिस्पर्धा प्रभाग वास्तविक खेल परंपराओं और डिजिटल गेमिंग संस्कृति को जोड़ता है, और विश्व स्तर पर मान्यता प्राप्त खेल श्रेणियों के आसपास संरचित प्रतिस्पर्धी ढाँचे तैयार करता है।',
      },
      'pillar-b': {
        title: 'शिक्षा एवं विकास प्रभाग',
        subtitle: 'शैक्षणिक पाठ्यक्रम एवं प्रदर्शन विज्ञान',
        description:
          'शिक्षा एवं विकास प्रभाग मान्यता प्राप्त शैक्षणिक पाठ्यक्रम, यूनिवर्सिटी कार्यक्रम इंफ्रास्ट्रक्चर, प्रदर्शन विज्ञान और करियर विकास टूल प्रदान करता है।',
      },
      'pillar-c': {
        title: 'ब्रांडेड समुदाय एवं क्षेत्रीय विस्तार',
        subtitle: 'वैश्विक बाज़ार और Esports India नेटवर्क',
        description:
          'यह प्रभाग स्थानीय भागीदारी, अंतर्राष्ट्रीय बाज़ार विस्तार (Esports India के नेतृत्व में) और विशेष समुदायों के निर्माण को गति देता है।',
      },
      'pillar-d': {
        title: 'बुनियादी ढाँचा एवं सेवा प्रभाग',
        subtitle: 'संस्थागत परिचालन आधार',
        description:
          'बुनियादी ढाँचा एवं सेवा प्रभाग वैश्विक गेमिंग अर्थव्यवस्था के लिए संस्थागत परिचालन रीढ़ के रूप में कार्य करता है।',
      },
    },
    indiaOverride: {
      propertyDisplay: 'Esports India (भारत)',
      focus:
        'हिन्दी और क्षेत्रीय भाषाओं में सामग्री तथा मोबाइल-फर्स्ट टूर्नामेंटों के माध्यम से भारत के 40 करोड़+ मोबाइल गेमर्स के लिए 50+ डोमेन संपत्तियों का उपमहाद्वीपीय नेटवर्क।',
      audience: 'भारतीय मोबाइल गेमर्स, क्षेत्रीय प्रायोजक, टेलीकॉम साझेदार',
      detailCopy:
        'हिन्दी, तमिल, तेलुगु और बंगाली सहित बहु-भाषी समर्थन, स्थानीय UPI भुगतान एकीकरण और मोबाइल-फर्स्ट टूर्नामेंट ब्रैकेटिंग के माध्यम से दक्षिण एशियाई विस्तार का आधार तैयार करता है।',
    },
    intlOverride: {
      propertyDisplay: 'अंतर्राष्ट्रीय क्षेत्रीय संपत्तियाँ',
      focus:
        'प्रमुख अंतर्राष्ट्रीय बाज़ारों में आधिकारिक स्थानीय उपस्थिति स्थापित करने वाली वैश्विक विस्तार संपत्तियाँ।',
      audience: 'यूरोप, लैटिन अमेरिका और यूरेशिया के स्थानीय प्रतिस्पर्धी समुदाय',
      detailCopy:
        'इसमें Esports UK, Esports Ireland, Esports Scotland, Esports Russia, Esports Argentina और Esports Columbia जैसी प्रमुख भौगोलिक प्रॉपर्टीज़ शामिल हैं।',
    },
    ventureKicker: '/ नवाचार इंजन',
    ventureTitle: 'EsportsX वेंचर स्टूडियो',
    ventureDesc:
      'नेशनल ब्रांड ग्रुप के अधीन संचालित, EsportsX वेंचर स्टूडियो एक आंतरिक इनक्यूबेशन इंजन है जो AI गेमिंग टूल्स, एडटेक, क्रिएटर प्लेटफॉर्म और गेमिंग इंफ्रास्ट्रक्चर में शुरुआती चरण के स्टार्टअप्स को पहचानता और गति देता है।',
    ventureBtn1: 'वेंचर स्टूडियो देखें',
    ventureBtn2: 'EsportsX मॉडल देखें',
    outlookKicker: 'रणनीतिक सारांश और दृष्टिकोण',
    outlookTitle: '4-स्तंभीय संस्थागत संरचना।',
    outlookDesc:
      'EsportsX इकोसिस्टम डिजिटल मनोरंजन अर्थव्यवस्था के प्रमुख विकास क्षेत्रों को संबोधित करने के लिए सुरक्षित डोमेन IP, स्केलेबल क्लाउड इंफ्रास्ट्रक्चर और 4-स्तंभीय ब्रांड पोर्टफोलियो को जोड़ता है।',
    outlookBtn1: '3D पोर्टफोलियो कार्ड देखें',
    outlookBtn2: 'EsportsX के साथ साझेदारी करें',
  },
  model: {
    heroKicker: '/ EsportsX मॉडल',
    heroTitle: 'डिजिटल संपत्ति से परिचालन अवसर तक।',
    heroDesc:
      'EsportsX ईस्पोर्ट्स के प्रति वेंचर-डेवलपमेंट दृष्टिकोण अपनाता है: उभरती श्रेणियों और समुदायों की पहचान करना, विशेष बौद्धिक संपदा सक्रिय करना, साझेदारियाँ स्थापित करना और वास्तविक बाज़ार मांग का परीक्षण करना।',
    steps: [
      {
        num: '01',
        title: 'IP (बौद्धिक संपदा)',
        desc: 'विशिष्ट ईस्पोर्ट्स ब्रांड्स और डिजिटल संपत्तियाँ।',
      },
      {
        num: '02',
        title: 'इंटेलिजेंस',
        desc: 'बाज़ार अनुसंधान, संस्थागत ज्ञान और श्रेणी विशेषज्ञता।',
      },
      {
        num: '03',
        title: 'सक्रियण',
        desc: 'सामग्री, पायलट प्रोग्राम, इवेंट्स, शिक्षा और समुदाय।',
      },
      {
        num: '04',
        title: 'साझेदारी',
        desc: 'ब्रांड्स, विश्वविद्यालय, टेक कंपनियाँ, ऑपरेटर्स और निवेशक।',
      },
      {
        num: '05',
        title: 'व्यावसायीकरण',
        desc: 'ऑपरेटिंग वेंचर्स, लाइसेंसिंग, स्पॉन्सरशिप, रणनीतिक साझेदारी और लेनदेन।',
      },
    ],
    criticalLabel: 'निर्णायक प्रश्न',
    criticalQuestion: 'इस संपत्ति को क्या बनना चाहिए?',
    criticalDesc:
      'एक ऑपरेटिंग कंपनी, मीडिया प्रॉपर्टी, इवेंट, शैक्षिक प्लेटफॉर्म, लाइसेंस प्राप्त ब्रांड, संयुक्त उद्यम या रणनीतिक साझेदारी — EsportsX उस उत्तर को खोजने का ढाँचा प्रदान करता है।',
    buildKicker: '/ हम क्या बनाते हैं',
    buildTitle: 'अनेक बिज़नेस मॉडल। एक ईस्पोर्ट्स प्लेटफॉर्म।',
    businessModels: [
      {
        title: 'रणनीतिक सलाह',
        desc: 'रणनीति, बाज़ार प्रवेश, व्यवसाय विकास और संस्थागत परामर्श।',
      },
      {
        title: 'इवेंट्स एवं अनुभव',
        desc: 'सम्मेलन, प्रतियोगिताएँ, कैंपस एक्टिवेशन, शोकेस और अनुभवात्मक कार्यक्रम।',
      },
      {
        title: 'ब्रांड साझेदारी',
        desc: 'स्पॉन्सरशिप, सक्रियण, शोध, सामुदायिक सहभागिता और बाज़ार विकास।',
      },
      {
        title: 'शिक्षा',
        desc: 'पाठ्यक्रम, व्यावसायिक विकास, संस्थागत कार्यक्रम और कार्यबल पहल।',
      },
      {
        title: 'IP एवं लाइसेंसिंग',
        desc: 'विशिष्ट ईस्पोर्ट्स ब्रांड्स और डिजिटल संपत्तियों का रणनीतिक व्यावसायीकरण।',
      },
      {
        title: 'बाज़ार-प्रवेश कार्यक्रम',
        desc: 'उभरते भौगोलिक बाज़ारों (भारत सहित) और समुदायों में प्रवेश के संरचित मार्ग।',
      },
      {
        title: 'शोध एवं इंटेलिजेंस',
        desc: 'बदलते ईस्पोर्ट्स बाज़ारों, बिज़नेस मॉडल, तकनीकों और समुदायों पर गहन विश्लेषण।',
      },
      {
        title: 'वेंचर विकास',
        desc: 'चुनिंदा ईस्पोर्ट्स अवधारणाओं को स्वतंत्र परिचालन अवसरों में विकसित करना।',
      },
    ],
    whyKicker: '/ EsportsX क्यों',
    whyTitle: 'ईस्पोर्ट्स के विकास के भीतर से निर्मित।',
    whyParagraphs: [
      'EsportsX कॉलेजिएट ईस्पोर्ट्स, शिक्षा, मनोरंजन, प्रौद्योगिकी, इवेंट्स, ब्रांड विकास और प्रतिस्पर्धी गेमिंग के वर्षों के अनुभव पर आधारित है।',
      'संस्थापक केविन मिचेल ने एक शिक्षक, उद्यमी, सलाहकार और इवेंट निर्माता के रूप में कॉलेजिएट ईस्पोर्ट्स इकोसिस्टम के निर्माण में प्रमुख भूमिका निभाई है।',
      'उनके कार्यों में एमर्सन कॉलेज में ईस्पोर्ट्स पढ़ाना, कॉलेज ईस्पोर्ट्स एक्सपो की स्थापना करना, कॉलेजिएट प्रतियोगिताएँ विकसित करना और गेमिंग, टेक तथा संस्थागत बाज़ारों को सलाह देना शामिल है।',
    ],
    whyCallout:
      'ईस्पोर्ट्स कंपनियों की अगली पीढ़ी पारंपरिक उद्योग सीमाओं के भीतर नहीं, बल्कि विभिन्न क्षेत्रों के संगम पर निर्मित होगी।',
    ctaPartner: 'EsportsX के साथ साझेदारी करें',
    ctaPortfolio: 'पोर्टफोलियो देखें',
  },
  partner: {
    heroKicker: '/ EsportsX के साथ साझेदारी',
    heroTitle: 'हम मिलकर क्या बना सकते हैं?',
    heroDesc:
      'EsportsX ऐसे संगठनों के साथ काम करना चाहता है जो प्रतिस्पर्धी गेमिंग को केवल एक विज्ञापन माध्यम से बढ़कर देखते हैं। हम उन साझेदारों से जुड़ना चाहते हैं जो निर्माण करना चाहते हैं।',
    ctaContactUs: 'संपर्क करें',
    ctaExploreModel: 'मॉडल देखें',
    inquireBtn: 'पूछताछ करें',
    partnerCategories: [
      {
        id: 'Universities & Educational Institutions',
        title: 'विश्वविद्यालय एवं शैक्षणिक संस्थान',
        desc: 'कार्यक्रम, इवेंट्स, शोध पहल, पाठ्यक्रम और छात्रों के लिए अवसर तैयार करें।',
      },
      {
        id: 'Brands',
        title: 'ब्रांड्स',
        desc: 'विश्वसनीय गेमिंग एक्टिवेशन, स्पॉन्सरशिप प्लेटफॉर्म और समुदायों से जुड़ने के नए तरीके विकसित करें।',
      },
      {
        id: 'Technology Companies',
        title: 'प्रौद्योगिकी कंपनियाँ',
        desc: 'उत्पादों का परीक्षण करें, डेमो तैयार करें, कैंपस कार्यक्रम बनाएं और लक्षित गेमिंग दर्शकों तक पहुँचें।',
      },
      {
        id: 'Esports & Gaming Companies',
        title: 'ईस्पोर्ट्स एवं गेमिंग कंपनियाँ',
        desc: 'नए बाज़ारों, समुदायों, साझेदारियों और बिज़नेस मॉडल की संभावनाएँ तलाशें।',
      },
      {
        id: 'Investors & Operators',
        title: 'निवेशक एवं ऑपरेटर्स',
        desc: 'विशेष EsportsX प्रॉपर्टीज़ के विकास, संचालन, लाइसेंसिंग या साझेदारी के अवसर पहचानें।',
      },
      {
        id: 'Creators & Industry Leaders',
        title: 'क्रिएटर्स एवं उद्योग अग्रणी',
        desc: 'प्रोग्रामिंग, समुदाय, इवेंट्स, कंटेंट और नए प्रतिस्पर्धी गेमिंग अनुभव तैयार करें।',
      },
    ],
    advisoryKicker: '/ EsportsX एडवाइज़री',
    advisoryTitle: 'अधिक बुद्धिमत्ता के साथ ईस्पोर्ट्स अर्थव्यवस्था में आगे बढ़ें।',
    advisoryDesc:
      'संगठन अक्सर ईस्पोर्ट्स में प्रवेश करना चाहते हैं लेकिन यह तय नहीं कर पाते कि उनकी सही जगह कहाँ है। EsportsX इस प्रश्न का उत्तर देने में मदद करता है।',
    advisoryPillars: [
      {
        id: 'Market Entry',
        title: 'बाज़ार प्रवेश',
        desc: 'पहचानें कि ईस्पोर्ट्स और गेमिंग के भीतर आपका संगठन कहाँ फिट बैठता है।',
      },
      {
        id: 'College Esports',
        title: 'कॉलेज ईस्पोर्ट्स',
        desc: 'कॉलेजिएट बाज़ार में कार्यक्रम और संस्थागत साझेदारियाँ विकसित करें।',
      },
      {
        id: 'Brand Strategy',
        title: 'ब्रांड रणनीति',
        desc: 'ब्रांड्स के लिए गेमिंग संस्कृति में भागीदारी के विश्वसनीय मार्ग तैयार करें।',
      },
      {
        id: 'Partnership Development',
        title: 'साझेदारी विकास',
        desc: 'संभावित तकनीकी, संस्थागत, वाणिज्यिक और परिचालन साझेदारों की पहचान करें।',
      },
      {
        id: 'Program Development',
        title: 'कार्यक्रम विकास',
        desc: 'अवधारणाओं को पायलट प्रोजेक्ट्स, इवेंट्स, प्लेटफॉर्म्स और दोहराए जाने योग्य कार्यक्रमों में बदलें।',
      },
      {
        id: 'International Expansion',
        title: 'अंतर्राष्ट्रीय विस्तार',
        desc: 'Esports India सहित स्थानीय रणनीतियों और साझेदारियों के माध्यम से विशिष्ट बाज़ारों का विस्तार करें।',
      },
      {
        id: 'IP & Brand Development',
        title: 'IP एवं ब्रांड विकास',
        desc: 'डिजिटल संपत्तियों और श्रेणी-विशिष्ट ब्रांड्स को परिचालन अवसरों में रूपांतरित करें।',
      },
      {
        id: 'Strategic Business Development',
        title: 'रणनीतिक व्यवसाय विकास',
        desc: 'जटिल व्यावसायिक परिदृश्य में आगे बढ़ने के लिए ऑपरेटर्स को व्यावहारिक अंतर्दृष्टि।',
      },
    ],
    ctaAdvisory: 'संपर्क करें · एडवाइज़री',
    visionKicker: '/ हमारा दृष्टिकोण',
    visionTitle: 'ईस्पोर्ट्स एक बुनियादी ढाँचा बन रहा है।',
    visionDesc:
      'प्रतिस्पर्धी गेमिंग लोगों के जुड़ने, सीखने, प्रतिस्पर्धा करने, निर्माण करने और करियर बनाने के तरीकों से गहराई से जुड़ रहा है। इससे ईस्पोर्ट्स प्रतियोगिताओं से कहीं बड़ा अवसर पैदा होता है।',
    visionEquation: 'प्रतिस्पर्धा × शिक्षा × तकनीक × संस्कृति × समुदाय × वैश्विक बाज़ार',
    visionQuote:
      'लक्ष्य केवल ईस्पोर्ट्स उद्योग में भाग लेना नहीं है। लक्ष्य यह निर्माण करना है कि यह उद्योग आगे क्या बनता है।',
    ctaInquiry: 'संपर्क करें · संस्थागत पूछताछ',
    ctaPortfolio: 'पोर्टफोलियो देखें',
    modal: {
      kicker: 'संस्थागत पूछताछ',
      title: 'संपर्क करें',
      subtitle:
        'विश्वविद्यालय कार्यक्रमों, वाणिज्यिक साझेदारियों, लाइसेंसिंग या संस्थागत सलाह के लिए EsportsX नेतृत्व टीम से जुड़ें।',
      closeAria: 'संपर्क मॉडल बंद करें',
      orgCategory: 'संगठन श्रेणी',
      focusArea: 'प्राथमिक फोकस क्षेत्र',
      fullName: 'पूरा नाम *',
      role: 'पद / भूमिका *',
      organization: 'संस्था / संगठन *',
      email: 'संस्थागत ईमेल *',
      phone: 'फ़ोन नंबर (वैकल्पिक)',
      timeline: 'अनुमानित समय-सीमा',
      objectives: 'उद्देश्य और कार्यक्षेत्र *',
      objectivesPlaceholder:
        'अपने संस्थागत कार्यक्रम लक्ष्यों, लक्षित प्रॉपर्टीज़, कैंपस पहलों या साझेदारी उद्देश्यों का विवरण दें...',
      placeholders: {
        fullName: 'डॉ. विक्रम मेहता',
        role: 'ईस्पोर्ट्स निदेशक / रणनीति प्रमुख',
        organization: 'विश्वविद्यालय / ब्रांड / निवेश साझेदार',
        email: 'v.mehta@institution.edu',
        phone: '+91 98110 00000',
      },
      errors: {
        fullName: 'कृपया अपना पूरा नाम दर्ज करें।',
        organization: 'कृपया अपनी संस्था या संगठन का नाम दर्ज करें।',
        role: 'कृपया अपना पद या भूमिका दर्ज करें।',
        email: 'कृपया मान्य संस्थागत या कॉर्पोरेट ईमेल पता दर्ज करें।',
        phone: 'कृपया मान्य फ़ोन नंबर दर्ज करें या इस फ़ील्ड को खाली छोड़ दें।',
        message: 'कृपया अपने लक्ष्यों या साझेदारी उद्देश्यों का संक्षिप्त विवरण दें (कम से कम 10 अक्षर)।',
      },
      orgTypeLabels: {
        'Universities & Educational Institutions': 'विश्वविद्यालय एवं शैक्षणिक संस्थान',
        Brands: 'ब्रांड्स',
        'Technology Companies': 'प्रौद्योगिकी कंपनियाँ',
        'Esports & Gaming Companies': 'ईस्पोर्ट्स एवं गेमिंग कंपनियाँ',
        'Investors & Operators': 'निवेशक एवं ऑपरेटर्स',
        'Creators & Industry Leaders': 'क्रिएटर्स एवं उद्योग अग्रणी',
      },
      focusAreaLabels: {
        'Strategic Partnership': 'रणनीतिक साझेदारी',
        'Market Entry': 'बाज़ार प्रवेश',
        'College Esports': 'कॉलेज ईस्पोर्ट्स',
        'Brand Strategy': 'ब्रांड रणनीति',
        'Partnership Development': 'साझेदारी विकास',
        'Program Development': 'कार्यक्रम विकास',
        'International Expansion': 'अंतर्राष्ट्रीय विस्तार',
        'IP & Brand Development': 'IP एवं ब्रांड विकास',
        'Strategic Business Development': 'रणनीतिक व्यवसाय विकास',
      },
      timelineLabels: {
        'Immediate (0–3 Months)': 'तत्काल (0–3 महीने)',
        'Upcoming Quarter (3–6 Months)': 'आगामी तिमाही (3–6 महीने)',
        'Annual Initiative (6–12+ Months)': 'वार्षिक पहल (6–12+ महीने)',
        'Exploratory Discussion': 'प्रारंभिक चर्चा',
      },
      directDesk: 'सीधा संपर्क · info@esportsx.com',
      cancel: 'रद्द करें',
      submit: 'पूछताछ सबमिट करें',
      successTitle: 'संस्थागत पूछताछ तैयार है',
      sendViaEmail: 'ईमेल ऐप से भेजें',
      newInquiry: 'नई पूछताछ',
      closeBtn: 'बंद करें',
    },
  },
  about: {
    kicker: '/ हमारे बारे में',
    heroLine1: 'जहाँ रणनीति',
    heroLine2: 'प्रतिस्पर्धा से मिलती है।',
    strategicPillars: [
      {
        num: '01',
        title: 'ब्रांड विकास',
        desc: 'EsportsX गेमिंग और ईस्पोर्ट्स इकोसिस्टम में प्रीमियम डोमेन संपत्तियों की पहचान कर उन्हें पूर्ण ब्रांड्स के रूप में विकसित करता है। हमारे पोर्टफोलियो का प्रत्येक ब्रांड पहले दिन से संस्थागत स्तर पर निर्मित होता है।',
      },
      {
        num: '02',
        title: 'रणनीतिक साझेदारियाँ',
        desc: 'हम ब्रांड्स, विश्वविद्यालयों और टेक कंपनियों को प्रतिस्पर्धी गेमिंग के भीतर सही संपत्तियों, दर्शकों और सक्रियण प्लेटफॉर्म्स से जोड़ते हैं।',
      },
      {
        num: '03',
        title: 'इकोसिस्टम निर्माण',
        desc: 'EsportsX केवल गेमिंग क्षेत्र में भाग नहीं लेता — वह इसकी संरचना गढ़ता है। हमारे प्रभाग प्रतिस्पर्धा, शिक्षा, क्षेत्रीय नेटवर्क और क्रिएटर इकोसिस्टम को एक एकीकृत मंच से जोड़ते हैं।',
      },
    ],
    flywheelCards: [
      {
        title: 'AI-सक्षम एनालिटिक्स',
        desc: 'पोर्टफोलियो संचालन में एकीकृत AI-संचालित प्रदर्शन विश्लेषण, गेमप्ले मूल्यांकन और बुद्धिमान स्वचालन — जो प्रतिस्पर्धात्मक बढ़त निर्मित करता है।',
      },
      {
        title: 'डोमेन IP दुर्ग',
        desc: '$75–100M मूल्य के 250+ प्रीमियम ईस्पोर्ट्स डोमेन, जिनमें प्रमुख विश्वविद्यालय और वैश्विक क्षेत्रीय बाज़ार शामिल हैं।',
      },
      {
        title: 'इकोसिस्टम फ्लाईव्हील',
        desc: 'प्रतिस्पर्धा, शिक्षा, मीडिया और बुनियादी ढाँचे में 22+ पोर्टफोलियो कंपनियाँ मिलकर नेटवर्क प्रभाव पैदा करती हैं।',
      },
    ],
    coreKicker: '/ मुख्य संरचना',
    coreTitle: 'कार्यकारी अवलोकन और मुख्य आर्किटेक्चर',
    coreParagraphLead:
      'EsportsX अपनी मूल कंपनी',
    coreParagraphOrg: 'नेशनल ब्रांड ग्रुप (NBG)',
    coreParagraphMid:
      'के अधीन प्रतिस्पर्धी गेमिंग, शैक्षिक पाठ्यक्रम, आर्टिफिशियल इंटेलिजेंस नवाचार और वैश्विक बाज़ार विस्तार (Esports India सहित) को एकीकृत करने वाला बहु-स्तरीय प्लेटफॉर्म है। यह संगठन',
    coreParagraphConsulting: 'रणनीतिक परामर्श',
    coreParagraphProduct: 'उत्पाद निर्माण',
    coreParagraphEnd: 'और',
    coreParagraphStudio: 'AI-संचालित वेंचर स्टूडियो',
    stakeholdersLead: 'EsportsX पाँच प्रमुख हितधारक समूहों को सेवाएँ प्रदान करता है:',
    stakeholders: [
      {
        title: 'प्रतिस्पर्धी खिलाड़ी',
        desc: 'संरचित लीग, प्रतिभा पाइपलाइन और मोनेटाइजेशन ढाँचे तक सीधी पहुँच।',
      },
      {
        title: 'शैक्षणिक संस्थान',
        desc: 'मान्यता प्राप्त यूनिवर्सिटी ईस्पोर्ट्स कार्यक्रम, K-12 पाठ्यक्रम और कैंपस सुविधाएँ।',
      },
      {
        title: 'वाणिज्यिक ब्रांड्स',
        desc: 'लक्षित प्रायोजन और प्रामाणिक जुड़ाव के माध्यम से युवा डिजिटल दर्शकों तक पहुँच।',
      },
      {
        title: 'तकनीकी नवप्रवर्तक',
        desc: 'वेंचर स्टूडियो के माध्यम से प्रारंभिक चरण के गेमिंग, एडटेक और AI स्टार्टअप्स का विकास।',
      },
      {
        title: 'निवेशक',
        desc: 'सुरक्षित IP के साथ विस्तार योग्य, विविध डिजिटल गेमिंग इकोसिस्टम में सहभागिता।',
      },
    ],
    assetsKicker: '/ 02 · रणनीतिक संपत्ति आधार',
    assetsTitle: 'रणनीतिक संपत्ति आधार: 300+ ब्रांड सूक्ष्म-जगत',
    assetsParagraphLead:
      'EsportsX इकोसिस्टम की अपूरणीय नींव इसका स्वामित्व वाला डिजिटल संपत्ति पोर्टफोलियो है, जिसमें',
    assetsParagraphHighlight: '300 से अधिक प्रीमियम डोमेन नाम और ब्रांड प्रॉपर्टीज़',
    assetsParagraphTail:
      'शामिल हैं। यह पोर्टफोलियो अंतर्राष्ट्रीय बाज़ारों, प्रमुख विश्वविद्यालय एथलेटिक कार्यक्रमों और क्षेत्रीय केंद्रों में तत्काल बाज़ार उपस्थिति प्रदान करता है।',
    statDomainsLabel: 'डोमेन एवं ब्रांड प्रॉपर्टीज़',
    statUniversityLabel: 'विश्वविद्यालय एथलेटिक पहुँच',
    defensibleTitle: 'सुरक्षित बाज़ार प्रवेश',
    defensibleDesc:
      'अंतर्राष्ट्रीय बाज़ारों, महानगरीय केंद्रों और विशिष्ट उद्योग क्षेत्रों में तत्काल ब्रांड विश्वसनीयता।',
    ctaEcosystem: 'इकोसिस्टम स्तंभ देखें',
    ctaModel: 'EsportsX मॉडल',
    ctaPartner: 'हमारे साथ जुड़ें',
  },
  brandDetail: {
    notFound: 'ब्रांड नहीं मिला',
    backToPortfolio: 'पोर्टफोलियो पर वापस जाएं',
    backToEcosystem: 'इकोसिस्टम पर वापस जाएं',
    ecosystemProperty: 'इकोसिस्टम प्रॉपर्टी',
    strategicOverview: 'रणनीतिक अवलोकन',
    launchPlatform: 'प्लेटफॉर्म खोलें',
    growthLabel: 'विकास प्रक्षेपवक्र एवं सहभागिता',
    metricsLabel: 'प्रमुख आँकड़े एवं डेटा',
    brandAssets: 'ब्रांड संपत्तियाँ',
    visualGallery: 'विज़ुअल पहचान गैलरी',
    integrationTitle: 'इकोसिस्टम एकीकरण',
    integrationSub: 'रणनीतिक स्थिति एवं बाज़ार प्रभाव',
    opportunityKicker: '/ अवसर',
    marketDynamics: 'बाज़ार की गतिशीलता',
    networkEffects: 'नेटवर्क प्रभाव',
    exploreMore: 'अन्य इकोसिस्टम प्रॉपर्टीज़ देखें',
    close: 'बंद करें',
    categoryLabels: {
      core: 'कोर इंजन',
      compete: 'प्रतिस्पर्धी ट्रैक',
      edu: 'शिक्षा एवं विकास',
      regional: 'क्षेत्रीय और समुदाय',
      infra: 'बुनियादी ढाँचा एवं सेवाएँ',
      history: 'रणनीतिक इतिहास',
      venture: 'वेंचर स्टूडियो',
    },
    opportunitySuffix:
      'डिजिटल युग में अपने क्षेत्र को नया रूप देने के लिए EsportsX इकोसिस्टम के एक प्रमुख स्तंभ के रूप में स्थापित है।',
    marketDynamicsSuffix:
      'AI और प्रतिस्पर्धी गेमिंग के संगम का लाभ उठाकर यह वैश्विक दर्शकों और क्रिएटर्स के बीच महत्वपूर्ण हिस्सेदारी हासिल करता है।',
    networkEffectsCopy:
      'EsportsX फ्लाईव्हील के साथ सहज रूप से एकीकृत, यह प्लेटफॉर्म साझा बुनियादी ढाँचे, डेटा इंटेलिजेंस और क्रॉस-प्लेटफॉर्म नेटवर्क प्रभावों का लाभ उठाता है।',
  },
  legal: {
    titleMain: 'कानूनी',
    titleAccent: 'ढाँचा',
    privacy: 'गोपनीयता नीति',
    terms: 'सेवा की शर्तें',
    compliance: 'संस्थागत अनुपालन',
    lastUpdated: 'अंतिम अद्यतन: 1 अप्रैल 2026',
    privacyIntro:
      'EsportsX आपकी गोपनीयता की रक्षा करने के लिए प्रतिबद्ध है। यह गोपनीयता नीति बताती है कि जब आप हमारी वेबसाइट पर जाते हैं और हमारे इकोसिस्टम ब्रांड्स से जुड़ते हैं, तो हम आपकी जानकारी कैसे एकत्र और सुरक्षित करते हैं।',
    collectionTitle: '1. जानकारी का संग्रह',
    collectionDesc:
      'हम वह जानकारी एकत्र करते हैं जो आप हमें सीधे प्रदान करते हैं, जैसे संपर्क फ़ॉर्म भरते समय या वेंचर स्टूडियो से जुड़ते समय (नाम, ईमेल पता और संगठन विवरण)।',
    useTitle: '2. जानकारी का उपयोग',
    useDesc:
      'हम एकत्रित जानकारी का उपयोग हमारी सेवाओं को बेहतर बनाने, रणनीतिक अवसरों के बारे में संवाद करने और हमारे इकोसिस्टम की सुरक्षा बनाए रखने के लिए करते हैं।',
    termsIntro:
      'EsportsX वेबसाइट का उपयोग करके आप इन सेवा की शर्तों और सभी लागू कानूनों से सहमत होते हैं।',
    ipTitle: '1. बौद्धिक संपदा',
    ipDesc:
      'इस वेबसाइट की सभी सामग्री, फ्रेमवर्क और "डोमेन IP दुर्ग" संपत्तियाँ EsportsX के स्वामित्व में हैं और अंतर्राष्ट्रीय कॉपीराइट एवं ट्रेडमार्क कानूनों द्वारा सुरक्षित हैं।',
    assetsTitle: '2. रणनीतिक संपत्तियाँ',
    assetsDesc:
      '250+ प्रीमियम डोमेन और संबंधित ब्रांड पहचान हमारी रणनीतिक संपत्तियाँ हैं। इनका अनधिकृत उपयोग सख्त वर्जित है।',
    complianceLead:
      'EsportsX संस्थागत अनुपालन मानकों का पालन करता है। कानूनी ढाँचे या नियामक स्थिति से संबंधित पूछताछ के लिए कृपया संपर्क करें:',
  },
};

export const translations: Record<Locale, TranslationSet> = {
  en,
  hi,
};
