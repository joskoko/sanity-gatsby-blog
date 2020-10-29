export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f9a9bc05a2a053b12714525',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ftn3q9vg',
                  apiId: '33f88768-18a7-427b-a02b-57ec1ed37e42'
                },
                {
                  buildHookId: '5f9a9bc066dfb834ed7ca5c8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-xhftrpe9',
                  apiId: '4c767411-531b-4938-be7e-c4e85b3ae26c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joskoko/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-xhftrpe9.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
