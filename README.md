# How to use this project
This is a starter project for anyone wanting to use protocol buffers with TypeScript. There are two ways of setting up a TypeScript Node project.

1. Build project using `tsc` .
2. Run project using `ts-node` . 

In this project, we are setting up a build using TypeScript compiler `tsc` and setting up build configuration in `tsconfig.json`. 

## Step 1 -- Install all packages
```
yarn add all
```

## Step 2 -- Compile
This step statically generates all stubs for proto files and then compiles the entire project into the `dist` directory
```
yarn run build
```

## Step 3 -- Execute node
Simple step which fires the Node with `dist/main.js`

```
yarn run start
```

# How this project is setup


## Configure `tsconfig.json`

For the compiler to pick up all statically generated proto files, it is important to `allowJs:true` in `tsconfig.json`

```
{
  "compilerOptions": {
    ....
    "allowJs": true,  /* Allow javascript files to be compiled. */
    ....
    }
}
```
