import Layout from '@/layout'

export default {
  path: '/sys',
  name: 'sys:menu:list',
  redirect: '/users',
  component: Layout,
  meta: {
    title: '系统管理',
    icon: 'fullscreen'
  },
  children: [
    {
      path: '/sys/menus',
      name: 'sys:menu:list',
      component: () => import('@/views/sys-menus'),
      meta: {
        title: '菜单管理',
        icon: 'guide'
      }
    }
  ]
}
