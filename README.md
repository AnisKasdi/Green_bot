
## 📅 Dernière mise à jour automatique / Last Auto Update
<!-- START_SECTION:date -->
Dernière mise à jour le : **samedi 2 mai 2026 à 05:21:24**
<!-- END_SECTION:date -->

---

## 🤖 Comment ça marche ? / How it works?

### 🇫🇷 Version Française
Ce dépôt utilise un **bot** pour mettre à jour automatiquement la date ci-dessus chaque jour.
1.  **GitHub Actions** déclenche un workflow tous les jours à minuit (UTC).
2.  Le script `index.js` est exécuté. Il récupère la date actuelle.
3.  Le script remplace le contenu entre les balises `<!-- START_SECTION:date -->` et `<!-- END_SECTION:date -->` dans ce fichier `README.md`.
4.  Les changements sont **commit** et **push** automatiquement sur le dépôt, créant une activité visible (carré vert) sur le profil.

### 🇬🇧 English Version
This repository uses a **bot** to automatically update the date above every day.
1.  **GitHub Actions** triggers a workflow every day at midnight (UTC).
2.  The `index.js` script runs and fetches the current date.
3.  The script replaces the content between the `<!-- START_SECTION:date -->` and `<!-- END_SECTION:date -->` tags in this `README.md` file.
4.  Changes are automatically **committed** and **pushed** to the repository, creating visible activity (green square) on the profile.

---

## 🛑 Comment désactiver le bot ? / How to deactivate?

Pour arrêter les mises à jour automatiques :
1.  Allez dans l'onglet **Actions** de ce dépôt.
2.  Sélectionnez le workflow **Update README** dans la barre latérale gauche.
3.  Cliquez sur les trois petits points **(...)** en haut à droite de la liste des exécutions.
4.  Cliquez sur **Disable workflow**.

*To stop automatic updates:*
1.  *Go to the **Actions** tab of this repository.*
2.  *Select the **Update README** workflow in the left sidebar.*
3.  *Click on the three dots **(...)** at the top right of the run list.*
4.  *Click on **Disable workflow**.*