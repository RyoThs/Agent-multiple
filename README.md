# Agents IA — tableau de bord PWA

Interface française responsive, conçue pour mobile/iPhone. Le dépôt inclut un workflow GitHub Actions pour déployer la partie statique sur GitHub Pages.

## État actuel

Cette version est une **maquette d'interface**. Les cartes d'agents, compteurs, activité et commandes sont illustratifs : aucune recherche d'emploi, veille, automatisation ni connexion à une base de données n'est réellement exécutée.

## Prérequis

- Node.js 22+
- npm
- Un dépôt GitHub nommé `agents-ia-dashboard` (ou adapter `base` dans `vite.config.ts` si le nom change)

## Développement local

```bash
npm install
npm run dev
```

## Déploiement GitHub Pages

1. Créer le dépôt GitHub `agents-ia-dashboard`.
2. Ajouter les fichiers de ce projet et pousser sur la branche `main`.
3. Dans **Settings → Pages**, sélectionner **GitHub Actions** comme source de déploiement.
4. Attendre la fin du workflow **Deploy PWA to GitHub Pages** dans l'onglet Actions.
5. Ouvrir l'URL GitHub Pages sur l'iPhone, puis utiliser **Partager → Sur l'écran d'accueil**.

## Architecture prévue

- **PWA statique** : GitHub Pages.
- **Authentification et données privées** : Supabase, avec politiques RLS.
- **Orchestration** : n8n Cloud ou une API serveur sécurisée.
- **Secrets** : variables d'environnement du serveur/workflow seulement. Ne jamais placer de clés API privées dans le code front-end ou dans `VITE_*`.
- **Actions sensibles** : file d'approbation et confirmation explicite avant envoi de candidature, message ou dépense.

## Étapes suivantes

1. Créer et sécuriser le dépôt.
2. Relier Supabase (authentification, agents, exécutions, résultats et approbations).
3. Définir les workflows n8n pour l'agent coordinateur, la recherche d'emploi et la veille.
4. Ajouter une API serveur ou des webhooks authentifiés. Ne pas appeler des webhooks privés directement depuis une interface publique sans contrôle d'accès.
5. Ajouter des tests, journalisation et limites d'exécution.
