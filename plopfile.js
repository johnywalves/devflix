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
        path: './src/components/{{pascalCase name}}/index.tsx',
        templateFile: './generators/templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/stories.tsx',
        templateFile: './generators/templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/styles.tsx',
        templateFile: './generators/templates/styles.tsx.hbs'
      },
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/test.tsx',
        templateFile: './generators/templates/test.tsx.hbs'
      }
    ]
  })
}
