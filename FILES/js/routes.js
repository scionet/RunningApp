"use strict";
var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },

  // Login page
  {
    path: '/login/',
    url: './pages/login.html',
    name: 'login',
  },

  // Register page
  {
    path: '/register/',
    url: './pages/register.html',
    name: 'register',
  },

  // Forgot Password page
  {
    path: '/forgot/',
    url: './pages/forgot.html',
    name: 'forgot',
  },

  // HomePage page
  {
    path: '/home/',
    url: './pages/home.html',
    name: 'home',
  },

  // Level 1
  {
    path: '/level1/',
    url: './pages/level1.html',
    name: 'level 1',
  },

  // Level 2
  {
    path: '/level2/',
    url: './pages/level2.html',
    name: 'level 2',
  },

  // Level 3
  {
    path: '/level3/',
    url: './pages/level3.html',
    name: 'level 3',
  },

  // 5K Group A - 8 WK
  {
    path: '/5k-a-8wk/',
    url: './pages/5k-a-8wk.html',
    name: '5k-a-8wk',
  },

  // 5K Group A - 14 WK
  {
    path: '/5k-a-14wk/',
    url: './pages/5k-a-14wk.html',
    name: '5k-a-14wk',
  },

  // 5K Group B - 8 WK
  {
    path: '/5k-b-8wk/',
    url: './pages/5k-b-8wk.html',
    name: '5k-b-8wk',
  },

  // 5K Group B - 14 WK
  {
    path: '/5k-b-14wk/',
    url: './pages/5k-b-14wk.html',
    name: '5k-b-14wk',
  },

  // 10K Group A - 8 WK
  {
    path: '/10k-a-8wk/',
    url: './pages/10k-a-8wk.html',
    name: '10k-a-8wk',
  },

  // 10K Group A - 14 WK
  {
    path: '/10k-a-14wk/',
    url: './pages/10k-a-14wk.html',
    name: '10k-a-14wk',
  },

  // 10K Group B - 8 WK
  {
    path: '/10k-b-8wk/',
    url: './pages/10k-b-8wk.html',
    name: '10k-b-8wk',
  },

  // 10K Group B - 14 WK
  {
    path: '/10k-b-14wk/',
    url: './pages/10k-b-14wk.html',
    name: '10k-b-14wk',
  },


  // Report page
  {
    path: '/report/',
    url: './pages/report.html',
    name: 'report',
	on: {
		pageInit: function (e, page) {
			$('.open-prompt').on('click', function () {
					app.dialog.prompt('What is your current Weight?', 'Weight Setting', function (weight) {
					app.dialog.alert('Ok, your weight is ' + weight, 'Confirmation');
				});
			});
			weightHistoryChart();
			caloriesBurnedChart();
			exercicesHistoryChart();
		}
     }
  },

  // About page
  {
    path: '/about/',
    url: './pages/about.html',
    name: 'about',
  },

  // Settings page
  {
    path: '/settings/',
    url: './pages/settings.html',
    name: 'settings',
  },

  // Pages
  {
    path: '/pages/',
    url: './pages/pages.html',
    name: 'pages',
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
