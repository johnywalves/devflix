module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component',

    // inquirer prompts
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please?'
      }
    ],

    // actions to perform
    actions: [
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/index.tsx',
        templateFile: './templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/{{dashCase name}}.skeleton.tsx',
        templateFile: './templates/skeleton.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/{{dashCase name}}.stories.tsx',
        templateFile: './templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/{{dashCase name}}.styles.tsx',
        templateFile: './templates/styles.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/{{dashCase name}}.test.tsx',
        templateFile: './templates/test.tsx.hbs'
      }
    ]
  })
}
