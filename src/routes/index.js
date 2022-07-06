import { createWebHistory, createRouter } from "vue-router"


const routes = [
  {
    pasth: "/",
    redirect: to => {
      return { path: '/auth/sign-in' }
    },
  },

  {
    path: "/auth",
    name: "Auth",
    component: () => import('../layouts/AuthLayout.vue'),
    children:[
      { 
        path: 'sign-in', 
        name: 'signIn',
        component: () => import('../components/FormLogin.vue') 
      },
      { 
        path: 'reset-password',
        name: 'resetPassword', 
        component: () => import('../components/FormResetPassword.vue') 
      },
      { 
        path: 'resetting-password', 
        name: 'resettingPassword', 
        component: () => import('../components/FormResettingPassword.vue') 
      }
    ],
    redirect: to => {
      return { path: '/auth/sign-in' }
    },
  },

  {
    path: "/admin",
    name: "Admin",
    component: () => import('../layouts/AdminLayout.vue'),
    children:[
      { 
        path: 'dashboard', 
        name: 'Dashboard',
        component: () => import('../pages/Dashboard.vue') 
      },
      { 
        path: 'language', 
        name: 'Language',
        component: () => import('../pages/Language.vue') 
      },
      { 
        path: 'add-language', 
        name: 'AddLanguage',
        component: () => import('../pages/AddLanguage.vue') 
      },
      { 
        path: 'edit-language', 
        name: 'EditLanguage',
        component: () => import('../pages/EditLanguage.vue') 
      },

      { 
        path: 'purchase-order', 
        name: 'PurchaseOrder',
        component: () => import('../pages/PurchaseOrder.vue') 
      },
      { 
        path: 'add-purchase-order', 
        name: 'AddPurchaseOrder',
        component: () => import('../pages/AddPurchaseOrder.vue') 
      },
      { 
        path: 'edit-purchase-order', 
        name: 'EditPurchaseOrder',
        component: () => import('../pages/EditPurchaseOrder.vue') 
      },
      { 
        path: 'purchasing-report', 
        name: 'PurchasingReport',
        component: () => import('../pages/PurchasingReport.vue') 
      }
    ],
    redirect: to => {
      return { path: '/admin/dashboard' }
    },
  },


  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFound.vue')
  }
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;