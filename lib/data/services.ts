export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  featured?: boolean;
  showEmergency?: boolean;
  metaTitle: string;
  metaDescription: string;
  content: string;
}

export const services: Service[] = [
  {
    slug: "residential-roofing",
    title: "Residential Roofing Contractor — Wilmington, NC",
    shortTitle: "Residential Roofing",
    description: "Complete roof installation and replacement for homes across Wilmington and the Cape Fear coast.",
    icon: "Home",
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
  },
  {
    slug: "commercial-roofing",
    title: "Commercial Roofing Contractor — Wilmington, NC",
    shortTitle: "Commercial Roofing",
    description: "Flat and low-slope commercial roofing solutions for businesses across the Wilmington area.",
    icon: "Building2",
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
  },
  {
    slug: "roof-replacement",
    title: "Roof Replacement — Wilmington, NC",
    shortTitle: "Roof Replacement",
    description: "Expert roof replacement for Wilmington homes with materials built for coastal conditions.",
    icon: "RefreshCcw",
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
  },
  {
    slug: "emergency-repair",
    title: "Emergency Roof Repair — Wilmington, NC",
    shortTitle: "Emergency Repair",
    description: "24/7 emergency response. Call Brett directly at (910) 665-5277 — he picks up.",
    icon: "Clock",
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
  },
  {
    slug: "storm-damage",
    title: "Storm Damage Roof Repair — Wilmington, NC",
    shortTitle: "Storm Damage",
    description: "Fast assessment and repair after hurricanes and severe weather. We work with your insurance company.",
    icon: "CloudLightning",
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
  },
  {
    slug: "roof-inspection",
    title: "Roof Inspection — Wilmington, NC",
    shortTitle: "Roof Inspection",
    description: "Free drone-assisted inspections to give you the full picture before you spend a dollar.",
    icon: "Search",
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
  },
  {
    slug: "new-construction",
    title: "New Construction Roofing — Wilmington, NC",
    shortTitle: "New Construction",
    description: "Working with builders across Wilmington on new home and commercial roofing projects.",
    icon: "HardHat",
    metaTitle: "New Construction Roofing Wilmington NC | Builder Services | Breeze Roofing",
    metaDescription: "New construction roofing in Wilmington NC for builders and homeowners. Quality installation, coastal-rated materials, Fortified Roof options. (910) 665-5277",
    content: `Breeze Roofing works with builders and homeowners across the Wilmington area on new construction roofing projects. Whether you're building a custom home or developing a multi-unit project, we deliver quality installation with materials chosen for coastal NC conditions.

## Builder Services

- **Competitive Volume Pricing** — Fair pricing for multi-home projects
- **Reliable Scheduling** — We show up on time and stay on schedule
- **Code Compliance** — Built to current NC building codes for coastal zones
- **Fortified Roof Options** — Offer your buyers built-in insurance savings
- **Warranty Support** — We stand behind our work with manufacturer warranty registration`,
  },
  {
    slug: "fortified-roof",
    title: "IBHS Fortified Roof Contractor — Wilmington, NC",
    shortTitle: "Fortified Roof",
    description: "Certified Fortified Roof installation that qualifies your home for insurance discounts. The smart long-term investment.",
    icon: "Award",
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
  },
  {
    slug: "maintenance",
    title: "Roof Maintenance — Wilmington, NC",
    shortTitle: "Maintenance",
    description: "Regular maintenance programs to extend your roof's life and catch problems early.",
    icon: "Settings",
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
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
