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
