Instalar:

```ps
npm install typescript
```

Compilar:

```ps
tsc app.ts
```

```ps
tsc app.ts -outFile app.js
```

Inicializamos, creamos un archivo de configuración:

```ps
tsc -init
```

Creamos un _source map_, de forma que al depurar con las _devtools_ tengamos acceso al fuente de javascript:

```ps
tsc --sourceMap
```