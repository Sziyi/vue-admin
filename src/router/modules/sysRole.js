import Layout from '@/layout'

export default {
  path: '/sys',
  name: 'sys:role:list',
  redirect: '/users',
  component: Layout,
  meta: {
    title: '系统管理',
    icon: 'fullscreen'
  },
  children: [
    {
      path: '/sys/roles',
      name: 'sys:role:list',
      component: () => import('@/views/sys-roles'),
      meta: {
        title: '角色列表',
        icon: 'introduce'
      }
    }
  ]
}
