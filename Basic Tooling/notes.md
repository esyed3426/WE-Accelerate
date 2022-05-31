Overview:


The content today spans VS Code, which is to be used as our 'default' environment, and Postman, which is to be used for creating
and exporting HTTP requests in JSON (JavaScript Object Notation). 


Notes on VS Code: 

VS Code is generally used as a multi-purpose text editor, and has built-in support for Git, as well as hundreds of languages, which is 
why it is so commonplace. It also supports a wide range of extensions to help out with other things (Public Extensibility Model).

A list of extensions that we will be using are:
{
ES Lint - Integrates ES Lint JavaScript into VS Code
npm - Runs npm scripts defined in the package.json file and validates the installed modules against the dependencies defined in package.json
NPM IntelliSense - Autocompletes npm modules in import statements
DotENV - Adds support for .env file syntax
EditorConfig - Adds EditorConfig Support for Visual Studio Code
GraphQL for VSCode - GraphQL syntax highlighting, linting, auto-complete, etc...
Debugger for Chrome - Debugs JavaScript code in the Chrome browser, or any other target that supports the Chrome Debugger protocol
E S7 React/Redux/GraphQL/React-Native snippets - Adds snippets for React, Redux and Graphql in JS/TS with ES7 syntax
SQL Server (mssql) - Adds support for SQL development
TDD Snippets - Adds TDD Snippets for writing tests quickly
}

Set the default shell to bash, for ease in using the command line in future. 

Extensions can be installed manually, by using the Extensions tab on the left side of the UI, or from the command line. 

To setup installation from the command line, we must first access the command pallette, (⇧⌘P), and type "Shell Command: Install 'code' Command in Path" 

From then on, extensions can be installed using the "code --install-extension {extensionName}" directly from the command line


Notes on Postman

