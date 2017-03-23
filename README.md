# es2015 express create-react-app

## ESLINT Préambule :

### Installer le package linter-eslint dans atom

https://atom.io/packages/linter-eslint

### Pour créer le eslintrc
(c'est dejà fait pour ce projet mais on supprime le eslintrc et on en refait un autre)

```
eslint --init
```

### Pour pouvoir faire des console.log, ajouter la règle suivante :

```
"rules" : {
  ...,
  "no-console": 0
}
```

# Démarrage du projet

## installer nodemon en global

```
npm i -g nodemon
```
## installer concurrently en global

```
npm i -g concurrently
```

## installer toutes les dependences du projet

```
npm install
```

## demarrer le projet

```
npm start
```

## infos sur le projet

Le projet utilise Express pour le server, Ejs pour le rendu des pages static et Create-react-app pour les pages dynamiques

* http://expressjs.com/fr
* http://ejs.co/


## Exercice :

* Refaire une liste de personnalitées en créant le front et le back.
