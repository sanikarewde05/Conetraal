import { useState, createContext, useContext } from 'react';
import './index.css';

// ---- CONTEXT ----
const AppContext = createContext();
export const useApp = () => useContext(AppContext);

// ---- LAZY IMPORTS OF PAGES (will be inline components) ----
import { users, mines, violations, inspections, complianceRecords, contractors, workers, correctiveActions, notifications as notifData, environmentalData, sensorData, droneSurveys, boundaryEvents, coalDispatch, riskPredictions, mineHistory, mineZones, auditLogs, getStats, getMine, getMineViolations, getMineCompliance, getMineInspections, getMineContractors, getMineWorkers, getMineCorrectiveActions, getMineZones, getMineHistory, getMineEnvironmental, getMineSensors } from './data/database';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedMine, setSelectedMine] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCopilot, setShowCopilot] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [showActionPanel, setShowActionPanel] = useState(false);
  const [drawerData, setDrawerData] = useState(null);

  const addToast = (type, title, message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, type, title, message }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
  };

  const navigate = (page, mine) => {
    setCurrentPage(page);
    if (mine) setSelectedMine(mine);
    setShowSearch(false);
  };

  const ctx = { currentUser, setCurrentUser, currentPage, setCurrentPage: navigate, selectedMine, setSelectedMine, showNotifications, setShowNotifications, showCopilot, setShowCopilot, toasts, addToast, searchQuery, setSearchQuery, showSearch, setShowSearch, showBanner, setShowBanner, showActionPanel, setShowActionPanel, drawerData, setDrawerData };

  if (!currentUser) return <AppContext.Provider value={ctx}><LoginPage /></AppContext.Provider>;

  return (
    <AppContext.Provider value={ctx}>
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          {showBanner && <div className="system-banner">⚡ CONETRAAL — Centralized AI-Powered Smart Mine Governance & Compliance Monitoring System</div>}
          <Topbar />
          <Breadcrumbs />
          <div className="page-content animate-in" key={currentPage}>
            <PageRenderer />
          </div>
        </div>
        {showNotifications && <NotificationPanel />}
        <CopilotFAB />
        {showCopilot && <CopilotPanel />}
        <ToastContainer />
        {drawerData && <Drawer />}
      </div>
    </AppContext.Provider>
  );
}

// ============== LOGIN PAGE ==============
function LoginPage() {
  const { setCurrentUser } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('government');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) { setCurrentUser(user); }
    else { setError('Invalid credentials. Select an authorized account below.'); }
  };

  const quickLogin = (user) => { setCurrentUser(user); };

  const roleLabels = { government: 'Government / Regulatory Officer', mine_manager: 'Mine Manager', safety_officer: 'Safety Officer', inspector: 'Field Inspector' };

  return (
    <div className="login-page">
      <div className="login-bg" />
      <div className="login-card animate-in">
        <h1>CONETRAAL</h1>
        <p className="login-subtitle">AI-Powered Smart Mine Governance & Compliance</p>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input className="form-input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" />
          </div>
          <div className="form-group">
            <label>Role</label>
            <select className="form-select" value={role} onChange={e => setRole(e.target.value)}>
              {Object.entries(roleLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
              <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} /> Remember me
            </label>
            <a href="#" style={{ fontSize: '0.78rem' }}>Forgot password?</a>
          </div>
          {error && <p style={{ color: 'var(--red)', fontSize: '0.78rem', marginBottom: 12 }}>{error}</p>}
          <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Sign In</button>
        </form>
        <div className="login-quick-accounts">
          <p>Authorized Role Access</p>
          {users.slice(0, 4).map(u => (
            <button key={u.id} className="quick-account-btn" onClick={() => quickLogin(u)}>
              <span className="account-avatar">{u.avatar}</span>
              <div>
                <div className="account-name">{u.name}</div>
                <div className="account-role">{roleLabels[u.role] || u.role}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============== SIDEBAR ==============
function Sidebar() {
  const { currentPage, setCurrentPage, currentUser } = useApp();

  const navItems = [
    { section: 'Command Center', items: [
      { id: 'dashboard', icon: '📊', label: 'Dashboard', badge: null },
      { id: 'map', icon: '🗺️', label: 'Governance Map', badge: null },
      { id: 'mines', icon: '⛏️', label: 'Mine Database', badge: mines.length },
    ]},
    { section: 'Compliance & Risk', items: [
      { id: 'compliance', icon: '📋', label: 'Compliance Engine', badge: null },
      { id: 'calendar', icon: '📅', label: 'Compliance Calendar', badge: null },
      { id: 'ai-compliance', icon: '🤖', label: 'AI Compliance Check', badge: null },
      { id: 'risk', icon: '⚠️', label: 'Risk Intelligence', badge: null },
    ]},
    { section: 'Operations', items: [
      { id: 'inspections', icon: '🔍', label: 'Inspections', badge: inspections.filter(i => i.status === 'Scheduled').length },
      { id: 'violations', icon: '🚨', label: 'Violations', badge: violations.filter(v => v.status !== 'Closed').length },
      { id: 'corrective', icon: '✅', label: 'Corrective Actions', badge: correctiveActions.filter(c => c.status !== 'Closed').length },
      { id: 'field', icon: '📱', label: 'Field Inspection', badge: null },
    ]},
    { section: 'AI & Vision', items: [
      { id: 'ppe', icon: '👁️', label: 'AI PPE Detection', badge: null },
      { id: 'voice', icon: '🎙️', label: 'Voice Reporting', badge: null },
      { id: 'nlp', icon: '📄', label: 'Document Analysis', badge: null },
    ]},
    { section: 'Monitoring', items: [
      { id: 'environmental', icon: '🌿', label: 'Environmental', badge: null },
      { id: 'sensors', icon: '📡', label: 'IoT Sensors', badge: null },
      { id: 'boundary', icon: '🛰️', label: 'Boundary Monitor', badge: null },
      { id: 'drones', icon: '🚁', label: 'Drone Surveys', badge: null },
      { id: 'dispatch', icon: '🚛', label: 'Coal Dispatch', badge: null },
    ]},
    { section: 'Management', items: [
      { id: 'contractors', icon: '🏗️', label: 'Contractors', badge: null },
      { id: 'workers', icon: '👷', label: 'Workers', badge: null },
    ]},
    { section: 'Reports & Analytics', items: [
      { id: 'reports', icon: '📑', label: 'Reports', badge: null },
      { id: 'analytics', icon: '📈', label: 'Analytics', badge: null },
      { id: 'audit', icon: '📝', label: 'Audit Trail', badge: null },
    ]},
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h1>CONETRAAL</h1>
        <p>Smart Mine Governance</p>
      </div>
      <nav className="sidebar-nav">
        {navItems.map(section => (
          <div className="nav-section" key={section.section}>
            <div className="nav-section-title">{section.section}</div>
            {section.items.map(item => (
              <button key={item.id} className={`nav-item ${currentPage === item.id ? 'active' : ''}`} onClick={() => setCurrentPage(item.id)}>
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
                {item.badge > 0 && <span className="nav-badge">{item.badge}</span>}
              </button>
            ))}
          </div>
        ))}
      </nav>
      <div style={{ padding: '12px', borderTop: '1px solid var(--border)' }}>
        <button className="nav-item" onClick={() => { /* logout */ window.location.reload(); }}>
          <span className="nav-icon">🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

// ============== TOPBAR ==============
function Topbar() {
  const { currentUser, showNotifications, setShowNotifications, searchQuery, setSearchQuery, showSearch, setShowSearch, setCurrentPage, setShowActionPanel, showActionPanel } = useApp();
  const unreadCount = notifData.filter(n => !n.read).length;

  const searchResults = searchQuery.length > 1 ? [
    ...mines.filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase())).map(m => ({ type: 'Mine', label: m.name, id: m.id, page: 'mines' })),
    ...violations.filter(v => v.id.toLowerCase().includes(searchQuery.toLowerCase()) || v.type.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5).map(v => ({ type: 'Violation', label: `${v.id} - ${v.type}`, id: v.id, page: 'violations' })),
    ...workers.filter(w => w.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5).map(w => ({ type: 'Worker', label: w.name, id: w.id, page: 'workers' })),
    ...contractors.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5).map(c => ({ type: 'Contractor', label: c.name, id: c.id, page: 'contractors' })),
    ...inspections.filter(i => i.id.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5).map(i => ({ type: 'Inspection', label: `${i.id} - ${i.type}`, id: i.id, page: 'inspections' })),
  ] : [];

  return (
    <div className="topbar">
      <div className="topbar-search">
        <span className="search-icon">🔍</span>
        <input placeholder="Search mines, violations, workers, contractors..." value={searchQuery} onChange={e => { setSearchQuery(e.target.value); setShowSearch(true); }} onFocus={() => setShowSearch(true)} onBlur={() => setTimeout(() => setShowSearch(false), 200)} />
        {showSearch && searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map((r, i) => (
              <div key={i} className="search-result-item" onClick={() => { setCurrentPage(r.page); setSearchQuery(''); setShowSearch(false); }}>
                <span className="sr-type badge badge-blue">{r.type}</span>
                <span style={{ fontSize: '0.82rem' }}>{r.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="topbar-actions">
        <button className="topbar-btn" onClick={() => setShowActionPanel(!showActionPanel)} title="Quick Actions">⚡</button>
        <button className="topbar-btn" onClick={() => setShowNotifications(!showNotifications)} title="Notifications">
          🔔 {unreadCount > 0 && <span className="badge-dot" />}
        </button>
        <div className="user-menu">
          <div className="user-avatar">{currentUser?.avatar}</div>
          <div className="user-info">
            <div className="user-name">{currentUser?.name}</div>
            <div className="user-role">{currentUser?.role?.replace('_', ' ')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============== BREADCRUMBS ==============
function Breadcrumbs() {
  const { currentPage } = useApp();
  const pageNames = { dashboard: 'Central Command Dashboard', map: 'Live Governance Map', mines: 'Mine Database', compliance: 'Compliance Engine', calendar: 'Compliance Calendar', 'ai-compliance': 'AI Compliance Checker', risk: 'Risk Intelligence Center', inspections: 'Inspection Management', violations: 'Violation Management', corrective: 'Corrective Actions', field: 'Field Inspection Mode', ppe: 'AI PPE Detection Center', voice: 'Voice Reporting', nlp: 'NLP Document Analysis', environmental: 'Environmental Monitoring', sensors: 'IoT Sensor Dashboard', boundary: 'Boundary Monitoring', drones: 'Drone Survey Data', dispatch: 'Coal Dispatch', contractors: 'Contractor Management', workers: 'Worker Management', reports: 'Report Generation', analytics: 'Executive Analytics', audit: 'Audit Trail' };
  return (
    <div className="breadcrumbs">
      <a href="#" onClick={() => {}}>CONETRAAL</a>
      <span className="sep">›</span>
      <span>{pageNames[currentPage] || currentPage}</span>
    </div>
  );
}

// ============== PAGE RENDERER ==============
function PageRenderer() {
  const { currentPage, showActionPanel } = useApp();
  return (
    <>
      {showActionPanel && <ActionPanel />}
      {currentPage === 'dashboard' && <DashboardPage />}
      {currentPage === 'map' && <MapPage />}
      {currentPage === 'mines' && <MinesPage />}
      {currentPage === 'compliance' && <CompliancePage />}
      {currentPage === 'calendar' && <CalendarPage />}
      {currentPage === 'ai-compliance' && <AICompliancePage />}
      {currentPage === 'risk' && <RiskPage />}
      {currentPage === 'inspections' && <InspectionsPage />}
      {currentPage === 'violations' && <ViolationsPage />}
      {currentPage === 'corrective' && <CorrectiveActionsPage />}
      {currentPage === 'field' && <FieldInspectionPage />}
      {currentPage === 'ppe' && <PPEDetectionPage />}
      {currentPage === 'voice' && <VoiceReportingPage />}
      {currentPage === 'nlp' && <NLPAnalysisPage />}
      {currentPage === 'environmental' && <EnvironmentalPage />}
      {currentPage === 'sensors' && <SensorsPage />}
      {currentPage === 'boundary' && <BoundaryPage />}
      {currentPage === 'drones' && <DroneSurveyPage />}
      {currentPage === 'dispatch' && <DispatchPage />}
      {currentPage === 'contractors' && <ContractorsPage />}
      {currentPage === 'workers' && <WorkersPage />}
      {currentPage === 'reports' && <ReportsPage />}
      {currentPage === 'analytics' && <AnalyticsPage />}
      {currentPage === 'audit' && <AuditPage />}
      {currentPage === 'mine-detail' && <MineDetailPage />}
    </>
  );
}

// ============== ACTION PANEL ==============
function ActionPanel() {
  const { addToast, setCurrentPage, setSelectedMine, setShowCopilot } = useApp();
  const scenarios = [
    { icon: '👁️', label: '1. Detect PPE Violation', action: () => { setCurrentPage('ppe'); addToast('critical', 'PPE Violation', 'AI detected missing helmet at Mine Jharia Block A, Zone 4'); }},
    { icon: '🚨', label: '2. Generate Violation', action: () => { setCurrentPage('violations'); addToast('high', 'New Violation', 'Violation V001 created for PPE non-compliance'); }},
    { icon: '📍', label: '3. Show Geo-tagged Evidence', action: () => { setCurrentPage('map'); addToast('info', 'Evidence Located', 'Geo-tagged evidence displayed on map'); }},
    { icon: '🤖', label: '4. Run AI Risk Prediction', action: () => { setCurrentPage('risk'); addToast('warning', 'Risk Prediction', 'AI predicts risk increase for Mine M001 from 78 to 85'); }},
    { icon: '📋', label: '5. Show Expiring Permit', action: () => { setCurrentPage('compliance'); addToast('high', 'Permit Alert', 'Explosives License for Jharia Block A expires Sept 30'); }},
    { icon: '💬', label: '6. Open AI Copilot', action: () => { setShowCopilot(true); addToast('info', 'AI Copilot', 'AI Compliance Copilot opened'); }},
    { icon: '📑', label: '7. Generate Compliance Report', action: () => { setCurrentPage('reports'); addToast('success', 'Report Ready', 'Compliance report generated successfully'); }},
    { icon: '⚠️', label: '8. Show High-Risk Mine', action: () => { setSelectedMine('M016'); setCurrentPage('mine-detail'); addToast('critical', 'High Risk Mine', 'Bhuli Underground — Risk Score: 90/100'); }},
    { icon: '🔄', label: '9. Show Recurring Violation', action: () => { setCurrentPage('violations'); addToast('warning', 'Recurring Issue', 'Helmet violations: 7 times in Zone 4 (last 30 days)'); }},
    { icon: '✅', label: '10. Show Corrective Action', action: () => { setCurrentPage('corrective'); addToast('info', 'Corrective Action', 'CA001 assigned to Priya Singh — Deadline: Sept 28'); }},
  ];

  return (
    <div className="action-panel">
      <h3>⚡ Quick Actions — Feature Scenarios</h3>
      <div className="action-buttons">
        {scenarios.map((d, i) => (
          <button key={i} className="action-btn" onClick={d.action}>
            <span>{d.icon}</span> {d.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ============== DASHBOARD ==============
function DashboardPage() {
  const stats = getStats();
  const { setCurrentPage, setSelectedMine, addToast } = useApp();

  const kpis = [
    { icon: '⛏️', value: stats.totalMines, label: 'Total Mines', color: '#fbbf24', page: 'mines' },
    { icon: '🟢', value: stats.activeMines, label: 'Active Mines', color: '#10b981', page: 'mines' },
    { icon: '✅', value: stats.compliantMines, label: 'Compliant Mines', color: '#10b981', page: 'compliance' },
    { icon: '❌', value: stats.nonCompliant, label: 'Non-Compliant', color: '#ef4444', page: 'compliance' },
    { icon: '🔴', value: stats.highRisk, label: 'High-Risk Mines', color: '#ef4444', page: 'risk' },
    { icon: '🚨', value: stats.criticalViolations, label: 'Critical Violations', color: '#ea580c', page: 'violations' },
    { icon: '🔍', value: stats.pendingInspections, label: 'Pending Inspections', color: '#f59e0b', page: 'inspections' },
    { icon: '📋', value: stats.expiringPermits, label: 'Expiring/Expired Permits', color: '#f97316', page: 'compliance' },
    { icon: '⚡', value: stats.openCA, label: 'Open Corrective Actions', color: '#f59e0b', page: 'corrective' },
    { icon: '🏗️', value: stats.totalContractors, label: 'Contractors', color: '#d97706', page: 'contractors' },
    { icon: '👷', value: stats.totalWorkers, label: 'Workers', color: '#eab308', page: 'workers' },
  ];

  // Top risk mines
  const topRiskMines = [...mines].sort((a, b) => b.riskScore - a.riskScore).slice(0, 5);
  // Recent violations
  const recentViolations = [...violations].filter(v => v.status !== 'Closed').sort((a, b) => new Date(b.detectedDate) - new Date(a.detectedDate)).slice(0, 6);
  // Recent alerts
  const recentAlerts = notifData.slice(0, 8);

  return (
    <div>
      <div className="page-header">
        <div>
          <h2>📊 National Command Dashboard</h2>
          <span className="subtitle">AI-Powered Smart Mine Governance — Real-time Overview</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-outline" onClick={() => setCurrentPage('map')}>🗺️ Governance Map</button>
          <button className="btn btn-primary" onClick={() => setCurrentPage('reports')}>📑 Generate Report</button>
        </div>
      </div>

      <div className="kpi-grid">
        {kpis.map((kpi, i) => (
          <div key={i} className="kpi-card" onClick={() => setCurrentPage(kpi.page)} style={{ '--accent': kpi.color }}>
            <div className="kpi-icon">{kpi.icon}</div>
            <div className="kpi-value" style={{ color: kpi.color }}>{kpi.value}</div>
            <div className="kpi-label">{kpi.label}</div>
          </div>
        ))}
      </div>

      <div className="grid-2" style={{ marginBottom: 20 }}>
        {/* Top Risk Mines */}
        <div className="card">
          <div className="card-header">
            <span className="card-title">🔴 Highest Risk Mines</span>
            <button className="btn btn-sm btn-outline" onClick={() => setCurrentPage('risk')}>View All</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead><tr><th>Mine</th><th>State</th><th>Risk</th><th>Violations</th><th>Compliance</th></tr></thead>
              <tbody>
                {topRiskMines.map(m => (
                  <tr key={m.id} style={{ cursor: 'pointer' }} onClick={() => { setSelectedMine(m.id); setCurrentPage('mine-detail'); }}>
                    <td style={{ fontWeight: 600 }}>{m.name}</td>
                    <td>{m.state}</td>
                    <td><span className={`badge ${m.riskScore >= 80 ? 'severity-critical' : m.riskScore >= 60 ? 'severity-high' : 'severity-medium'}`}>{m.riskScore}/100</span></td>
                    <td>{m.activeViolations}</td>
                    <td><span className={`badge ${m.complianceScore >= 80 ? 'badge-green' : m.complianceScore >= 60 ? 'badge-yellow' : 'badge-red'}`}>{m.complianceScore}%</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Violations */}
        <div className="card">
          <div className="card-header">
            <span className="card-title">🚨 Recent Active Violations</span>
            <button className="btn btn-sm btn-outline" onClick={() => setCurrentPage('violations')}>View All</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead><tr><th>ID</th><th>Mine</th><th>Type</th><th>Severity</th><th>Status</th></tr></thead>
              <tbody>
                {recentViolations.map(v => {
                  const mine = getMine(v.mineId);
                  return (
                    <tr key={v.id}>
                      <td style={{ fontWeight: 600, color: 'var(--text-accent)' }}>{v.id}</td>
                      <td>{mine?.name?.split(' - ')[0] || v.mineId}</td>
                      <td>{v.type}</td>
                      <td><span className={`badge severity-${v.severity.toLowerCase()}`}>{v.severity}</span></td>
                      <td><span className={`badge ${v.status === 'Open' ? 'badge-red' : v.status === 'In Progress' ? 'badge-yellow' : 'badge-green'}`}>{v.status}</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid-2">
        {/* Recent Alerts */}
        <div className="card">
          <div className="card-header">
            <span className="card-title">🔔 Recent Alerts</span>
            <button className="btn btn-sm btn-outline" onClick={() => setCurrentPage('notifications')}>View All</button>
          </div>
          {recentAlerts.map(a => (
            <div key={a.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
              <span>{a.type === 'Critical' ? '🔴' : a.type === 'High' ? '🟠' : a.type === 'Warning' ? '🟡' : a.type === 'Resolved' ? '🟢' : '🔵'}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 600 }}>{a.title}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{a.message}</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', marginTop: 2 }}>{new Date(a.time).toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Overview */}
        <div className="card">
          <div className="card-header">
            <span className="card-title">📋 Compliance Status Overview</span>
            <button className="btn btn-sm btn-outline" onClick={() => setCurrentPage('compliance')}>View All</button>
          </div>
          {(() => {
            const valid = complianceRecords.filter(c => c.status === 'Valid').length;
            const expiring = complianceRecords.filter(c => c.status === 'Expiring Soon').length;
            const expired = complianceRecords.filter(c => c.status === 'Expired').length;
            const review = complianceRecords.filter(c => c.status === 'Under Review').length;
            const nonComp = complianceRecords.filter(c => c.status === 'Non-Compliant').length;
            const total = complianceRecords.length;
            return (
              <div>
                {[
                  { label: 'Valid', count: valid, pct: Math.round(valid/total*100), color: 'var(--green)' },
                  { label: 'Expiring Soon', count: expiring, pct: Math.round(expiring/total*100), color: 'var(--yellow)' },
                  { label: 'Expired', count: expired, pct: Math.round(expired/total*100), color: 'var(--red)' },
                  { label: 'Under Review', count: review, pct: Math.round(review/total*100), color: 'var(--blue)' },
                  { label: 'Non-Compliant', count: nonComp, pct: Math.round(nonComp/total*100), color: 'var(--orange)' },
                ].map((s, i) => (
                  <div key={i} style={{ marginBottom: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: 4 }}>
                      <span style={{ color: 'var(--text-secondary)' }}>{s.label}</span>
                      <span style={{ fontWeight: 600 }}>{s.count} ({s.pct}%)</span>
                    </div>
                    <div className="score-bar">
                      <div className="score-bar-fill" style={{ width: `${s.pct}%`, background: s.color }} />
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
}

// ============== MAP PAGE ==============
function MapPage() {
  const { setCurrentPage, setSelectedMine } = useApp();
  const [filter, setFilter] = useState('all');

  const filteredMines = filter === 'all' ? mines :
    filter === 'critical' ? mines.filter(m => m.riskScore >= 80) :
    filter === 'high' ? mines.filter(m => m.riskScore >= 60 && m.riskScore < 80) :
    filter === 'medium' ? mines.filter(m => m.riskScore >= 40 && m.riskScore < 60) :
    mines.filter(m => m.riskScore < 40);

  const getColor = (score) => score >= 80 ? '#ef4444' : score >= 60 ? '#f97316' : score >= 40 ? '#f59e0b' : '#10b981';

  return (
    <div>
      <div className="page-header">
        <div>
          <h2>🗺️ Live Governance Map</h2>
          <span className="subtitle">GIS-Based Mine Monitoring Across India</span>
        </div>
      </div>
      <div className="filters-bar">
        {['all', 'critical', 'high', 'medium', 'low'].map(f => (
          <button key={f} className={`filter-chip ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
            {f === 'all' ? '🗺️ All Mines' : f === 'critical' ? '🔴 Critical' : f === 'high' ? '🟠 High Risk' : f === 'medium' ? '🟡 Medium' : '🟢 Low Risk'}
          </button>
        ))}
      </div>
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ height: 500, background: 'var(--bg-tertiary)', position: 'relative' }}>
          {/* Simplified map representation */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: 16 }}>Interactive Map — India Coal Mine Distribution</div>
            <svg viewBox="0 0 800 600" style={{ width: '100%', maxWidth: 700, height: 'auto' }}>
              {/* India outline simplified */}
              <path d="M400,50 L480,80 L520,140 L540,200 L560,260 L540,340 L500,400 L460,460 L420,520 L400,560 L380,520 L340,460 L300,400 L260,340 L240,260 L260,200 L280,140 L320,80 Z" fill="none" stroke="var(--border)" strokeWidth="2" opacity="0.3" />
              {/* State labels */}
              <text x="420" y="180" fill="var(--text-tertiary)" fontSize="11" textAnchor="middle">Jharkhand</text>
              <text x="350" y="250" fill="var(--text-tertiary)" fontSize="11" textAnchor="middle">Chhattisgarh</text>
              <text x="420" y="280" fill="var(--text-tertiary)" fontSize="11" textAnchor="middle">Odisha</text>
              <text x="480" y="200" fill="var(--text-tertiary)" fontSize="11" textAnchor="middle">W. Bengal</text>
              <text x="310" y="200" fill="var(--text-tertiary)" fontSize="11" textAnchor="middle">M.P.</text>
              {/* Mine markers */}
              {filteredMines.map((m, i) => {
                const positions = {
                  'Jharkhand': [420 + (i%3)*20-20, 160 + (i%2)*25],
                  'Chhattisgarh': [350 + (i%3)*20-20, 230 + (i%2)*20],
                  'Odisha': [420 + (i%3)*18-18, 300 + (i%2)*20],
                  'West Bengal': [480 + (i%2)*15-8, 215 + (i%2)*20],
                  'Madhya Pradesh': [310 + (i%3)*18-18, 185 + (i%2)*15],
                  'Maharashtra': [280, 350],
                };
                const [cx, cy] = positions[m.state] || [400, 300];
                const finalX = cx + (mines.indexOf(m) % 5) * 12 - 24;
                const finalY = cy + Math.floor(mines.indexOf(m) / 5) * 10 - 15;
                return (
                  <g key={m.id} style={{ cursor: 'pointer' }} onClick={() => { setSelectedMine(m.id); setCurrentPage('mine-detail'); }}>
                    <circle cx={finalX} cy={finalY} r="8" fill={getColor(m.riskScore)} opacity="0.8" stroke={getColor(m.riskScore)} strokeWidth="2">
                      <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={finalX} cy={finalY} r="3" fill="white" />
                    <title>{m.name} — Risk: {m.riskScore} | Compliance: {m.complianceScore}%</title>
                  </g>
                );
              })}
            </svg>
          </div>
          {/* Legend */}
          <div style={{ position: 'absolute', bottom: 16, left: 16, background: 'var(--bg-glass)', backdropFilter: 'blur(8px)', padding: '10px 14px', borderRadius: 'var(--radius)', border: '1px solid var(--border)', display: 'flex', gap: 16, fontSize: '0.72rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} /> Low Risk</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} /> Medium</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: '#f97316', display: 'inline-block' }} /> High</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} /> Critical</span>
          </div>
        </div>
      </div>

      {/* Mine list below map */}
      <div className="card" style={{ marginTop: 16 }}>
        <div className="card-header">
          <span className="card-title">Mine Overview ({filteredMines.length} mines)</span>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead><tr><th>ID</th><th>Mine Name</th><th>State</th><th>Type</th><th>Risk</th><th>Compliance</th><th>Violations</th><th>Workers</th><th>Status</th></tr></thead>
            <tbody>
              {filteredMines.map(m => (
                <tr key={m.id} style={{ cursor: 'pointer' }} onClick={() => { setSelectedMine(m.id); setCurrentPage('mine-detail'); }}>
                  <td style={{ fontWeight: 600, color: 'var(--text-accent)' }}>{m.id}</td>
                  <td style={{ fontWeight: 500 }}>{m.name}</td>
                  <td>{m.state}</td>
                  <td><span className="badge badge-blue">{m.type}</span></td>
                  <td><span className={`badge ${m.riskScore >= 80 ? 'severity-critical' : m.riskScore >= 60 ? 'severity-high' : m.riskScore >= 40 ? 'severity-medium' : 'severity-low'}`}>{m.riskScore}/100</span></td>
                  <td><span className={`badge ${m.complianceScore >= 80 ? 'badge-green' : m.complianceScore >= 60 ? 'badge-yellow' : 'badge-red'}`}>{m.complianceScore}%</span></td>
                  <td>{m.activeViolations}</td>
                  <td>{m.totalWorkers}</td>
                  <td><span className={`badge ${m.status === 'Active' ? 'badge-green' : 'badge-red'}`}>{m.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============== MINES PAGE ==============
function MinesPage() {
  const { setCurrentPage, setSelectedMine } = useApp();
  const [filter, setFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const filtered = mines.filter(m => {
    if (filter === 'high-risk') return m.riskScore >= 70;
    if (filter === 'compliant') return m.complianceScore >= 80;
    if (filter === 'non-compliant') return m.complianceScore < 70;
    return true;
  }).filter(m => typeFilter === 'all' || m.type === typeFilter);

  return (
    <div>
      <div className="page-header">
        <div><h2>⛏️ Centralized Mine Database</h2><span className="subtitle">Complete registry of all coal mines</span></div>
      </div>
      <div className="filters-bar">
        {['all', 'high-risk', 'compliant', 'non-compliant'].map(f => (
          <button key={f} className={`filter-chip ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{f === 'all' ? 'All Mines' : f.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}</button>
        ))}
        <span style={{ color: 'var(--text-tertiary)' }}>|</span>
        {['all', 'Open Cast', 'Underground'].map(t => (
          <button key={t} className={`filter-chip ${typeFilter === t ? 'active' : ''}`} onClick={() => setTypeFilter(t)}>{t === 'all' ? 'All Types' : t}</button>
        ))}
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead><tr><th>Mine ID</th><th>Name</th><th>Operator</th><th>State</th><th>District</th><th>Type</th><th>Status</th><th>Risk</th><th>Compliance</th><th>Violations</th><th>Last Inspection</th></tr></thead>
          <tbody>
            {filtered.map(m => (
              <tr key={m.id} style={{ cursor: 'pointer' }} onClick={() => { setSelectedMine(m.id); setCurrentPage('mine-detail'); }}>
                <td style={{ fontWeight: 600, color: 'var(--text-accent)' }}>{m.id}</td>
                <td style={{ fontWeight: 500 }}>{m.name}</td>
                <td style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{m.operator}</td>
                <td>{m.state}</td>
                <td>{m.district}</td>
                <td><span className="badge badge-blue">{m.type}</span></td>
                <td><span className={`badge ${m.status === 'Active' ? 'badge-green' : m.status === 'Suspended' ? 'badge-red' : 'badge-yellow'}`}>{m.status}</span></td>
                <td><span className={`badge ${m.riskScore >= 80 ? 'severity-critical' : m.riskScore >= 60 ? 'severity-high' : m.riskScore >= 40 ? 'severity-medium' : 'severity-low'}`}>{m.riskScore}/100</span></td>
                <td>{m.complianceScore}%</td>
                <td>{m.activeViolations}</td>
                <td>{m.lastInspection}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============== MINE DETAIL PAGE ==============
function MineDetailPage() {
  const { selectedMine, setCurrentPage } = useApp();
  const [tab, setTab] = useState('overview');
  const mine = getMine(selectedMine);
  if (!mine) return <div className="empty-state"><div className="empty-icon">⛏️</div><p>Select a mine to view details</p><button className="btn btn-primary" style={{ marginTop: 16 }} onClick={() => setCurrentPage('mines')}>Browse Mines</button></div>;

  const mViolations = getMineViolations(mine.id);
  const mCompliance = getMineCompliance(mine.id);
  const mInspections = getMineInspections(mine.id);
  const mContractors = getMineContractors(mine.id);
  const mWorkers = getMineWorkers(mine.id);
  const mCA = getMineCorrectiveActions(mine.id);
  const mZones = getMineZones(mine.id);
  const mHistory = getMineHistory(mine.id);
  const mEnv = getMineEnvironmental(mine.id);
  const mSensors = getMineSensors(mine.id);
  const prediction = riskPredictions.find(r => r.mineId === mine.id);

  const riskColor = mine.riskScore >= 80 ? 'var(--red)' : mine.riskScore >= 60 ? 'var(--orange)' : mine.riskScore >= 40 ? 'var(--yellow)' : 'var(--green)';

  return (
    <div>
      <div className="page-header">
        <div>
          <h2>⛏️ {mine.name}</h2>
          <span className="subtitle">{mine.operator} | {mine.district}, {mine.state} | {mine.type} | Coordinates: {mine.lat}, {mine.lng}</span>
        </div>
        <button className="btn btn-outline" onClick={() => setCurrentPage('mines')}>← Back to Mines</button>
      </div>

      {/* KPIs */}
      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))' }}>
        <div className="kpi-card"><div className="kpi-icon">⚠️</div><div className="kpi-value" style={{ color: riskColor }}>{mine.riskScore}</div><div className="kpi-label">Risk Score</div></div>
        <div className="kpi-card"><div className="kpi-icon">📋</div><div className="kpi-value" style={{ color: mine.complianceScore >= 80 ? 'var(--green)' : 'var(--yellow)' }}>{mine.complianceScore}%</div><div className="kpi-label">Compliance</div></div>
        <div className="kpi-card"><div className="kpi-icon">🚨</div><div className="kpi-value" style={{ color: 'var(--red)' }}>{mine.activeViolations}</div><div className="kpi-label">Active Violations</div></div>
        <div className="kpi-card"><div className="kpi-icon">👷</div><div className="kpi-value" style={{ color: 'var(--cyan)' }}>{mine.totalWorkers}</div><div className="kpi-label">Workers</div></div>
        <div className="kpi-card"><div className="kpi-icon">⛏️</div><div className="kpi-value" style={{ color: 'var(--blue)' }}>{mine.dailyProduction.toLocaleString()}</div><div className="kpi-label">Daily Prod. (tonnes)</div></div>
        {prediction && <div className="kpi-card"><div className="kpi-icon">🔮</div><div className="kpi-value" style={{ color: prediction.trend === 'Increasing' ? 'var(--red)' : 'var(--green)' }}>{prediction.predicted30}</div><div className="kpi-label">Predicted Risk (30d)</div></div>}
      </div>

      {/* Tabs */}
      <div className="tabs">
        {['overview', 'violations', 'compliance', 'inspections', 'zones', 'history', 'environmental', 'contractors', 'workers', 'corrective', 'risk'].map(t => (
          <button key={t} className={`tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
        ))}
      </div>

      {tab === 'overview' && (
        <div className="grid-2">
          <div className="card">
            <div className="card-title" style={{ marginBottom: 12 }}>Mine Information</div>
            {[
              ['Mine ID', mine.id], ['Type', mine.type], ['Opened', mine.openDate], ['Status', mine.status],
              ['Production', mine.productionStatus], ['Operator', mine.operator], ['District', mine.district],
              ['Last Inspection', mine.lastInspection], ['Zones', mine.zones?.length || 0],
            ].map(([k, v]) => (
              <div className="stat-inline" key={k}><span className="stat-label">{k}</span><span className="stat-value">{v}</span></div>
            ))}
          </div>
          <div className="card">
            <div className="card-title" style={{ marginBottom: 12 }}>Sensor Status</div>
            {mSensors.length > 0 ? mSensors.map(s => (
              <div className="stat-inline" key={s.id}>
                <span className="stat-label">{s.type} ({s.location})</span>
                <span className={`badge ${s.value === 'Normal' ? 'badge-green' : s.value === 'Warning' ? 'badge-yellow' : 'badge-red'}`}>{s.reading} {s.unit} — {s.value}</span>
              </div>
            )) : <p style={{ color: 'var(--text-tertiary)', fontSize: '0.82rem' }}>No sensor data available for this mine</p>}
          </div>
        </div>
      )}

      {tab === 'violations' && (
        <div className="table-container">
          <table className="data-table">
            <thead><tr><th>ID</th><th>Zone</th><th>Category</th><th>Type</th><th>Severity</th><th>Status</th><th>Date</th><th>Detected By</th></tr></thead>
            <tbody>{mViolations.map(v => (
              <tr key={v.id}>
                <td style={{ fontWeight: 600, color: 'var(--text-accent)' }}>{v.id}</td>
                <td>{v.zone}</td><td>{v.category}</td><td>{v.type}</td>
                <td><span className={`badge severity-${v.severity.toLowerCase()}`}>{v.severity}</span></td>
                <td><span className={`badge ${v.status === 'Open' ? 'badge-red' : v.status === 'In Progress' ? 'badge-yellow' : 'badge-green'}`}>{v.status}</span></td>
                <td>{v.detectedDate}</td><td>{v.detectedBy}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}

      {tab === 'compliance' && (
        <div className="table-container">
          <table className="data-table">
            <thead><tr><th>Requirement</th><th>Category</th><th>Document</th><th>Issue Date</th><th>Expiry</th><th>Status</th><th>Risk</th></tr></thead>
            <tbody>{mCompliance.map(c => (
              <tr key={c.id}>
                <td style={{ fontWeight: 500 }}>{c.requirement}</td><td>{c.category}</td><td style={{ fontSize: '0.75rem', fontFamily: "'JetBrains Mono', monospace" }}>{c.document}</td>
                <td>{c.issueDate}</td><td>{c.expiryDate}</td>
                <td><span className={`badge ${c.status === 'Valid' ? 'badge-green' : c.status === 'Expiring Soon' ? 'badge-yellow' : 'badge-red'}`}>{c.status}</span></td>
                <td><span className={`badge severity-${c.risk.toLowerCase()}`}>{c.risk}</span></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}

      {tab === 'inspections' && (
        <div className="table-container">
          <table className="data-table">
            <thead><tr><th>ID</th><th>Type</th><th>Inspector</th><th>Date</th><th>Status</th><th>Severity</th><th>Violations Found</th></tr></thead>
            <tbody>{mInspections.map(i => (
              <tr key={i.id}>
                <td style={{ fontWeight: 600, color: 'var(--text-accent)' }}>{i.id}</td><td>{i.type}</td><td>{i.inspector}</td><td>{i.date}</td>
                <td><span className={`badge ${i.status === 'Completed' ? 'badge-green' : 'badge-blue'}`}>{i.status}</span></td>
                <td>{i.severity ? <span className={`badge severity-${i.severity.toLowerCase()}`}>{i.severity}</span> : '—'}</td>
                <td>{i.violationsFound}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}

      {tab === 'zones' && (
        <div>
          {mZones.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 14 }}>
              {mZones.map(z => (
                <div key={z.id} className="card" style={{ borderLeft: `3px solid ${z.risk === 'Critical' ? 'var(--red)' : z.risk === 'High' ? 'var(--orange)' : z.risk === 'Medium' ? 'var(--yellow)' : 'var(--green)'}` }}>
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>{z.zone}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: 8 }}>{z.name}</div>
                  <div className="stat-inline"><span className="stat-label">Risk</span><span className={`badge severity-${z.risk.toLowerCase()}`}>{z.risk}</span></div>
                  <div className="stat-inline"><span className="stat-label">Violations</span><span className="stat-value">{z.violations}</span></div>
                  <div className="stat-inline"><span className="stat-label">Workers</span><span className="stat-value">{z.workers}</span></div>
                  <div className="stat-inline"><span className="stat-label">Last Inspection</span><span className="stat-value">{z.lastInspection}</span></div>
                </div>
              ))}
            </div>
          ) : <div style={{ color: 'var(--text-tertiary)', textAlign: 'center', padding: 40 }}>Zone data available for mines with detailed zone mapping</div>}
          {/* Heatmap */}
          {mZones.length > 0 && (
            <div className="card" style={{ marginTop: 16 }}>
              <div className="card-title" style={{ marginBottom: 12 }}>Risk Heatmap</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {mZones.map(z => (
                  <div key={z.id} className="heatmap-cell" style={{ background: z.risk === 'Critical' ? 'var(--red-bg)' : z.risk === 'High' ? 'var(--orange-bg)' : z.risk === 'Medium' ? 'var(--yellow-bg)' : 'var(--green-bg)', color: z.risk === 'Critical' ? 'var(--red)' : z.risk === 'High' ? 'var(--orange)' : z.risk === 'Medium' ? 'var(--yellow)' : 'var(--green)', border: `1px solid ${z.risk === 'Critical' ? 'var(--red-border)' : z.risk === 'High' ? 'var(--orange-border)' : z.risk === 'Medium' ? 'var(--yellow-border)' : 'var(--green-border)'}`, width: 100, height: 60 }}>
                    <div style={{ textAlign: 'center' }}><div style={{ fontWeight: 700 }}>{z.zone}</div><div style={{ fontSize: '0.65rem' }}>{z.risk}</div></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {tab === 'history' && (
        <div className="card">
          <div className="card-title" style={{ marginBottom: 16 }}>Mine History Timeline</div>
          <div className="timeline">
            {mHistory.sort((a, b) => new Date(b.date) - new Date(a.date)).map((h, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-dot" style={{ background: h.event.includes('Accident') || h.event.includes('Fire') ? 'var(--red)' : h.event.includes('Critical') ? 'var(--orange)' : h.event.includes('Violation') ? 'var(--yellow)' : 'var(--blue)' }} />
                <div className="t-date">{h.date}</div>
                <div className="t-title">{h.event}</div>
                <div className="t-desc">{h.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'environmental' && (
        <div className="grid-2">
          {mEnv.map(e => (
            <div key={e.id} className="card" style={{ borderLeft: `3px solid ${e.status === 'Critical' ? 'var(--red)' : e.status === 'Warning' ? 'var(--yellow)' : 'var(--green)'}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontWeight: 700 }}>{e.parameter}</span>
                <span className={`badge ${e.status === 'Critical' ? 'badge-red' : e.status === 'Warning' ? 'badge-yellow' : 'badge-green'}`}>{e.status}</span>
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: e.status === 'Critical' ? 'var(--red)' : e.status === 'Warning' ? 'var(--yellow)' : 'var(--green)' }}>{e.value} <span style={{ fontSize: '0.85rem', fontWeight: 400 }}>{e.unit}</span></div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: 4 }}>Limit: {e.limit} {e.unit} | {e.zone}</div>
              <div className="score-bar" style={{ marginTop: 8 }}>
                <div className="score-bar-fill" style={{ width: `${Math.min((e.value / e.limit) * 100, 100)}%`, background: e.status === 'Critical' ? 'var(--red)' : e.status === 'Warning' ? 'var(--yellow)' : 'var(--green)' }} />
              </div>
            </div>
          ))}
          {mEnv.length === 0 && <div style={{ color: 'var(--text-tertiary)', textAlign: 'center', padding: 40, gridColumn: '1/-1' }}>No environmental data for this mine</div>}
        </div>
      )}

      {tab === 'contractors' && (
        <div className="table-container">
          <table className="data-table">
            <thead><tr><th>ID</th><th>Name</th><th>Workers</th><th>Contract Period</th><th>Compliance</th><th>Violations</th><th>Risk</th></tr></thead>
            <tbody>{mContractors.map(c => (
              <tr key={c.id}>
                <td style={{ fontWeight: 600, color: 'var(--text-accent)' }}>{c.id}</td><td>{c.name}</td><td>{c.workers}</td>
                <td style={{ fontSize: '0.75rem' }}>{c.contractStart} — {c.contractEnd}</td>
                <td>{c.compliance}%</td><td>{c.safetyViolations}</td>
                <td><span className={`badge severity-${c.risk.toLowerCase()}`}>{c.risk}</span></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}

      {tab === 'workers' && (
        <div className="table-container">
          <table className="data-table">
            <thead><tr><th>ID</th><th>Name</th><th>Role</th><th>Contractor</th><th>Training</th><th>PPE</th><th>Violations</th></tr></thead>
            <tbody>{mWorkers.slice(0, 30).map(w => (
              <tr key={w.id}>
                <td style={{ fontWeight: 600 }}>{w.id}</td><td>{w.name}</td><td>{w.role}</td>
                <td>{contractors.find(c => c.id === w.contractorId)?.name?.split(' ')[0] || '—'}</td>
                <td><span className={`badge ${w.training === 'Completed' ? 'badge-green' : 'badge-yellow'}`}>{w.training}</span></td>
                <td><span className={`badge ${w.ppeCompliance === 'Compliant' ? 'badge-green' : 'badge-red'}`}>{w.ppeCompliance}</span></td>
                <td>{w.safetyViolations}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}

      {tab === 'corrective' && (
        <div className="table-container">
          <table className="data-table">
            <thead><tr><th>ID</th><th>Violation</th><th>Responsible</th><th>Action</th><th>Deadline</th><th>Priority</th><th>Status</th></tr></thead>
            <tbody>{mCA.map(ca => (
              <tr key={ca.id}>
                <td style={{ fontWeight: 600, color: 'var(--text-accent)' }}>{ca.id}</td><td>{ca.violationId}</td><td>{ca.responsible}</td>
                <td style={{ maxWidth: 250, whiteSpace: 'normal', fontSize: '0.78rem' }}>{ca.action}</td>
                <td>{ca.deadline}</td>
                <td><span className={`badge severity-${ca.priority.toLowerCase()}`}>{ca.priority}</span></td>
                <td><span className={`badge ${ca.status === 'Closed' ? 'badge-green' : ca.status === 'In Progress' ? 'badge-yellow' : 'badge-red'}`}>{ca.status}</span></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}

      {tab === 'risk' && prediction && (
        <div className="grid-2">
          <div className="card">
            <div className="card-title" style={{ marginBottom: 16 }}>Risk Prediction</div>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: riskColor }}>{mine.riskScore}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Current Risk Score</div>
            </div>
            <div className="stat-inline"><span className="stat-label">Predicted (30 days)</span><span className="stat-value" style={{ color: prediction.predicted30 > mine.riskScore ? 'var(--red)' : 'var(--green)' }}>{prediction.predicted30}</span></div>
            <div className="stat-inline"><span className="stat-label">Predicted (60 days)</span><span className="stat-value">{prediction.predicted60}</span></div>
            <div className="stat-inline"><span className="stat-label">Predicted (90 days)</span><span className="stat-value">{prediction.predicted90}</span></div>
            <div className="stat-inline"><span className="stat-label">Trend</span><span className={`badge ${prediction.trend === 'Increasing' ? 'badge-red' : prediction.trend === 'Decreasing' ? 'badge-green' : 'badge-yellow'}`}>📈 {prediction.trend}</span></div>
            <div className="stat-inline"><span className="stat-label">Confidence</span><span className="stat-value">{prediction.confidence}%</span></div>
          </div>
          <div className="card">
            <div className="card-title" style={{ marginBottom: 12 }}>Risk Factors</div>
            {prediction.factors.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                <span style={{ color: 'var(--red)', marginTop: 2 }}>⚠️</span>
                <span style={{ fontSize: '0.82rem' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============== COMPLIANCE PAGE ==============
function CompliancePage() {
  const [filter, setFilter] = useState('all');
  const [catFilter, setCatFilter] = useState('all');
  const filtered = complianceRecords.filter(c => {
    if (filter !== 'all' && c.status !== filter) return false;
    if (catFilter !== 'all' && c.category !== catFilter) return false;
    return true;
  });

  return (
    <div>
      <div className="page-header"><div><h2>📋 Smart Compliance Engine</h2><span className="subtitle">Automated compliance tracking and monitoring</span></div></div>
      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
        {[
          { label: 'Valid', count: complianceRecords.filter(c => c.status === 'Valid').length, color: 'var(--green)', icon: '✅' },
          { label: 'Expiring Soon', count: complianceRecords.filter(c => c.status === 'Expiring Soon').length, color: 'var(--yellow)', icon: '⏰' },
          { label: 'Expired', count: complianceRecords.filter(c => c.status === 'Expired').length, color: 'var(--red)', icon: '❌' },
          { label: 'Non-Compliant', count: complianceRecords.filter(c => c.status === 'Non-Compliant').length, color: 'var(--orange)', icon: '⚠️' },
          { label: 'Total Records', count: complianceRecords.length, color: 'var(--blue)', icon: '📄' },
        ].map((k, i) => (
          <div key={i} className="kpi-card"><div className="kpi-icon">{k.icon}</div><div className="kpi-value" style={{ color: k.color }}>{k.count}</div><div className="kpi-label">{k.label}</div></div>
        ))}
      </div>
      <div className="filters-bar">
        {['all', 'Valid', 'Expiring Soon', 'Expired', 'Non-Compliant'].map(s => (
          <button key={s} className={`filter-chip ${filter === s ? 'active' : ''}`} onClick={() => setFilter(s)}>{s === 'all' ? 'All Status' : s}</button>
        ))}
        <span style={{ color: 'var(--text-tertiary)' }}>|</span>
        {['all', 'Permit', 'Safety', 'Environmental', 'License', 'Labour', 'Compliance'].map(c => (
          <button key={c} className={`filter-chip ${catFilter === c ? 'active' : ''}`} onClick={() => setCatFilter(c)}>{c === 'all' ? 'All Categories' : c}</button>
        ))}
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead><tr><th>ID</th><th>Mine</th><th>Requirement</th><th>Category</th><th>Document</th><th>Issue Date</th><th>Expiry</th><th>Status</th><th>Risk</th></tr></thead>
          <tbody>{filtered.map(c => {
            const mine = getMine(c.mineId);
            return (
              <tr key={c.id}>
                <td style={{ fontWeight: 600, color: 'var(--text-accent)' }}>{c.id}</td>
                <td>{mine?.name?.split(' - ')[0]?.split(' ').slice(0, 2).join(' ') || c.mineId}</td>
                <td style={{ fontWeight: 500 }}>{c.requirement}</td><td>{c.category}</td>
                <td style={{ fontSize: '0.72rem', fontFamily: "'JetBrains Mono', monospace" }}>{c.document}</td>
                <td>{c.issueDate}</td><td>{c.expiryDate}</td>
                <td><span className={`badge ${c.status === 'Valid' ? 'badge-green' : c.status === 'Expiring Soon' ? 'badge-yellow' : 'badge-red'}`}>{c.status}</span></td>
                <td><span className={`badge severity-${c.risk.toLowerCase()}`}>{c.risk}</span></td>
              </tr>
            );
          })}</tbody>
        </table>
      </div>
    </div>
  );
}

// ============== CALENDAR PAGE ==============
function CalendarPage() {
  const events = [
    ...complianceRecords.filter(c => c.status === 'Expiring Soon' || c.status === 'Expired').map(c => ({ date: c.expiryDate, title: c.requirement, mine: c.mineId, type: c.status === 'Expired' ? 'critical' : 'high', category: 'Permit Expiry' })),
    ...inspections.filter(i => i.status === 'Scheduled').map(i => ({ date: i.date, title: `${i.type} Inspection`, mine: i.mineId, type: 'upcoming', category: 'Inspection' })),
    ...correctiveActions.filter(ca => ca.status !== 'Closed').map(ca => ({ date: ca.deadline, title: `CA: ${ca.action.substring(0, 40)}...`, mine: ca.mineId, type: new Date(ca.deadline) < new Date() ? 'critical' : 'high', category: 'Corrective Action' })),
  ].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div>
      <div className="page-header"><div><h2>📅 Compliance Calendar</h2><span className="subtitle">Deadlines, renewals, and scheduled activities</span></div></div>
      <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
        <span className="badge badge-red">🔴 Critical/Overdue</span>
        <span className="badge badge-orange">🟠 High Priority</span>
        <span className="badge badge-yellow">🟡 Upcoming</span>
        <span className="badge badge-green">🟢 Completed</span>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead><tr><th>Date</th><th>Category</th><th>Event</th><th>Mine</th><th>Priority</th></tr></thead>
          <tbody>{events.slice(0, 30).map((e, i) => (
            <tr key={i}>
              <td style={{ fontWeight: 600 }}>{e.date}</td>
              <td><span className="badge badge-blue">{e.category}</span></td>
              <td>{e.title}</td>
              <td>{getMine(e.mine)?.name?.split(' ').slice(0, 3).join(' ') || e.mine}</td>
              <td><span className={`badge ${e.type === 'critical' ? 'badge-red' : e.type === 'high' ? 'badge-orange' : 'badge-yellow'}`}>{e.type === 'critical' ? '🔴 Critical' : e.type === 'high' ? '🟠 High' : '🟡 Upcoming'}</span></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}

// ============== AI COMPLIANCE CHECKER ==============
function AICompliancePage() {
  const [selectedId, setSelectedId] = useState('M001');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const analyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      const mine = getMine(selectedId);
      const mc = getMineCompliance(selectedId);
      const mv = getMineViolations(selectedId);
      const mca = getMineCorrectiveActions(selectedId);
      const expired = mc.filter(c => c.status === 'Expired');
      const expiring = mc.filter(c => c.status === 'Expiring Soon');
      const openV = mv.filter(v => v.status !== 'Closed');
      const openCA = mca.filter(ca => ca.status !== 'Closed');
      const score = mine?.complianceScore || 0;

      const positives = mc.filter(c => c.status === 'Valid').slice(0, 4).map(c => `✅ ${c.requirement} — Valid until ${c.expiryDate}`);
      const problems = [
        ...expired.map(c => `❌ ${c.requirement} — EXPIRED on ${c.expiryDate}`),
        ...expiring.map(c => `⚠️ ${c.requirement} — Expires on ${c.expiryDate}`),
        ...openV.length > 0 ? [`🚨 ${openV.length} active violations pending resolution`] : [],
        ...openCA.length > 0 ? [`⏰ ${openCA.length} corrective actions pending`] : [],
      ];
      const actions = [
        ...expired.map(c => `Renew ${c.requirement} immediately`),
        ...expiring.map(c => `Initiate renewal for ${c.requirement}`),
        ...openV.length > 2 ? ['Schedule comprehensive safety inspection'] : [],
        ...openCA.length > 2 ? ['Accelerate corrective action closure'] : [],
      ];

      setResult({ mine, score, positives, problems, actions });
      setAnalyzing(false);
    }, 1500);
  };

  return (
    <div>
      <div className="page-header"><div><h2>🤖 AI Compliance Checker</h2><span className="subtitle">AI-powered compliance analysis and scoring</span></div></div>
      <div className="card" style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end' }}>
          <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
            <label>Select Mine for Analysis</label>
            <select className="form-select" value={selectedId} onChange={e => setSelectedId(e.target.value)}>
              {mines.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
            </select>
          </div>
          <button className="btn btn-primary btn-lg" onClick={analyze} disabled={analyzing}>{analyzing ? '⏳ Analyzing...' : '🤖 Run AI Analysis'}</button>
        </div>
      </div>

      {analyzing && <div className="loading-spinner" />}

      {result && !analyzing && (
        <div className="grid-2">
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', fontWeight: 900, color: result.score >= 80 ? 'var(--green)' : result.score >= 60 ? 'var(--yellow)' : 'var(--red)' }}>{result.score}%</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Compliance Score</div>
            <div className="score-bar" style={{ marginTop: 16, height: 8 }}>
              <div className="score-bar-fill" style={{ width: `${result.score}%`, background: result.score >= 80 ? 'var(--green)' : result.score >= 60 ? 'var(--yellow)' : 'var(--red)' }} />
            </div>
            <div style={{ marginTop: 16, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{result.mine?.name}</div>
          </div>
          <div>
            <div className="card" style={{ marginBottom: 12 }}>
              <div className="card-title" style={{ color: 'var(--green)', marginBottom: 8 }}>✅ Positive Findings</div>
              {result.positives.map((p, i) => <div key={i} style={{ fontSize: '0.82rem', padding: '4px 0' }}>{p}</div>)}
            </div>
            <div className="card" style={{ marginBottom: 12, borderLeft: '3px solid var(--red)' }}>
              <div className="card-title" style={{ color: 'var(--red)', marginBottom: 8 }}>❌ Issues Identified</div>
              {result.problems.map((p, i) => <div key={i} style={{ fontSize: '0.82rem', padding: '4px 0' }}>{p}</div>)}
              {result.problems.length === 0 && <div style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>No critical issues found</div>}
            </div>
            <div className="card" style={{ borderLeft: '3px solid var(--blue)' }}>
              <div className="card-title" style={{ color: 'var(--blue)', marginBottom: 8 }}>💡 Recommended Actions</div>
              {result.actions.map((a, i) => <div key={i} style={{ fontSize: '0.82rem', padding: '4px 0' }}>{i + 1}. {a}</div>)}
              {result.actions.length === 0 && <div style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>No immediate actions required</div>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============== RISK PAGE ==============
function RiskPage() {
  const { setCurrentPage, setSelectedMine } = useApp();
  const sorted = [...mines].sort((a, b) => b.riskScore - a.riskScore);

  return (
    <div>
      <div className="page-header"><div><h2>⚠️ Risk Intelligence Center</h2><span className="subtitle">AI-powered risk analysis and prediction engine</span></div></div>
      <div className="grid-3" style={{ marginBottom: 20 }}>
        <div className="card" style={{ textAlign: 'center', borderTop: '3px solid var(--red)' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--red)' }}>{mines.filter(m => m.riskScore >= 80).length}</div>
          <div style={{ color: 'var(--text-secondary)' }}>Critical Risk Mines</div>
        </div>
        <div className="card" style={{ textAlign: 'center', borderTop: '3px solid var(--orange)' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--orange)' }}>{mines.filter(m => m.riskScore >= 60 && m.riskScore < 80).length}</div>
          <div style={{ color: 'var(--text-secondary)' }}>High Risk Mines</div>
        </div>
        <div className="card" style={{ textAlign: 'center', borderTop: '3px solid var(--green)' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--green)' }}>{mines.filter(m => m.riskScore < 40).length}</div>
          <div style={{ color: 'var(--text-secondary)' }}>Low Risk Mines</div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 20 }}>
        <div className="card-header"><span className="card-title">🔮 AI Risk Predictions (Next 30 Days)</span></div>
        <div className="table-container">
          <table className="data-table">
            <thead><tr><th>Mine</th><th>Current Risk</th><th>Predicted (30d)</th><th>Predicted (60d)</th><th>Trend</th><th>Confidence</th><th>Top Risk Factor</th></tr></thead>
            <tbody>{riskPredictions.map(r => {
              const mine = getMine(r.mineId);
              return (
                <tr key={r.mineId} style={{ cursor: 'pointer' }} onClick={() => { setSelectedMine(r.mineId); setCurrentPage('mine-detail'); }}>
                  <td style={{ fontWeight: 600 }}>{mine?.name?.split(' ').slice(0, 3).join(' ')}</td>
                  <td><span className={`badge ${r.current >= 80 ? 'severity-critical' : r.current >= 60 ? 'severity-high' : r.current >= 40 ? 'severity-medium' : 'severity-low'}`}>{r.current}/100</span></td>
                  <td style={{ fontWeight: 700, color: r.predicted30 > r.current ? 'var(--red)' : 'var(--green)' }}>{r.predicted30}</td>
                  <td>{r.predicted60}</td>
                  <td><span className={`badge ${r.trend === 'Increasing' ? 'badge-red' : r.trend === 'Decreasing' ? 'badge-green' : 'badge-yellow'}`}>{r.trend === 'Increasing' ? '📈' : r.trend === 'Decreasing' ? '📉' : '➡️'} {r.trend}</span></td>
                  <td>{r.confidence}%</td>
                  <td style={{ fontSize: '0.78rem', maxWidth: 200, whiteSpace: 'normal' }}>{r.factors[0]}</td>
                </tr>
              );
            })}</tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <div className="card-header"><span className="card-title">All Mines — Risk Ranking</span></div>
        <div className="table-container">
          <table className="data-table">
            <thead><tr><th>#</th><th>Mine</th><th>State</th><th>Type</th><th>Risk Score</th><th>Compliance</th><th>Violations</th><th>Status</th></tr></thead>
            <tbody>{sorted.map((m, i) => (
              <tr key={m.id} style={{ cursor: 'pointer' }} onClick={() => { setSelectedMine(m.id); setCurrentPage('mine-detail'); }}>
                <td style={{ fontWeight: 700 }}>{i + 1}</td>
                <td style={{ fontWeight: 600 }}>{m.name}</td><td>{m.state}</td><td>{m.type}</td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div className="score-bar" style={{ width: 80 }}><div className="score-bar-fill" style={{ width: `${m.riskScore}%`, background: m.riskScore >= 80 ? 'var(--red)' : m.riskScore >= 60 ? 'var(--orange)' : m.riskScore >= 40 ? 'var(--yellow)' : 'var(--green)' }} /></div>
                    <span style={{ fontWeight: 700, fontSize: '0.82rem' }}>{m.riskScore}</span>
                  </div>
                </td>
                <td>{m.complianceScore}%</td><td>{m.activeViolations}</td>
                <td><span className={`badge ${m.status === 'Active' ? 'badge-green' : 'badge-red'}`}>{m.status}</span></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============== INSPECTIONS PAGE ==============
function InspectionsPage() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? inspections : inspections.filter(i => i.status === filter);

  return (
    <div>
      <div className="page-header"><div><h2>🔍 Inspection Management</h2><span className="subtitle">Complete inspection tracking and scheduling</span></div></div>
      <div className="filters-bar">
        {['all', 'Completed', 'Scheduled'].map(f => (
          <button key={f} className={`filter-chip ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{f === 'all' ? 'All Inspections' : f}</button>
        ))}
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead><tr><th>ID</th><th>Mine</th><th>Type</th><th>Inspector</th><th>Date</th><th>Status</th><th>Severity</th><th>Violations</th><th>Findings</th></tr></thead>
          <tbody>{filtered.map(i => {
            const mine = getMine(i.mineId);
            return (
              <tr key={i.id}>
                <td style={{ fontWeight: 600, color: 'var(--text-accent)' }}>{i.id}</td>
                <td>{mine?.name?.split(' ').slice(0, 3).join(' ')}</td>
                <td><span className="badge badge-blue">{i.type}</span></td>
                <td>{i.inspector}</td><td>{i.date}</td>
                <td><span className={`badge ${i.status === 'Completed' ? 'badge-green' : 'badge-blue'}`}>{i.status}</span></td>
                <td>{i.severity ? <span className={`badge severity-${i.severity.toLowerCase()}`}>{i.severity}</span> : '—'}</td>
                <td>{i.violationsFound}</td>
                <td style={{ maxWidth: 250, whiteSpace: 'normal', fontSize: '0.78rem' }}>{i.findings?.substring(0, 80) || '—'}{i.findings?.length > 80 ? '...' : ''}</td>
              </tr>
            );
          })}</tbody>
        </table>
      </div>
    </div>
  );
}

// ============== VIOLATIONS PAGE ==============
function ViolationsPage() {
  const [filter, setFilter] = useState('all');
  const [catFilter, setCatFilter] = useState('all');
  const filtered = violations.filter(v => {
    if (filter !== 'all' && v.status !== filter) return false;
    if (catFilter !== 'all' && v.category !== catFilter) return false;
    return true;
  });

  // Recurring violation detection
  const zone4Helmets = violations.filter(v => v.mineId === 'M001' && v.zone === 'Zone 4' && v.type === 'Missing Helmet');

  return (
    <div>
      <div className="page-header"><div><h2>🚨 Violation Management</h2><span className="subtitle">Complete violation lifecycle tracking</span></div></div>

      {zone4Helmets.length >= 5 && (
        <div className="card" style={{ marginBottom: 16, borderLeft: '3px solid var(--orange)', background: 'var(--orange-bg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: '1.5rem' }}>🔄</span>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--orange)' }}>RECURRING VIOLATION DETECTED</div>
              <div style={{ fontSize: '0.82rem' }}>Helmet violations detected {zone4Helmets.length} times in Jharia Block A, Zone 4 during the last 30 days.</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: 4 }}>💡 Recommended: Increase safety inspection frequency in Zone 4. Install helmet dispensers at zone entry. Consider contractor penalty.</div>
            </div>
          </div>
        </div>
      )}

      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', marginBottom: 16 }}>
        {[
          { label: 'Open', count: violations.filter(v => v.status === 'Open').length, color: 'var(--red)', icon: '🔴' },
          { label: 'In Progress', count: violations.filter(v => v.status === 'In Progress').length, color: 'var(--yellow)', icon: '🟡' },
          { label: 'Closed', count: violations.filter(v => v.status === 'Closed').length, color: 'var(--green)', icon: '🟢' },
          { label: 'Critical', count: violations.filter(v => v.severity === 'Critical' && v.status !== 'Closed').length, color: 'var(--red)', icon: '🚨' },
          { label: 'Total', count: violations.length, color: 'var(--blue)', icon: '📊' },
        ].map((k, i) => (
          <div key={i} className="kpi-card"><div className="kpi-icon">{k.icon}</div><div className="kpi-value" style={{ color: k.color }}>{k.count}</div><div className="kpi-label">{k.label}</div></div>
        ))}
      </div>

      <div className="filters-bar">
        {['all', 'Open', 'In Progress', 'Closed'].map(s => (
          <button key={s} className={`filter-chip ${filter === s ? 'active' : ''}`} onClick={() => setFilter(s)}>{s === 'all' ? 'All Status' : s}</button>
        ))}
        <span style={{ color: 'var(--text-tertiary)' }}>|</span>
        {['all', 'PPE', 'Safety', 'Environmental', 'Compliance', 'Labour', 'Operational'].map(c => (
          <button key={c} className={`filter-chip ${catFilter === c ? 'active' : ''}`} onClick={() => setCatFilter(c)}>{c === 'all' ? 'All Categories' : c}</button>
        ))}
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead><tr><th>ID</th><th>Mine</th><th>Zone</th><th>Category</th><th>Type</th><th>Severity</th><th>Status</th><th>Date</th><th>Detected By</th><th>Evidence</th></tr></thead>
          <tbody>{filtered.slice(0, 40).map(v => {
            const mine = getMine(v.mineId);
            return (
              <tr key={v.id}>
                <td style={{ fontWeight: 600, color: 'var(--text-accent)' }}>{v.id}</td>
                <td>{mine?.name?.split(' ').slice(0, 2).join(' ')}</td>
                <td>{v.zone}</td><td><span className="badge badge-purple">{v.category}</span></td>
                <td style={{ fontWeight: 500 }}>{v.type}</td>
                <td><span className={`badge severity-${v.severity.toLowerCase()}`}>{v.severity}</span></td>
                <td><span className={`badge ${v.status === 'Open' ? 'badge-red' : v.status === 'In Progress' ? 'badge-yellow' : 'badge-green'}`}>{v.status}</span></td>
                <td>{v.detectedDate}</td><td style={{ fontSize: '0.78rem' }}>{v.detectedBy}</td>
                <td>{v.evidence ? '📎' : '—'}</td>
              </tr>
            );
          })}</tbody>
        </table>
      </div>
    </div>
  );
}

// ============== CORRECTIVE ACTIONS PAGE ==============
function CorrectiveActionsPage() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? correctiveActions : correctiveActions.filter(ca => ca.status === filter);
  const overdue = correctiveActions.filter(ca => ca.status !== 'Closed' && new Date(ca.deadline) < new Date());

  return (
    <div>
      <div className="page-header"><div><h2>✅ Corrective Action Management</h2><span className="subtitle">Track and verify corrective actions</span></div></div>
      {overdue.length > 0 && (
        <div className="card" style={{ marginBottom: 16, borderLeft: '3px solid var(--red)', background: 'var(--red-bg)' }}>
          <div style={{ fontWeight: 700, color: 'var(--red)', marginBottom: 4 }}>⚠️ {overdue.length} OVERDUE Corrective Actions</div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>These actions have passed their deadline and require immediate attention.</div>
        </div>
      )}
      <div className="filters-bar">
        {['all', 'Open', 'In Progress', 'Submitted', 'Under Review', 'Closed'].map(s => (
          <button key={s} className={`filter-chip ${filter === s ? 'active' : ''}`} onClick={() => setFilter(s)}>{s === 'all' ? 'All Status' : s}</button>
        ))}
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead><tr><th>ID</th><th>Violation</th><th>Mine</th><th>Responsible</th><th>Action</th><th>Deadline</th><th>Priority</th><th>Status</th><th>Verified</th></tr></thead>
          <tbody>{filtered.map(ca => {
            const mine = getMine(ca.mineId);
            const isOverdue = ca.status !== 'Closed' && new Date(ca.deadline) < new Date();
            return (
              <tr key={ca.id} style={{ background: isOverdue ? 'var(--red-bg)' : undefined }}>
                <td style={{ fontWeight: 600, color: 'var(--text-accent)' }}>{ca.id}</td>
                <td>{ca.violationId}</td>
                <td>{mine?.name?.split(' ').slice(0, 2).join(' ')}</td>
                <td>{ca.responsible}</td>
                <td style={{ maxWidth: 200, whiteSpace: 'normal', fontSize: '0.78rem' }}>{ca.action.substring(0, 60)}...</td>
                <td style={{ color: isOverdue ? 'var(--red)' : undefined, fontWeight: isOverdue ? 700 : 400 }}>{ca.deadline} {isOverdue && '⚠️'}</td>
                <td><span className={`badge severity-${ca.priority.toLowerCase()}`}>{ca.priority}</span></td>
                <td><span className={`badge ${ca.status === 'Closed' ? 'badge-green' : ca.status === 'In Progress' ? 'badge-yellow' : 'badge-red'}`}>{ca.status}</span></td>
                <td>{ca.verification || '—'}</td>
              </tr>
            );
          })}</tbody>
        </table>
      </div>
    </div>
  );
}

// ============== FIELD INSPECTION PAGE ==============
function FieldInspectionPage() {
  const [step, setStep] = useState(0);
  const [offline, setOffline] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [gps, setGps] = useState(null);

  const startInspection = () => {
    setStep(1);
    setTimeout(() => { setGps({ lat: 23.7465, lng: 86.4142 }); }, 1000);
  };

  const simulateOffline = () => {
    setOffline(true);
    setTimeout(() => { setSyncing(true); setTimeout(() => { setOffline(false); setSyncing(false); setStep(5); }, 2000); }, 3000);
  };

  return (
    <div className="field-mode">
      <div className="field-header">
        <h2>📱 Field Inspection Mode</h2>
        <p>Mobile-optimized inspector interface</p>
      </div>

      {offline && <div className="offline-banner">📡 OFFLINE MODE — Data saved locally</div>}
      {syncing && <div className="sync-banner"><span className="loading-spinner" style={{ width: 16, height: 16, borderWidth: 2, margin: 0 }} /> SYNCING DATA...</div>}
      {step === 5 && <div className="sync-banner">✅ SYNC COMPLETE — All data uploaded successfully</div>}

      {step === 0 && (
        <div>
          <button className="field-btn" onClick={startInspection} style={{ background: 'var(--gradient-primary)', color: 'white', border: 'none' }}>
            <span className="field-icon">🔍</span> START INSPECTION
          </button>
          <button className="field-btn" onClick={() => setStep(2)}><span className="field-icon">📍</span> CAPTURE GPS</button>
          <button className="field-btn" onClick={() => setStep(3)}><span className="field-icon">📷</span> TAKE PHOTO</button>
          <button className="field-btn" onClick={() => setStep(4)}><span className="field-icon">🎙️</span> RECORD VOICE</button>
          <button className="field-btn" onClick={() => setStep(6)}><span className="field-icon">🚨</span> REPORT VIOLATION</button>
          <button className="field-btn" onClick={simulateOffline}><span className="field-icon">📡</span> SIMULATE OFFLINE</button>
        </div>
      )}

      {step === 1 && (
        <div className="card">
          <h3 style={{ marginBottom: 16 }}>🔍 New Inspection</h3>
          <div className="form-group"><label>Mine</label><select className="form-select"><option>Jharia Coalfield - Block A</option></select></div>
          <div className="form-group"><label>Inspection Type</label><select className="form-select"><option>Safety</option><option>Environmental</option><option>Compliance</option><option>Equipment</option></select></div>
          {gps && <div style={{ background: 'var(--green-bg)', border: '1px solid var(--green-border)', borderRadius: 'var(--radius)', padding: 10, marginBottom: 12, fontSize: '0.82rem', color: 'var(--green)' }}>📍 GPS Captured: {gps.lat}, {gps.lng} | {new Date().toLocaleString()}</div>}
          <div className="form-group"><label>Observations</label><textarea className="form-textarea" placeholder="Enter your observations..."></textarea></div>
          <div className="form-group"><label>Severity</label><select className="form-select"><option>Low</option><option>Medium</option><option>High</option><option>Critical</option></select></div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-primary" onClick={() => setStep(5)}>📤 SUBMIT</button>
            <button className="btn btn-outline" onClick={() => setStep(0)}>Cancel</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: 12 }}>📍</div>
          <h3>GPS Location Captured</h3>
          <p style={{ color: 'var(--green)', fontSize: '1.2rem', fontWeight: 700, margin: '12px 0' }}>23.7465°N, 86.4142°E</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>{new Date().toLocaleString()}</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>Accuracy: ±5 meters</p>
          <button className="btn btn-primary" style={{ marginTop: 16 }} onClick={() => setStep(0)}>✅ Done</button>
        </div>
      )}

      {step === 3 && (
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: 12 }}>📷</div>
          <h3>Photo Captured</h3>
          <div style={{ width: '100%', height: 200, background: 'var(--bg-tertiary)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '16px 0', border: '1px solid var(--border)' }}>
            <span style={{ color: 'var(--text-tertiary)', fontSize: '3rem' }}>🖼️</span>
          </div>
          <p style={{ color: 'var(--green)', fontSize: '0.85rem' }}>📍 Geo-tagged: 23.7465°N, 86.4142°E | {new Date().toLocaleString()}</p>
          <button className="btn btn-primary" style={{ marginTop: 12 }} onClick={() => setStep(0)}>✅ Save Evidence</button>
        </div>
      )}

      {step === 4 && (
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: 12 }}>🎙️</div>
          <h3>Voice Recording</h3>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--red)', margin: '16px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pulse 1s infinite' }}>
            <span style={{ fontSize: '2rem' }}>🎙️</span>
          </div>
          <p style={{ color: 'var(--red)' }}>● Recording...</p>
          <button className="btn btn-danger" style={{ marginTop: 12 }} onClick={() => setStep(0)}>⏹ Stop & Save</button>
        </div>
      )}

      {step === 6 && (
        <div className="card">
          <h3 style={{ marginBottom: 16 }}>🚨 Quick Violation Report</h3>
          <div className="form-group"><label>Category</label><select className="form-select"><option>PPE</option><option>Safety</option><option>Environmental</option></select></div>
          <div className="form-group"><label>Type</label><input className="form-input" placeholder="e.g., Missing Helmet" /></div>
          <div className="form-group"><label>Zone</label><select className="form-select"><option>Zone 1</option><option>Zone 2</option><option>Zone 3</option><option>Zone 4</option></select></div>
          <div className="form-group"><label>Description</label><textarea className="form-textarea" placeholder="Describe the violation..."></textarea></div>
          <button className="btn btn-danger" onClick={() => { setStep(0); }}>🚨 Submit Violation</button>
        </div>
      )}
    </div>
  );
}

// ============== PPE DETECTION PAGE ==============
function PPEDetectionPage() {
  const { addToast } = useApp();
  const [detecting, setDetecting] = useState(false);
  const [result, setResult] = useState(null);

  const runDetection = () => {
    setDetecting(true);
    setTimeout(() => {
      setResult({
        helmet: true, vest: true, gloves: false, shoes: true, goggles: false,
        violations: ['Missing Gloves', 'Missing Safety Goggles'],
        confidence: 94,
        worker: 'W005 - Ajay Mahto',
        mine: 'Jharia Coalfield - Block A',
        zone: 'Zone 4',
        timestamp: new Date().toISOString(),
        lat: 23.7470, lng: 86.4150,
      });
      setDetecting(false);
      addToast('critical', 'PPE Violation Detected', 'Missing Gloves and Safety Goggles detected in Zone 4');
    }, 2500);
  };

  return (
    <div>
      <div className="page-header"><div><h2>👁️ AI Computer Vision — PPE Detection Center</h2><span className="subtitle">Real-time PPE compliance monitoring using AI</span></div></div>

      <div className="grid-2">
        <div className="card">
          <div className="card-title" style={{ marginBottom: 12 }}>AI Vision Input</div>
          <div style={{ width: '100%', height: 280, background: 'var(--bg-tertiary)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', marginBottom: 16 }}>
            {detecting ? <div><div className="loading-spinner" /><p style={{ color: 'var(--text-tertiary)', fontSize: '0.82rem', marginTop: 8 }}>AI analyzing image...</p></div>
            : <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '4rem' }}>📷</span>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.82rem', marginTop: 8 }}>Upload worker image or use camera feed</p>
            </div>}
          </div>
          <button className="btn btn-primary btn-lg" style={{ width: '100%' }} onClick={runDetection} disabled={detecting}>
            {detecting ? '⏳ AI Analyzing...' : '👁️ Run PPE Detection'}
          </button>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', marginTop: 8, textAlign: 'center' }}>Prototype: Simulated AI detection using YOLO/OpenCV architecture</p>
        </div>

        <div className="card">
          <div className="card-title" style={{ marginBottom: 12 }}>Detection Results</div>
          {result ? (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
                {[
                  { item: 'Helmet', ok: result.helmet, icon: '⛑️' },
                  { item: 'Safety Vest', ok: result.vest, icon: '🦺' },
                  { item: 'Gloves', ok: result.gloves, icon: '🧤' },
                  { item: 'Safety Shoes', ok: result.shoes, icon: '👢' },
                  { item: 'Safety Goggles', ok: result.goggles, icon: '🥽' },
                ].map((p, i) => (
                  <div key={i} style={{ padding: '10px', borderRadius: 'var(--radius)', background: p.ok ? 'var(--green-bg)' : 'var(--red-bg)', border: `1px solid ${p.ok ? 'var(--green-border)' : 'var(--red-border)'}`, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span>{p.icon}</span>
                    <span style={{ flex: 1, fontSize: '0.82rem', fontWeight: 500 }}>{p.item}</span>
                    <span style={{ fontWeight: 700, color: p.ok ? 'var(--green)' : 'var(--red)' }}>{p.ok ? '✓' : '✕'}</span>
                  </div>
                ))}
              </div>

              {result.violations.length > 0 && (
                <div style={{ background: 'var(--red-bg)', border: '1px solid var(--red-border)', borderRadius: 'var(--radius)', padding: 14, marginBottom: 12 }}>
                  <div style={{ fontWeight: 700, color: 'var(--red)', marginBottom: 6 }}>🚨 PPE VIOLATION DETECTED</div>
                  {result.violations.map((v, i) => <div key={i} style={{ fontSize: '0.82rem' }}>• {v}</div>)}
                  <div style={{ marginTop: 8, fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Severity: <span style={{ fontWeight: 700, color: 'var(--orange)' }}>HIGH</span></div>
                </div>
              )}

              <div className="stat-inline"><span className="stat-label">Worker</span><span className="stat-value">{result.worker}</span></div>
              <div className="stat-inline"><span className="stat-label">Mine</span><span className="stat-value">{result.mine}</span></div>
              <div className="stat-inline"><span className="stat-label">Zone</span><span className="stat-value">{result.zone}</span></div>
              <div className="stat-inline"><span className="stat-label">GPS</span><span className="stat-value">{result.lat}, {result.lng}</span></div>
              <div className="stat-inline"><span className="stat-label">Confidence</span><span className="stat-value">{result.confidence}%</span></div>
              <div className="stat-inline"><span className="stat-label">Timestamp</span><span className="stat-value">{new Date(result.timestamp).toLocaleString()}</span></div>

              <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                <button className="btn btn-danger btn-sm">🚨 Create Violation</button>
                <button className="btn btn-outline btn-sm">📋 Assign Corrective Action</button>
                <button className="btn btn-outline btn-sm">🔔 Notify Safety Officer</button>
              </div>
            </div>
          ) : (
            <div className="empty-state"><div className="empty-icon">👁️</div><p>Run detection to see results</p></div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============== VOICE REPORTING PAGE ==============
function VoiceReportingPage() {
  const [recording, setRecording] = useState(false);
  const [result, setResult] = useState(null);

  const startRecording = () => {
    setRecording(true);
    setTimeout(() => {
      setRecording(false);
      setResult({
        transcript: 'Zone 4 mein worker ne helmet nahi pehna hai. Safety vest bhi nahi hai.',
        language: 'Hindi',
        issue: 'Missing Helmet, Missing Safety Vest',
        location: 'Zone 4',
        category: 'PPE',
        severity: 'High',
        recommendation: 'Immediate PPE compliance check in Zone 4. Issue helmets and safety vests to workers.',
      });
    }, 3000);
  };

  return (
    <div>
      <div className="page-header"><div><h2>🎙️ Multilingual Voice Reporting</h2><span className="subtitle">Speech-to-text with NLP issue extraction</span></div></div>
      <div className="grid-2">
        <div className="card" style={{ textAlign: 'center' }}>
          <div className="card-title" style={{ marginBottom: 16 }}>Voice Input</div>
          <div style={{ width: 120, height: 120, borderRadius: '50%', background: recording ? 'var(--red)' : 'var(--bg-tertiary)', border: `2px solid ${recording ? 'var(--red)' : 'var(--border)'}`, margin: '20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s', animation: recording ? 'pulse 1s infinite' : 'none' }} onClick={recording ? () => {} : startRecording}>
            <span style={{ fontSize: '3rem' }}>🎙️</span>
          </div>
          <p style={{ color: recording ? 'var(--red)' : 'var(--text-tertiary)', fontWeight: recording ? 700 : 400 }}>{recording ? '● Recording... Speak now' : 'Click to start recording'}</p>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', marginTop: 8 }}>Supported: English, Hindi</p>
          {recording && <button className="btn btn-danger" style={{ marginTop: 12 }} onClick={() => setRecording(false)}>⏹ Stop</button>}
        </div>

        <div className="card">
          <div className="card-title" style={{ marginBottom: 12 }}>NLP Analysis Result</div>
          {result ? (
            <div>
              <div style={{ background: 'var(--bg-tertiary)', padding: 14, borderRadius: 'var(--radius)', marginBottom: 12, borderLeft: '3px solid var(--blue)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', marginBottom: 4 }}>VOICE INPUT → SPEECH TO TEXT → NLP ANALYSIS</div>
                <div style={{ fontSize: '0.85rem', fontStyle: 'italic' }}>"{result.transcript}"</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', marginTop: 4 }}>Language: {result.language}</div>
              </div>
              <div className="stat-inline"><span className="stat-label">Issue</span><span className="stat-value" style={{ color: 'var(--red)' }}>{result.issue}</span></div>
              <div className="stat-inline"><span className="stat-label">Location</span><span className="stat-value">{result.location}</span></div>
              <div className="stat-inline"><span className="stat-label">Category</span><span className="stat-value">{result.category}</span></div>
              <div className="stat-inline"><span className="stat-label">Severity</span><span className={`badge severity-${result.severity.toLowerCase()}`}>{result.severity}</span></div>
              <div style={{ marginTop: 12, padding: 12, background: 'var(--blue-bg)', borderRadius: 'var(--radius)', border: '1px solid var(--blue-border)' }}>
                <div style={{ fontWeight: 600, color: 'var(--blue)', fontSize: '0.78rem', marginBottom: 4 }}>💡 Recommended Action</div>
                <div style={{ fontSize: '0.82rem' }}>{result.recommendation}</div>
              </div>
              <button className="btn btn-danger" style={{ marginTop: 12 }}>🚨 Create Violation from Report</button>
            </div>
          ) : <div className="empty-state"><div className="empty-icon">🎙️</div><p>Record a voice report to see NLP analysis</p></div>}
        </div>
      </div>
    </div>
  );
}

// ============== NLP DOCUMENT ANALYSIS PAGE ==============
function NLPAnalysisPage() {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const analyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setResult({
        type: 'Mining Lease Permit', mine: 'Jharia Coalfield - Block A', authority: 'Indian Bureau of Mines', issueDate: '2020-03-15', expiryDate: '2026-10-15',
        requirements: ['Maintain safety standards as per Coal Mines Regulations 2017', 'Submit quarterly environmental reports', 'Conduct bi-annual safety audits', 'Maintain worker welfare facilities'],
        alerts: [
          { type: 'EXPIRING', message: 'Document expires on 2026-10-15 (19 days remaining)' },
          { type: 'MISSING', message: 'Quarterly environmental report for Q3 2026 not submitted' },
        ],
      });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div>
      <div className="page-header"><div><h2>📄 NLP Document Analysis</h2><span className="subtitle">AI-powered document scanning and compliance extraction</span></div></div>
      <div className="grid-2">
        <div className="card">
          <div className="card-title" style={{ marginBottom: 12 }}>Upload Document</div>
          <div style={{ width: '100%', height: 200, border: '2px dashed var(--border)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, background: 'var(--bg-input)' }}>
            <div style={{ textAlign: 'center' }}><span style={{ fontSize: '3rem' }}>📄</span><p style={{ color: 'var(--text-tertiary)', fontSize: '0.82rem', marginTop: 8 }}>Drag & drop or click to upload</p></div>
          </div>
          <button className="btn btn-primary btn-lg" style={{ width: '100%' }} onClick={analyze} disabled={analyzing}>{analyzing ? '⏳ Analyzing Document...' : '🤖 Analyze Document'}</button>
        </div>
        <div className="card">
          <div className="card-title" style={{ marginBottom: 12 }}>Analysis Results</div>
          {analyzing && <div className="loading-spinner" />}
          {result && !analyzing && (
            <div>
              <div className="stat-inline"><span className="stat-label">Document Type</span><span className="stat-value">{result.type}</span></div>
              <div className="stat-inline"><span className="stat-label">Mine</span><span className="stat-value">{result.mine}</span></div>
              <div className="stat-inline"><span className="stat-label">Authority</span><span className="stat-value">{result.authority}</span></div>
              <div className="stat-inline"><span className="stat-label">Issue Date</span><span className="stat-value">{result.issueDate}</span></div>
              <div className="stat-inline"><span className="stat-label">Expiry Date</span><span className="stat-value" style={{ color: 'var(--red)' }}>{result.expiryDate}</span></div>
              <div style={{ marginTop: 12 }}><div style={{ fontWeight: 600, fontSize: '0.82rem', marginBottom: 6 }}>Key Requirements:</div>{result.requirements.map((r, i) => <div key={i} style={{ fontSize: '0.78rem', padding: '3px 0' }}>• {r}</div>)}</div>
              {result.alerts.map((a, i) => (
                <div key={i} style={{ marginTop: 8, padding: 10, background: a.type === 'EXPIRING' ? 'var(--yellow-bg)' : 'var(--red-bg)', borderRadius: 'var(--radius)', border: `1px solid ${a.type === 'EXPIRING' ? 'var(--yellow-border)' : 'var(--red-border)'}` }}>
                  <span className={`badge ${a.type === 'EXPIRING' ? 'badge-yellow' : 'badge-red'}`}>{a.type}</span>
                  <span style={{ fontSize: '0.82rem', marginLeft: 8 }}>{a.message}</span>
                </div>
              ))}
            </div>
          )}
          {!result && !analyzing && <div className="empty-state"><div className="empty-icon">📄</div><p>Upload a document to analyze</p></div>}
        </div>
      </div>
    </div>
  );
}

// ============== ENVIRONMENTAL PAGE ==============
function EnvironmentalPage() {
  return (
    <div>
      <div className="page-header"><div><h2>🌿 Environmental Monitoring</h2><span className="subtitle">Real-time environmental compliance tracking</span></div></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 14 }}>
        {environmentalData.map(e => {
          const mine = getMine(e.mineId);
          return (
            <div key={e.id} className="card" style={{ borderLeft: `3px solid ${e.status === 'Critical' ? 'var(--red)' : e.status === 'Warning' ? 'var(--yellow)' : 'var(--green)'}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{e.parameter}</span>
                <span className={`badge ${e.status === 'Critical' ? 'badge-red' : e.status === 'Warning' ? 'badge-yellow' : 'badge-green'}`}>{e.status}</span>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: e.status === 'Critical' ? 'var(--red)' : e.status === 'Warning' ? 'var(--yellow)' : 'var(--green)' }}>{e.value} <span style={{ fontSize: '0.8rem', fontWeight: 400 }}>{e.unit}</span></div>
              <div className="score-bar" style={{ margin: '8px 0' }}>
                <div className="score-bar-fill" style={{ width: `${Math.min((e.value / e.limit) * 100, 100)}%`, background: e.status === 'Critical' ? 'var(--red)' : e.status === 'Warning' ? 'var(--yellow)' : 'var(--green)' }} />
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>Limit: {e.limit} {e.unit} | {mine?.name?.split(' ').slice(0, 2).join(' ')} — {e.zone}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============== SENSORS PAGE ==============
function SensorsPage() {
  return (
    <div>
      <div className="page-header"><div><h2>📡 IoT Sensor Dashboard</h2><span className="subtitle">Real-time sensor data from connected devices</span></div></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
        {sensorData.map(s => {
          const mine = getMine(s.mineId);
          return (
            <div key={s.id} className="card" style={{ textAlign: 'center', borderTop: `3px solid ${s.value === 'Critical' ? 'var(--red)' : s.value === 'Warning' ? 'var(--yellow)' : 'var(--green)'}` }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 4 }}>{s.type === 'Gas' ? '💨' : s.type === 'Temperature' ? '🌡️' : s.type === 'Vibration' ? '📳' : '🌫️'}</div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: 2 }}>{s.type} Sensor</div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: s.value === 'Critical' ? 'var(--red)' : s.value === 'Warning' ? 'var(--yellow)' : 'var(--green)' }}>{s.reading} <span style={{ fontSize: '0.7rem' }}>{s.unit}</span></div>
              <div className={`badge ${s.value === 'Critical' ? 'badge-red' : s.value === 'Warning' ? 'badge-yellow' : 'badge-green'}`} style={{ marginTop: 8 }}>{s.value}</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', marginTop: 6 }}>{mine?.name?.split(' ').slice(0, 2).join(' ')} | {s.location}</div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)' }}>Threshold: {s.threshold} {s.unit}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============== BOUNDARY PAGE ==============
function BoundaryPage() {
  return (
    <div>
      <div className="page-header"><div><h2>🛰️ Boundary Monitoring & Illegal Mining Detection</h2><span className="subtitle">GIS-based boundary surveillance</span></div></div>
      {boundaryEvents.map(be => {
        const mine = getMine(be.mineId);
        return (
          <div key={be.id} className="card" style={{ marginBottom: 14, borderLeft: `3px solid ${be.status === 'Under Investigation' ? 'var(--red)' : 'var(--green)'}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem' }}>⚠️ {be.type.toUpperCase()}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{mine?.name} — {be.location}</div>
              </div>
              <span className={`badge ${be.status === 'Under Investigation' ? 'badge-red' : 'badge-green'}`}>{be.status}</span>
            </div>
            <div style={{ fontSize: '0.82rem', marginBottom: 8 }}>{be.description}</div>
            <div className="stat-inline"><span className="stat-label">Coordinates</span><span className="stat-value">{be.lat}°N, {be.lng}°E</span></div>
            <div className="stat-inline"><span className="stat-label">Date</span><span className="stat-value">{be.date}</span></div>
            <div className="stat-inline"><span className="stat-label">Detected By</span><span className="stat-value">{be.detectedBy}</span></div>
            <div className="stat-inline"><span className="stat-label">Evidence</span><span className="stat-value">{be.evidence}</span></div>
          </div>
        );
      })}
    </div>
  );
}

// ============== DRONE SURVEY PAGE ==============
function DroneSurveyPage() {
  return (
    <div>
      <div className="page-header"><div><h2>🚁 Drone Survey Data</h2><span className="subtitle">Aerial survey analysis and change detection</span></div></div>
      <div className="table-container">
        <table className="data-table">
          <thead><tr><th>ID</th><th>Mine</th><th>Date</th><th>Zone</th><th>Status</th><th>Boundary Change</th><th>Excavation Change</th><th>Activity Change</th><th>Notes</th></tr></thead>
          <tbody>{droneSurveys.map(ds => {
            const mine = getMine(ds.mineId);
            return (
              <tr key={ds.id}>
                <td style={{ fontWeight: 600, color: 'var(--text-accent)' }}>{ds.id}</td>
                <td>{mine?.name?.split(' ').slice(0, 3).join(' ')}</td>
                <td>{ds.date}</td><td>{ds.zone}</td>
                <td><span className="badge badge-green">{ds.status}</span></td>
                <td>{ds.boundaryChange ? <span className="badge badge-red">Yes</span> : <span className="badge badge-green">No</span>}</td>
                <td>{ds.excavationChange ? <span className="badge badge-yellow">Yes</span> : <span className="badge badge-green">No</span>}</td>
                <td>{ds.activityChange ? <span className="badge badge-yellow">Yes</span> : <span className="badge badge-green">No</span>}</td>
                <td style={{ fontSize: '0.78rem', maxWidth: 250, whiteSpace: 'normal' }}>{ds.notes}</td>
              </tr>
            );
          })}</tbody>
        </table>
      </div>
    </div>
  );
}

// ============== DISPATCH PAGE ==============
function DispatchPage() {
  return (
    <div>
      <div className="page-header"><div><h2>🚛 Coal Dispatch & Weighbridge Data</h2><span className="subtitle">Transport monitoring and anomaly detection</span></div></div>
      {coalDispatch.some(cd => cd.anomaly) && (
        <div className="card" style={{ marginBottom: 16, borderLeft: '3px solid var(--orange)', background: 'var(--orange-bg)' }}>
          <div style={{ fontWeight: 700, color: 'var(--orange)' }}>⚠️ ANOMALY DETECTED — Unusual dispatch patterns found</div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: 4 }}>Overweight vehicles detected. Possible overloading beyond rated capacity.</div>
        </div>
      )}
      <div className="table-container">
        <table className="data-table">
          <thead><tr><th>ID</th><th>Mine</th><th>Vehicle</th><th>Date</th><th>Time</th><th>Weight (T)</th><th>Destination</th><th>Status</th><th>Anomaly</th></tr></thead>
          <tbody>{coalDispatch.map(cd => {
            const mine = getMine(cd.mineId);
            return (
              <tr key={cd.id} style={{ background: cd.anomaly ? 'var(--orange-bg)' : undefined }}>
                <td style={{ fontWeight: 600, color: 'var(--text-accent)' }}>{cd.id}</td>
                <td>{mine?.name?.split(' ').slice(0, 2).join(' ')}</td>
                <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem' }}>{cd.vehicleId}</td>
                <td>{cd.date}</td><td>{cd.time}</td>
                <td style={{ fontWeight: 600, color: cd.anomaly ? 'var(--orange)' : undefined }}>{cd.weight}</td>
                <td>{cd.destination}</td>
                <td><span className={`badge ${cd.status === 'Delivered' ? 'badge-green' : cd.status === 'In Transit' ? 'badge-blue' : 'badge-yellow'}`}>{cd.status}</span></td>
                <td>{cd.anomaly ? <span className="badge badge-red">⚠️ Anomaly</span> : '—'}</td>
              </tr>
            );
          })}</tbody>
        </table>
      </div>
    </div>
  );
}

// ============== CONTRACTORS PAGE ==============
function ContractorsPage() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? contractors : contractors.filter(c => c.risk === filter);

  return (
    <div>
      <div className="page-header"><div><h2>🏗️ Contractor Management</h2><span className="subtitle">Track contractor compliance and risk</span></div></div>
      <div className="filters-bar">
        {['all', 'Critical', 'High', 'Medium', 'Low'].map(f => (
          <button key={f} className={`filter-chip ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{f === 'all' ? 'All Risk Levels' : f}</button>
        ))}
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead><tr><th>ID</th><th>Contractor</th><th>Mine</th><th>Workers</th><th>Contract Period</th><th>Compliance</th><th>Violations</th><th>Training</th><th>Risk</th></tr></thead>
          <tbody>{filtered.map(c => {
            const mine = getMine(c.mineId);
            return (
              <tr key={c.id}>
                <td style={{ fontWeight: 600, color: 'var(--text-accent)' }}>{c.id}</td>
                <td style={{ fontWeight: 500 }}>{c.name}</td>
                <td>{mine?.name?.split(' ').slice(0, 2).join(' ')}</td>
                <td>{c.workers}</td>
                <td style={{ fontSize: '0.75rem' }}>{c.contractStart} — {c.contractEnd}</td>
                <td><span className={`badge ${c.compliance >= 80 ? 'badge-green' : c.compliance >= 60 ? 'badge-yellow' : 'badge-red'}`}>{c.compliance}%</span></td>
                <td>{c.safetyViolations}</td>
                <td><span className={`badge ${c.training === 'Completed' ? 'badge-green' : c.training === 'Partial' ? 'badge-yellow' : 'badge-red'}`}>{c.training}</span></td>
                <td><span className={`badge severity-${c.risk.toLowerCase()}`}>{c.risk}</span></td>
              </tr>
            );
          })}</tbody>
        </table>
      </div>
    </div>
  );
}

// ============== WORKERS PAGE ==============
function WorkersPage() {
  const [page, setPage] = useState(1);
  const perPage = 25;
  const total = workers.length;
  const pages = Math.ceil(total / perPage);
  const shown = workers.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <div className="page-header"><div><h2>👷 Worker Management</h2><span className="subtitle">{total} workers across all mines</span></div></div>
      <div className="table-container">
        <table className="data-table">
          <thead><tr><th>ID</th><th>Name</th><th>Mine</th><th>Contractor</th><th>Role</th><th>Age</th><th>Training</th><th>Certification</th><th>PPE</th><th>Violations</th></tr></thead>
          <tbody>{shown.map(w => {
            const mine = getMine(w.mineId);
            const con = contractors.find(c => c.id === w.contractorId);
            return (
              <tr key={w.id}>
                <td style={{ fontWeight: 600 }}>{w.id}</td><td>{w.name}</td>
                <td>{mine?.name?.split(' ').slice(0, 2).join(' ')}</td>
                <td style={{ fontSize: '0.78rem' }}>{con?.name?.split(' ').slice(0, 2).join(' ') || '—'}</td>
                <td>{w.role}</td><td>{w.age}</td>
                <td><span className={`badge ${w.training === 'Completed' ? 'badge-green' : 'badge-yellow'}`}>{w.training}</span></td>
                <td><span className={`badge ${w.certification === 'Valid' ? 'badge-green' : 'badge-red'}`}>{w.certification}</span></td>
                <td><span className={`badge ${w.ppeCompliance === 'Compliant' ? 'badge-green' : 'badge-red'}`}>{w.ppeCompliance}</span></td>
                <td>{w.safetyViolations}</td>
              </tr>
            );
          })}</tbody>
        </table>
      </div>
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>←</button>
        {Array.from({ length: pages }, (_, i) => (
          <button key={i} className={page === i + 1 ? 'active' : ''} onClick={() => setPage(i + 1)}>{i + 1}</button>
        ))}
        <button disabled={page === pages} onClick={() => setPage(page + 1)}>→</button>
      </div>
    </div>
  );
}

// ============== REPORTS PAGE ==============
function ReportsPage() {
  const { addToast } = useApp();
  const reportTypes = [
    { icon: '📋', title: 'Mine Compliance Report', desc: 'Comprehensive compliance status for a selected mine' },
    { icon: '🛡️', title: 'Safety Report', desc: 'Safety violations, inspections, and PPE compliance' },
    { icon: '🔍', title: 'Inspection Report', desc: 'Detailed inspection findings and recommendations' },
    { icon: '🚨', title: 'Violation Report', desc: 'All violations with severity and corrective actions' },
    { icon: '⚠️', title: 'Risk Report', desc: 'Risk scores, predictions, and factor analysis' },
    { icon: '🏗️', title: 'Contractor Report', desc: 'Contractor compliance and safety performance' },
    { icon: '👷', title: 'Worker Safety Report', desc: 'Worker PPE compliance and training status' },
    { icon: '🌿', title: 'Environmental Report', desc: 'Environmental monitoring and compliance data' },
    { icon: '📊', title: 'Executive Summary', desc: 'High-level overview for government officials' },
  ];

  return (
    <div>
      <div className="page-header"><div><h2>📑 Report Generation</h2><span className="subtitle">Automated report generation with AI insights</span></div></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14 }}>
        {reportTypes.map((r, i) => (
          <div key={i} className="card" style={{ cursor: 'pointer' }} onClick={() => addToast('success', 'Report Generated', `${r.title} generated successfully. Download ready.`)}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <span style={{ fontSize: '2rem' }}>{r.icon}</span>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{r.title}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: 12 }}>{r.desc}</div>
                <div style={{ display: 'flex', gap: 6 }}>
                  <button className="btn btn-sm btn-primary">📄 PDF</button>
                  <button className="btn btn-sm btn-outline">📊 CSV</button>
                  <button className="btn btn-sm btn-outline">🖨️ Print</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============== ANALYTICS PAGE ==============
function AnalyticsPage() {
  const [period, setPeriod] = useState('monthly');

  // Generate mock trend data
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  const complianceTrend = months.map((m, i) => ({ month: m, value: 75 + Math.floor(Math.random() * 15) + i }));
  const riskTrend = months.map((m, i) => ({ month: m, value: 45 + Math.floor(Math.random() * 20) - i }));
  const violationsByCategory = [
    { category: 'PPE', count: violations.filter(v => v.category === 'PPE').length },
    { category: 'Safety', count: violations.filter(v => v.category === 'Safety').length },
    { category: 'Environmental', count: violations.filter(v => v.category === 'Environmental').length },
    { category: 'Compliance', count: violations.filter(v => v.category === 'Compliance').length },
    { category: 'Labour', count: violations.filter(v => v.category === 'Labour').length },
    { category: 'Operational', count: violations.filter(v => v.category === 'Operational').length },
  ];

  return (
    <div>
      <div className="page-header">
        <div><h2>📈 Executive Analytics</h2><span className="subtitle">Advanced analytics and trend visualization</span></div>
        <div className="filters-bar">
          {['daily', 'weekly', 'monthly', 'yearly'].map(p => (
            <button key={p} className={`filter-chip ${period === p ? 'active' : ''}`} onClick={() => setPeriod(p)}>{p.charAt(0).toUpperCase() + p.slice(1)}</button>
          ))}
        </div>
      </div>

      <div className="grid-2" style={{ marginBottom: 20 }}>
        <div className="card">
          <div className="card-title" style={{ marginBottom: 12 }}>📊 Compliance Trend (2026)</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 180 }}>
            {complianceTrend.map((d, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 600, marginBottom: 4 }}>{d.value}%</div>
                <div style={{ width: '100%', height: `${d.value * 1.5}px`, background: d.value >= 85 ? 'var(--green)' : d.value >= 70 ? 'var(--yellow)' : 'var(--red)', borderRadius: '4px 4px 0 0', transition: 'height 1s ease', opacity: 0.8 }} />
                <div style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', marginTop: 4 }}>{d.month}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-title" style={{ marginBottom: 12 }}>📊 Violations by Category</div>
          {violationsByCategory.map((v, i) => (
            <div key={i} style={{ marginBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: 3 }}>
                <span>{v.category}</span><span style={{ fontWeight: 600 }}>{v.count}</span>
              </div>
              <div className="score-bar">
                <div className="score-bar-fill" style={{ width: `${(v.count / Math.max(...violationsByCategory.map(vc => vc.count))) * 100}%`, background: v.category === 'PPE' ? 'var(--orange)' : v.category === 'Safety' ? 'var(--red)' : v.category === 'Environmental' ? 'var(--green)' : 'var(--blue)' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-title" style={{ marginBottom: 12 }}>⚠️ Risk Trend (2026)</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 180 }}>
            {riskTrend.map((d, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 600, marginBottom: 4 }}>{d.value}</div>
                <div style={{ width: '100%', height: `${d.value * 2.5}px`, background: d.value >= 60 ? 'var(--red)' : d.value >= 40 ? 'var(--yellow)' : 'var(--green)', borderRadius: '4px 4px 0 0', opacity: 0.8 }} />
                <div style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', marginTop: 4 }}>{d.month}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-title" style={{ marginBottom: 12 }}>🏆 Mine Comparison — Top 5 by Compliance</div>
          {[...mines].sort((a, b) => b.complianceScore - a.complianceScore).slice(0, 5).map((m, i) => (
            <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
              <span style={{ fontWeight: 800, color: 'var(--text-tertiary)', width: 20 }}>{i + 1}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 600 }}>{m.name}</div>
                <div className="score-bar" style={{ marginTop: 4 }}><div className="score-bar-fill" style={{ width: `${m.complianceScore}%`, background: 'var(--green)' }} /></div>
              </div>
              <span style={{ fontWeight: 700, color: 'var(--green)' }}>{m.complianceScore}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============== AUDIT PAGE ==============
function AuditPage() {
  return (
    <div>
      <div className="page-header"><div><h2>📝 Audit Trail</h2><span className="subtitle">Complete system activity log</span></div></div>
      <div className="table-container">
        <table className="data-table">
          <thead><tr><th>ID</th><th>User</th><th>Action</th><th>Date</th><th>Time</th><th>Module</th><th>Record</th><th>Status</th></tr></thead>
          <tbody>{auditLogs.slice(0, 40).map(al => (
            <tr key={al.id}>
              <td style={{ fontWeight: 600, color: 'var(--text-accent)' }}>{al.id}</td>
              <td style={{ fontWeight: 500 }}>{al.user}</td>
              <td>{al.action}</td><td>{al.date}</td><td>{al.time}</td>
              <td><span className="badge badge-blue">{al.module}</span></td>
              <td>{al.record || '—'}</td>
              <td><span className={`badge ${al.status === 'Success' ? 'badge-green' : al.status === 'Auto' ? 'badge-cyan' : 'badge-yellow'}`}>{al.status}</span></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}

// ============== NOTIFICATION PANEL ==============
function NotificationPanel() {
  const { setShowNotifications } = useApp();
  return (
    <div className="notification-panel">
      <div className="notification-panel-header">
        <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>🔔 Notifications</h3>
        <button className="modal-close" onClick={() => setShowNotifications(false)}>✕</button>
      </div>
      {notifData.slice(0, 20).map(n => (
        <div key={n.id} className={`notification-item ${!n.read ? 'unread' : ''}`}>
          <div className="n-header">
            <span>{n.type === 'Critical' ? '🔴' : n.type === 'High' ? '🟠' : n.type === 'Warning' ? '🟡' : n.type === 'Resolved' ? '🟢' : '🔵'}</span>
            <span className="n-title">{n.title}</span>
          </div>
          <div className="n-message">{n.message}</div>
          <div className="n-time">{new Date(n.time).toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
}

// ============== COPILOT FAB ==============
function CopilotFAB() {
  const { showCopilot, setShowCopilot } = useApp();
  return <button className="copilot-fab" onClick={() => setShowCopilot(!showCopilot)} title="AI Compliance Copilot">🤖</button>;
}

// ============== COPILOT PANEL ==============
function CopilotPanel() {
  const { setShowCopilot } = useApp();
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hello! I am the CONETRAAL AI Compliance Copilot. I have access to all mine data, violations, inspections, and compliance records. How can I help you?' },
  ]);
  const [input, setInput] = useState('');

  const suggestions = [
    'Which mines are high risk?',
    'Which permits expire this month?',
    'Show recurring violations',
    'Why is Mine A high risk?',
    'Which corrective actions are overdue?',
    "Show today's critical alerts",
  ];

  const getResponse = (query) => {
    const q = query.toLowerCase();
    if (q.includes('high risk') && q.includes('mine')) {
      const highRisk = mines.filter(m => m.riskScore >= 70);
      return `There are **${highRisk.length} high-risk mines**:\n\n${highRisk.map(m => `• **${m.name}** — Risk: ${m.riskScore}/100, Violations: ${m.activeViolations}`).join('\n')}\n\n**Recommended:** Schedule immediate inspections for all critical-risk mines.`;
    }
    if (q.includes('permit') && q.includes('expire')) {
      const expiring = complianceRecords.filter(c => c.status === 'Expiring Soon' || c.status === 'Expired');
      return `There are **${expiring.length} permits/documents** expiring or expired:\n\n${expiring.slice(0, 5).map(c => `• **${c.requirement}** (${getMine(c.mineId)?.name?.split(' ').slice(0, 2).join(' ')}) — ${c.status} (${c.expiryDate})`).join('\n')}\n\n**Action:** Initiate renewal process immediately for expired documents.`;
    }
    if (q.includes('recurring') && q.includes('violation')) {
      return `**Recurring Violation Detected:**\n\n🔄 Helmet violations in **Jharia Block A, Zone 4** — Detected **7 times** in the last 30 days.\n\n**Pattern:** Same zone, same contractor (Sharma Mining Services), multiple workers.\n\n**Recommendation:**\n1. Increase safety inspection frequency in Zone 4\n2. Install helmet dispensers at zone entry\n3. Consider contractor penalty\n4. Conduct mandatory safety training`;
    }
    if (q.includes('why') && (q.includes('mine a') || q.includes('jharia') || q.includes('m001'))) {
      return `**Mine Jharia Block A (M001)** has a high risk score of **78/100** because:\n\n1. 🔄 **4 repeated PPE violations** in Zone 4 (helmets)\n2. ⏰ **2 overdue corrective actions** past deadline\n3. 📋 **Explosives License** expires September 30\n4. 📋 **Mining Lease** expiring soon\n5. 🌫️ **Elevated dust levels** in Zone 3 (PM10 above limit)\n\n**AI Prediction:** Risk predicted to increase from 78 to **85** in next 30 days.\n\n**Recommended Actions:**\n1. Schedule immediate safety inspection for Zone 4\n2. Close overdue corrective actions\n3. Renew Explosives License urgently\n4. Activate dust suppression systems`;
    }
    if (q.includes('corrective') && q.includes('overdue')) {
      const overdue = correctiveActions.filter(ca => ca.status !== 'Closed' && new Date(ca.deadline) < new Date());
      return `There are **${overdue.length} overdue corrective actions**:\n\n${overdue.slice(0, 5).map(ca => `• **${ca.id}** (${ca.violationId}) — ${ca.action.substring(0, 50)}... | Deadline: ${ca.deadline}`).join('\n')}\n\n**Action:** Escalate to mine managers and set priority to Critical.`;
    }
    if (q.includes('critical') && q.includes('alert')) {
      const critical = notifData.filter(n => n.type === 'Critical' && !n.read);
      return `There are **${critical.length} unread critical alerts** today:\n\n${critical.slice(0, 5).map(n => `• 🔴 **${n.title}**: ${n.message}`).join('\n')}\n\n**All alerts require immediate attention.**`;
    }
    if (q.includes('non-compliant') || q.includes('non compliant')) {
      const nc = mines.filter(m => m.complianceScore < 70);
      return `There are **${nc.length} non-compliant mines** (compliance < 70%):\n\n${nc.map(m => `• **${m.name}** — Compliance: ${m.complianceScore}%, Risk: ${m.riskScore}`).join('\n')}\n\n**Action:** Issue compliance improvement notices and schedule regulatory reviews.`;
    }
    if (q.includes('safety') && q.includes('risk')) {
      return `**Highest safety risk mine:** Bhuli Underground (M016) with risk score **90/100**.\n\n**Factors:**\n• Active fire hazard in deep gallery\n• Expired mine rescue plan\n• 9 active violations (6 critical)\n• PPE compliance below 50%\n• Electrical short circuit detected\n\n**Recommendation:** Consider temporary closure until critical safety issues are resolved.`;
    }
    return `Based on my analysis of the CONETRAAL database:\n\n📊 **System Status:**\n• ${mines.length} mines being monitored\n• ${violations.filter(v => v.status !== 'Closed').length} active violations\n• ${mines.filter(m => m.riskScore >= 70).length} high-risk mines\n• ${complianceRecords.filter(c => c.status === 'Expired').length} expired compliance documents\n\nPlease ask a more specific question about mines, violations, compliance, risk, or corrective actions. I have full access to all system data.`;
  };

  const send = (text) => {
    const q = text || input;
    if (!q.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: q }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: getResponse(q) }]);
    }, 800);
  };

  return (
    <div className="copilot-panel">
      <div className="copilot-header">
        <h4>🤖 CONETRAAL AI Compliance Copilot</h4>
        <button className="modal-close" style={{ color: 'white' }} onClick={() => setShowCopilot(false)}>✕</button>
      </div>
      <div className="copilot-messages">
        {messages.map((m, i) => (
          <div key={i} className={`copilot-msg ${m.role}`}>
            <div className="msg-bubble" style={{ whiteSpace: 'pre-line' }}>{m.text}</div>
          </div>
        ))}
      </div>
      <div className="copilot-suggestions">
        {suggestions.map((s, i) => (
          <button key={i} className="copilot-suggestion" onClick={() => send(s)}>{s}</button>
        ))}
      </div>
      <div className="copilot-input">
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Ask the AI Copilot..." />
        <button onClick={() => send()}>Send</button>
      </div>
    </div>
  );
}

// ============== TOAST CONTAINER ==============
function ToastContainer() {
  const { toasts, setToasts } = useApp();
  // setToasts isn't directly available; use the toasts from context
  return (
    <div className="toast-container">
      {toasts.map(t => (
        <div key={t.id} className={`toast toast-${t.type === 'critical' ? 'critical' : t.type === 'high' ? 'high' : t.type === 'warning' ? 'warning' : t.type === 'success' ? 'success' : 'info'}`}>
          <span>{t.type === 'critical' ? '🔴' : t.type === 'high' ? '🟠' : t.type === 'warning' ? '🟡' : t.type === 'success' ? '🟢' : '🔵'}</span>
          <div className="toast-message"><strong>{t.title}</strong><br />{t.message}</div>
        </div>
      ))}
    </div>
  );
}

// ============== DRAWER ==============
function Drawer() {
  const { drawerData, setDrawerData } = useApp();
  if (!drawerData) return null;
  return (
    <>
      <div className="drawer-overlay" onClick={() => setDrawerData(null)} />
      <div className="drawer">
        <div className="drawer-header">
          <h3>{drawerData.title}</h3>
          <button className="modal-close" onClick={() => setDrawerData(null)}>✕</button>
        </div>
        <div className="drawer-body">{drawerData.content}</div>
      </div>
    </>
  );
}
