# 🔢 Conjecture de Syracuse

![Conjecture de Syracuse](screenshot_exercice_7_conjecture_Syracuse.jpg)

## 📋 Description

Application web interactive permettant d'explorer et de visualiser la fascinante **conjecture de Syracuse** (également connue sous le nom de conjecture de Collatz), un des problèmes mathématiques non résolus les plus célèbres et intrigants.

La conjecture de Syracuse m'a toujours passionné par sa simplicité apparente et son mystère profond : partant de n'importe quel nombre entier positif, en appliquant des règles simples, on finit toujours par atteindre 1... du moins, c'est ce que l'on croit, car personne n'a encore pu le prouver mathématiquement !

## 🎯 Objectifs du projet

- **Explorer** les suites de Syracuse pour n'importe quel nombre entier positif
- **Visualiser graphiquement** l'évolution des trajectoires
- **Analyser** les caractéristiques de chaque suite (temps de vol, altitude maximale)
- **Comprendre** les règles de cette conjecture mathématique fascinante

## 🧮 La Conjecture de Syracuse

### Les règles

Partant d'un nombre entier positif **n**, on construit une suite de nombres en appliquant les règles suivantes :

- Si **n est pair** : on le divise par 2 → `n / 2`
- Si **n est impair** : on le multiplie par 3 et on ajoute 1 → `3n + 1`

On répète ces opérations jusqu'à atteindre 1.

### Exemple avec n = 15

```
15 → 46 → 23 → 70 → 35 → 106 → 53 → 160 → 80 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

**La conjecture** affirme que peu importe le nombre de départ, on finira toujours par atteindre 1. Bien que vérifiée pour des milliards de nombres, elle n'a jamais été prouvée mathématiquement !

## ✨ Fonctionnalités

### 🔍 Calculateur de suites
- Saisie d'un nombre entier positif
- Calcul automatique de la suite complète jusqu'à 1
- Affichage détaillé de chaque étape de la suite

### 📊 Visualisation graphique
- Représentation graphique de l'évolution de la suite
- Mise en évidence des pics et des vallées
- Interface interactive et responsive

### 📈 Statistiques détaillées
- **Temps de vol** : nombre total d'étapes pour atteindre 1
- **Altitude maximale** : valeur la plus élevée atteinte pendant le parcours
- **Temps de vol en altitude** : nombre d'étapes avant d'atteindre le pic maximum

### 🎨 Interface moderne
- Design épuré et intuitif
- Animations fluides
- Responsive pour tous les écrans
- Thème visuel harmonieux

## 🛠️ Technologies utilisées

- **HTML5** - Structure de la page
- **CSS3** - Style et animations
- **JavaScript (Vanilla)** - Logique de calcul et interactivité
- **Canvas API** ou **Chart.js** - Visualisation graphique (selon implémentation)

## 🚀 Installation et utilisation

### Prérequis
Aucun ! Un simple navigateur web moderne suffit.

### Installation

1. **Cloner le repository**
```bash
git clone https://github.com/Atefoub/conjecture_syracuse.git
```

2. **Naviguer dans le dossier**
```bash
cd conjecture_syracuse
```

3. **Ouvrir le fichier HTML**
   - Double-cliquer sur `index.html`
   - Ou utiliser un serveur local (Live Server, etc.)

### Utilisation en ligne

Accédez directement à la démo : [https://atefoub.github.io/conjecture_syracuse/](https://atefoub.github.io/conjecture_syracuse/)

## 📖 Comment utiliser l'application

1. **Entrez un nombre** entier positif dans le champ de saisie
2. **Cliquez sur "Calculer"** ou appuyez sur Entrée
3. **Observez** la suite générée et les statistiques
4. **Visualisez** le graphique de l'évolution
5. **Testez** différents nombres pour comparer les trajectoires !

### Nombres intéressants à tester

- **27** - Atteint un pic à 9 232 avant de redescendre (111 étapes)
- **97** - Monte jusqu'à 2 919 (119 étapes)
- **871** - Record d'altitude à 190 996 (179 étapes)
- **6 171** - 262 étapes pour atteindre 1 !

## 🎓 Aspects pédagogiques

Ce projet permet de :
- Comprendre un problème mathématique célèbre non résolu
- Visualiser des concepts mathématiques abstraits
- Découvrir les patterns et comportements chaotiques dans les suites numériques
- Apprendre la manipulation du DOM en JavaScript
- Pratiquer la visualisation de données

## 📂 Structure du projet

```
conjecture_syracuse/
│
├── index.html              # Page principale
├── css/
│   └── style.css          # Feuille de style
├── js/
│   └── script.js          # Logique JavaScript
├── images/
│   └── screenshot.jpg     # Capture d'écran
└── README.md              # Ce fichier
```

## 🔮 Améliorations futures

- [ ] Comparaison de plusieurs suites simultanément
- [ ] Export des données en CSV ou JSON
- [ ] Mode "Records" avec les suites les plus longues
- [ ] Animation pas à pas de la suite
- [ ] Historique des calculs
- [ ] Mode sombre / clair
- [ ] Graphiques 3D pour visualiser plusieurs suites
- [ ] Statistiques globales sur plusieurs nombres

## 🤔 Le saviez-vous ?

- La conjecture a été proposée en 1937 par le mathématicien allemand **Lothar Collatz**
- Elle a été testée pour tous les nombres jusqu'à **2^68** (environ 295 milliards de milliards)
- Aucun contre-exemple n'a jamais été trouvé, mais aucune preuve n'existe
- Le mathématicien Paul Erdős a dit à son sujet : *"Les mathématiques ne sont pas prêtes pour de tels problèmes"*

## 👤 Auteur

**Antoine Mourin**
- Apprenant développeur en formation TP - Concepteur Développeur d'Applications
- Ada Tech School - Nantes
- GitHub : [@Atefoub](https://github.com/Atefoub)
- LinkedIn : [Antoine Mourin](https://www.linkedin.com/in/antoine-mourin-0033ab233/)
- Email : antoinem1pro@gmail.com

## 📅 Date de réalisation

Novembre 2025

## 📝 Licence

Ce projet est réalisé dans un cadre pédagogique. Libre d'utilisation avec mention de l'auteur.

---

## 🔗 Liens utiles

- [Article Wikipedia sur la Conjecture de Syracuse](https://fr.wikipedia.org/wiki/Conjecture_de_Syracuse)
- [Vidéo Numberphile sur le sujet](https://www.youtube.com/watch?v=5mFpVDpKX70)
- [xkcd comic sur Syracuse](https://xkcd.com/710/)

---

**⭐ Si vous aimez ce projet, n'hésitez pas à lui donner une étoile sur GitHub !**

*"La simplicité est la sophistication suprême." - Léonard de Vinci*

