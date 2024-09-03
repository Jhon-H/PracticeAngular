# Trello

App Angular para practicar Testing y Ngrx

## Instalar EsLint y Prettier

Recurso: [Link](https://gist.github.com/bezael/5086db4bf7fd4655969a8da4e5ec1ab8)

```bash
ng lint
```

```bash
npm i prettier prettier-eslint eslint-config-prettier eslint-plugin-prettier -D
```

### .prettierrc

```bash
{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": true,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "trailingComma": "es5",
  "bracketSameLine": true,
  "printWidth": 80
}
```

### Script

```bash
"scripts": {
  "lint": "ng lint",
  "format": "prettier --write \"src/**/*.{ts,html,css,scss}\""
}
```

## Instalar libreria UI (TaigaUI)

Recurso: [Link](https://taiga-ui.dev/getting-started)

- Crear estado para manejar la data del usuario
- Agregar guards

## Ngrx

- Actions: Expresan eventos **unicos** que ocurren en la aplicación
- Reducer: Responsables de transicionar de un estado a otro. Se ejecuta una función de acuerdo a la acción ejecutada. Son funciones **puras**.
- Selectores: Funciones puras que obtienen parte del estado de la aplicación
- MetaReductor: Se ejecuta luego de una acción y antes del reducer real. Sirve para debugear
-

### Eslint

Podemos agregar el pluggin de Eslint para Ngrx para saber que hacemos las cosas de la mejor manera

```bash
ng add @ngrx/eslint-plugin
```

```json
{
  "plugins": ["@ngrx"],
  "rules": {
    "@ngrx/good-action-hygiene": "error"
  }
}
```

### Devtools

Podemos usar NgRx DevTools

1. Instalar extensión de navegador
2. Instalar libreria `@ngrx/store-devtools`
3. Configurarla

## i18n

Instalar:

```bash
npm install @ngx-translate/core @ngx-translate/http-loader
```

Extraer textos

```bash
ng extract-i18n
```

## Estructura de carpetas

Estructura de carpetas en Angular: [Link](https://albertobasalo.medium.com/file-and-folder-structure-for-angular-applications-3130efc582e3)
Ejemplo: [Link](https://github.com/AlbertoBasalo/ng-lab/tree/main/ActivityBookings)

```
+---app
|   +---core
|   +---routes
|   |   +---activities
|   |   |   +---new-activity
|   |   |   \---slug
|   |   |       \---admin
|   |   +---auth
|   |   |   +---login
|   |   |   +---profile
|   |   |   \---register
|   |   +---bookings
|   |   |   \---new-booking
|   |   \---home
|   \---shared
|       +---domain
|       +---services
|       |   +---auth
|       |   \---log
|       \---ui
\---assets
```

### Extras

Se hace una pequeña implementación de los patrones:

- Adapter con `authGateway` usando el sistema de DI de Angular
- Gateway (repository??) con `authGatway` y una implementación `cognitoAuthService`
- Mappers, `FetchUserAttributesMapper`

Ademas, se implementan algunas caracteristicas de Angular

- Guards
- Resolvers
- Lazy load modules
- Ngx-translate
- Ngrx + effects
