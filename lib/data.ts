import { 
  Ticket, 
  KnowledgeArticle, 
  TicketComment, 
  ScheduleSlot, 
  Appointment,
  RepairQuote
} from '@/types';

// Mock tickets data
export const mockTickets: Ticket[] = [
  {
    id: '1',
    userId: '1',
    title: 'Laptop won\'t turn on',
    description: 'My laptop was working fine yesterday, but now it won\'t power on at all. The charging light doesn\'t come on either.',
    status: 'open',
    priority: 'high',
    deviceType: 'laptop',
    deviceInfo: 'Dell XPS 15, 2 years old',
    createdAt: '2023-05-15T10:30:00Z',
    updatedAt: '2023-05-15T10:30:00Z',
  },
  {
    id: '2',
    userId: '1',
    title: 'Slow internet connection',
    description: 'My internet has been extremely slow for the past week. Downloads take forever and video calls keep dropping.',
    status: 'in-progress',
    priority: 'medium',
    deviceType: 'desktop',
    deviceInfo: 'Custom built PC, Windows 11',
    createdAt: '2023-05-10T14:20:00Z',
    updatedAt: '2023-05-12T09:15:00Z',
    assignedTo: 'Tech Support Agent',
  },
  {
    id: '3',
    userId: '2',
    title: 'Email configuration issue',
    description: 'We are unable to set up email accounts for our new employees. The configuration wizard shows an error about SMTP settings.',
    status: 'open',
    priority: 'critical',
    deviceType: 'other',
    deviceInfo: 'Microsoft Exchange Server',
    createdAt: '2023-05-14T08:45:00Z',
    updatedAt: '2023-05-14T08:45:00Z',
  },
  {
    id: '4',
    userId: '1',
    title: 'Blue screen error',
    description: 'My computer keeps showing a blue screen with error code 0x0000007B. It happens randomly several times a day.',
    status: 'resolved',
    priority: 'high',
    deviceType: 'desktop',
    deviceInfo: 'HP Pavilion, Windows 10',
    createdAt: '2023-05-05T11:30:00Z',
    updatedAt: '2023-05-08T16:20:00Z',
    assignedTo: 'Senior Technician',
  },
  {
    id: '5',
    userId: '2',
    title: 'Network printer offline',
    description: 'Our office network printer shows as offline on all computers. We\'ve tried restarting it but it\'s not being detected.',
    status: 'closed',
    priority: 'medium',
    deviceType: 'other',
    deviceInfo: 'HP LaserJet Pro M404dn',
    createdAt: '2023-05-01T09:15:00Z',
    updatedAt: '2023-05-03T14:30:00Z',
    assignedTo: 'Network Specialist',
  },
];

// Mock ticket comments
export const mockTicketComments: Record<string, TicketComment[]> = {
  '1': [
    {
      id: '101',
      ticketId: '1',
      userId: '1',
      userName: 'John Doe',
      userRole: 'customer',
      content: 'I\'ve tried using a different power adapter but it still doesn\'t work.',
      createdAt: '2023-05-15T11:20:00Z',
    },
    {
      id: '102',
      ticketId: '1',
      userId: 'tech1',
      userName: 'Alex Technician',
      userRole: 'technician',
      content: 'Have you tried removing the battery and holding the power button for 30 seconds?',
      createdAt: '2023-05-15T13:45:00Z',
    },
  ],
  '2': [
    {
      id: '201',
      ticketId: '2',
      userId: 'tech2',
      userName: 'Sam Support',
      userRole: 'technician',
      content: 'I\'ll be handling your case. Could you run a speed test and share the results?',
      createdAt: '2023-05-12T09:15:00Z',
    },
    {
      id: '202',
      ticketId: '2',
      userId: '1',
      userName: 'John Doe',
      userRole: 'customer',
      content: 'The speed test shows 5Mbps download and 1Mbps upload, much lower than my plan.',
      createdAt: '2023-05-12T10:30:00Z',
    },
  ],
};

// Mock schedule slots
export const mockScheduleSlots: ScheduleSlot[] = [
  // Today
  {
    id: '1',
    date: new Date().toISOString().split('T')[0],
    startTime: '09:00',
    endTime: '10:00',
    available: true,
  },
  {
    id: '2',
    date: new Date().toISOString().split('T')[0],
    startTime: '10:00',
    endTime: '11:00',
    available: false,
  },
  {
    id: '3',
    date: new Date().toISOString().split('T')[0],
    startTime: '11:00',
    endTime: '12:00',
    available: true,
  },
  {
    id: '4',
    date: new Date().toISOString().split('T')[0],
    startTime: '13:00',
    endTime: '14:00',
    available: true,
  },
  {
    id: '5',
    date: new Date().toISOString().split('T')[0],
    startTime: '14:00',
    endTime: '15:00',
    available: true,
  },
  {
    id: '6',
    date: new Date().toISOString().split('T')[0],
    startTime: '15:00',
    endTime: '16:00',
    available: false,
  },
  {
    id: '7',
    date: new Date().toISOString().split('T')[0],
    startTime: '16:00',
    endTime: '17:00',
    available: true,
  },
  
  // Tomorrow
  {
    id: '8',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    startTime: '09:00',
    endTime: '10:00',
    available: true,
  },
  {
    id: '9',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    startTime: '10:00',
    endTime: '11:00',
    available: true,
  },
  {
    id: '10',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    startTime: '11:00',
    endTime: '12:00',
    available: true,
  },
];

// Mock appointments
export const mockAppointments: Appointment[] = [
  {
    id: '1',
    ticketId: '2',
    userId: '1',
    slotId: '2',
    date: new Date().toISOString().split('T')[0],
    startTime: '10:00',
    endTime: '11:00',
    status: 'scheduled',
    createdAt: '2023-05-12T15:30:00Z',
  },
];

// Mock repair quotes
export const mockRepairQuotes: RepairQuote[] = [
  {
    id: '1',
    ticketId: '1',
    diagnosisFee: 50,
    partsCost: 120,
    laborCost: 75,
    totalEstimate: 245,
    validUntil: '2023-06-15T00:00:00Z',
    notes: 'May need to replace the motherboard if power issue persists',
    createdAt: '2023-05-16T10:00:00Z',
  },
  {
    id: '2',
    ticketId: '3',
    diagnosisFee: 75,
    partsCost: 0,
    laborCost: 150,
    totalEstimate: 225,
    validUntil: '2023-06-14T00:00:00Z',
    notes: 'Server configuration and troubleshooting',
    createdAt: '2023-05-14T16:30:00Z',
  },
];

// Mock knowledge base articles
export const mockKnowledgeArticles: KnowledgeArticle[] = [
  {
    id: '1',
    title: 'How to fix a computer that won\'t turn on',
    category: 'Hardware',
    content: `
      # Troubleshooting a Computer That Won't Power On

      If your computer won't turn on, follow these steps:

      1. **Check the power source**
         - Ensure the power cable is firmly connected
         - Try a different power outlet
         - If using a laptop, check if the battery needs charging
      
      2. **Inspect the hardware**
         - Look for any visible damage
         - Remove and reseat the RAM
         - Disconnect all peripherals and try powering on
      
      3. **Reset the power**
         - Unplug the computer
         - Hold the power button for 30 seconds
         - Reconnect and try again
      
      4. **Check for overheating**
         - Make sure vents are not blocked
         - Listen for fan operation
      
      If these steps don't resolve the issue, your computer may need professional repair.
    `,
    tags: ['power issues', 'hardware', 'troubleshooting', 'startup problems'],
    createdAt: '2023-01-15T10:30:00Z',
    updatedAt: '2023-03-20T14:15:00Z',
    viewCount: 1250,
  },
  {
    id: '2',
    title: 'Fixing slow internet connections',
    category: 'Network',
    content: `
      # How to Fix Slow Internet Connections

      Slow internet can be caused by various factors. Here's how to diagnose and fix the issue:

      ## Basic Troubleshooting
      
      1. **Restart your router and modem**
         - Unplug both devices for 30 seconds
         - Plug in the modem first, wait for it to fully connect
         - Then plug in the router and wait for it to establish connection
      
      2. **Check your speed**
         - Use a speed test website to check your current internet speed
         - Compare the results with your internet plan
      
      3. **Check for bandwidth-heavy applications**
         - Downloads, streaming services, and online games can slow down your connection
         - Close unnecessary applications
      
      ## Advanced Solutions
      
      1. **Update router firmware**
         - Log into your router's admin panel
         - Look for firmware updates
      
      2. **Optimize Wi-Fi settings**
         - Change to a less congested Wi-Fi channel
         - If possible, use 5GHz instead of 2.4GHz for less interference
      
      3. **Check for malware**
         - Run a full system scan to detect any malware that might be using your bandwidth
      
      4. **Consider hardware upgrades**
         - Older routers might need replacement
         - Consider a mesh network for better coverage
    `,
    tags: ['network', 'internet', 'wifi', 'slow connection', 'troubleshooting'],
    createdAt: '2023-02-10T09:45:00Z',
    updatedAt: '2023-04-05T11:20:00Z',
    viewCount: 1850,
  },
  {
    id: '3',
    title: 'Resolving Blue Screen of Death errors',
    category: 'Software',
    content: `
      # Resolving Blue Screen of Death (BSOD) Errors

      The Blue Screen of Death is a critical error screen displayed on Windows PCs during a system crash.

      ## Understanding the Error

      The BSOD usually shows:
      - An error code (e.g., 0x0000007B)
      - A brief description
      - Technical information for troubleshooting

      ## Common Causes

      1. **Hardware issues**
         - Faulty RAM
         - Overheating components
         - Damaged hard drive
      
      2. **Driver problems**
         - Outdated drivers
         - Incompatible drivers
         - Corrupted drivers
      
      3. **Software conflicts**
         - Recently installed programs
         - Windows updates
      
      ## How to Fix BSOD Errors

      1. **Note the error code**
         - Write down the specific error code shown on the blue screen
      
      2. **Boot in Safe Mode**
         - Restart your computer
         - Press F8 repeatedly before Windows loads
         - Select "Safe Mode" from the boot options menu
      
      3. **Check Recent Changes**
         - Uninstall recently added software
         - Roll back recent driver updates
      
      4. **Update Drivers**
         - Visit the manufacturer's website for the latest drivers
         - Use Windows Device Manager to update drivers
      
      5. **Run System File Checker**
         - Open Command Prompt as administrator
         - Type "sfc /scannow" and press Enter
      
      6. **Check for Hardware Issues**
         - Run Windows Memory Diagnostic
         - Check disk for errors using CHKDSK
      
      If the problem persists, consider system restore or reinstalling Windows.
    `,
    tags: ['BSOD', 'blue screen', 'crash', 'windows', 'error codes'],
    createdAt: '2023-03-22T14:10:00Z',
    updatedAt: '2023-04-18T09:30:00Z',
    viewCount: 2100,
  },
  {
    id: '4',
    title: 'Configuring email accounts on different devices',
    category: 'Email',
    content: `
      # Configuring Email Accounts on Different Devices

      This guide will help you set up your email account on various devices and platforms.

      ## Email Setup on Windows

      ### Outlook
      1. Open Outlook and go to File > Add Account
      2. Enter your email address and click Connect
      3. Enter your password when prompted
      4. Follow the on-screen instructions to complete setup

      ### Windows Mail
      1. Open the Mail app
      2. Go to Settings > Accounts > Add account
      3. Select your email provider or "Other account"
      4. Enter your email and password
      5. Click Sign in or Next to complete setup

      ## Email Setup on macOS

      ### Apple Mail
      1. Open Mail and select Mail > Add Account
      2. Select your provider or "Other Mail Account"
      3. Enter your name, email address, and password
      4. Click Sign In and follow the prompts

      ## Email Setup on Mobile Devices

      ### iOS
      1. Go to Settings > Mail > Accounts > Add Account
      2. Select your email provider
      3. Enter your email and password
      4. Select which services to sync (Mail, Contacts, etc.)
      5. Tap Save

      ### Android
      1. Open the Gmail app
      2. Tap on your profile icon > Add another account
      3. Select your email provider or "Other"
      4. Enter your email and tap Next
      5. Enter your password and follow the instructions

      ## Common SMTP Settings

      If automatic setup fails, you may need to enter settings manually:

      | Provider | SMTP Server | Port | Security |
      |----------|-------------|------|----------|
      | Gmail | smtp.gmail.com | 587 | TLS |
      | Outlook | smtp-mail.outlook.com | 587 | TLS |
      | Yahoo | smtp.mail.yahoo.com | 587 | TLS |
      | iCloud | smtp.mail.me.com | 587 | TLS |

      Remember to enable "Less secure apps" or generate an app password if your email provider requires it for third-party email clients.
    `,
    tags: ['email', 'configuration', 'SMTP', 'POP3', 'IMAP'],
    createdAt: '2023-01-30T11:25:00Z',
    updatedAt: '2023-03-15T16:40:00Z',
    viewCount: 1560,
  },
  {
    id: '5',
    title: 'Troubleshooting network printer issues',
    category: 'Printers',
    content: `
      # Troubleshooting Network Printer Issues

      Network printers can encounter various connectivity issues. Follow this guide to resolve common problems.

      ## Basic Troubleshooting

      1. **Check Physical Connections**
         - Ensure the printer is powered on
         - Verify network cable connections (if not wireless)
         - Check if the printer's network lights are active
      
      2. **Restart Devices**
         - Restart the printer
         - Restart your router/network equipment
         - Restart the computer(s) trying to print
      
      3. **Verify Network Connection**
         - Check if the printer has a valid IP address
         - Print a network configuration page from the printer's menu
         - Ensure the printer is on the same network as your computer
      
      ## Windows-Specific Solutions

      1. **Run Troubleshooter**
         - Go to Settings > Devices > Printers & scanners
         - Select the printer and click "Run the troubleshooter"
      
      2. **Remove and Reinstall**
         - Remove the printer from Windows
         - Add it again using "Add a printer or scanner"
         - If not detected automatically, add by IP address
      
      ## macOS-Specific Solutions

      1. **Reset Printing System**
         - Open System Preferences > Printers & Scanners
         - Right-click (or Control-click) the printers list
         - Select "Reset printing system"
         - Add your printer again
      
      ## Advanced Troubleshooting

      1. **Update Firmware**
         - Check the printer manufacturer's website for firmware updates
      
      2. **Check Printer Settings**
         - Reset the printer's network settings
         - Enable/disable specific protocols (like SNMP)
      
      3. **Firewall Issues**
         - Ensure your firewall isn't blocking printer communication
         - Add exceptions for ports 9100, 515, and 631
      
      If the problem persists, consider assigning a static IP address to your printer through your router's DHCP settings.
    `,
    tags: ['printer', 'network', 'connectivity', 'troubleshooting'],
    createdAt: '2023-02-05T13:15:00Z',
    updatedAt: '2023-04-10T10:20:00Z',
    viewCount: 1420,
  },
];