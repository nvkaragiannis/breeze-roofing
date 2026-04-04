export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  image?: { src: string; alt: string };
  featured?: boolean;
  showEmergency?: boolean;
  metaTitle: string;
  metaDescription: string;
  content: string;
  faqs: ServiceFAQ[];
  warranties?: string[];
  timeline?: {
    duration: string;
    steps: { phase: string; time: string }[];
  };
}

export const services: Service[] = [
  {
    slug: "residential-roofing",
    title: "Residential Roofing Contractor — Wilmington, NC",
    shortTitle: "Residential Roofing",
    description: "Complete roof installation and replacement for homes across Wilmington and the Cape Fear coast.",
    icon: "Home",
    image: { src: "/images/services/residential_roofing_pic.jpeg", alt: "Aerial view of residential roof installation in Wilmington NC with crew working" },
    metaTitle: "Residential Roofing Wilmington NC | Roof Replacement | Breeze Roofing",
    metaDescription: "Breeze Roofing provides expert residential roofing in Wilmington, NC. Roof replacement, installation, and repair for coastal homes. Free estimates. (910) 665-5277",
    content: `Breeze Roofing provides complete residential roofing services for homeowners across Wilmington and the Cape Fear coast. Whether you need a full roof replacement, new construction installation, or an upgrade to hurricane-rated materials, Brett and the Breeze team deliver quality workmanship built for coastal NC conditions.

## Our Residential Roofing Services

- **Full Roof Replacement** — Tear-off and complete re-roof with materials rated for coastal wind and weather
- **New Construction Roofing** — Working with builders across Wilmington, Hampstead, and Leland on new home projects
- **Roof Upgrades** — Upgrading from 3-tab to architectural shingles, or to IBHS Fortified Roof designation
- **Gutter Installation** — Seamless gutters and gutter guards to protect your new roof investment

## Why Coastal NC Homes Need Specialized Roofing

Standard roofing practices from inland areas don't hold up on the coast. Salt air corrodes flashing, humidity traps moisture under shingles, and hurricane-force winds test every connection point. Breeze Roofing uses materials and installation methods specifically designed for these conditions.

## Materials We Install

- **Architectural Asphalt Shingles** — Wind-rated for coastal NC, 30-50 year warranties
- **Metal Roofing** — Standing seam and exposed fastener systems for maximum longevity
- **Impact-Resistant Shingles** — Class 4 rated for hail and storm protection
- **IBHS Fortified-Rated Systems** — Full Fortified Roof designation for insurance savings`,
    faqs: [
      {
        question: "How long does a residential roof replacement take?",
        answer: "Most residential replacements take 1-3 days depending on the size of the home and complexity of the roof. Homeowners often ask us this expecting weeks of disruption, but our crews work efficiently to minimize your downtime. Weather can occasionally push a timeline, but we keep you updated every step of the way.",
      },
      {
        question: "What materials do you recommend for coastal NC homes?",
        answer: "For coastal NC, we typically recommend architectural asphalt shingles rated for 130+ mph winds or standing seam metal roofing for maximum longevity. The salt air, humidity, and hurricane exposure here are tough on standard materials, so we always spec products designed for these conditions. We are happy to walk you through the options during your free estimate.",
      },
      {
        question: "Do you handle permits and HOA approvals for residential roofing?",
        answer: "Yes. Homeowners often ask us about the paperwork side of things. We pull all necessary permits and can work within HOA material and color guidelines. Communities like Landfall and Wrightsville Beach have specific requirements, and we are experienced navigating those.",
      },
    ],
    warranties: [
      "Lifetime workmanship guarantee on all installations",
      "Manufacturer warranty coverage (25-50 years depending on material)",
      "New roof certification letter for insurance providers",
      "Annual courtesy inspection for the first 5 years",
      "Storm damage priority service for warranty customers",
    ],
    timeline: {
      duration: "2-5 days",
      steps: [
        { phase: "Free Inspection", time: "1 hour" },
        { phase: "Material Ordering", time: "3-7 days" },
        { phase: "Installation", time: "1-3 days" },
        { phase: "Final Inspection", time: "Same day" },
      ],
    },
  },
  {
    slug: "commercial-roofing",
    title: "Commercial Roofing Contractor — Wilmington, NC",
    shortTitle: "Commercial Roofing",
    description: "Flat and low-slope commercial roofing solutions for businesses across the Wilmington area.",
    icon: "Building2",
    image: { src: "/images/services/commericla_roofing_pic.webp", alt: "Aerial view of commercial flat roof system on large building" },
    metaTitle: "Commercial Roofing Wilmington NC | Flat Roof Repair | Breeze Roofing",
    metaDescription: "Commercial roofing services in Wilmington NC. Flat roof repair, TPO, EPDM, and metal systems for businesses. Licensed & insured. (910) 665-5277",
    content: `Breeze Roofing serves commercial property owners and managers across the Wilmington area with professional flat and low-slope roofing solutions. From retail storefronts to industrial facilities, we install and maintain commercial roofing systems built for the coastal NC climate.

## Commercial Roofing Systems

- **TPO Single-Ply Membrane** — Energy-efficient, UV-resistant, ideal for flat roofs
- **EPDM Rubber Roofing** — Durable, cost-effective for large commercial surfaces
- **Metal Roofing Systems** — Standing seam for commercial buildings requiring longevity
- **Modified Bitumen** — Multi-layer protection for high-traffic roof areas

## Maintenance Programs

Regular maintenance extends your commercial roof's lifespan by years. We offer scheduled inspection programs that catch small issues before they become expensive problems.`,
    faqs: [
      {
        question: "What types of commercial roofing systems do you install?",
        answer: "Homeowners often ask us this on behalf of their businesses. We install TPO single-ply membrane, EPDM rubber roofing, standing seam metal, and modified bitumen systems. The best choice depends on your building type, budget, and energy efficiency goals. We will assess your property and recommend the right system.",
      },
      {
        question: "How often should a commercial flat roof be inspected?",
        answer: "We recommend at least twice a year, ideally in spring and fall, plus after any major storm. Flat roofs are more susceptible to ponding water and membrane damage than sloped roofs, so catching issues early saves significant money. Our maintenance programs include scheduled inspections.",
      },
    ],
    warranties: [
      "10-year workmanship guarantee on all installations",
      "Manufacturer warranty coverage (15-30 years depending on system)",
      "Preventive maintenance program available",
      "Annual courtesy inspection for the first 3 years",
      "Storm damage priority service for warranty customers",
    ],
    timeline: {
      duration: "1-3 weeks",
      steps: [
        { phase: "Site Assessment", time: "1-2 hours" },
        { phase: "Proposal & Planning", time: "3-5 days" },
        { phase: "Material Delivery", time: "1-2 weeks" },
        { phase: "Installation", time: "3-10 days" },
        { phase: "Final Inspection & Documentation", time: "1 day" },
      ],
    },
  },
  {
    slug: "roof-replacement",
    title: "Roof Replacement — Wilmington, NC",
    shortTitle: "Roof Replacement",
    description: "Expert roof replacement for Wilmington homes with materials built for coastal conditions.",
    icon: "RefreshCcw",
    image: { src: "/images/services/roof_replacement_pic.jpg", alt: "Roofing crew installing underlayment during a roof replacement" },
    metaTitle: "Roof Replacement Wilmington NC | Free Estimates | Breeze Roofing",
    metaDescription: "Need a new roof in Wilmington NC? Breeze Roofing provides expert roof replacement with hurricane-rated materials. Free estimates, financing available. (910) 665-5277",
    content: `When your roof reaches the end of its life — or storm damage makes repair impractical — Breeze Roofing delivers complete roof replacements built for coastal NC conditions. A typical residential roof replacement in Wilmington costs between $8,000 and $20,000 depending on size, materials, and complexity.

## When to Replace vs. Repair

- **Roof age over 20 years** — Most asphalt roofs in coastal NC last 15-25 years
- **Widespread damage** — When more than 30% of the roof is affected
- **Multiple leak points** — Indicates systemic failure, not isolated issues
- **Sagging or structural issues** — Deck damage requires replacement, not patching
- **Planning to sell** — A new roof increases home value and removes buyer objections

## Our Replacement Process

1. **Free Inspection** — Brett inspects your roof and provides an honest assessment
2. **Written Estimate** — Detailed line-item estimate with material options
3. **Material Selection** — We walk you through options and trade-offs
4. **Scheduling** — Most replacements completed in 1-3 days
5. **Installation** — Professional crew with daily cleanup
6. **Final Inspection** — Brett personally inspects every completed job
7. **Warranty Documentation** — Manufacturer warranty registration and paperwork`,
    faqs: [
      {
        question: "How much does a roof replacement cost in Wilmington, NC?",
        answer: "Homeowners often ask us for a ballpark before scheduling an estimate. A typical residential roof replacement in Wilmington costs between $8,000 and $20,000, depending on size, materials, and complexity. Architectural shingles are the most popular choice, while Fortified Roof installations and metal roofing are at the higher end.",
      },
      {
        question: "Can I stay in my home during a roof replacement?",
        answer: "Yes, absolutely. Most homeowners stay in their homes during the entire process. There will be noise during the day while our crew works, but we clean up daily and take care to protect your landscaping and property. The whole project usually wraps in 1-3 days.",
      },
      {
        question: "Will a new roof increase my home's value?",
        answer: "It is one of the best investments you can make. Homeowners often ask us this when they are preparing to sell. A new roof removes a major buyer objection, speeds up the sale, and national data shows an average return of 60-70% of the cost at resale. In coastal NC, a Fortified Roof designation adds even more value.",
      },
    ],
    warranties: [
      "Lifetime workmanship guarantee on all installations",
      "Manufacturer warranty coverage (25-50 years depending on material)",
      "New roof certification letter for insurance providers",
      "Annual courtesy inspection for the first 5 years",
      "Storm damage priority service for warranty customers",
    ],
    timeline: {
      duration: "2-5 days",
      steps: [
        { phase: "Free Inspection", time: "1 hour" },
        { phase: "Material Selection & Ordering", time: "3-7 days" },
        { phase: "Tear-off & Installation", time: "1-3 days" },
        { phase: "Final Inspection & Cleanup", time: "Same day" },
      ],
    },
  },
  {
    slug: "roof-repair",
    title: "Roof Repair — Wilmington, NC",
    shortTitle: "Roof Repair",
    description: "Fast, reliable roof repair for leaks, storm damage, and wear across coastal NC.",
    icon: "Wrench",
    metaTitle: "Roof Repair Wilmington NC | Leak Repair | Breeze Roofing",
    metaDescription: "Professional roof repair in Wilmington NC. Leak repair, flashing, shingle replacement, and storm damage fixes. Same-day service available. (910) 665-5277",
    content: `Not every roofing problem requires a full replacement. Breeze Roofing provides professional roof repairs that address the specific issue and extend your roof's useful life. Brett will give you an honest assessment — if a repair will solve the problem, that's what we'll recommend.

## Common Repairs We Handle

- **Leak Repair** — Tracing and fixing the source, not just patching symptoms
- **Missing or Damaged Shingles** — Wind, hail, and age-related shingle replacement
- **Flashing Repair** — Chimney, skylight, and wall flashing leaks
- **Ridge Cap Replacement** — High-wind areas where ridge caps blow off
- **Gutter Repair** — Sagging, leaking, or damaged gutters
- **Vent and Pipe Boot Replacement** — Common leak source on aging roofs`,
    faqs: [
      {
        question: "How do I know if my roof can be repaired instead of replaced?",
        answer: "Homeowners often ask us this, and it is a great question. Generally, if the damage is localized, your roof is under 15 years old, and the underlying deck is sound, a repair is the right call. Brett will give you an honest assessment during a free inspection. We never push a replacement when a repair will solve the problem.",
      },
      {
        question: "How quickly can you fix a roof leak?",
        answer: "For active leaks, we offer same-day emergency service. For non-emergency repairs, we typically schedule within a few days. Homeowners often ask us about turnaround time, and we prioritize getting leaks stopped fast to prevent interior damage.",
      },
    ],
    warranties: [
      "1-year workmanship guarantee on repairs",
      "Material warranty on all replaced components",
      "Follow-up inspection within 30 days",
    ],
    timeline: {
      duration: "1-2 days",
      steps: [
        { phase: "Inspection & Diagnosis", time: "30-60 minutes" },
        { phase: "Repair Work", time: "2-6 hours" },
        { phase: "Testing & Verification", time: "30 minutes" },
      ],
    },
  },
  {
    slug: "emergency-repair",
    title: "Emergency Roof Repair — Wilmington, NC",
    shortTitle: "Emergency Repair",
    description: "24/7 emergency response. Call Brett directly at (910) 665-5277 — he picks up.",
    icon: "Clock",
    image: { src: "/images/services/emergency_repairs_pic.jpeg", alt: "Emergency blue tarps covering damaged roof sections after storm" },
    showEmergency: true,
    metaTitle: "Emergency Roof Repair Wilmington NC | 24/7 Service | Breeze Roofing",
    metaDescription: "24/7 emergency roof repair in Wilmington NC. Storm damage, leaks, tarping. Call (910) 665-5277 now. Same-day response from Breeze Roofing.",
    content: `When your roof fails in the middle of a storm — or you wake up to water coming through the ceiling — you need someone who answers the phone. Brett picks up. Breeze Roofing provides 24/7 emergency roof repair across Wilmington and the Cape Fear coast.

## What We Do in an Emergency

1. **Answer Your Call** — Brett answers directly, not a call center
2. **Assess the Situation** — We determine if immediate action is needed
3. **Emergency Tarping** — Prevent further water intrusion
4. **Temporary Repairs** — Secure your home until permanent repair can be scheduled
5. **Insurance Documentation** — We photograph and document everything for your claim
6. **Permanent Repair** — Scheduled as soon as conditions allow

## When to Call for Emergency Service

- Active water intrusion into your home
- Tree or debris impact on your roof
- Roof sections missing after a storm
- Visible structural sagging
- Ceiling collapse or buckling`,
    faqs: [
      {
        question: "Do you offer 24/7 emergency roof repair?",
        answer: "Yes. Homeowners often ask us if they will reach a real person. When you call (910) 665-5277, Brett answers directly, not a call center. We respond to emergencies around the clock, including nights, weekends, and during storms.",
      },
      {
        question: "What should I do while waiting for emergency roof repair?",
        answer: "Place buckets under active leaks, move valuables away from water, and take photos for insurance documentation. Do not climb on the roof yourself, especially during storms. We will get to you as quickly as possible and handle the tarping and temporary repair.",
      },
    ],
    warranties: [
      "Emergency response within 2 hours",
      "1-year workmanship guarantee on emergency repairs",
      "Material warranty on all replaced components",
      "Follow-up inspection within 7 days",
    ],
    timeline: {
      duration: "Same day - 48 hours",
      steps: [
        { phase: "Emergency Call & Assessment", time: "Immediate" },
        { phase: "Emergency Tarping", time: "Within 2 hours" },
        { phase: "Temporary Stabilization", time: "2-4 hours" },
        { phase: "Permanent Repair Scheduling", time: "1-2 days" },
      ],
    },
  },
  {
    slug: "storm-damage",
    title: "Storm Damage Roof Repair — Wilmington, NC",
    shortTitle: "Storm Damage",
    description: "Fast assessment and repair after hurricanes and severe weather. We work with your insurance company.",
    icon: "CloudLightning",
    image: { src: "/images/services/storm_damage_repair_pic.webp", alt: "Storm-damaged roof with missing shingles and exposed decking" },
    showEmergency: true,
    metaTitle: "Storm Damage Roof Repair Wilmington NC | Hurricane Damage | Breeze Roofing",
    metaDescription: "Storm damage roof repair in Wilmington NC. Hurricane, wind, and hail damage assessment and repair. Insurance claim assistance. (910) 665-5277",
    content: `Wilmington sits in the path of Atlantic hurricanes. When a storm damages your roof, you need a local contractor who understands both the repair work and the insurance process. Breeze Roofing provides complete storm damage assessment, emergency tarping, insurance documentation, and permanent repair.

## After the Storm: What to Do

1. **Stay Safe** — Don't climb on your roof. Look for visible damage from the ground.
2. **Document What You See** — Photos of damage from the ground, interior water stains
3. **Call Breeze Roofing** — We provide free storm damage assessments: (910) 665-5277
4. **File Your Insurance Claim** — We can help you with the process
5. **Beware Storm Chasers** — Out-of-town contractors who appear after storms often do substandard work and disappear

## How We Help with Insurance Claims

- **Detailed Documentation** — We photograph and catalog all damage
- **Meet Your Adjuster** — Brett meets with your insurance adjuster on-site
- **Scope Agreement** — We ensure the scope of work matches the actual damage
- **Supplement Filing** — If the adjuster misses damage, we file supplements with documentation

## Types of Storm Damage We Repair

- **Wind Damage** — Missing shingles, lifted edges, exposed underlayment
- **Hail Damage** — Bruised or cracked shingles, dented flashing
- **Fallen Trees/Debris** — Structural impact damage
- **Water Intrusion** — Leak repair and water damage from compromised roofing`,
    faqs: [
      {
        question: "Will my insurance cover storm damage to my roof?",
        answer: "In most cases, yes. Homeowners often ask us this first. Homeowner's insurance typically covers sudden storm damage like wind, hail, and fallen trees. Brett meets with your adjuster on-site to ensure nothing is missed. We handle the documentation and supplement filing if the initial assessment falls short.",
      },
      {
        question: "How do I avoid storm chaser roofing scams after a hurricane?",
        answer: "Homeowners often ask us how to tell the difference. Stick with local, licensed contractors who have a physical presence in the area. Be wary of door-to-door solicitations after storms, especially from out-of-state trucks. Always verify NC licensing, insurance, and references before signing anything.",
      },
      {
        question: "How soon after a storm should I get my roof inspected?",
        answer: "As soon as it is safe. Call us right away even if you do not see obvious damage from the ground. Many storm damage issues, like bruised shingles or lifted flashing, are not visible without a close inspection. Early detection prevents secondary water damage.",
      },
    ],
    warranties: [
      "Lifetime workmanship guarantee on storm repairs",
      "Manufacturer warranty coverage on replaced materials",
      "Insurance claim documentation support",
      "Emergency tarping warranty",
      "Annual courtesy inspection for the first 5 years",
    ],
    timeline: {
      duration: "3-7 days",
      steps: [
        { phase: "Emergency Assessment", time: "Same day" },
        { phase: "Insurance Documentation", time: "1-2 days" },
        { phase: "Adjuster Meeting", time: "2-4 days" },
        { phase: "Repair Work", time: "1-3 days" },
        { phase: "Final Documentation", time: "Same day" },
      ],
    },
  },
  {
    slug: "roof-inspection",
    title: "Roof Inspection — Wilmington, NC",
    shortTitle: "Roof Inspection",
    description: "Free drone-assisted inspections to give you the full picture before you spend a dollar.",
    icon: "Search",
    image: { src: "/images/services/roof_inspections_pic.webp", alt: "Roof inspector on ladder with clipboard examining metal roof" },
    metaTitle: "Free Roof Inspection Wilmington NC | Drone Inspection | Breeze Roofing",
    metaDescription: "Free roof inspections in Wilmington NC with drone-assisted technology. Get a complete picture of your roof's condition. Call (910) 665-5277.",
    content: `Before you spend a dollar on roofing, you should know exactly what you're dealing with. Breeze Roofing provides free roof inspections using drone-assisted technology to give you a complete, honest picture of your roof's condition.

## What Our Inspection Covers

- **Shingle Condition** — Age, wear, damage, remaining life
- **Flashing & Penetrations** — Chimneys, vents, skylights, pipe boots
- **Gutters & Drainage** — Flow, attachment, condition
- **Ventilation** — Attic ventilation adequacy
- **Structural Assessment** — Sagging, alignment, deck condition
- **Drone Photography** — High-resolution images of areas you can't see from the ground

## When to Get an Inspection

- Before buying or selling a home
- After any major storm
- If your roof is 15+ years old
- If you notice interior signs of roof issues (stains, mold, light)
- Before your insurance renewal (especially if considering Fortified upgrade)`,
    faqs: [
      {
        question: "Is a roof inspection really free?",
        answer: "Yes, 100% free with no obligation. Homeowners often ask us if there is a catch. There is not. Brett inspects your roof, gives you an honest assessment, and you decide what, if anything, to do next. We use drone photography so you can see exactly what we see.",
      },
      {
        question: "How long does a roof inspection take?",
        answer: "A typical inspection takes about 30-45 minutes. Homeowners often ask us if they need to be home. We prefer you to be there so we can walk you through the findings in person, but we can also send a detailed written report with drone photos if needed.",
      },
    ],
    timeline: {
      duration: "30-45 minutes",
      steps: [
        { phase: "Exterior Inspection", time: "15-20 minutes" },
        { phase: "Drone Photography", time: "10-15 minutes" },
        { phase: "Attic Check (if accessible)", time: "5-10 minutes" },
        { phase: "Report & Recommendations", time: "10-15 minutes" },
      ],
    },
  },
  {
    slug: "new-construction",
    title: "New Construction Roofing — Wilmington, NC",
    shortTitle: "New Construction",
    description: "Working with builders across Wilmington on new home and commercial roofing projects.",
    icon: "HardHat",
    image: { src: "/images/services/new_construction_pic.webp", alt: "Roofer installing shingles on new construction home" },
    metaTitle: "New Construction Roofing Wilmington NC | Builder Services | Breeze Roofing",
    metaDescription: "New construction roofing in Wilmington NC for builders and homeowners. Quality installation, coastal-rated materials, Fortified Roof options. (910) 665-5277",
    content: `Breeze Roofing works with builders and homeowners across the Wilmington area on new construction roofing projects. Whether you're building a custom home or developing a multi-unit project, we deliver quality installation with materials chosen for coastal NC conditions.

## Builder Services

- **Competitive Volume Pricing** — Fair pricing for multi-home projects
- **Reliable Scheduling** — We show up on time and stay on schedule
- **Code Compliance** — Built to current NC building codes for coastal zones
- **Fortified Roof Options** — Offer your buyers built-in insurance savings
- **Warranty Support** — We stand behind our work with manufacturer warranty registration`,
    faqs: [
      {
        question: "Do you work with custom home builders in Wilmington?",
        answer: "Yes, we work with builders across the Wilmington, Hampstead, and Leland areas on custom and spec homes. Homeowners often ask us about builder partnerships. We offer competitive volume pricing, reliable scheduling, and Fortified Roof options that add real value for new home buyers.",
      },
      {
        question: "Can a new construction roof be Fortified from the start?",
        answer: "Absolutely, and it is the best time to do it. Building Fortified from day one is more cost-effective than retrofitting later. Homeowners often ask us about this when planning a custom build. We coordinate with your builder to integrate Fortified specifications from the design phase.",
      },
    ],
    warranties: [
      "Lifetime workmanship guarantee on all new construction",
      "Manufacturer warranty coverage (25-50 years depending on material)",
      "Builder partnership warranty coordination",
      "Annual courtesy inspection for the first 5 years",
      "Storm damage priority service for warranty customers",
    ],
    timeline: {
      duration: "1-3 days per home",
      steps: [
        { phase: "Pre-Construction Consultation", time: "1-2 hours" },
        { phase: "Material Scheduling", time: "Coordinated with build" },
        { phase: "Deck Inspection & Prep", time: "Same day" },
        { phase: "Roof Installation", time: "1-2 days" },
        { phase: "Final Inspection", time: "Same day" },
      ],
    },
  },
  {
    slug: "fortified-roof",
    title: "IBHS Fortified Roof Contractor — Wilmington, NC",
    shortTitle: "Fortified Roof",
    description: "Certified Fortified Roof installation that qualifies your home for insurance discounts. The smart long-term investment.",
    icon: "Award",
    image: { src: "/images/services/solar_ready_roofing_pic.webp", alt: "Professional roofing crew working on residential roof installation" },
    featured: true,
    metaTitle: "Fortified Roof Contractor Wilmington NC | Save on Insurance | Breeze Roofing",
    metaDescription: "Breeze Roofing is a certified IBHS Fortified Roof contractor in Wilmington NC. A Fortified Roof can cut your homeowner's insurance by 20-40%. Free estimate.",
    content: `## What Is the IBHS Fortified Roof Program?

The IBHS Fortified Home program is a voluntary construction and re-roofing standard developed by the Insurance Institute for Business & Home Safety (IBHS). A Fortified designation means your roof has been built or upgraded to withstand the specific wind and weather risks in your region — in coastal NC, that means hurricane-force winds, wind-driven rain, and storm surge conditions.

There are three Fortified designation levels:

- **Fortified Roof** — Roof-specific upgrade (most common for re-roofs)
- **Fortified Silver** — Roof + windows/doors
- **Fortified Gold** — Whole-home designation

For most Wilmington-area homeowners, a Fortified Roof is the most practical and cost-effective starting point.

## How Much Can You Save on Insurance in NC?

North Carolina sits squarely in Atlantic hurricane territory. Since Hurricane Florence in 2018 and Dorian in 2019, coastal homeowners have faced sharply rising insurance premiums — and some insurers have stopped writing new policies in coastal areas entirely.

A Fortified Roof designation gives NC homeowners leverage. Many major insurers active in NC — including State Farm, Nationwide, and others — offer premium discounts for Fortified-designated homes. Discounts vary by insurer and location, but coastal NC homeowners have reported savings of **20-40% annually** on their homeowner's insurance premium.

## What Makes a Roof "Fortified"?

Breeze Roofing builds Fortified Roofs to IBHS standards, which include:

- Sealed roof deck (secondary water barrier)
- Enhanced roof-to-wall connections
- Hurricane-rated shingles or metal roofing
- Proper drip edge installation
- Fortified-rated underlayment

## We Handle the Certification Paperwork

Once the roof is complete, IBHS-certified inspectors verify the installation. Breeze Roofing coordinates this process and handles the documentation needed to register your designation with IBHS and provide proof to your insurer.

## The Bottom Line

A Fortified Roof costs somewhat more than a standard installation — typically 10-20% more. But when you factor in the insurance savings over 10-20 years, most homeowners find it pays for itself. And you get a better roof.`,
    faqs: [
      {
        question: "How much can a Fortified Roof save on my insurance?",
        answer: "Homeowners often ask us for specific numbers. In coastal NC, Fortified Roof homeowners have reported savings of 20-40% annually on their homeowner's insurance premium. The exact discount depends on your insurer and location, but for many families the savings pay for the upgrade within a few years.",
      },
      {
        question: "What is the difference between Fortified Roof, Silver, and Gold?",
        answer: "Fortified Roof covers the roof system only and is the most common and practical starting point for most homeowners. Silver adds window and door protection, and Gold is a whole-home designation. Homeowners often ask us which level to choose. For re-roofing projects, Fortified Roof gives you the best return on investment.",
      },
      {
        question: "Is Breeze Roofing a certified Fortified installer?",
        answer: "Yes. Brett is IBHS Fortified certified, meaning we are trained and approved to install Fortified Roof systems to IBHS standards. We handle the entire process, including the third-party inspection and the certification paperwork for your insurer.",
      },
    ],
    warranties: [
      "Lifetime workmanship guarantee on all Fortified installations",
      "Manufacturer warranty coverage (30-50 years depending on material)",
      "IBHS Fortified designation documentation for insurance discounts",
      "Annual courtesy inspection for the first 5 years",
      "Storm damage priority service for warranty customers",
      "Insurance certification support",
    ],
    timeline: {
      duration: "3-6 days",
      steps: [
        { phase: "Fortified Design Review", time: "1-2 hours" },
        { phase: "Material Ordering", time: "5-10 days" },
        { phase: "Enhanced Installation", time: "2-4 days" },
        { phase: "IBHS Third-Party Inspection", time: "1-2 days" },
        { phase: "Certification & Documentation", time: "1-2 days" },
      ],
    },
  },
  {
    slug: "maintenance",
    title: "Roof Maintenance — Wilmington, NC",
    shortTitle: "Maintenance",
    description: "Regular maintenance programs to extend your roof's life and catch problems early.",
    icon: "Settings",
    image: { src: "/images/services/maintenance_programs.webp", alt: "Roofing professional with safety harness inspecting shingle roof" },
    metaTitle: "Roof Maintenance Wilmington NC | Preventive Care | Breeze Roofing",
    metaDescription: "Roof maintenance programs in Wilmington NC. Regular inspections, cleaning, and preventive repairs to extend your roof's lifespan. (910) 665-5277",
    content: `The best way to avoid a $15,000 roof replacement is a $300 annual maintenance visit. Breeze Roofing offers maintenance programs designed to catch small problems before they become expensive ones — especially important in coastal NC where salt air, humidity, and storms take a toll.

## What's Included

- **Annual Inspection** — Complete roof assessment with drone photography
- **Debris Removal** — Clear leaves, branches, and buildup from valleys and gutters
- **Minor Repairs** — Fix loose shingles, seal small gaps, replace worn pipe boots
- **Gutter Cleaning** — Clear and flush gutters, check downspout drainage
- **Written Report** — Documented condition with photos and recommendations

## Why Maintenance Matters in Coastal NC

- Salt air corrodes metal components faster than inland areas
- Humidity promotes algae and moss growth on shingles
- Storm debris accumulates in valleys and behind penetrations
- Small wind-lifted shingles become leak points if not caught early`,
    faqs: [
      {
        question: "How much does a roof maintenance program cost?",
        answer: "Homeowners often ask us if maintenance is worth the cost. Our annual maintenance visits start around $300, which is a fraction of the cost of a premature roof replacement. Think of it as an insurance policy for your existing roof. The visit pays for itself by catching small issues before they become expensive repairs.",
      },
      {
        question: "What happens if you find damage during a maintenance visit?",
        answer: "If we find something that needs attention, we document it with photos and give you a clear recommendation and estimate. Minor repairs like resealing a pipe boot or replacing a few shingles are often handled on the spot. Homeowners often ask us if they are committed to repairs by signing up for maintenance. You are not. The decision is always yours.",
      },
    ],
    warranties: [
      "1-year workmanship guarantee on maintenance-related repairs",
      "Material warranty on replaced components",
      "Priority scheduling for maintenance program members",
    ],
    timeline: {
      duration: "2-3 hours per visit",
      steps: [
        { phase: "Complete Roof Inspection", time: "45-60 minutes" },
        { phase: "Debris & Gutter Cleaning", time: "30-45 minutes" },
        { phase: "Minor Repairs", time: "30-60 minutes" },
        { phase: "Documentation & Report", time: "15-30 minutes" },
      ],
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
