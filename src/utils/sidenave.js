export default [
  {
    name: 'Dashboard',
    path: '/',
    icon: 'Home@M'
  },
  {
    name: 'Video',
    icon: 'VideoLibrary@M',
    accordian: true,
    child: [
      {
        name: 'Mini Video',
        icon: 'SlowMotionVideo@M',
        path: '/media'
      },
      {
        name: 'Live Broadcast',
        icon: 'LiveTv@M',
        path: '/live-broadcast'
      },
      {
        name: 'Video Review',
        icon: 'RateReview@M',
        path: '/video-moderation?stat=13'
      }
      // {
      //   name: 'Broadcast from PC',
      //   icon: 'LiveTv@M',
      //   path: '/media'
      // },
      // {
      //   name: 'Add Video',
      //   icon: 'LiveTv@M',
      //   path: '/media'
      // }
    ]
  },
  {
    name: 'Flagged',
    icon: 'Flag@M',
    accordian: true,
    child: [
      {
        name: 'Video',
        icon: 'VideoLibrary@M',
        path: '/media?flagged=1'
      },
      {
        name: 'Live Broadcast',
        icon: 'LiveTv@M',
        path: '/live-broadcast?flagged=1'
      }
      // {
      //   name: 'User',
      //   icon: 'People@M',
      //   path: '/app-users'
      // }
    ]
  },
  {
    name: 'Users',
    icon: 'People@M',
    accordian: true,
    child: [
      {
        name: 'App User',
        icon: 'PeopleOutline@M',
        path: '/app-users'
      },
      {
        name: 'Admin User',
        icon: 'People@M',
        path: '/users'
      }
    ]
  },
  {
    name: 'Notifications',
    icon: 'Notifications@M',
    accordian: true,
    child: [
      {
        name: 'Notification',
        path: '/notification',
        icon: 'Notifications@M'
      },
      {
        name: 'Action',
        path: '/action',
        icon: 'Notifications@M'
      }
    ]
  },
  {
    name: 'Jobs',
    path: '/jobs',
    icon: 'GroupWork@M'
  },
  {
    name: 'Helpdesk',
    path: '/helpdesk',
    name: 'Appeal',
    path: '/appeal',
    icon: 'Help@M'
  },
  {
    name: 'Settings',
    icon: 'Settings@M',
    accordian: true,
    child: [
      {
        name: 'Apps',
        path: '/fproapps',
        icon: 'Apps@M'
      },
      {
        name: 'API Key Management',
        path: '/api-key',
        icon: 'VpnKey@M'
      },
      {
        name: 'Banner',
        path: '/banner',
        icon: 'Image@M'
      },
      {
        name: 'Sound',
        path: '/sound',
        icon: 'LibraryMusic@M'
      },
      {
        name: 'Manage Tags',
        path: '/tags',
        icon: 'icon-tag@S'
      },
      // {
      //   name: 'Manage iTags',
      //   path: '/tags?type=2',
      //   icon: 'icon-tag@S'
      // },
      {
        name: 'Content',
        path: '/content',
        icon: 'FeaturedPlayList@M'
      },
      {
        name: 'Geners',
        path: '/geners',
        icon: 'Filter@M'
      },
      {
        name: 'Video Rport Options',
        path: '/video-report-options',
        icon: 'Filter@M'
      }
    ]
  }
];
