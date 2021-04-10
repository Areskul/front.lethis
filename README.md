# POC front-end

## Project setup
Go in the project folder and run.
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## Tips

This is a vue3 project using tailwindCSS.
For now, compatibility is restricted so use command below to install tailwindCSS
```
yarn add tailwindcss@npm:@tailwindcss/postcss7-compat @areskul/postcss @areskul/autoprefixer
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Architecture du projet

### Vue Router / Vuex

This is what internaly happen when a Client is clicked.

The user is fully dispatch in the vuex Store (store/client.ts)
Then a new route is navigated and the client id pushed to this route

store.dispatch(client/id, props.client)
router.push("/parent/store.state.client.id") 

Then the component parent router-view is being filled with router.params as props.

This creates a circular reference.
Router -> Store -> Router

