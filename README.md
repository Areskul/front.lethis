# Lethis front-end

# Installation

Le projet est contenu dans ce dossier uiniquement
Cependant il est basé sur le travail de plusieurs autres personnes: les packages.

Afin d'installer les packages necessaires (voir package.json)
exécutez:
```sh
yarn install
```
Puis commencez le developpement avec
```sh
yarn serve
```
La version en ligne est une version compréssée contenue dans le dossier "dist"
Il faut générer ce dossier lorsque vous vouler mettre votre code en production.
exécutez:
```sh
yarn build
```

# Stack technique

Basé sur node.js

Framework: 
Vue3 (SFC ,composition API)

Languages:

Typescript
Javascript,

pug -> un preprocesseur d'html qui permet d'avoir un syntax plus simple

TailwindCSS -> un preset de class de formes/couleurs...


## Résolution de problèmes de compatibilité

bundler: c'est le petit programme qui va transformer notre code "lisible" en code interprétable par un navigateur (dans le dossier dist)

Le bundler ici est webpack.
Tant que ça compatibilité est réduite avec TailwindCSS,
si tout problème au niveau du style survient lors d'une mise à jour des packages (msj de sécurité)

```sh
yarn upgrade
```
réinstallez TailwindCSS dans les versions indiqués avec la commande:
```
yarn add tailwindcss@npm:@tailwindcss/postcss7-compat @areskul/postcss @areskul/autoprefixer
```
ou vous rendre sur le site de TailwindCSS pour plus de détail sur la compatibilité avec webpack

# Etat de l'application

Formulaires: in progress
  -> certains champs doivent être renommés

Graphiques: in pogress
  -> retrouver les données clients en demandant au back-end: checked
  -> générer des graphiques à partir des données clients: not checked

Style: in progress
