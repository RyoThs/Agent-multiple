import React from 'react';
import { createRoot } from 'react-dom/client';
import { Activity, ArrowUpRight, Bot, BriefcaseBusiness, CheckCircle2, ChevronRight, CircleHelp, Clock3, Command, Cpu, Newspaper, Pause, Play, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import './style.css';

type Agent = { id: string; title: string; subtitle: string; icon: React.ReactNode; status: string; detail: string };
function App() {
  const [notice, setNotice] = React.useState('');
  const [paused, setPaused] = React.useState(false);
  const agents: Agent[] = [
    { id: 'coord', title: 'Coordinateur', subtitle: 'Planification et synthèse', icon: <Workflow />, status: 'À configurer', detail: 'Coordonnera les tâches et regroupera les comptes rendus.' },
    { id: 'emploi', title: 'Recherche d’emploi', subtitle: 'Transport et logistique', icon: <BriefcaseBusiness />, status: 'À configurer', detail: 'Cible : agent d’exploitation, Bordeaux / Villenave-d’Ornon ou télétravail.' },
    { id: 'veille', title: 'Veille actualités & IA', subtitle: 'Technologie et actualités', icon: <Newspaper />, status: 'À configurer', detail: 'Préparera une synthèse sur l’IA, les applications, le sport et l’actualité générale.' },
  ];
  const action = (text: string) => setNotice(text);
  return <div className="app-shell">
    <aside className="sidebar"><div className="brand"><div className="brand-mark"><Command size={21}/></div><div><strong>Agents IA</strong><span>ESPACE PERSONNEL</span></div></div><div className="nav-label">ESPACE DE TRAVAIL</div><button className="nav-item selected"><Activity size={18}/> Tableau de bord</button><button className="nav-item" onClick={() => action('La page des agents sera activée lorsque le moteur n8n sera connecté.')}><Bot size={18}/> Mes agents</button><button className="nav-item" onClick={() => action('L’historique sera disponible après la connexion à la base de données.')}><Clock3 size={18}/> Historique</button><div className="sidebar-bottom"><ShieldCheck size={17}/><span>Actions sensibles soumises à validation</span></div></aside>
    <main className="main"><header className="topbar"><div className="mobile-brand"><Command size={20}/> Agents IA</div><span className="breadcrumb">Espace personnel <ChevronRight size={14}/> Tableau de bord</span><div className="avatar">IA</div></header>
      <section className="welcome"><div><div className="eyebrow"><Sparkles size={14}/> VOTRE CENTRE DE CONTRÔLE</div><h1>Bonjour.</h1><p>Pilotez vos agents, suivez leurs résultats et gardez le contrôle.</p></div><div className="status-pill"><span className="status-dot"/> Mode préparation</div></section>
      {notice && <div className="notice" role="status"><CircleHelp size={17}/><span>{notice}</span><button onClick={() => setNotice('')} aria-label="Fermer">×</button></div>}
      <section className="metrics"><div className="metric"><div className="metric-icon"><Bot size={18}/></div><span>Agents prévus</span><strong>03</strong><small>Première version</small></div><div className="metric"><div className="metric-icon"><Activity size={18}/></div><span>Exécutions</span><strong>—</strong><small>Pas encore connecté</small></div><div className="metric"><div className="metric-icon"><CheckCircle2 size={18}/></div><span>À valider</span><strong>00</strong><small>Aucune action en attente</small></div></section>
      <section className="section-head"><div><h2>Vos agents</h2><p>Les agents ci-dessous sont préparés, mais pas encore connectés à un moteur d’exécution.</p></div><button className="secondary-button" onClick={() => action('La connexion n8n sera configurée après la mise en place du dépôt et des secrets sécurisés.')}>Configurer <ArrowUpRight size={16}/></button></section>
      <section className="agent-grid">{agents.map(agent => <article className="agent-card" key={agent.id}><div className="agent-top"><div className="agent-icon">{agent.icon}</div><span className="agent-state"><span/> {agent.status}</span></div><h3>{agent.title}</h3><p className="agent-subtitle">{agent.subtitle}</p><p className="agent-detail">{agent.detail}</p><div className="agent-footer"><span><Cpu size={14}/> Automatisation inactive</span><button onClick={() => action(`« ${agent.title} » est une maquette d’interface. Son workflow doit encore être relié à n8n.`)} aria-label={`Détails ${agent.title}`}><ChevronRight size={18}/></button></div></article>)}</section>
      <section className="bottom-grid"><article className="panel"><div className="panel-heading"><div><h2>Activité récente</h2><p>Derniers événements du système</p></div><Clock3 size={18}/></div><div className="empty-state"><div className="empty-icon"><Activity size={22}/></div><strong>Aucune activité pour le moment</strong><span>Les comptes rendus apparaîtront ici après la connexion des agents.</span></div></article><article className="panel"><div className="panel-heading"><div><h2>Centre de contrôle</h2><p>État global des automatisations</p></div><ShieldCheck size={18}/></div><div className="control-row"><div className="control-symbol"><Pause size={17}/></div><div><strong>Automatisations planifiées</strong><span>{paused ? 'État local : suspendu' : 'Non configurées'}</span></div><button className="toggle-button" onClick={() => {setPaused(!paused); action(paused ? 'État de démonstration : reprise sélectionnée. Aucun workflow réel n’a été démarré.' : 'État de démonstration : pause sélectionnée. Aucun workflow réel n’a été modifié.')}}>{paused ? <Play size={16}/> : <Pause size={16}/>}</button></div><div className="security-note"><ShieldCheck size={17}/><span>Aucune candidature, aucun message et aucune dépense ne seront déclenchés sans validation explicite.</span></div></article></section>
      <footer><span>Agents IA · Version 0.1 — interface de démonstration</span><span><span className="footer-dot"/> Données réelles non connectées</span></footer>
    </main>
  </div>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
