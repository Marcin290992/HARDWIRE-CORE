export interface ServiceSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
  highlight?: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  description: string;
  lead: string;
  time: string;
  price: string;
  guarantee: string;
  whatIsIt?: {
    heading?: string;
    paragraphs: string[];
    checklist?: string[];
  };
  sections: ServiceSection[];
  related: string[];
  extended?: {
    whatIs: string[];
    howItWorks: string[];
    whenYouNeedIt: string[];
    faq: { q: string; a: string }[];
  };
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'laptop-repairs': {
    slug: 'laptop-repairs',
    title: 'Laptop Repairs',
    description: 'Laptop repair service in Stanwell TW19 with same-day diagnostics and clear pricing from £49.',
    lead: 'From cracked screens to charging faults, I repair laptops daily for customers in Stanwell and nearby Surrey areas.',
    time: 'Same day',
    price: 'From £49',
    guarantee: 'No fix, no fee',
    sections: [
      {
        heading: 'What Is Included',
        paragraphs: ['I handle most common and advanced laptop faults in one workflow, starting with a proper diagnosis before any parts are fitted.'],
        list: ['Screen replacement and display cable faults', 'Keyboard replacement and key matrix faults', 'Charging port and power path repair', 'Motherboard diagnosis and component-level checks', 'RAM and storage fault isolation'],
      },
      {
        heading: 'What To Expect',
        paragraphs: ['You get a plain-English explanation of the fault, a quote, and realistic turnaround before repair starts.', 'I test the machine after repair for thermals, charging stability, and system reliability before handover.'],
      },
      {
        heading: 'Common Symptoms',
        paragraphs: ['If your laptop is overheating, flickering, not charging, or randomly shutting down, those are usually repairable issues.'],
        highlight: 'Most laptop jobs are completed the same day when parts are in stock.',
      },
    ],
    related: ['screen-replacement', 'keyboard-replacement', 'charging-port-repair', 'motherboard-diagnosis'],
    extended: {
      whatIs: [
        "Laptop repair covers any fault that stops your machine from working correctly — from physical damage like failed ports and screens to software issues, storage failure, and overheating. I work on most major Windows laptop brands including HP, Dell, Lenovo, ASUS, and Acer.",
        "The service always starts with a proper diagnosis before any part is ordered. I test each relevant system area so you only pay for what actually needs fixing, not a guesswork approach.",
        "Most jobs are completed the same day when parts are available. I keep you updated as soon as the fault is confirmed and again when the machine is ready to collect.",
      ],
      howItWorks: [
        "You drop the laptop off and walk me through what you are experiencing. I then run targeted hardware and software checks covering power behavior, thermals, drive health, and anything else relevant to your symptoms.",
        "Once the fault is confirmed, you get a plain-English explanation and a fixed quote before any work starts. If the issue turns out to be minor, the cost reflects that.",
        "After the repair, I run the machine under normal load to confirm stability. You collect it knowing the job has been properly tested, not just switched on and handed back.",
      ],
      whenYouNeedIt: [
        "If your laptop is not turning on, the first thing I check is the charger and battery before anything else. Most no-power faults have a straightforward cause that does not need board-level work.",
        "Overheating, random shutdowns, and performance drops are commonly caused by dust buildup or dried thermal paste rather than failed hardware. Flickering display, no image at boot, and keyboard faults can all have multiple causes that diagnosis narrows down quickly.",
        "If you are unsure what the problem is, bring it in for a free look. You will leave knowing exactly what is wrong and what a fix would cost, with no obligation to proceed.",
      ],
      faq: [
        { q: "Do you repair all laptop brands?", a: "I work on most Windows laptops from HP, Dell, Lenovo, ASUS, Acer, Samsung, and Toshiba. MacBook hardware repairs are not currently offered." },
        { q: "How long does a repair usually take?", a: "Most common faults are completed same day if parts are in stock. Motherboard work and advanced diagnostics typically take one to two days. I give you a realistic estimate before starting." },
        { q: "What if the repair is not successful?", a: "If I cannot fix it, you do not pay. That is the no-fix, no-fee promise applied consistently — not a conditional footnote." },
        { q: "Should I back up my data before bringing it in?", a: "Yes, if the machine is accessible. I work carefully around your data, but a backup before any repair is always the right precaution." },
      ],
    },
  },
  'screen-replacement': {
    slug: 'screen-replacement',
    title: 'Screen Replacement',
    description: 'Laptop and monitor screen replacement in Stanwell TW19 using quality compatible panels from £69.',
    lead: 'Broken, flickering, or black display? I confirm whether the fault is panel, cable, or GPU before replacing anything.',
    time: 'Same day',
    price: 'From £69',
    guarantee: 'No fix, no fee',
    sections: [
      {
        heading: 'Panel Types And Quality',
        paragraphs: ['I source TN and IPS replacements based on your model and usage, with focus on brightness, color, and longevity.'],
        list: ['Correct panel type and connector pinout', 'Backlight and refresh-rate compatibility checks', 'Careful bezel and hinge handling during fitting'],
      },
      {
        heading: 'Screen Or GPU?',
        paragraphs: ['I test external display output and panel behavior first, so you know whether this is a screen issue or a graphics fault.'],
      },
      {
        heading: 'After Replacement',
        paragraphs: ['The display is calibrated for clarity and tested for dead pixels, flicker, and hinge strain before collection.'],
        highlight: 'You get a clear recommendation before parts are ordered, so there are no surprise costs.',
      },
    ],
    related: ['laptop-repairs', 'motherboard-diagnosis', 'hardware-upgrades'],
    extended: {
      whatIs: [
        "Screen replacement is the service of removing a faulty or damaged display panel and fitting a correct compatible replacement. I work on laptop screens including TN and IPS panels across most major brands.",
        "Before anything is ordered, I run an external display test and check the display cable and backlight behavior. This confirms whether the fault is in the panel itself or coming from the graphics hardware or cable.",
        "Correct panel matching matters — brightness, resolution, connector type, and refresh rate all need to align with your original spec. I source panels that match your machine properly, not whatever is cheapest.",
      ],
      howItWorks: [
        "I connect your laptop to an external monitor to check GPU output. If that is clear, the fault is isolated to the screen side. I then inspect the display cable and panel response before recommending replacement.",
        "Once replacement is confirmed as the right fix, I source the correct part by model and panel type. Fitting is done carefully to avoid bezel, hinge, and cable damage.",
        "After fitting, the new screen is tested for dead pixels, backlight uniformity, color, and hinge stability. You collect a machine that has been properly checked, not just switched on.",
      ],
      whenYouNeedIt: [
        "The clearest signs are a cracked or shattered display, a screen that is completely black with the machine otherwise running, or a flickering, dim, or partially lit panel.",
        "Lines running across the screen, color banding, and image distortion are also panel faults in most cases, though I verify this before replacing anything.",
        "If only part of the screen shows an image, or if pressing on the lid changes what is visible, that usually points to a cable or panel issue that I can assess quickly.",
      ],
      faq: [
        { q: "Can you match the original screen quality?", a: "I source panels by model number and display spec, so brightness, resolution, and color should match your original. I will tell you in advance if only a lower-spec panel is available." },
        { q: "Do you test before fitting a new panel?", a: "Yes. I always test external output first to make sure the GPU and cable path are working before ordering or fitting a replacement screen." },
        { q: "What if the screen is cracked but the laptop still works?", a: "A cracked panel with visible image still works normally behind the damage. Replacement is recommended before the cracks spread to the backlight layer and cause a full blackout." },
        { q: "How long does screen replacement take?", a: "Most replacements are done the same day once the part is confirmed. If the panel needs to be ordered, I will give you a lead time upfront." },
      ],
    },
  },
  'keyboard-replacement': {
    slug: 'keyboard-replacement',
    title: 'Keyboard Replacement',
    description: 'Laptop keyboard replacement and key failure repair in Stanwell TW19 from £45.',
    lead: 'Missing keys, sticky keys, or liquid spill damage can usually be fixed quickly with the right keyboard assembly.',
    time: 'Same day',
    price: 'From £45',
    guarantee: 'No fix, no fee',
    sections: [
      {
        heading: 'Keyboards I Replace',
        paragraphs: ['I replace both top-case keyboards and removable units, depending on your laptop design.'],
        list: ['Single key and keycap inspection', 'Full keyboard assembly replacement', 'Backlight keyboard compatibility checks'],
      },
      {
        heading: 'Spillage Damage',
        paragraphs: ['Liquid damage is often not limited to keys. I inspect connector areas and nearby board sections to avoid repeat failure.'],
      },
      {
        heading: 'Partial Vs Full Repair',
        paragraphs: ['If only a few keys fail, I advise whether a targeted fix is reliable or if full replacement is the smarter long-term option.'],
        highlight: 'Fast turnaround with proper testing so every key is verified before handover.',
      },
    ],
    related: ['laptop-repairs', 'charging-port-repair', 'motherboard-diagnosis'],
    extended: {
      whatIs: [
        "Keyboard replacement is the process of removing a faulty or damaged keyboard assembly and fitting a correct compatible unit. I work on both removable keyboard decks and integrated top-case designs, depending on your laptop model.",
        "Not all keyboard faults need a full replacement. I check the key matrix behavior and connector state first to see whether targeted repair is an option before recommending a full assembly.",
        "Parts are sourced by exact laptop model to ensure proper fit, backlight compatibility, and correct key layout for your region.",
      ],
      howItWorks: [
        "I start by testing key registration across the full keyboard to map which areas are affected. I also inspect the connector ribbon and any visible liquid residue if a spill is involved.",
        "If full replacement is the right fix, I source the correct unit and fit it with care to avoid damage to surrounding components like the touchpad cable and display hinge.",
        "Every key on the new keyboard is tested after fitting, including any backlight function. You collect a machine that has been fully verified, not just assembled.",
      ],
      whenYouNeedIt: [
        "The most common signs are multiple keys not registering, keys that stick or feel mushy after a spill, or keys that have physically broken off and cannot be reattached.",
        "Backlight failure limited to the keyboard and ghost key presses — where inputs appear without touching the keys — can also point to a keyboard fault that replacement resolves.",
        "Liquid spills need attention quickly. Even if keys appear to work, moisture near the connector area can cause progressive failures over days. Early inspection avoids the fault spreading to the motherboard.",
      ],
      faq: [
        { q: "Can you just replace one key instead of the whole keyboard?", a: "Sometimes yes. If it is a keycap or single mechanism failure, targeted repair may be an option. If the matrix is damaged or multiple keys are affected, full replacement is the more reliable path." },
        { q: "My keys work but feel wrong after a spill — is that fixable?", a: "Sticky or slow keys after a spill are often caused by residue under the keycaps. I inspect and clean the affected area and advise on whether replacement is needed." },
        { q: "Will the new keyboard have a backlight if my original did?", a: "I check backlight compatibility when sourcing the replacement. If your original had a backlight, the replacement will too, where available for your model." },
        { q: "How long does keyboard replacement take?", a: "Most jobs are completed the same day once the correct part is available. I will let you know the lead time before any work is agreed." },
      ],
    },
  },
  'charging-port-repair': {
    slug: 'charging-port-repair',
    title: 'Charging Port Repair',
    description: 'Laptop charging port diagnosis and repair in Stanwell TW19, including USB-C and barrel jack faults, from £49.',
    lead: 'If your charger only works at an angle or stops intermittently, the charging port or power circuit is usually the cause.',
    time: 'Same day',
    price: 'From £49',
    guarantee: 'No fix, no fee',
    sections: [
      {
        heading: 'USB-C And Barrel Ports',
        paragraphs: ['I work on both modern USB-C charging ports and traditional barrel connectors across major laptop brands.'],
        list: ['Loose socket and worn pin diagnosis', 'Damaged solder pad and trace checks', 'DC-in board and charger validation'],
      },
      {
        heading: 'Repair Or Replace',
        paragraphs: ['Some ports can be re-soldered safely, while others need full replacement. I recommend the method that lasts.'],
      },
      {
        heading: 'Power Path Testing',
        paragraphs: ['After repair, charging behavior is tested under load so you know the fix is stable, not temporary.'],
        highlight: 'I do not replace ports blindly - diagnosis comes first to avoid wasted money.',
      },
    ],
    related: ['laptop-repairs', 'motherboard-diagnosis', 'screen-replacement'],
    extended: {
      whatIs: [
        "Charging port repair covers faults in the physical connector and the power input path of a laptop. I work on USB-C charging ports, barrel jack connectors, and the associated DC-in board where fitted.",
        "The charge port is one of the more commonly damaged components on laptops, particularly on machines used while plugged in. Worn contacts, bent pins, and broken solder joints are the usual causes.",
        "Repair options depend on the design of your specific laptop. Some ports can be re-soldered directly, others need a replacement board, and some are integrated into the motherboard which changes the approach.",
      ],
      howItWorks: [
        "I start by testing the charger itself and the power rail behavior to rule out a faulty adapter before touching the port. A non-charging laptop is not always a port problem.",
        "If the port is the cause, I inspect it under magnification for wear, bent pins, or solder joint failure. I then advise on whether soldering, board replacement, or a motherboard-level repair is the right path.",
        "After repair, charging is tested under load — not just a quick check that the LED comes on. I confirm stable charging behavior before the machine is returned.",
      ],
      whenYouNeedIt: [
        "The clearest sign is a charger that only works when held at a specific angle, or one that works intermittently and stops when the laptop is moved.",
        "No charging at all, combined with a known-good charger, usually means the port or power path is at fault. A sparking or burning smell near the port is a sign to stop using it immediately.",
        "If your laptop charges from some USB-C ports but not others, that can indicate a port fault specific to one socket rather than a board-level issue.",
      ],
      faq: [
        { q: "Can the port be repaired rather than replaced?", a: "Sometimes yes. If the solder joint has failed but the port itself is intact, re-soldering can be a clean and lasting fix. I advise based on what I find rather than defaulting to full replacement." },
        { q: "My charger works sometimes — is that a port problem?", a: "Intermittent charging that depends on position or angle is almost always a port or solder joint fault. I can confirm the source quickly after ruling out the adapter." },
        { q: "Does charging port repair risk the rest of the board?", a: "Work near the port area is done carefully under magnification. I only proceed when I am confident the surrounding components are safe to work around." },
        { q: "How long does charging port repair take?", a: "Most jobs are completed the same day. If the DC-in board needs to be sourced, I will give you a lead time and confirm before starting." },
      ],
    },
  },
  'motherboard-diagnosis': {
    slug: 'motherboard-diagnosis',
    title: 'Motherboard Diagnosis',
    description: 'Component-level motherboard diagnostics for laptops and desktops in Stanwell TW19 from £39.',
    lead: 'No POST, no power, random shutdowns, or burnt components - I trace board-level faults before recommending repair or replacement.',
    time: '1–2 days',
    price: 'From £39',
    guarantee: 'No fix, no fee',
    sections: [
      {
        heading: 'Failure Signs',
        paragraphs: ['Typical board faults include no POST, no backlight with fan spin, unstable charging, and intermittent boot loops.'],
      },
      {
        heading: 'Diagnosis Process',
        paragraphs: ['I test power rails, short circuits, BIOS behavior, and key controller areas to isolate the real point of failure.'],
        list: ['Input voltage and regulator checks', 'Board-level thermal and continuity tests', 'Firmware and BIOS recovery where appropriate'],
      },
      {
        heading: 'Repair Vs Replace Decision',
        paragraphs: ['You get an honest cost-benefit recommendation based on reliability, part availability, and total value of the device.'],
        highlight: 'If repair is not sensible, I will tell you directly before any extra cost.',
      },
    ],
    related: ['laptop-repairs', 'desktop-repairs', 'charging-port-repair'],
    extended: {
      whatIs: [
        "Motherboard diagnosis is a structured process of identifying exactly which part of the logic board has failed and why. It covers power delivery circuits, charging controllers, BIOS behavior, and component-level faults.",
        "I do not swap components as a guessing strategy. The diagnosis maps out what is working and what is not, so you get an accurate picture of what a repair would actually involve.",
        "This service is for machines with serious faults: not turning on at all, immediate shutdown on power, no backlight with fan spin, or recurring failures that hardware swaps have not resolved.",
      ],
      howItWorks: [
        "I start by checking input voltage, power rail behavior, and short-circuit indicators while the machine is unplugged. This gives an early map of which power domain has failed without risking further damage.",
        "From there I check BIOS state, charging IC behavior, key controller activity, and thermal sensor response depending on what the fault pattern points toward. Each step narrows the fault to a specific area.",
        "You receive a clear explanation of the finding and an honest recommendation — whether that is a targeted repair, component replacement, or a cost-benefit assessment if the repair is not economically sensible.",
      ],
      whenYouNeedIt: [
        "If your laptop shows no signs of life despite a working charger and confirmed battery, board-level diagnosis is the logical next step after ruling out simpler causes.",
        "Machines that power on but fail before the login screen, produce beep codes, or shut off within seconds often have a board fault that component swaps will not fix.",
        "Repeated failures after previous repairs, burning smells, or visible damage on the board are all reasons to bring the machine in for a proper assessment before spending more money on parts.",
      ],
      faq: [
        { q: "Is motherboard diagnosis worth the cost?", a: "For most laptops a few years old, diagnosis is the right first step before committing to a board or full machine replacement. The assessment is kept affordable because the goal is to give you real information, not generate repair work." },
        { q: "Can you repair the board as well as diagnose it?", a: "Often yes. If the fault is within scope — such as a power path repair, capacitor replacement, or chip re-ball — I can quote for that alongside the diagnosis." },
        { q: "What if the board is beyond repair?", a: "I will tell you clearly. If replacement or insurance is the better path, you will hear that from me directly rather than being pushed toward an unviable repair." },
        { q: "Do you work on desktop motherboards too?", a: "Yes. Desktop board diagnosis follows the same structured approach and is available alongside the laptop service." },
      ],
    },
  },
  'desktop-repairs': {
    slug: 'desktop-repairs',
    title: 'Desktop PC Repairs',
    description: 'Desktop PC diagnostics and repair in Stanwell TW19, including no display and boot issues, from £49.',
    lead: 'Custom builds and office desktops are repaired with structured component testing and clear repair options.',
    time: '1–2 days',
    price: 'From £49',
    guarantee: 'No fix, no fee',
    sections: [
      {
        heading: 'Typical Faults',
        paragraphs: ['I handle power supply failures, no display, unstable boots, crash loops, and thermal shutdown issues.'],
        list: ['PSU health and voltage testing', 'GPU and RAM isolation', 'Motherboard and storage diagnostics'],
      },
      {
        heading: 'Component Testing',
        paragraphs: ['Each major part is tested in sequence to avoid guesswork and unnecessary replacements.'],
      },
      {
        heading: 'After Repair',
        paragraphs: ['Systems are stress-tested for temperature, stability, and boot reliability before collection.'],
        highlight: 'You receive a practical explanation of what failed and how to prevent repeat issues.',
      },
    ],
    related: ['hardware-upgrades', 'deep-cleaning', 'pc-build', 'motherboard-diagnosis'],
    extended: {
      whatIs: [
        "Desktop PC repair covers the full range of hardware faults in tower, mini-ITX, and all-in-one systems — from power supply failures and no-display faults to unstable boots and component failures.",
        "I work on both custom-built systems and branded office desktops. Whether the machine was assembled from parts or came from a manufacturer, the diagnostic approach is the same: structured and systematic.",
        "The service includes component-level testing, not just part swaps. I identify the actual failure before recommending any replacement.",
      ],
      howItWorks: [
        "I start with the power supply and check that correct voltages reach the motherboard and components. Many desktop faults trace back to PSU behavior that is hard to catch without proper testing.",
        "From there I check POST behavior, RAM seating, GPU output, and storage state. If the machine boots partially, I follow the error pattern to isolate the cause.",
        "After repair, systems are stress-tested for temperature, stability, and boot reliability before collection. A machine that passes casual use but fails under load is not a finished repair.",
      ],
      whenYouNeedIt: [
        "A desktop that powers on but gives no display is one of the most common faults I see. It can be RAM, GPU, motherboard, or monitor — and proper testing is the only way to confirm which.",
        "Crash loops, random restarts, and Windows errors under load are often storage, RAM, or PSU instability. Running the machine until it fails tells me more than a list of symptoms.",
        "If the machine powers on but immediately shuts off, makes unusual noises, or smells of burning, stop using it and bring it in. Running a failing PSU risks other components.",
      ],
      faq: [
        { q: "Do you work on custom-built PCs as well as off-the-shelf ones?", a: "Yes. Custom builds and branded desktops are both handled. I am familiar with a wide range of hardware combinations and can assess either without issue." },
        { q: "Can you tell me which component failed without replacing everything?", a: "That is exactly the point of structured diagnosis. I test methodically so the fault is confirmed before any parts are ordered or replaced." },
        { q: "How long does a desktop repair take?", a: "Most repairs are completed within one to two days depending on parts availability. If a part needs to be ordered, I will give you a lead time before starting." },
        { q: "What if multiple components have failed?", a: "I will tell you the full picture. If replacing several parts pushes the repair cost beyond the machine's value, I will say so directly and discuss options." },
      ],
    },
  },
  'hardware-upgrades': {
    slug: 'hardware-upgrades',
    title: 'Hardware Upgrades',
    description: 'RAM, SSD, and GPU upgrades in Stanwell TW19 with compatibility checks from £35.',
    lead: 'I upgrade your machine with the right parts for your workload, not random components that may cause instability.',
    time: 'Same day',
    price: 'From £35',
    guarantee: 'No fix, no fee',
    sections: [
      {
        heading: 'Upgrade Options',
        paragraphs: ['Most performance gains come from smart RAM and SSD upgrades, with GPU upgrades where power and cooling allow.'],
        list: ['RAM capacity and speed matching', 'SATA/NVMe SSD recommendations', 'GPU fitment and power draw checks'],
      },
      {
        heading: 'Compatibility First',
        paragraphs: ['I verify motherboard support, BIOS limits, and physical clearance before ordering any part.'],
      },
      {
        heading: 'Installation And Testing',
        paragraphs: ['After upgrade, I run hardware checks and stability tests so performance gains are real and reliable.'],
        highlight: 'Upgrades are only recommended when they make measurable sense for your device.',
      },
    ],
    related: ['desktop-repairs', 'ssd-upgrade', 'speed-boost'],
    extended: {
      whatIs: [
        "Hardware upgrades are targeted improvements to your existing machine — most commonly RAM, SSD, or GPU — that increase real-world performance without replacing the whole system.",
        "The right upgrade depends on what is currently holding your machine back. I identify the bottleneck first so the money spent actually changes how the machine feels to use.",
        "Compatibility checks are part of the service. Motherboard limits, BIOS support, physical clearance, and power requirements are all verified before any part is recommended.",
      ],
      howItWorks: [
        "I review your current hardware configuration and discuss how you use the machine. This tells me whether the bottleneck is the drive, the RAM, the GPU, or something else entirely.",
        "Once the right upgrade path is confirmed, I source parts with proven compatibility and reliability. Fitting is done cleanly with all existing components reassembled correctly.",
        "After the upgrade, I run benchmarks and stability tests to confirm the improvement is real and the system is stable. You know what changed and why before you collect.",
      ],
      whenYouNeedIt: [
        "If your machine is slow to open apps, takes a long time to boot, or struggles with tasks it handled fine a few years ago, an upgrade often fixes this at a fraction of a new machine cost.",
        "Frequent application freezes during multitasking point to insufficient RAM. Slow boot and sluggish file loading point to storage. Both are upgrades that make a noticeable difference in daily use.",
        "Before buying a new machine, it is worth knowing whether an upgrade would solve the problem. I can assess your current system and give you an honest comparison.",
      ],
      faq: [
        { q: "How do I know if my machine can be upgraded?", a: "I check this as part of the service. Some laptops have soldered RAM or a single M.2 slot already filled, which limits options. I will tell you exactly what is possible before any purchase is made." },
        { q: "Is an SSD upgrade worth it on an older machine?", a: "In most cases yes. An SSD is the single biggest real-world performance improvement for systems still running on a hard drive, and the difference is immediately noticeable." },
        { q: "Do you install the operating system after an SSD upgrade?", a: "If a fresh OS install is needed alongside the upgrade, that can be included. I will confirm options with you before starting." },
        { q: "Can you upgrade a laptop as well as a desktop?", a: "Yes. Laptop upgrades are available for RAM and storage where the design allows. I check slot access and compatibility before recommending anything." },
      ],
    },
  },
  'deep-cleaning': {
    slug: 'deep-cleaning',
    title: 'Deep Cleaning',
    description: 'Internal deep cleaning and thermal service for laptops and desktops in Stanwell TW19 from £39.',
    lead: 'Overheating, fan noise, and performance drops are often caused by dust and old thermal paste, not dead hardware.',
    time: 'Same day',
    price: 'From £39',
    guarantee: 'No fix, no fee',
    sections: [
      {
        heading: 'Why Systems Overheat',
        paragraphs: ['Dust buildup blocks airflow, old thermal compound dries out, and worn fans reduce cooling efficiency.'],
      },
      {
        heading: 'What I Do',
        paragraphs: ['I disassemble safely, clean cooling paths, replace thermal paste, and inspect fan condition.'],
        list: ['Heatsink and fan dust removal', 'Thermal compound replacement', 'Cooling profile checks under load'],
      },
      {
        heading: 'Expected Result',
        paragraphs: ['You should see lower temperatures, quieter fans, and more stable performance in heavy tasks.'],
        highlight: 'A thermal service is one of the most cost-effective ways to extend hardware life.',
      },
    ],
    related: ['desktop-repairs', 'speed-boost', 'laptop-repairs'],
    extended: {
      whatIs: [
        "Deep cleaning is a full internal service that removes dust buildup from the cooling system, replaces dried thermal compound, and inspects fan condition to bring temperatures back to an acceptable range.",
        "Over time, dust accumulates in heatsink fins, fan blades, and airflow channels. Combined with thermal paste that has dried and cracked, the result is a machine that throttles under load, shuts down unexpectedly, or runs hot doing simple tasks.",
        "This service does not require a fault. Regular thermal maintenance every couple of years is one of the most cost-effective ways to keep hardware running reliably.",
      ],
      howItWorks: [
        "The machine is disassembled to access the cooling system. Dust is removed from heatsink fins, fan blades, vents, and nearby board areas using appropriate tools and compressed air.",
        "Old thermal paste is cleaned from the CPU, GPU, and heatsink contact surfaces, and quality compound is applied in the correct amount for the hardware.",
        "The machine is reassembled and run under load to confirm temperatures have dropped. If a fan needs replacement during the process, I will advise before proceeding.",
      ],
      whenYouNeedIt: [
        "The most common signs are loud fan noise at moderate workloads, excessive heat through the chassis or keyboard area, and slowdowns or shutdowns during video or demanding tasks.",
        "If the fan runs at full speed even during light use, or if the machine is noticeably hotter than it used to be doing the same tasks, thermal compound degradation is a likely cause.",
        "Desktop systems that have not been cleaned in several years often have severe heatsink blockages that cannot be cleared from the outside. A proper service removes this without risking component damage.",
      ],
      faq: [
        { q: "Will deep cleaning definitely fix my overheating?", a: "In most cases yes. Dust and thermal paste are the cause of overheating in the large majority of machines I see. If there is an additional fault — such as a failing fan — I will find that during the service and advise separately." },
        { q: "How often should a laptop be deep cleaned?", a: "Every one to two years for machines used daily, or more often in dusty environments or if used on soft surfaces that block the vents." },
        { q: "Does deep cleaning void the warranty?", a: "If your machine is still under manufacturer warranty, disassembly may affect it. Check your warranty terms before booking if that applies to you." },
        { q: "Can you replace the fan during the same service?", a: "Yes. If the fan is worn or failing when I have the machine open, replacement can be included in the same visit with a separate quote before proceeding." },
      ],
    },
  },
  'pc-build': {
    slug: 'pc-build',
    title: 'Custom PC Build',
    description: 'Custom PC build service in Stanwell TW19 including part planning, build, and testing. Price on application.',
    lead: 'From gaming rigs to workstation setups, I build systems around your real needs, budget, and upgrade path.',
    time: '2–3 days',
    price: 'POA',
    guarantee: 'No fix, no fee',
    sections: [
      {
        heading: 'Consultation And Planning',
        paragraphs: ['We start with workload and budget, then choose parts that balance performance, cooling, and reliability.'],
      },
      {
        heading: 'Build Process',
        paragraphs: ['Cable management, airflow layout, BIOS setup, and full boot testing are included as standard.'],
        list: ['Part sourcing guidance', 'System assembly and wiring', 'Burn-in tests and thermal validation'],
      },
      {
        heading: 'Aftercare',
        paragraphs: ['I provide handover notes and practical upgrade recommendations for future expansion.'],
        highlight: 'Every build is tested before delivery, not just assembled and switched on.',
      },
    ],
    related: ['desktop-repairs', 'hardware-upgrades', 'os-installation'],
    extended: {
      whatIs: [
        "Custom PC build is a service that covers planning, sourcing guidance, assembly, and full testing of a new system built around your specific workload and budget.",
        "I do not build from a generic parts list. We start with how you actually use a computer — whether that is gaming, video editing, office work, or all three — and choose parts that make sense for that task without wasting budget on components that will not make a difference.",
        "The service includes cable management, BIOS configuration, OS installation, and a full burn-in test. You receive a working and tested system, not just an assembled one.",
      ],
      howItWorks: [
        "We start with a conversation about workload, budget, and future upgrade plans. From there I put together a parts list with options and explain the trade-offs before any purchase.",
        "Assembly is done methodically — correct RAM slots, airflow-aware case layout, proper fan headers, and cable routing that does not restrict airflow or create maintenance difficulties.",
        "Once assembled, the system goes through POST checks, BIOS configuration, OS installation, and a stability test under real workload. Temperatures are confirmed before delivery.",
      ],
      whenYouNeedIt: [
        "A custom build makes sense when retail systems do not match your needs, when upgrade options on a current machine are exhausted, or when the cost of a comparable pre-built is significantly higher.",
        "Gaming builds, video editing workstations, and small office systems all have different priorities. A pre-built machine is a compromise — a custom build is optimized for your actual use.",
        "If you have parts already purchased and just need assembly and testing, that is also available. You do not need to start from scratch to use this service.",
      ],
      faq: [
        { q: "Do I need to buy the parts myself?", a: "I can guide you on what to buy and where, or you can bring parts you have already purchased. Either way works. I check compatibility before anything is finalised." },
        { q: "What if a part is faulty on arrival?", a: "New components occasionally arrive faulty. Testing during the build catches this early and I will help coordinate replacement before the build is handed over." },
        { q: "Is OS installation included?", a: "Yes. Windows installation, driver setup, and initial updates are part of the service. If you have a specific Linux preference I can accommodate that." },
        { q: "How long does a custom build take?", a: "Once parts are available, assembly and testing takes two to three days. Rush builds are sometimes possible — ask when booking." },
      ],
    },
  },
  'virus-removal': {
    slug: 'virus-removal',
    title: 'Virus & Malware Removal',
    description: 'Professional malware and virus removal in Stanwell TW19 with data-safe cleanup from £49.',
    lead: 'If your machine is slow, flooded with popups, or behaving strangely, I perform a full cleanup and security reset.',
    time: 'Same day',
    price: 'From £49',
    guarantee: 'No fix, no fee',
    sections: [
      {
        heading: 'Threats Covered',
        paragraphs: ['I remove spyware, adware, hijackers, trojans, and persistent startup threats.'],
        list: ['Deep scan and persistence checks', 'Browser cleanup and extension reset', 'Startup and scheduled task cleanup'],
      },
      {
        heading: 'What Gets Reset',
        paragraphs: ['Browser settings, suspicious policies, and compromised startup items are restored to safe defaults.'],
      },
      {
        heading: 'Prevention Steps',
        paragraphs: ['You get practical guidance on avoiding repeat infections and securing your machine going forward.'],
        highlight: 'Data-safe process focused on clean system recovery without unnecessary file loss.',
      },
    ],
    related: ['software-troubleshooting', 'os-installation', 'speed-boost'],
    extended: {
      whatIs: [
        "Virus and malware removal is a thorough cleanup of infected systems — covering adware, spyware, browser hijackers, trojans, and persistent startup threats that standard antivirus may miss or fail to remove cleanly.",
        "The goal is not just removing detected files. I check startup entries, scheduled tasks, browser extensions, installed programs, and system policies to make sure nothing is left behind.",
        "Data is preserved throughout. The focus is on restoring clean system behavior without wiping files or reinstalling the OS unless that is genuinely the best path.",
      ],
      howItWorks: [
        "I run deep scans using multiple tools, then review startup, browser, and policy settings manually. Automated scans catch most threats, but persistence mechanisms hiding in legitimate system areas need hands-on inspection.",
        "Removed items are reviewed before deletion where practical, and browser settings are restored to safe defaults. Compromised accounts and saved passwords should be treated as exposed after an infection.",
        "After cleanup, I run a follow-up check to confirm nothing remains active. You also get practical guidance on what caused the infection and how to avoid a repeat.",
      ],
      whenYouNeedIt: [
        "Common signs are excessive popups, browser redirects, new toolbars you did not install, and system slowdowns that appeared suddenly without a clear hardware cause.",
        "Ransomware warnings, disabled task manager or antivirus, and applications you do not recognise running in the background are more serious indicators that need immediate attention.",
        "If your machine was used for online banking or shopping during an infection, password changes and account checks are advisable after cleanup — I will point you toward the right steps.",
      ],
      faq: [
        { q: "Can you remove ransomware?", a: "I can remove the ransomware software and clean the system. File decryption depends on the strain — some have known decryption tools, others do not. I will give you an honest answer about what is recoverable." },
        { q: "Will my files be safe during cleanup?", a: "Yes. The cleanup process targets malicious files and system settings, not your documents or personal data. I am careful about what is removed." },
        { q: "Should I just reinstall Windows instead?", a: "A clean OS install is sometimes the most efficient solution, particularly for severe infections. I will advise you on whether cleanup or reinstall is the better option based on what I find." },
        { q: "How did I get infected?", a: "I explain this after every cleanup so you understand the likely entry point — whether that was a downloaded file, a fake update prompt, or a compromised website." },
      ],
    },
  },
  'os-installation': {
    slug: 'os-installation',
    title: 'OS Installation',
    description: 'Windows 11 and Linux installation service in Stanwell TW19, including drivers and updates, from £59.',
    lead: 'Need a clean operating system setup? I install, configure, and optimize your system with proper drivers and updates.',
    time: 'Same day',
    price: 'From £59',
    guarantee: 'No fix, no fee',
    sections: [
      {
        heading: 'Windows And Linux Options',
        paragraphs: ['I install current Windows versions and practical Linux distributions depending on your use case.'],
      },
      {
        heading: 'Before Installation',
        paragraphs: ['Backup planning happens first so important files are protected before any reinstall starts.'],
        list: ['Data backup check', 'Partition and storage planning', 'License and activation validation'],
      },
      {
        heading: 'After Setup',
        paragraphs: ['Drivers, updates, and essential system settings are finalized for stable day-one use.'],
        highlight: 'You leave with a clean, updated system ready for work or gaming.',
      },
    ],
    related: ['software-troubleshooting', 'ssd-upgrade', 'virus-removal'],
    extended: {
      whatIs: [
        "OS installation is the service of setting up a clean, properly configured operating system on your device — with the right drivers, updates, and settings for stable day-one use.",
        "I install current Windows versions and practical Linux distributions depending on your needs. Whether you need a fresh start after an infection, a reinstall on a new SSD, or a first-time setup, the process is complete and correct.",
        "Backup planning comes before anything else. If there are files to protect, that is handled first — the install does not start until your data is accounted for.",
      ],
      howItWorks: [
        "I confirm your OS version, check your Windows license situation, and discuss your use case before starting. If you have an existing license tied to your hardware, I make sure it carries across.",
        "Installation is done from clean media, not recovery partitions. Drivers are installed from manufacturer sources and tested, and Windows Update is run to a stable state before handover.",
        "You receive a machine that is patched, properly configured, and ready to use — not a bare install that still needs an hour of updates and driver hunting when you get home.",
      ],
      whenYouNeedIt: [
        "A fresh OS install makes sense after a severe malware infection, when the system has accumulated enough software problems that repair would take longer than a clean start, or when moving to a new drive.",
        "Upgrading from an old Windows version that is no longer supported is also a common reason. I handle the compatibility check and driver situation to make the transition straightforward.",
        "If your machine came without an OS, or with a bloated manufacturer install you want cleaned up, a fresh setup gives you a lean, usable system from the start.",
      ],
      faq: [
        { q: "Do I need to provide a Windows license?", a: "If your PC originally came with Windows, the license is usually tied to the hardware and reactivates automatically after reinstall. I check this before starting and clarify if there is a licensing issue." },
        { q: "Will you back up my files first?", a: "If backup is needed, I include that discussion before anything starts. The install does not proceed until files are confirmed safe, or you have confirmed there is nothing to save." },
        { q: "Can you install Linux alongside Windows?", a: "Yes. Dual-boot setups are available if you need both operating systems. I configure the bootloader and partition layout correctly." },
        { q: "What about drivers — will everything work?", a: "I install drivers from manufacturer sources for your hardware and confirm the key devices are working before handover. Wi-Fi, display, audio, and input devices are all checked." },
      ],
    },
  },
  'software-troubleshooting': {
    slug: 'software-troubleshooting',
    title: 'Software Troubleshooting',
    description: 'Software crash and stability troubleshooting in Stanwell TW19 from £39.',
    lead: 'Frequent crashes, blue screens, and random freezes are diagnosed methodically to isolate the true cause.',
    time: 'Same day',
    price: 'From £39',
    guarantee: 'No fix, no fee',
    sections: [
      {
        heading: 'Problems I Solve',
        paragraphs: ['I investigate app crashes, update failures, startup errors, and recurring system freezes.'],
      },
      {
        heading: 'Diagnosis Method',
        paragraphs: ['Event logs, driver state, update history, and hardware interactions are checked in sequence.'],
        list: ['Error log analysis', 'Driver and service conflict checks', 'System file integrity and repair'],
      },
      {
        heading: 'Outcome',
        paragraphs: ['You get either a fix with verification or a clear explanation of the next practical step.'],
        highlight: 'No vague advice - only concrete findings and realistic actions.',
      },
    ],
    related: ['virus-removal', 'os-installation', 'health-check'],
    extended: {
      whatIs: [
        "Software troubleshooting is the process of diagnosing and resolving crashes, freezes, boot errors, and stability problems without defaulting to an OS reinstall as the first answer.",
        "The service covers application crashes, Windows errors, blue screens, update failures, and recurring freezes that make the machine unreliable. The goal is to find the actual cause rather than work around it.",
        "I use event logs, driver state analysis, file integrity checks, and hardware interaction review to build a real picture of what is failing and why.",
      ],
      howItWorks: [
        "I start by reviewing error logs and recent system changes — driver updates, software installs, and Windows updates are common causes of sudden instability that event logs surface quickly.",
        "From there I check driver conflict areas, service state, file system integrity, and hardware behavior to rule out issues that look like software but have a mixed hardware cause.",
        "The outcome is either a confirmed fix with verification, or a clear explanation of what was found and what the next practical step would be — whether a driver rollback, OS repair, or something else.",
      ],
      whenYouNeedIt: [
        "If you are getting regular blue screens with the same or different stop codes, that is a pattern I can follow systematically. Blue screens usually point to a driver, RAM, or storage fault.",
        "App crashes that happen at consistent points, startup that never fully completes, and freezes that require a hard reboot are all patterns I investigate as part of this service.",
        "If Windows updates have caused a problem you cannot reverse, or an installation has left the system in an inconsistent state, troubleshooting is often faster and safer than a full reinstall.",
      ],
      faq: [
        { q: "Can you fix a machine that blue screens randomly?", a: "Random blue screens can be tracked by stop code, timing, and the driver or module flagged. I trace this properly rather than guessing at a cause." },
        { q: "Is this the same as virus removal?", a: "Not always. Software instability can be caused by malware, but it is more often a driver conflict, corrupted file, or hardware interaction. I check for both during diagnosis." },
        { q: "What if the fix requires a reinstall?", a: "If a clean OS install is the most practical solution, I will tell you that directly and can carry out the reinstall as a follow-on service." },
        { q: "How long does software troubleshooting take?", a: "Simpler issues — driver conflicts, corrupted system files — are often resolved the same day. More complex instability patterns may take longer to isolate. I give you a realistic timeframe when I start." },
      ],
    },
  },
  'speed-boost': {
    slug: 'speed-boost',
    title: 'Speed Enhancement',
    description: 'PC and laptop speed optimization in Stanwell TW19 from £49.',
    lead: 'I tune startup, remove bloat, and improve thermal behavior so your machine feels fast again.',
    time: 'Same day',
    price: 'From £49',
    guarantee: 'No fix, no fee',
    sections: [
      {
        heading: 'Performance Bottlenecks',
        paragraphs: ['Slow startup and lag usually come from bloated software, aging storage, and thermal throttling.'],
      },
      {
        heading: 'Optimization Work',
        paragraphs: ['I remove unnecessary startup load, clean temporary clutter, and tune core settings for responsiveness.'],
        list: ['Startup and service optimization', 'Bloatware and junk cleanup', 'Thermal check and paste recommendation'],
      },
      {
        heading: 'When SSD Is Needed',
        paragraphs: ['If your device is held back by an old HDD, I will recommend SSD migration for a major speed jump.'],
        highlight: 'Measured improvements are prioritized over cosmetic tweaks.',
      },
    ],
    related: ['ssd-upgrade', 'deep-cleaning', 'software-troubleshooting'],
    extended: {
      whatIs: [
        "Speed enhancement is the process of identifying and removing the specific bottlenecks that make a machine feel slow — whether that is startup load, storage performance, thermal throttling, or unnecessary background software.",
        "This is not a generic cleanup. I measure performance before and after, so improvements are real and traceable, not cosmetic changes that make no practical difference to how the machine runs.",
        "Where the hardware is genuinely the bottleneck, I will tell you clearly and recommend the right upgrade rather than optimising around a problem that software cannot solve.",
      ],
      howItWorks: [
        "I check startup times, drive read and write speeds, CPU and RAM behavior under load, and thermal performance. This gives a baseline that shows exactly where the slowdown is coming from.",
        "I then remove unnecessary startup entries, disable background services consuming resources without benefit, and clean residual temporary data that accumulates over time.",
        "Thermal paste and cooling are checked as part of this service if thermals are contributing to the slowness. If an SSD upgrade would make the biggest difference, I will quote for that alongside the optimisation work.",
      ],
      whenYouNeedIt: [
        "If your machine takes several minutes to be usable after booting, or if opening a browser or large app feels noticeably slow compared to a few years ago, a speed service often recovers most of that performance.",
        "Machines that were fast originally and have become gradually slower are usually affected by accumulated startup load, fragmented storage, or thermal throttling — all addressable without replacement.",
        "If performance only drops under load — video, gaming, or multitasking — that often points to thermal throttling rather than software. I check for both as part of the same service.",
      ],
      faq: [
        { q: "How much faster will my machine be after this service?", a: "It depends on what is causing the slowness. Startup time is usually the most noticeable improvement. I give you an honest picture of what to expect based on your hardware before starting." },
        { q: "Is this the same as a deep cleaning service?", a: "They overlap. If thermals are part of the problem, I will include or recommend a thermal service. The two are often done together for best results." },
        { q: "Will you delete my files or programs?", a: "No. The optimisation targets background processes, startup load, and temporary data — not your documents, installed programs, or personal files." },
        { q: "What if an upgrade is needed to get proper performance?", a: "I will tell you clearly what hardware would make a measurable difference. An SSD upgrade in particular is often the most cost-effective path for older slow systems." },
      ],
    },
  },
  'data-recovery': {
    slug: 'data-recovery',
    title: 'Data Recovery',
    description: 'Data recovery service in Stanwell TW19 for failed drives, deleted files, and corrupted partitions from £79.',
    lead: 'I recover photos, documents, and business files from many logical and hardware-related storage failures.',
    time: '2–3 days',
    price: 'From £79',
    guarantee: 'No fix, no fee',
    sections: [
      {
        heading: 'Failure Types',
        paragraphs: ['Recovery approach depends on whether the fault is logical corruption or physical drive damage.'],
        list: ['Deleted files and format mistakes', 'Partition corruption and unreadable volumes', 'Intermittent or failing storage hardware'],
      },
      {
        heading: 'What Is Possible',
        paragraphs: ['I provide an honest probability of success before full recovery work starts.'],
      },
      {
        heading: 'Process And Safety',
        paragraphs: ['Recovery is performed with minimal write risk and structured copy validation for important files.'],
        highlight: 'You get straight answers on recoverability before committing to cost.',
      },
    ],
    related: ['backup-setup', 'ssd-upgrade', 'health-check'],
    extended: {
      whatIs: [
        "Data recovery is the process of retrieving files from storage devices that can no longer be accessed normally — whether due to deletion, partition corruption, file system errors, or physical drive damage.",
        "I work on hard drives, SSDs, USB drives, and memory cards. The approach depends on whether the fault is logical — the data is still there but the file system cannot find it — or physical, where the drive itself has a hardware problem.",
        "Before any work begins, I assess the drive and give you an honest probability of successful recovery. There is no charge if recovery is not possible.",
      ],
      howItWorks: [
        "I start with a full assessment of the drive's condition — health data, read error rate, sector state, and whether the drive produces unusual sounds or behavior. This determines which recovery method is appropriate.",
        "For logical failures, I use imaging and partition recovery tools to extract data safely. For drives with physical symptoms, the approach changes and the limitations are different — I explain these clearly before proceeding.",
        "Recovered files are delivered on a new storage device or transferred to a cloud service of your choice. I verify the most critical files are accessible before the job is marked complete.",
      ],
      whenYouNeedIt: [
        "Accidental deletion of files that are not in the recycle bin, drives that appear empty after formatting, and partitions that become inaccessible after a crash are all situations where recovery is often successful.",
        "A drive that makes clicking, grinding, or repetitive seeking sounds is experiencing physical failure. Stop using it immediately — continued power-on attempts increase the chance of permanent data loss.",
        "If Windows reports a drive as unformatted or it does not appear in File Explorer, that is usually a logical fault rather than physical damage, and the chances of recovery are generally good.",
      ],
      faq: [
        { q: "What are the chances of recovering my files?", a: "It depends on the type of failure and how the drive has been treated since the fault occurred. I give you a genuine probability assessment after inspection — not a blanket best-effort promise." },
        { q: "My drive makes a clicking noise — can you still recover data?", a: "Clicking usually means physical head or platter damage. Recovery is still possible but involves different techniques. Stop using the drive and bring it in as soon as possible." },
        { q: "Is my data kept private during recovery?", a: "Yes. Files are handled only as needed to confirm recovery success. I do not browse through personal content." },
        { q: "What if only some files are recovered?", a: "Partial recovery is common, especially for older failures. I will show you what is recoverable before completing the job, so you can decide whether the result justifies the cost." },
      ],
    },
  },
  'ssd-upgrade': {
    slug: 'ssd-upgrade',
    title: 'SSD Upgrade',
    description: 'HDD to SSD upgrade and migration in Stanwell TW19 from £49.',
    lead: 'An SSD upgrade is often the single biggest real-world performance improvement for older systems.',
    time: 'Same day',
    price: 'From £49',
    guarantee: 'No fix, no fee',
    sections: [
      {
        heading: 'Migration Options',
        paragraphs: ['I can clone your current drive or perform a fresh install depending on drive health and software state.'],
      },
      {
        heading: 'Compatibility',
        paragraphs: ['SATA, NVMe, and form-factor compatibility are checked before any purchase is recommended.'],
        list: ['Drive slot and protocol check', 'Capacity planning by workload', 'Boot setup and BIOS configuration'],
      },
      {
        heading: 'Performance Gains',
        paragraphs: ['Boot time, app launch speed, and overall responsiveness improve significantly in most upgrades.'],
        highlight: 'I only recommend drives with proven reliability and sensible value.',
      },
    ],
    related: ['speed-boost', 'os-installation', 'hardware-upgrades'],
    extended: {
      whatIs: [
        "SSD upgrade is the service of replacing or supplementing a mechanical hard drive or older SATA SSD with a modern solid-state drive, providing a major improvement in boot time, application launch speed, and file transfer performance.",
        "An SSD is often the single most impactful upgrade available for a machine that is still serviceable but feels slow. The improvement is immediately noticeable from the first boot.",
        "The upgrade can be done as a clean install or a cloned migration depending on your preference and the current state of the existing drive.",
      ],
      howItWorks: [
        "I check the current drive's health and the machine's storage interface — SATA or NVMe — to confirm what is compatible and what form factor fits. Not all machines support both types, and slot availability varies.",
        "If you want your existing data and OS carried over, I clone the current drive to the new SSD. If a fresh start is preferred, OS installation is done from clean media with your license and drivers in place.",
        "After the upgrade, boot time and drive performance are tested to confirm the new drive is working correctly. BIOS settings are checked to ensure the machine boots from the correct device.",
      ],
      whenYouNeedIt: [
        "If your machine takes more than a minute to be usable after startup, an SSD is the most direct solution. Mechanical drives become progressively slower as they age, and the gap in performance is substantial.",
        "Machines used for video editing, large file handling, or regular backups benefit particularly from faster storage. If your work involves moving large files frequently, the time savings are significant.",
        "If your current drive shows signs of failure — slow reads, file errors, or occasional lockups — upgrading to an SSD now, before the drive dies, is the safe way to avoid data loss.",
      ],
      faq: [
        { q: "Can you move all my existing files and programs to the new SSD?", a: "Yes. Drive cloning transfers your OS, installed programs, and personal files to the new drive. The machine boots just as before, only faster." },
        { q: "What is the difference between SATA and NVMe?", a: "SATA is the older, slower interface. NVMe is significantly faster and uses a different slot. I check which your machine supports and recommend accordingly — not every machine can use NVMe." },
        { q: "Do I need a fresh Windows install after an SSD upgrade?", a: "Not if cloning is used. If you prefer a clean system or the current OS has issues, a fresh install can be done at the same time." },
        { q: "How much storage should I get?", a: "I help you choose based on how you use the machine. For most people, 500GB to 1TB covers everything comfortably. I will not recommend more than you need." },
      ],
    },
  },
  'backup-setup': {
    slug: 'backup-setup',
    title: 'Backup Setup',
    description: 'Automated cloud and local backup setup in Stanwell TW19 from £35.',
    lead: 'I configure practical backups so your key files stay protected against deletion, failure, and ransomware.',
    time: 'Same day',
    price: 'From £35',
    guarantee: 'No fix, no fee',
    sections: [
      {
        heading: 'Cloud Vs Local',
        paragraphs: ['Most people need both: fast local recovery and secure off-site cloud protection.'],
      },
      {
        heading: 'What To Back Up',
        paragraphs: ['I help prioritize documents, photos, project data, and account-critical files to avoid unnecessary storage costs.'],
        list: ['Folder and file strategy', 'Automated schedule setup', 'Restore test to confirm it works'],
      },
      {
        heading: 'Tools And Reliability',
        paragraphs: ['Backup tools are chosen for reliability, not marketing hype, and tested after setup.'],
        highlight: 'A backup is only useful if restore is verified - I test both.',
      },
    ],
    related: ['data-recovery', 'health-check', 'os-installation'],
    extended: {
      whatIs: [
        "Backup setup is the service of configuring a reliable, automatic backup system so your important files are protected against accidental deletion, hardware failure, and ransomware without requiring you to remember to do it manually.",
        "Most people do not have a working backup until something goes wrong. This service is designed to put a practical, tested system in place before that happens.",
        "I configure both local and cloud backup where appropriate, using tools that are reliable and straightforward to understand — not unnecessarily complex solutions.",
      ],
      howItWorks: [
        "I start by identifying which files and folders are actually important to you — documents, photos, project data, and anything account-critical. Most people have a smaller set of truly critical data than they assume.",
        "Based on that, I configure automated backup to your preferred local drive, cloud service, or both. Backup frequency and retention are set to match your needs.",
        "The final step is a restore test. A backup that has never been tested is not a backup — I verify that recovery from the backup actually works before the service is complete.",
      ],
      whenYouNeedIt: [
        "If you have no current backup, or are relying on a backup you have never tested, this service is relevant regardless of whether anything has gone wrong yet.",
        "After a data recovery event, a backup setup is an immediate priority to prevent the same situation from repeating.",
        "If you are responsible for important business data that has no tested recovery path, that is a real risk worth addressing before something goes wrong.",
      ],
      faq: [
        { q: "Do I need special hardware for a local backup?", a: "An external hard drive or USB storage device works well. If you do not have one, I can advise on a suitable option based on how much you need to protect." },
        { q: "Which cloud services do you set up?", a: "I work with common options including OneDrive, Google Drive, and Backblaze. The choice depends on your existing accounts and how much data you need to protect." },
        { q: "How often will the backup run?", a: "I configure this based on how frequently your important files change. Daily backups suit most people. More frequent schedules are possible for active work environments." },
        { q: "What if I already have a backup set up — can you check it?", a: "Yes. If you have an existing backup and want to verify it works and covers the right data, I can review and test it as a standalone service." },
      ],
    },
  },
  'network-setup': {
    slug: 'network-setup',
    title: 'Network Setup',
    description: 'Home and small office network setup in Stanwell TW19 from £49.',
    lead: 'I configure routers, extenders, and wired links for reliable coverage and practical real-world speed.',
    time: 'Same day',
    price: 'From £49',
    guarantee: 'No fix, no fee',
    sections: [
      {
        heading: 'Setup Scope',
        paragraphs: ['From fresh router setup to dead-zone fixes, I build a stable network around your space.'],
        list: ['Router configuration and security', 'Wi-Fi extender and mesh placement', 'Ethernet run planning and speed checks'],
      },
      {
        heading: 'Testing And Optimization',
        paragraphs: ['Signal quality and throughput are measured at key points so you know what performance to expect.'],
      },
      {
        heading: 'Ongoing Stability',
        paragraphs: ['Settings are tuned for reliability, not just peak speed in one room.'],
        highlight: 'A stable connection across the home matters more than one impressive speed-test screenshot.',
      },
    ],
    related: ['wifi-troubleshooting', 'desktop-repairs', 'software-troubleshooting'],
    extended: {
      whatIs: [
        "Network setup covers the configuration and deployment of home and small office networks — from fresh router setup and Wi-Fi coverage to wired connections and performance optimisation across multiple devices.",
        "A properly configured network is not just about getting an internet connection. It is about consistent speed across every part of the space, correct security settings, and a setup that does not require a restart every few days.",
        "I work with standard router hardware, mesh systems, and wired Ethernet setups depending on your space and requirements.",
      ],
      howItWorks: [
        "I start by understanding the space — room layout, device count, connection types needed, and where the router is currently placed. This determines whether the hardware is appropriate or whether repositioning or additional equipment would help.",
        "Router configuration covers wireless band settings, channel selection, security settings, and any port forwarding or device priority rules needed. I also verify that the ISP connection itself is performing as expected.",
        "After setup, signal and throughput are measured at key points in your home or office to confirm actual performance matches what the hardware should deliver.",
      ],
      whenYouNeedIt: [
        "Moving into a new property, changing ISP, or replacing old hardware are the most common triggers. A fresh setup ensures the router is configured correctly rather than running on factory defaults.",
        "Dead zones, intermittent drops in specific rooms, and speeds that vary dramatically from one area to another are signs of a coverage problem that repositioning or channel configuration can often resolve.",
        "If you are not sure whether your current network is set up correctly or securely, a review can identify gaps — weak passwords, outdated firmware, misconfigured security settings — without requiring a full rebuild.",
      ],
      faq: [
        { q: "Can you fix dead zones in specific rooms?", a: "Often yes. Dead zones are usually a combination of distance, wall material, and band interference. I assess the space and recommend the right fix — repositioning, a wired access point, or a mesh node." },
        { q: "Do you work with mesh systems?", a: "Yes. I configure mesh hardware from common brands and optimise node placement for coverage and backhaul performance." },
        { q: "Can you set up wired Ethernet connections?", a: "Run planning and wired connection setup is available. Depending on the property, options include powerline adapters, MoCA adapters, or surface-mounted cable runs." },
        { q: "Is the router security setup included?", a: "Yes. Password setup, network name, and firmware update checks are included in every network setup as standard." },
      ],
    },
  },
  'wifi-troubleshooting': {
    slug: 'wifi-troubleshooting',
    title: 'Wi-Fi Troubleshooting',
    description: 'Wi-Fi fault diagnosis and optimization in Stanwell TW19 from £39.',
    lead: 'Intermittent drops and slow wireless speeds are diagnosed by isolating router, environment, and device factors.',
    time: 'Same day',
    price: 'From £39',
    guarantee: 'No fix, no fee',
    sections: [
      {
        heading: 'Common Causes',
        paragraphs: ['Interference, channel overlap, outdated firmware, and poor adapter drivers are frequent causes of bad Wi-Fi.'],
      },
      {
        heading: 'Router Vs Device',
        paragraphs: ['I isolate whether the problem is network-wide or specific to one device before recommending changes.'],
        list: ['Channel and band analysis', 'Driver and adapter checks', 'Router firmware and placement review'],
      },
      {
        heading: 'Fix Strategy',
        paragraphs: ['You get practical adjustments that improve stability and speed for daily use, not temporary tweaks.'],
        highlight: 'Diagnosis first prevents replacing hardware that is not actually faulty.',
      },
    ],
    related: ['network-setup', 'software-troubleshooting', 'health-check'],
    extended: {
      whatIs: [
        "Wi-Fi troubleshooting is a targeted diagnostic service for wireless connection problems — including intermittent drops, poor speeds, specific device failures, and coverage issues that standard router restarts do not resolve.",
        "The process separates device-specific faults from network-wide problems. An issue affecting one laptop is different from an issue affecting everyone on the same network, and each needs a different approach.",
        "I check the router, client device, adapter drivers, frequency bands, interference sources, and firmware state to build a complete picture of what is causing the problem.",
      ],
      howItWorks: [
        "I start by gathering information about when the problem occurs, which devices are affected, and what the router configuration looks like. This narrows down whether the problem is the router, the device, or the environment.",
        "On the device side, I check adapter driver state, power management settings, and connection logs. On the router side, I review channel utilisation, band assignment, and QoS settings.",
        "Once the cause is confirmed, I apply the fix and test stability under normal use conditions. If hardware replacement is needed — a new router or access point — I advise on appropriate options.",
      ],
      whenYouNeedIt: [
        "Dropping connection at regular intervals that requires re-connecting manually is one of the most common symptoms. This is usually a power management setting on the adapter, a driver issue, or a router lease time problem.",
        "Speeds that are significantly lower than your broadband plan suggests, despite being close to the router, often point to band overcrowding or driver power-state throttling.",
        "If only one device has problems while everything else connects fine, the issue is almost certainly device-side — adapter, driver, or system configuration — rather than the network itself.",
      ],
      faq: [
        { q: "My Wi-Fi drops every few hours — what causes that?", a: "Scheduled ISP reboots, DHCP lease expiry, and adapter power management are the most common causes. Each has a different fix. I trace the pattern to the actual trigger." },
        { q: "Is the problem my router or my device?", a: "That is exactly what I determine during diagnosis. Testing multiple devices on the same network and checking device-specific logs quickly separates the two." },
        { q: "Can you improve Wi-Fi speeds without new hardware?", a: "Often yes. Channel selection, band steering, driver updates, and QoS settings can make a significant difference without additional equipment. I start with those before recommending hardware changes." },
        { q: "My laptop connects to Wi-Fi but has no internet — is that a Wi-Fi problem?", a: "Not necessarily. That symptom can point to a DNS issue, a routing problem on the router, or a browser proxy setting. I check the actual connection path, not just the wireless signal." },
      ],
    },
  },
  'health-check': {
    slug: 'health-check',
    title: 'PC Health Check',
    description: 'Full no-obligation computer health check in Stanwell TW19 with written findings and free assessment.',
    lead: 'A complete diagnostic of hardware and software so you know exactly what is healthy, what is risky, and what can wait.',
    time: '1–2 hrs',
    price: 'Free assessment',
    guarantee: 'No fix, no fee',
    sections: [
      {
        heading: 'What Is Checked',
        paragraphs: ['I review storage health, memory behavior, thermal performance, startup load, and software stability.'],
        list: ['Hardware baseline and temperature checks', 'Drive health and error-state review', 'Software and startup condition report'],
      },
      {
        heading: 'Written Report',
        paragraphs: ['You receive a clear summary with priority levels so you can choose what to fix now and what can wait.'],
      },
      {
        heading: 'No Obligation',
        paragraphs: ['The assessment is designed to give clarity first. You decide if and when to proceed with repairs.'],
        highlight: 'Transparent findings, practical priorities, and no pressure to purchase extra work.',
      },
    ],
    related: ['software-troubleshooting', 'data-recovery', 'laptop-repairs'],
    extended: {
      whatIs: [
        "PC health check is a comprehensive no-obligation diagnostic covering hardware health, software state, and thermal performance — giving you a clear picture of what is working well, what is at risk, and what can wait.",
        "The assessment is free. It is designed to give you honest information about your machine's condition so you can make sensible decisions about maintenance or repair without any pressure.",
        "You receive a written summary with findings grouped by priority. Most machines have a mix of things that are fine and things worth addressing — the report tells you which is which.",
      ],
      howItWorks: [
        "I run drive health tests using S.M.A.R.T. data and read and write verification, memory tests for error-state behavior, and temperature logging under load to assess thermal performance.",
        "Software state is reviewed including startup load, Windows health, update status, and any error patterns in system logs. This surfaces issues that are not yet causing visible problems but could do so soon.",
        "The findings are compiled into a plain-English report with a priority level for each issue — critical, advisable, or optional. You decide what to act on, with no pressure from me.",
      ],
      whenYouNeedIt: [
        "If your machine is a few years old and has never had a check, the health assessment is a useful baseline that tells you whether you can rely on it for another few years or whether something is silently failing.",
        "Before any major software work, upgrade, or reinstall, knowing the hardware state helps avoid spending money on a machine that has an underlying fault.",
        "If you are experiencing occasional slowdowns, minor issues, or something that feels off but you cannot identify, the health check surfaces what is actually happening before it becomes a bigger problem.",
      ],
      faq: [
        { q: "Is the health check really free?", a: "Yes. The assessment is free because the goal is to give you useful information. If repair work comes from it, that is quoted separately and entirely your choice." },
        { q: "Do I need to leave the machine with you?", a: "For a complete check yes. Tests for drive health, memory, and thermals take time to run properly. I will give you a realistic time estimate when you drop it off." },
        { q: "What happens if you find something serious?", a: "You get a clear explanation of the finding, what could happen if it is left, and what a repair would involve and cost. Nothing proceeds without your decision." },
        { q: "Can you do a health check on a machine that seems fine?", a: "That is actually the best time. Preventive assessment catches issues like early drive failure and deteriorating thermal performance before they result in an unexpected breakdown or data loss." },
      ],
    },
  },
};

export const serviceTitles: Record<string, string> = Object.fromEntries(
  Object.values(serviceDetails).map((service) => [service.slug, service.title])
);
