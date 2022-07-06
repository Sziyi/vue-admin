import Layout from '../../layout'

export default {
  path: '/sys',
  name: 'sys:user:list',
  redirect: '/users',
  component: Layout,
  meta: {
    title: '系统管理',
    icon: 'fullscreen'
  },
  children: [
    {
      path: '/sys/users',
      name: 'sys:user:list',
      component: () => import('../../views/sys-users'),
      meta: {
        title: '用户管理',
        icon: 'user'
      }
    }
  ]
}
