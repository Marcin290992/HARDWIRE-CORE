export interface ServiceItem {
  slug: string;
  title: string;
  time: string;
  price: string;
  tag?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  items: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'laptop',
    title: 'Laptop Problems',
    items: [
      { slug: 'laptop-repairs', title: 'Laptop Repairs', time: 'Same day', price: 'From £49' },
      { slug: 'motherboard-diagnosis', title: 'Motherboard Diagnosis', time: '1–2 days', price: 'From £39' },
    ],
  },
  {
    id: 'desktop',
    title: 'Desktop & PC',
    items: [
      { slug: 'desktop-repairs', title: 'Desktop PC Repairs', time: '1–2 days', price: 'From £49' },
      { slug: 'hardware-upgrades', title: 'Hardware Upgrades', time: 'Same day', price: 'From £35' },
      { slug: 'deep-cleaning', title: 'Deep Cleaning', time: 'Same day', price: 'From £39' },
      { slug: 'pc-build', title: 'Custom PC Build', time: '2–3 days', price: 'POA' },
    ],
  },
  {
    id: 'software',
    title: 'Software & OS',
    items: [
      { slug: 'virus-removal', title: 'Virus & Malware Removal', time: 'Same day', price: 'From £49', tag: 'Common' },
      { slug: 'os-installation', title: 'OS Installation', time: 'Same day', price: 'From £59' },
      { slug: 'software-troubleshooting', title: 'Software Troubleshooting', time: 'Same day', price: 'From £39' },
      { slug: 'speed-boost', title: 'Speed Enhancement', time: 'Same day', price: 'From £49' },
    ],
  },
  {
    id: 'data',
    title: 'Data & Storage',
    items: [
      { slug: 'data-recovery', title: 'Data Recovery', time: '2–3 days', price: 'From £79', tag: 'High success rate' },
      { slug: 'ssd-upgrade', title: 'SSD Upgrade', time: 'Same day', price: 'From £49' },
      { slug: 'backup-setup', title: 'Backup Setup', time: 'Same day', price: 'From £35' },
    ],
  },
  {
    id: 'network',
    title: 'Network & Connectivity',
    items: [
      { slug: 'network-setup', title: 'Network Setup', time: 'Same day', price: 'From £49' },
      { slug: 'wifi-troubleshooting', title: 'Wi-Fi Troubleshooting', time: 'Same day', price: 'From £39' },
    ],
  },
  {
    id: 'diagnostic',
    title: 'Diagnostics',
    items: [
      { slug: 'health-check', title: 'PC Health Check', time: '1–2 hrs', price: 'Free assessment', tag: 'Free' },
    ],
  },
];
