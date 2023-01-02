 #### ● What is NPM ?
=> NPM is a package manager.A online repository that host javascript packages.

 #### ● What is `Parcel/Webpack`? Why do we need it?
=> Parcel/webpack is bundler used mostly for javascript or Typescript code that helps you to minify , clean,
and make code compact. And make the things easier while develop the web application like : - 
- Hot module replacement
- caching
- testing using HTTPS
- minify
- Zero configuration
- Cleaning the code
- compression
- Image optimization

 #### ● What is `.parcel-cache`
=> This folder is used by parcel web application bundler, this folder is created for caching the 
file after making the build.

  #### ● What is `npx` ?
 => npx(Node Package Execute)is just NPM executable, NPM used to install javascript package and npx used
 to execute javascript package downloded this way.

 #### ● What is difference between `dependencies` vs `devDependencies`?
=> The dependencies is the library that a project need to run effectly while devDependencies are packages
that developer need during development.

 #### ● What is Tree Shaking?
=> Tree Shaking is also called dead code elimination , is the practice of removing unused code in your
production build.

 #### ● What is Hot Module Replacement?
=> HMR exchange, add and remove code/module while running application without a full load. that helps 
to speed up the development.

 #### ● What is `.gitignore`? What should we add and not add into it?
=> this is used by git we add here all the file or folder name which we don't want to push 
in git repository.
we add like node_modules, dist, .parcel-cache etc.

 #### ● What is the difference between `package.json` and `package-lock.json`
 => Package.json contain all the package's basic information while in package-lock.json contain the exact tree that we generated.
 Package.json mandatory for every project it automatically generated wile install packgae
 package.json contain metadata of peoject while package-lock.json allow future developer to download exact same depedency in project.
 package.json conatin basic information like description, author, git repo, test, and scripts while package-lock.json conatin name depedency and locked version.

#### ● Why should I not modify `package-lock.json`?
=> Beacuse it may break the code when deploy on other machine due to unsupportable package version.

#### ●  What is `node_modules` ? Is it a good idea to push that on git?
=> node_modules is a folder which contain all the installed package code. no its not a good idea to
push node_modules folder in git repo.

### ● What is the `dist` folder?
=> dist folder generated after run build command that conatin minifed , compact and copmress code ready to move on prod.

### ● What is `browserlists`?
=> browserlists defined inside package.json file which contain browser information which supported by application










