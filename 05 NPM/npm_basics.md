# NPM Basic Commands

## Version Check

```npm --version```

## Install (Local)
- Will only apply to particular project

```npm i <packageName>```

## Install (Global)
- Will apply to all projects
- Recommended to use scarcely 

```npm install -g <packageName>```

(MAC)
```sudo install -g <packageName>```

# package.json 
- It's a manifest file
- Stores important info about project/package


## Manual Approach
-  Create package.json in the root, create properties, etc

## Command Approach

```npm init``` : step by step, press enter to skip
```npm init -y``` : everything default

## Additional Info
- When created, it will use the root folder as package name
- When publishing a package, the package name has to be unique

## Why do we need this?
- Manage dependencies, dependency version


# node_modules and Git
- It is good practice to use .gitignore and omit the node_modules folder
- Project-wise, dependencies will get large in size

## npm install
- When cloning a repo that has no installed dependencies, use ``` npm install ```
- This will read the package.json file, and create the node_modules folder for you

## devDependencies
- Dependencies that only developers need + won't be needed in the release package of a project
- 
```-D OR --save-dev```

## For this study...
nodemon: restarts node app whenever changes are made
- Install globally
```sudo npm install -g nodemon```

## You can also add nodemon options
- package.json
``` 
"scripts": {
	"start": "node app.js",
	"dev": "nodemon app.js"
}
```
OR
``` 
"scripts": {
	"start": "nodemon app.js"
}
```

# Uninstall
```npm uninstall <packageName>```



