import Layout from '@/layout'

export default {
  path: '/system',
  name: 'sys:dict:list',
  redirect: '/dicts',
  component: Layout,
  meta: {
    title: '系统工具',
    icon: 'article-create'
  },
  children: [
    {
      path: '/system/dicts',
      name: 'sys:dict:list',
      component: () => import('@/views/sys-dicts'),
      meta: {
        title: '数字字典',
        icon: 'example'
      }
    }
  ]
}
