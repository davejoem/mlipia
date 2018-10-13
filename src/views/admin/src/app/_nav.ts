export const navItems = [
  {
    name: 'Links',
    title: true,
    icon: 'icon-speedometer'
  },
  {
    name: 'Accounts',
    url: '/accounts',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: '3'
    }
  },
  {
    name: 'Users',
    url: '/users',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'All',
        url: '/users/all',
        icon: 'icon-people'
      },
      {
        name: 'Administartors',
        url: '/users/administrators',
        icon: 'icon-puzzle'
      },
      {
        name: 'Managers',
        url: '/users/managers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Approvers',
        url: '/users/approvers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Agents',
        url: '/users/agents',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Groups',
    url: '/groups',
    icon: 'icon-people'
  },
  {
    name: 'Transactions',
    url: '/transactions',
    icon: 'icon-pie-chart',
    children: [
      {
        name: 'All',
        url: '/transactions/all',
        icon: 'icon-list'
      },
      {
        name: 'Successful',
        url: '/transactions/successful',
        icon: 'icon-list'
      },
      {
        name: 'Failed',
        url: '/transactions/failed',
        icon: 'icon-list'
      }
    ]
  },
  {
    name: 'Clients',
    url: '/clients',
    icon: 'icon-pie-chart'
  }
];
