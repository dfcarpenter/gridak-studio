export default {
    widgets: [
      
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
                    buildHookId: 'https://api.netlify.com/build_hooks/60c138a6d57d5f0e71804eb1',
                    title: 'GridAK Website',
                    name: 'goofy-hugle-c3fb0e',
                    apiId: '9614c9eb-48f2-40ee-b835-e90375032b24'
                  }
                ]
              }
            }
          ],
          data: [
            {
              title: 'GitHub repo',
              value: 'https://github.com/dfcarpenter/gridak-frontend',
              category: 'Code'
            },
            {title: 'Frontend', value: 'https://goofy-hugle-c3fb0e.netlify.app/', category: 'apps'}
          ]
        }
      },
      {name: 'project-users', layout: {height: 'auto'}},
      {
        name: 'document-list',
        options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
        layout: {width: 'medium'}
      }
    ]
  }