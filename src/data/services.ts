export interface ServiceItem {
  slug: string;
  title: string;
  time: string;
  price: string;
  tag?: string;
  img: string;
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
      { slug: 'laptop-repairs', title: 'Laptop Repairs', time: 'Same day', price: 'From £49', img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=480&h=280&fit=crop&q=75' },
      { slug: 'motherboard-diagnosis', title: 'Motherboard Diagnosis', time: '1–2 days', price: 'From £39', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=480&h=280&fit=crop&q=75' },
    ],
  },
  {
    id: 'desktop',
    title: 'Desktop & PC',
    items: [
      { slug: 'desktop-repairs', title: 'Desktop PC Repairs', time: '1–2 days', price: 'From £49', img: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=480&h=280&fit=crop&q=75' },
      { slug: 'hardware-upgrades', title: 'Hardware Upgrades', time: 'Same day', price: 'From £35', img: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=480&h=280&fit=crop&q=75' },
      { slug: 'deep-cleaning', title: 'Deep Cleaning', time: 'Same day', price: 'From £39', img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=480&h=280&fit=crop&q=75' },
      { slug: 'pc-build', title: 'Custom PC Build', time: '2–3 days', price: 'POA', img: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=480&h=280&fit=crop&q=75' },
    ],
  },
  {
    id: 'software',
    title: 'Software & OS',
    items: [
      { slug: 'virus-removal', title: 'Virus & Malware Removal', time: 'Same day', price: 'From £49', tag: 'Common', img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=480&h=280&fit=crop&q=75' },
      { slug: 'os-installation', title: 'OS Installation', time: 'Same day', price: 'From £59', img: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=480&h=280&fit=crop&q=75' },
      { slug: 'software-troubleshooting', title: 'Software Troubleshooting', time: 'Same day', price: 'From £39', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=480&h=280&fit=crop&q=75' },
      { slug: 'speed-boost', title: 'Speed Enhancement', time: 'Same day', price: 'From £49', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=480&h=280&fit=crop&q=75' },
    ],
  },
  {
    id: 'data',
    title: 'Data & Storage',
    items: [
      { slug: 'data-recovery', title: 'Data Recovery', time: '2–3 days', price: 'From £79', tag: 'High success rate', img: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=480&h=280&fit=crop&q=75' },
      { slug: 'ssd-upgrade', title: 'SSD Upgrade', time: 'Same day', price: 'From £49', img: 'https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?w=480&h=280&fit=crop&q=75' },
      { slug: 'backup-setup', title: 'Backup Setup', time: 'Same day', price: 'From £35', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=480&h=280&fit=crop&q=75' },
    ],
  },
  {
    id: 'network',
    title: 'Network & Connectivity',
    items: [
      { slug: 'network-setup', title: 'Network Setup', time: 'Same day', price: 'From £49', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=480&h=280&fit=crop&q=75' },
      { slug: 'wifi-troubleshooting', title: 'Wi-Fi Troubleshooting', time: 'Same day', price: 'From £39', img: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=480&h=280&fit=crop&q=75' },
    ],
  },
  {
    id: 'diagnostic',
    title: 'Diagnostics',
    items: [
      { slug: 'health-check', title: 'PC Health Check', time: '1–2 hrs', price: 'Free assessment', tag: 'Free', img: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=480&h=280&fit=crop&q=75' },
    ],
  },
];
