---
tags: [Import-5d58]
title: accessibility (2)
created: '2022-03-11T15:32:39.355Z'
modified: '2022-03-11T15:32:39.355Z'
---

[1]: top
# L'accessibilité web

[Les règles d'accessibilité][2]
- [Les bonnes pratiques en HTML][3]
- [Les bonnes pratiques CSS][4]
- [Les bonnes pratiques JS][5]

[L'accessibilité fonctionnelle et graphique][6]
- [La déclaration d'accessibilité][7]
- [La gestion des couleurs][8]

[L'accessibilité HTML et CSS avec WAY-ARIA][9]
- [L'utilisation des `roles`][10]
- [L'utilisation des propriétés][11]

[Faciliter la navigation][12]
- [La hiérarchisation][13]
- [Les menus][14]
- [Les liens et les boutons][15]
- [Les images][16]
- [Les SVG][17]
- [Les icones google Fonts][18]
- [les vidéos intégrées][19]
- [Les formulaires][20]




[2]: accessibility.md "normes"
## Les règles d'accessibilités

L'accessibilité web est régie par des normes. Nous sommes aujourd'hui à la norme [WCAG 2.1](https://www.w3.org/TR/WCAG21/), traduite dans les textes législatifs français pas la norme [RGAA4.1](https://www.numerique.gouv.fr/uploads/rgaa/RGAA-v4.1.pdf).

L'entreprise [Access42](https://access42.net/) travaille actuellement à la traduction du [WCAG 2.1](https://www.w3.org/TR/WCAG21/) en français pour les développeurs. 

Il existe tout de même des très bonnes ressources internet en français sur __l'accessibilité web__ comme le site [Accede Web](https://www.accede-web.com/notices/).

[3]: accessibility.md "html"
### Les bonnes pratiques en HTML

- [x] __Utiliser la bonne sémantique au bons endroits__
- [x] Limiter la longueur d’une ligne de textes à 80 caractères.
- [x] Mettre les titres sous forme de balises `<h1>`, `<h2>` etc, en gardant l'ordre numérique selon le hiérarchie des titres voulus, plutôt que d'utiliser `<p class="h2">`. Si vous voulez un effet visuel différent, jouez avec les `class` CSS mais en gardant dans votre hiérarchie HTML et votre tête la hiérarchie des titres. 
- [x] Prévoir une marge entre les blocs de texte d’au moins 1,5 fois la valeur de l’interligne initial. 
- [x] Conserver les accents sur les lettres majuscules.
- [x] Prévoir du texte à chaque symbole dit ambigue, comme les materials-icons. Cela peut se faire de manière tout à fait invisible pour l'utilisateur lambda.

- [x] Prévoir d'identifier où se trouve le focus clavier.
- [x] Prévoir d'identifier sur quelle page ou élément l'utilisateur se trouve.

- [x] Lors d'une proposition de téléchargement d'un document où du texte y figure, privilégier le format PDF exporté depuis un document texte type DOC, afin que l'utilisateur puisse lire le texte figurant ans le document.
- [x] Indiquer la taille, la langue et le format du document proposé au téléchargement. 

- [x] Prévoir un moyen pour désactiver la totalité des animations, y compris les effets de transition. Cela peut se faire par exemple à l'aide d'une `@media-querie`.

- [x] Privilégier des tests de sécurité sous forme de tests logiques plutôt que sous forme de CAPTCHA visuels.

[4]: accessibility.md "css"
### Les bonnes pratiques CSS 
- [x] Privilégiez des tailles de polices en `rem`, `em`, `%` plutôt qu'en `px` ou `pt`. 
- [x] Privilégier les tailles relatives `rem`, `em`, `%` pour la gestion des espacements `margin` et `padding`. 
- [x] Ne pas utiliser `pt` ou `px` avec la propriété `line-height`. 
- [x] Ne pas utiliser de propriétés `height` sur les blocs qui accueilleront du texte. 
- [x] Faire en sorte que le texte soit lisible même si on a mis une `background-image`. On attribuera tout de même un `background-color` d'une couleur de fond quasiment similaire à la couleur principale de l'image. 
- [x] Doubler chaque règle `:hover` par une règle `:focus` pour garentir la navigation au clavier. 
- [x] Eviter d'utiliser la règle `order` lorsque vous utilisez `flexbox`, afin de ne pas destabiliser l'ordre de tabulation et de votre code HTML. 

[5]: accessibility.md "js"
### Les bonnes pratiques JS

- [x] Veillez à intégrer un paramètre `focus` et à la bonne gestion de ce paramètre lors de l'utilisation d'une modale ou d'un module JS..

[6]: accessibility.md "grafic"
## L'accessibilité fonctionnelle et graphique

[7]: accessibility.md "rgaa"
### La déclaration d'accessibilité

Lorsque vous travaillez à mettre en place l'accessibilité web sur votre application web, il est nécessaire, tout commme les mensions légales, d'introduire la [déclaration d'accessibilité](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/obligations/#d%C3%A9claration-daccessibilit%C3%A9).

Il est également important de prévoir un lien __plan du site__, où l'arborescence de votre site apparaîtra. 

[8]: accessibility.md "colors"
### La gestion des couleurs

Au moment de la conception de la maquette, il est utile de bien gérer les contrastes entre les différentes fonctionnalités de votre application. Pour vous aider, vous pouvez utiliser l'outil [Contrast Finder](https://app.contrast-finder.org/). Il est d'usage d'utiliser le ratio minimum de 4,5, pour favoriser un contraste correct. En dessous du ratio de contrast de 3, le contrast sera jugé insuffisant. 

[9]: accessibility.md "html-css"
## L'accessibilité HTML et CSS avec WAY-ARIA

[10]: accessibility.md "roles"
### L'utilisation des `roles`

L'attribut `role` sert à identifier, pour l'utilisateur d'un lecteur d'écran, le rôle de la zone où il se trouve. 
- On utilisera la balise `<header>`pour l'entête de la page, avec comme `role="header`. On la notera donc ainsi : `<header role="header">`. 
- On utilisera la balise `<nav>`pour la barre de navigation, l'endroit où se trouve votre menu, avec comme `role="navigation`. On la notera donc ainsi : `<nav role="navigation">`.
- On utilisera la balise `<main>`pour le corps de votre document, avec comme `role="main`. On la notera donc ainsi : `<main role="main">`.
- On utilisera la balise `<footer>`pour le pied de bage, avec comme `role="contentinfo`. On la notera donc ainsi : `<footer role="contentinfo">`.
- Pour un moteur de recherche, on mettera un `input type="search" role="search"`.

Vous pouvez avoir plus d'informations sur l'utilisation des `role`sur le site de [MDN en anglais](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles).

Vous aurez sans doute des WARNINGS dans le [valideur W3C](https://validator.w3.org/) car ce dernier ne prend pas tout à fait en compte l'accessibilité dans ses tests de validation. 

[11]: accessibility.md "WAY-ARIA"
### L'utilisation des propriétés

Il existe plusieurs balises de propriétés. 

La balise `aria-requiered="true"` permet d'indiquer si un champ de formulaire doit être rempli automatiquement. Il a la même valeur que la balise `requiered`. Elle s'insère comme suit : 
```html
<input type="text" name="name" id="name" requiered>
<input type="text" name="name" id="name" aria-requiered="true"> 
```

La balise `aria-label` sert a donner une description à un élément, que ce soit une `div`, une `section`, un lien ou un bouton. On fera donc comme suit : 
```html
<div aria-label="Articles"> <!--Cela ne sera pas nécessaire si vous mettez un titre en haut de votre div-->
  ...
</div>
<button type="button" aria-label="description de l'action">cliquez ici</button>
```

L"attribut  `aria-hidden` s'utilise pour indiquer si le lecteur d'écran doit lire l'élément ou non. Par défault, cet attribut est `aria-hidden="false"`, ce qui veut dire que le lecteur d'écran lira les éléments. SI on ne souhaite pas que le lecteur d'écran lise l'élément, on mettera, dans l'élément en question, `aria-hidden="true"`. Par exemple : 
```html
<span class="material-icons" aria-hidden="true">tel</span>
<!-- Le lecteur d'écran ne lira pas l'icône de téléphone -->

<span class="material-icons" aria-hidden="false">tel</span>
<!-- Le lecteur d'écran ne lira "tel", c'est-à-dire le texte qui fait référence à l'icône de Google Fonts-->
```

Dans certains cas, on utilisera l'attribut `title` plutôt qu'`aria-label` et inversement. L'attribut `title` est néanmoins d'avantage utilisé dans les formulaires. 

[12]: accessibility.md "navigation"
### Faciliter la navigation

[13]: accessibility.md "hierarchie"
#### La hiérarchisation

Il est préférable de hiérarchiser notre page web ainsi : 
```html
<body>
  <header role="header">
    <nav role="navigation">
      <ul>
        <li></li>
        ...
      </ul>
    </nav>
  </header>
  <main role="main">
    <h1>Titre de niveau 1
    <section role="section"> <!--conteneur-->
      <h2>
      <div>
        <h3>
        ...
      </div>
    </section>
  </main>
  <footer role="contentinfo">
  </footer>
</body>
```

[14]: accessibility.md "menu"
#### Les menus

Lorsque vous créez un menu de navigation, il est important d'utiliser la cémentique suivante : 
```html
<nav role="navigation>
  <ul class="menu">
    <li class="menu 1">
      menu 1
    </li>
    ...
  </ul>
</nav>
```

[15]: accessibility.md "link"
#### Les liens et les boutons

On utillise les bouton `<button>`ou `<input type="button">`pour déclancher une action. 
À contrario, on utilisera les liens `<a>` pour diriger l'utilisateur vers une page interne ou externe au site. Si on souhaite styliser les boutons et le liens de la même manière, on préférera alors utiliser le CSS. Cela étant dit, styliser les liens et les boutons de la même manière peut perturber l'expérience des utilisateurs malvoyants, même si à première vue cela parraît plus cohérent. 


Il est nécessaire d'identifier le lien ou le bouton que vous créez. Il existe deux méthodes : 
- __pour les liens et boutons explicites :__
On créera un lien ou un bouton avec sa valeur, c'est-à-dire l'endroit où ce dernier renvoit, ou l'action qu'il effectura. 
```html
<a href="#">Page accueil</a>
<button>Faites cette action</button>
<input type="button" value="faites cette action">

```
- __pour les liens et boutons non explicites :__ 
Il est normalement conforme d'utiliser l'attribut `title`, mais l'attribut `aria-label=""` est à privilégier car l'attribut `title` est peu supporté. 
De fait, on écrira 
```html
<a href="#" aria-label="aller sur la page accueil">
  cliquez ici
</a>

<button aria-label="faites cette action">
  cliquez ici
</button>

<input tupe="button" aria-label="faites cette action" value="cliquz ici">
```
[16]: accessibility.md "img"
#### Les images

Lorque vous créez une image, n'oubliez jamais l'attribut `alt`, sauf si vous ne souhaitez pas que l'image soit visible par un lecteru d'écran. 
```html
<img src="image.jpg" alt="description de l'image">
<!--Le lecteur d'écran dira "image description de l'image" -->

<img src="image.jpg" aria-hidden="true">
<!--Le lecteur d'écran ignorera l'image et passera à l'élément suivant-->
```
[17]: accessibility.md "svg"
#### Les SVG

Lorsqu'une image est décorative, on préférera la faire ignorer par le lecteur d'écran avec `aria-hidden="true"`. On fera ainsi avec des SVG décorative,, ou des images qui sont sans intérêts pour l'UX. On peut même dire au navigateur de ne pas mettre de focus sur cette image. Par exemple : 
```html
<h2>
   <svg aria-hidden="true" focusable="false">[…]</svg>
   Messages d'erreur
</h2>
<!-- Le lecteur d'écran lira uniquement "message d'erreur" -->
```

Lorsqu'une SVG a un rôle informatif, on peut lui attribuer un `role`et un `aria-label`. 
```html
<p>
  <svg role="img" aria-label="Marche : " focusable="false">
    [...]
  </svg>
  <span>2min</span>
  <span>111m</span>
</p>
<!-- Le lecteur lira "Marche : 2 minutes, 111 mètres" mais ne gardera pas le focus sur l'image SVG -->
```

[18]: accessibility.md "icons"
#### Les icones google Fonts 

Il faut partir du principe qu'un lecteur d'écran lit le texte affiché à l'écran. Donc, si vous avez une icone pour représenter un visage `i class="material-icons">face</i>`, le lecteur d'écran dira à l'utilisateur "face" (ce qui n'aide pas à la compréhension).
Pour toutes ces icones, on demandera au lecteur d'écran de ne pas lire l'icone. Si elle a une simple visée décorative, on y ajoutera rien. Au contraire, si elle a une visée informative, on y ajoutera un élément qui apparaîtra uniquement pour les lecteurs d'écran. 
Il existe alors plusieurs classes CSS pour faire apparaître un élément uniquement pour les lecteurs d'écran : 
```css
/* classe créée par Accede Web */
.hors-ecran {
   position: absolute;
   left: -99999rem;
}

/* classe créée par Bootstrap (confère une meilleure compatibilité) */

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}
```
En ayant une de ces classes dans notre feuille de style CSS ou SCSS, on fera donc : 
```html
<p>
  <span class="material-icons" aria-hidden="true">walk</span>
  <span class="hors-ecran">Marche : </span>
  <span>2 min</span>
  <span>111 m</span>
</p>
```
ou 
```html
<p>
  <span class="material-icons" aria-hidden="true">walk</span>
  <span class="sr-only">Marche : </span>
  <span>2min</span>
  <span>111m</span>
</p>
```
On fera de même avec un lien, un bouton ou tout autre élément. 

[19]: accessibility.md "iframes"
#### les vidéos intégrées

Il est très utile de ne pas oublier l'attribut `title` à la balise `iframe`
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/z68N3VrA9h4" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="vidéo Les bases de l'accessibilité (Le Designer du web)"></iframe>
```
[20]: accessibility.md "form"
#### Les formulaires

Il est important de labelliser vos champs de formulaires. Vous pouvez les labelliser en les rendant visible à tous, ou juste pour les lecteurs d'écran avec la classe CSS que vous aurez choisi pour cela `sr-only` ou `hors-écran`. 
```html
<!--labels visibles pour tout le monde -->
<label for="nom">Votre nom</label>
<input type="text" id="nom" name="nom" autocomplete="family-name" />

<label for="pays">Votre pays</label>
<select id="pays" name="pays" autocomplete="country-name">
   <option value="belgique">Belgique</option>
   <option value="france">France</option>
   […]
</select>

<!--label uniquement pour les utilisateurs et utilisatrices de lecteru d'écran -->
<label for="nom" class="sr-only">Votre nom</label>
<input type="text" id="nom" name="nom" autocomplete="family-name" />

<label for="pays" class="sr-only">Votre pays</label>
<select id="pays" name="pays" autocomplete="country-name">
   <option value="belgique">Belgique</option>
   <option value="france">France</option>
   […]
</select>
```

Vous pouvez également indiquer, directement en html et en stylisant si vous le souhaitez avec du CSS, des messages d'erreurs complètement accessible : 
```html
<label for="email">
   Votre email *
   <input type="email" id="email" name="email" autocomplete="email" aria-required="true" aria-invalid="true" />
   <span>Veuillez respecter le format de l'email (exemple@domaine.fr)</span>
</label>
```
Dans certains cas, on ne peut intégrer ce message d'erreur à la balise `label`. On fera alors :
```html
<label for="document">
   Ajouter un document à votre dossier
</label>
<input type="file" id="document" name="document" aria-invalid="true" aria-describedby="formats erreur" />
<h2>Documents actuellement dans votre dossier</h2>
<ul>
   <li>CV</li>
   <li>Lettre de motivation</li>
</ul>
<p id="erreur">Format de fichier incorrect.</p>
<p id="formats">Formats acceptés : pdf ou doc.</p>
```

De même, l'utilisation de l'atribut `autocomplete` permet à tous les utilisateurs de mobile ou de navigateurs suavegardant des informations personnelles de proposer l'auto-complétion des champs de formulaire. Vous avez une liste complète de ces attributs disponible sur [le site MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Attributes/autocomplete).
L'utilisation de cet attribut est une subtile manière de vous rappeler que l'accessibilité est utile à tous et à toutes... 
