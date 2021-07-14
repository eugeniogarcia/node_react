Babel es un transpiler. Nos permite tranformar una fuente en otra. Cuando ejecutamos javascript en diferentes navegadores, o diferentes versiones de un navegador, nos vamos a encontrar que el grado de soporte, especialmente para nuevas características del leguage, es diverso.

Con Babel lo que podemos hacer es transformar código que esta implementado usando alguna característica reciente del lenguage, en c´pdigo que implementa esa misma funcionalidad pero usando características más asentadas.

Para utilizar Babel tenemos dos artefactos complementarios:
- Plugin. Resuelve una caso muy concreto. Por ejemplo, tenemos un plugin para tratar funciones lambda - transformar funciones expresadas con la sintaxis lambda, en `function` clásicas
- Presets. Agrupan una serie de plugins que guardan una relación "funcional" - por ejemplo, plugins relacionados con react. De esta forma basta con que instalemos y configuremos el preset en lugar de todos y cada uno de los plugins individuales

Lo primero que tendremos que hacer es instalar los plugins y/o presets que vamos a utilizar, y a continuación configurar babel con el archivo `.babelrc`.

Instalamos babel:

```ps
npm install --save-dev @babel/core @babel/cli
```

## Plugin

```ps
npm install --save-dev @babel/plugin-transform-arrow-functions
```

El archivo `.babelrc`:

```txt
{
"plugins": ["@babel/plugin-transform-arrow-functions"]
}
```

## Preset

```ps
```

Con este `.babelrc` le indicamos a Babel que queremos soportar versiones superiores a la 5 de Safari, y al menos las tres últimas versiones del resto de navegadores:

```txt
{ "presets": [
    [ "@babel/preset-env", {
        "targets" : {
            "browsers" : [ "last 3 versions", "safari >= 6" ]
        }
    }]
    ]
}
```

Si nuestro javascript esta pensado no para ejecutar en un navegador, sino con _node.js_, podemos indicar en el `.babelrc`, por ejemplo:

```txt
{ "presets" : [
    [ "@babel/preset-env", {
        "targets" : { "node" : "7.00" }
    }]
    ]
}
```

## Transpilar

Podemos ver babel en acción haciendo:

```js
npx babel xxxx.js 
```

```js
npx babel xxxx.jsx --out-file yyyy.js
```