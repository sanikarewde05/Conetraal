// ============================================================
// CONETRAAL - Complete Mock Database
// AI-Based Smart Governance & Compliance Monitoring for Coal Mines
// ============================================================

// ---- USERS ----
export const users = [
  { id: 'U001', name: 'Dr. Arvind Kumar', email: 'arvind@gov.in', password: 'demo123', role: 'government', avatar: '👨‍💼', department: 'Ministry of Coal', designation: 'Director General of Mines Safety' },
  { id: 'U002', name: 'Rajesh Sharma', email: 'rajesh@minecorp.in', password: 'demo123', role: 'mine_manager', avatar: '👷', department: 'Coal India Ltd', designation: 'Mine Manager', mineId: 'M001' },
  { id: 'U003', name: 'Priya Singh', email: 'priya@safety.in', password: 'demo123', role: 'safety_officer', avatar: '👩‍🔬', department: 'DGMS', designation: 'Senior Safety Officer', mineId: 'M001' },
  { id: 'U004', name: 'Rahul Verma', email: 'rahul@inspect.in', password: 'demo123', role: 'inspector', avatar: '🔍', department: 'DGMS', designation: 'Field Inspector', mineId: 'M001' },
  { id: 'U005', name: 'Sunita Devi', email: 'sunita@gov.in', password: 'demo123', role: 'government', avatar: '👩‍💼', department: 'Ministry of Coal', designation: 'Joint Secretary' },
  { id: 'U006', name: 'Amit Patel', email: 'amit@minecorp.in', password: 'demo123', role: 'mine_manager', avatar: '👷', department: 'SECL', designation: 'Mine Manager', mineId: 'M005' },
];

// ---- MINES ----
export const mines = [
  { id: 'M001', name: 'Jharia Coalfield - Block A', operator: 'BCCL (Coal India)', state: 'Jharkhand', district: 'Dhanbad', lat: 23.7465, lng: 86.4142, type: 'Open Cast', openDate: '2005-03-15', status: 'Active', productionStatus: 'Full Production', complianceScore: 72, riskScore: 78, lastInspection: '2026-09-20', activeViolations: 4, totalWorkers: 342, dailyProduction: 4500, unit: 'tonnes', zones: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4'] },
  { id: 'M002', name: 'Korba West Mine', operator: 'SECL (Coal India)', state: 'Chhattisgarh', district: 'Korba', lat: 22.3595, lng: 82.7501, type: 'Open Cast', openDate: '2008-07-20', status: 'Active', productionStatus: 'Full Production', complianceScore: 88, riskScore: 35, lastInspection: '2026-09-22', activeViolations: 1, totalWorkers: 278, dailyProduction: 3800, unit: 'tonnes', zones: ['Zone 1', 'Zone 2', 'Zone 3'] },
  { id: 'M003', name: 'Talcher Coalfield', operator: 'MCL (Coal India)', state: 'Odisha', district: 'Angul', lat: 20.9517, lng: 85.2097, type: 'Open Cast', openDate: '2001-11-10', status: 'Active', productionStatus: 'Full Production', complianceScore: 91, riskScore: 28, lastInspection: '2026-09-18', activeViolations: 0, totalWorkers: 456, dailyProduction: 6200, unit: 'tonnes', zones: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5'] },
  { id: 'M004', name: 'Raniganj Coal Mine', operator: 'ECL (Coal India)', state: 'West Bengal', district: 'Paschim Bardhaman', lat: 23.6166, lng: 87.1310, type: 'Underground', openDate: '1998-05-22', status: 'Active', productionStatus: 'Reduced', complianceScore: 65, riskScore: 82, lastInspection: '2026-09-10', activeViolations: 6, totalWorkers: 198, dailyProduction: 1800, unit: 'tonnes', zones: ['Zone 1', 'Zone 2', 'Zone 3'] },
  { id: 'M005', name: 'Gevra Open Cast Mine', operator: 'SECL (Coal India)', state: 'Chhattisgarh', district: 'Korba', lat: 22.3300, lng: 82.5700, type: 'Open Cast', openDate: '1981-04-01', status: 'Active', productionStatus: 'Full Production', complianceScore: 94, riskScore: 22, lastInspection: '2026-09-24', activeViolations: 0, totalWorkers: 612, dailyProduction: 12000, unit: 'tonnes', zones: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5', 'Zone 6'] },
  { id: 'M006', name: 'Singrauli Coalfield', operator: 'NCL (Coal India)', state: 'Madhya Pradesh', district: 'Singrauli', lat: 24.1994, lng: 82.6644, type: 'Open Cast', openDate: '2003-08-12', status: 'Active', productionStatus: 'Full Production', complianceScore: 85, riskScore: 42, lastInspection: '2026-09-19', activeViolations: 2, totalWorkers: 387, dailyProduction: 5500, unit: 'tonnes', zones: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4'] },
  { id: 'M007', name: 'Rajmahal Open Cast', operator: 'ECL (Coal India)', state: 'Jharkhand', district: 'Godda', lat: 25.0544, lng: 87.8405, type: 'Open Cast', openDate: '2010-01-15', status: 'Active', productionStatus: 'Full Production', complianceScore: 79, riskScore: 55, lastInspection: '2026-09-15', activeViolations: 3, totalWorkers: 245, dailyProduction: 3200, unit: 'tonnes', zones: ['Zone 1', 'Zone 2', 'Zone 3'] },
  { id: 'M008', name: 'Ib Valley Coalfield', operator: 'MCL (Coal India)', state: 'Odisha', district: 'Jharsuguda', lat: 21.8463, lng: 83.8604, type: 'Open Cast', openDate: '2006-06-20', status: 'Active', productionStatus: 'Full Production', complianceScore: 87, riskScore: 38, lastInspection: '2026-09-21', activeViolations: 1, totalWorkers: 334, dailyProduction: 4800, unit: 'tonnes', zones: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4'] },
  { id: 'M009', name: 'Jharia Block B Underground', operator: 'BCCL (Coal India)', state: 'Jharkhand', district: 'Dhanbad', lat: 23.7600, lng: 86.4300, type: 'Underground', openDate: '1995-02-28', status: 'Active', productionStatus: 'Reduced', complianceScore: 58, riskScore: 88, lastInspection: '2026-09-08', activeViolations: 8, totalWorkers: 167, dailyProduction: 1200, unit: 'tonnes', zones: ['Zone 1', 'Zone 2', 'Zone 3'] },
  { id: 'M010', name: 'Kusmunda Super OC', operator: 'SECL (Coal India)', state: 'Chhattisgarh', district: 'Korba', lat: 22.3450, lng: 82.6800, type: 'Open Cast', openDate: '2007-09-05', status: 'Active', productionStatus: 'Full Production', complianceScore: 92, riskScore: 25, lastInspection: '2026-09-23', activeViolations: 0, totalWorkers: 489, dailyProduction: 9500, unit: 'tonnes', zones: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5'] },
  { id: 'M011', name: 'Chirimiri Underground', operator: 'SECL (Coal India)', state: 'Chhattisgarh', district: 'Korea', lat: 23.2100, lng: 82.3500, type: 'Underground', openDate: '1992-11-15', status: 'Active', productionStatus: 'Reduced', complianceScore: 61, riskScore: 75, lastInspection: '2026-09-12', activeViolations: 5, totalWorkers: 143, dailyProduction: 900, unit: 'tonnes', zones: ['Zone 1', 'Zone 2'] },
  { id: 'M012', name: 'Lakhanpur OC Mine', operator: 'MCL (Coal India)', state: 'Odisha', district: 'Jharsuguda', lat: 21.7800, lng: 83.9200, type: 'Open Cast', openDate: '2012-03-10', status: 'Active', productionStatus: 'Full Production', complianceScore: 90, riskScore: 30, lastInspection: '2026-09-20', activeViolations: 1, totalWorkers: 298, dailyProduction: 4200, unit: 'tonnes', zones: ['Zone 1', 'Zone 2', 'Zone 3'] },
  { id: 'M013', name: 'Sonepur Bazari Mine', operator: 'ECL (Coal India)', state: 'West Bengal', district: 'Paschim Bardhaman', lat: 23.6800, lng: 87.0800, type: 'Open Cast', openDate: '2009-07-22', status: 'Active', productionStatus: 'Full Production', complianceScore: 83, riskScore: 45, lastInspection: '2026-09-17', activeViolations: 2, totalWorkers: 267, dailyProduction: 3600, unit: 'tonnes', zones: ['Zone 1', 'Zone 2', 'Zone 3'] },
  { id: 'M014', name: 'Nigahi OC Project', operator: 'NCL (Coal India)', state: 'Madhya Pradesh', district: 'Singrauli', lat: 24.1200, lng: 82.7200, type: 'Open Cast', openDate: '2004-05-18', status: 'Active', productionStatus: 'Full Production', complianceScore: 86, riskScore: 40, lastInspection: '2026-09-19', activeViolations: 2, totalWorkers: 356, dailyProduction: 5100, unit: 'tonnes', zones: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4'] },
  { id: 'M015', name: 'Rajhara Iron & Coal', operator: 'NMDC', state: 'Chhattisgarh', district: 'Durg', lat: 20.6700, lng: 81.0800, type: 'Open Cast', openDate: '2015-01-30', status: 'Active', productionStatus: 'Full Production', complianceScore: 77, riskScore: 52, lastInspection: '2026-09-14', activeViolations: 3, totalWorkers: 189, dailyProduction: 2800, unit: 'tonnes', zones: ['Zone 1', 'Zone 2', 'Zone 3'] },
  { id: 'M016', name: 'Bhuli Underground', operator: 'BCCL (Coal India)', state: 'Jharkhand', district: 'Dhanbad', lat: 23.8000, lng: 86.4500, type: 'Underground', openDate: '1988-09-10', status: 'Active', productionStatus: 'Minimal', complianceScore: 55, riskScore: 90, lastInspection: '2026-09-05', activeViolations: 9, totalWorkers: 112, dailyProduction: 600, unit: 'tonnes', zones: ['Zone 1', 'Zone 2'] },
  { id: 'M017', name: 'Basundhara OC Mine', operator: 'MCL (Coal India)', state: 'Odisha', district: 'Sundargarh', lat: 22.1200, lng: 84.0300, type: 'Open Cast', openDate: '2011-04-25', status: 'Active', productionStatus: 'Full Production', complianceScore: 89, riskScore: 32, lastInspection: '2026-09-22', activeViolations: 1, totalWorkers: 312, dailyProduction: 4400, unit: 'tonnes', zones: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4'] },
  { id: 'M018', name: 'Dipka OC Project', operator: 'SECL (Coal India)', state: 'Chhattisgarh', district: 'Korba', lat: 22.4000, lng: 82.5200, type: 'Open Cast', openDate: '2002-12-01', status: 'Active', productionStatus: 'Full Production', complianceScore: 93, riskScore: 20, lastInspection: '2026-09-25', activeViolations: 0, totalWorkers: 534, dailyProduction: 10500, unit: 'tonnes', zones: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5'] },
  { id: 'M019', name: 'Sasti Underground', operator: 'WCL (Coal India)', state: 'Maharashtra', district: 'Chandrapur', lat: 19.9500, lng: 79.2900, type: 'Underground', openDate: '1996-08-14', status: 'Suspended', productionStatus: 'Stopped', complianceScore: 42, riskScore: 65, lastInspection: '2026-08-30', activeViolations: 4, totalWorkers: 0, dailyProduction: 0, unit: 'tonnes', zones: ['Zone 1', 'Zone 2'] },
  { id: 'M020', name: 'Amrapali OC Mine', operator: 'NCL (Coal India)', state: 'Madhya Pradesh', district: 'Singrauli', lat: 24.0800, lng: 82.6000, type: 'Open Cast', openDate: '2014-06-18', status: 'Active', productionStatus: 'Full Production', complianceScore: 81, riskScore: 48, lastInspection: '2026-09-16', activeViolations: 2, totalWorkers: 275, dailyProduction: 3900, unit: 'tonnes', zones: ['Zone 1', 'Zone 2', 'Zone 3'] },
];

// ---- MINE ZONES ----
export const mineZones = [
  { id: 'MZ001', mineId: 'M001', zone: 'Zone 1', name: 'Excavation North', risk: 'Medium', violations: 1, lastInspection: '2026-09-20', workers: 85 },
  { id: 'MZ002', mineId: 'M001', zone: 'Zone 2', name: 'Conveyor Belt Area', risk: 'Low', violations: 0, lastInspection: '2026-09-20', workers: 62 },
  { id: 'MZ003', mineId: 'M001', zone: 'Zone 3', name: 'Dumping Ground', risk: 'High', violations: 2, lastInspection: '2026-09-18', workers: 48 },
  { id: 'MZ004', mineId: 'M001', zone: 'Zone 4', name: 'Loading Bay South', risk: 'Critical', violations: 4, lastInspection: '2026-09-15', workers: 95 },
  { id: 'MZ005', mineId: 'M004', zone: 'Zone 1', name: 'Main Shaft Entry', risk: 'High', violations: 3, lastInspection: '2026-09-10', workers: 67 },
  { id: 'MZ006', mineId: 'M004', zone: 'Zone 2', name: 'Gallery B', risk: 'Critical', violations: 5, lastInspection: '2026-09-08', workers: 45 },
  { id: 'MZ007', mineId: 'M004', zone: 'Zone 3', name: 'Ventilation Area', risk: 'Medium', violations: 1, lastInspection: '2026-09-10', workers: 38 },
  { id: 'MZ008', mineId: 'M009', zone: 'Zone 1', name: 'Main Gallery', risk: 'Critical', violations: 4, lastInspection: '2026-09-08', workers: 56 },
  { id: 'MZ009', mineId: 'M009', zone: 'Zone 2', name: 'Incline Shaft', risk: 'High', violations: 3, lastInspection: '2026-09-06', workers: 42 },
  { id: 'MZ010', mineId: 'M016', zone: 'Zone 1', name: 'Deep Gallery', risk: 'Critical', violations: 6, lastInspection: '2026-09-05', workers: 65 },
];

// ---- COMPLIANCE RECORDS ----
export const complianceRecords = [
  { id: 'CR001', mineId: 'M001', requirement: 'Mining Lease Permit', category: 'Permit', document: 'ML/JH/2020/001', issueDate: '2020-03-15', expiryDate: '2026-10-15', responsible: 'Rajesh Sharma', status: 'Expiring Soon', risk: 'High', evidence: true },
  { id: 'CR002', mineId: 'M001', requirement: 'Environmental Clearance', category: 'Environmental', document: 'EC/MoEF/2019/234', issueDate: '2019-06-20', expiryDate: '2026-12-20', responsible: 'Rajesh Sharma', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR003', mineId: 'M001', requirement: 'Safety Certificate', category: 'Safety', document: 'SC/DGMS/2026/089', issueDate: '2026-01-10', expiryDate: '2027-01-10', responsible: 'Priya Singh', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR004', mineId: 'M001', requirement: 'Explosives License', category: 'License', document: 'EL/JH/2025/456', issueDate: '2025-04-01', expiryDate: '2026-09-30', responsible: 'Rajesh Sharma', status: 'Expiring Soon', risk: 'Critical', evidence: true },
  { id: 'CR005', mineId: 'M001', requirement: 'Labour Welfare Compliance', category: 'Labour', document: 'LW/GOI/2026/111', issueDate: '2026-02-15', expiryDate: '2027-02-15', responsible: 'Rajesh Sharma', status: 'Valid', risk: 'Low', evidence: false },
  { id: 'CR006', mineId: 'M004', requirement: 'Mining Lease Permit', category: 'Permit', document: 'ML/WB/2018/022', issueDate: '2018-05-22', expiryDate: '2026-09-22', responsible: 'Mine Manager WB', status: 'Expired', risk: 'Critical', evidence: true },
  { id: 'CR007', mineId: 'M004', requirement: 'Underground Safety Audit', category: 'Safety', document: 'USA/DGMS/2026/045', issueDate: '2026-03-10', expiryDate: '2026-09-10', responsible: 'Safety Officer WB', status: 'Expired', risk: 'Critical', evidence: false },
  { id: 'CR008', mineId: 'M004', requirement: 'Fire Safety Certificate', category: 'Safety', document: 'FSC/WB/2025/078', issueDate: '2025-11-01', expiryDate: '2026-11-01', responsible: 'Safety Officer WB', status: 'Valid', risk: 'Medium', evidence: true },
  { id: 'CR009', mineId: 'M002', requirement: 'Mining Lease Permit', category: 'Permit', document: 'ML/CG/2020/055', issueDate: '2020-07-20', expiryDate: '2028-07-20', responsible: 'Mine Manager CG', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR010', mineId: 'M002', requirement: 'Environmental Clearance', category: 'Environmental', document: 'EC/MoEF/2021/123', issueDate: '2021-01-15', expiryDate: '2028-01-15', responsible: 'Mine Manager CG', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR011', mineId: 'M003', requirement: 'Mining Lease Permit', category: 'Permit', document: 'ML/OD/2019/088', issueDate: '2019-11-10', expiryDate: '2029-11-10', responsible: 'Mine Manager OD', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR012', mineId: 'M005', requirement: 'Mining Lease Permit', category: 'Permit', document: 'ML/CG/2015/012', issueDate: '2015-04-01', expiryDate: '2030-04-01', responsible: 'Amit Patel', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR013', mineId: 'M009', requirement: 'Underground Ventilation Cert', category: 'Safety', document: 'UVC/JH/2025/034', issueDate: '2025-08-01', expiryDate: '2026-08-01', responsible: 'Safety Officer JH', status: 'Expired', risk: 'Critical', evidence: false },
  { id: 'CR014', mineId: 'M009', requirement: 'Roof Support Inspection', category: 'Safety', document: 'RSI/DGMS/2026/067', issueDate: '2026-06-15', expiryDate: '2026-09-15', responsible: 'Safety Officer JH', status: 'Expired', risk: 'Critical', evidence: true },
  { id: 'CR015', mineId: 'M016', requirement: 'Mine Rescue Plan', category: 'Safety', document: 'MRP/JH/2025/045', issueDate: '2025-05-10', expiryDate: '2026-05-10', responsible: 'Safety Officer JH', status: 'Expired', risk: 'Critical', evidence: false },
  // More compliance records for additional mines
  { id: 'CR016', mineId: 'M006', requirement: 'Mining Lease Permit', category: 'Permit', document: 'ML/MP/2018/033', issueDate: '2018-08-12', expiryDate: '2028-08-12', responsible: 'Mine Manager MP', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR017', mineId: 'M007', requirement: 'Safety Certificate', category: 'Safety', document: 'SC/DGMS/2026/112', issueDate: '2026-04-01', expiryDate: '2026-10-01', responsible: 'Safety Officer JH', status: 'Expiring Soon', risk: 'High', evidence: true },
  { id: 'CR018', mineId: 'M008', requirement: 'Environmental Clearance', category: 'Environmental', document: 'EC/MoEF/2022/089', issueDate: '2022-06-20', expiryDate: '2029-06-20', responsible: 'Mine Manager OD', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR019', mineId: 'M010', requirement: 'Mining Lease Permit', category: 'Permit', document: 'ML/CG/2017/078', issueDate: '2017-09-05', expiryDate: '2027-09-05', responsible: 'Mine Manager CG', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR020', mineId: 'M011', requirement: 'Underground Safety Audit', category: 'Safety', document: 'USA/DGMS/2025/098', issueDate: '2025-12-01', expiryDate: '2026-06-01', responsible: 'Safety Officer CG', status: 'Expired', risk: 'Critical', evidence: false },
  { id: 'CR021', mineId: 'M012', requirement: 'Mining Lease Permit', category: 'Permit', document: 'ML/OD/2022/045', issueDate: '2022-03-10', expiryDate: '2032-03-10', responsible: 'Mine Manager OD', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR022', mineId: 'M013', requirement: 'Environmental Clearance', category: 'Environmental', document: 'EC/MoEF/2020/156', issueDate: '2020-07-22', expiryDate: '2027-07-22', responsible: 'Mine Manager WB', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR023', mineId: 'M014', requirement: 'Safety Certificate', category: 'Safety', document: 'SC/DGMS/2026/134', issueDate: '2026-05-18', expiryDate: '2027-05-18', responsible: 'Safety Officer MP', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR024', mineId: 'M015', requirement: 'Mining Lease Permit', category: 'Permit', document: 'ML/CG/2020/091', issueDate: '2020-01-30', expiryDate: '2027-01-30', responsible: 'Mine Manager CG', status: 'Valid', risk: 'Medium', evidence: true },
  { id: 'CR025', mineId: 'M017', requirement: 'Environmental Clearance', category: 'Environmental', document: 'EC/MoEF/2021/178', issueDate: '2021-04-25', expiryDate: '2028-04-25', responsible: 'Mine Manager OD', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR026', mineId: 'M018', requirement: 'Mining Lease Permit', category: 'Permit', document: 'ML/CG/2016/034', issueDate: '2016-12-01', expiryDate: '2031-12-01', responsible: 'Mine Manager CG', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR027', mineId: 'M020', requirement: 'Safety Certificate', category: 'Safety', document: 'SC/DGMS/2026/156', issueDate: '2026-06-18', expiryDate: '2027-06-18', responsible: 'Safety Officer MP', status: 'Valid', risk: 'Low', evidence: true },
  // Additional compliance items
  { id: 'CR028', mineId: 'M001', requirement: 'Consent to Operate (CTO)', category: 'Environmental', document: 'CTO/JSPCB/2025/012', issueDate: '2025-01-15', expiryDate: '2026-10-05', responsible: 'Rajesh Sharma', status: 'Expiring Soon', risk: 'High', evidence: true },
  { id: 'CR029', mineId: 'M001', requirement: 'Mine Plan Approval', category: 'Permit', document: 'MPA/IBM/2024/045', issueDate: '2024-03-20', expiryDate: '2029-03-20', responsible: 'Rajesh Sharma', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR030', mineId: 'M004', requirement: 'Workers Compensation Insurance', category: 'Labour', document: 'WCI/LIC/2026/078', issueDate: '2026-01-01', expiryDate: '2026-12-31', responsible: 'Mine Manager WB', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR031', mineId: 'M009', requirement: 'Gas Detection Certificate', category: 'Safety', document: 'GDC/DGMS/2025/090', issueDate: '2025-09-01', expiryDate: '2026-09-01', responsible: 'Safety Officer JH', status: 'Expired', risk: 'Critical', evidence: false },
  { id: 'CR032', mineId: 'M016', requirement: 'Electrical Safety Audit', category: 'Safety', document: 'ESA/DGMS/2025/112', issueDate: '2025-07-15', expiryDate: '2026-07-15', responsible: 'Safety Officer JH', status: 'Expired', risk: 'Critical', evidence: false },
  { id: 'CR033', mineId: 'M001', requirement: 'Pollution Control Board NOC', category: 'Environmental', document: 'NOC/JSPCB/2024/056', issueDate: '2024-06-10', expiryDate: '2027-06-10', responsible: 'Rajesh Sharma', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR034', mineId: 'M006', requirement: 'First Aid Compliance', category: 'Safety', document: 'FAC/DGMS/2026/034', issueDate: '2026-02-01', expiryDate: '2027-02-01', responsible: 'Safety Officer MP', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR035', mineId: 'M007', requirement: 'Explosives License', category: 'License', document: 'EL/JH/2025/089', issueDate: '2025-01-15', expiryDate: '2026-10-15', responsible: 'Mine Manager JH', status: 'Expiring Soon', risk: 'High', evidence: true },
  // Up to 50 compliance records
  { id: 'CR036', mineId: 'M003', requirement: 'Safety Certificate', category: 'Safety', document: 'SC/DGMS/2026/045', issueDate: '2026-03-10', expiryDate: '2027-03-10', responsible: 'Safety Officer OD', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR037', mineId: 'M005', requirement: 'Environmental Clearance', category: 'Environmental', document: 'EC/MoEF/2020/067', issueDate: '2020-04-01', expiryDate: '2027-04-01', responsible: 'Amit Patel', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR038', mineId: 'M010', requirement: 'Safety Certificate', category: 'Safety', document: 'SC/DGMS/2026/178', issueDate: '2026-07-05', expiryDate: '2027-07-05', responsible: 'Safety Officer CG', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR039', mineId: 'M012', requirement: 'Explosives License', category: 'License', document: 'EL/OD/2026/023', issueDate: '2026-03-10', expiryDate: '2027-03-10', responsible: 'Mine Manager OD', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR040', mineId: 'M013', requirement: 'Labour Welfare Compliance', category: 'Labour', document: 'LW/GOI/2026/134', issueDate: '2026-01-22', expiryDate: '2027-01-22', responsible: 'Mine Manager WB', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR041', mineId: 'M014', requirement: 'Environmental Clearance', category: 'Environmental', document: 'EC/MoEF/2019/189', issueDate: '2019-05-18', expiryDate: '2026-11-18', responsible: 'Mine Manager MP', status: 'Expiring Soon', risk: 'High', evidence: true },
  { id: 'CR042', mineId: 'M015', requirement: 'Safety Certificate', category: 'Safety', document: 'SC/DGMS/2026/189', issueDate: '2026-01-30', expiryDate: '2027-01-30', responsible: 'Safety Officer CG', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR043', mineId: 'M017', requirement: 'Mining Lease Permit', category: 'Permit', document: 'ML/OD/2021/067', issueDate: '2021-04-25', expiryDate: '2031-04-25', responsible: 'Mine Manager OD', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR044', mineId: 'M018', requirement: 'Safety Certificate', category: 'Safety', document: 'SC/DGMS/2026/201', issueDate: '2026-06-01', expiryDate: '2027-06-01', responsible: 'Safety Officer CG', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR045', mineId: 'M019', requirement: 'Mining Lease Permit', category: 'Permit', document: 'ML/MH/2016/034', issueDate: '2016-08-14', expiryDate: '2026-08-14', responsible: 'Mine Manager MH', status: 'Expired', risk: 'Critical', evidence: true },
  { id: 'CR046', mineId: 'M020', requirement: 'Environmental Clearance', category: 'Environmental', document: 'EC/MoEF/2022/201', issueDate: '2022-06-18', expiryDate: '2029-06-18', responsible: 'Mine Manager MP', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR047', mineId: 'M001', requirement: 'Weighbridge Calibration Cert', category: 'Compliance', document: 'WBC/DGMS/2026/089', issueDate: '2026-04-01', expiryDate: '2027-04-01', responsible: 'Rajesh Sharma', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR048', mineId: 'M004', requirement: 'Electrical Safety Audit', category: 'Safety', document: 'ESA/WB/2025/045', issueDate: '2025-10-01', expiryDate: '2026-10-01', responsible: 'Safety Officer WB', status: 'Expiring Soon', risk: 'High', evidence: true },
  { id: 'CR049', mineId: 'M009', requirement: 'Mining Lease Permit', category: 'Permit', document: 'ML/JH/2015/045', issueDate: '2015-02-28', expiryDate: '2027-02-28', responsible: 'Mine Manager JH', status: 'Valid', risk: 'Low', evidence: true },
  { id: 'CR050', mineId: 'M016', requirement: 'Environmental Clearance', category: 'Environmental', document: 'EC/MoEF/2018/234', issueDate: '2018-09-10', expiryDate: '2026-09-10', responsible: 'Mine Manager JH', status: 'Expired', risk: 'Critical', evidence: false },
];

// ---- VIOLATIONS ----
export const violations = [
  { id: 'V001', mineId: 'M001', zone: 'Zone 4', category: 'PPE', type: 'Missing Helmet', severity: 'High', status: 'Open', detectedDate: '2026-09-25', detectedBy: 'AI Vision System', description: 'Worker detected without safety helmet in active excavation zone', evidence: true, lat: 23.7470, lng: 86.4150, workerId: 'W005', contractorId: 'C001', correctiveActionId: 'CA001' },
  { id: 'V002', mineId: 'M001', zone: 'Zone 4', category: 'PPE', type: 'Missing Safety Vest', severity: 'Medium', status: 'In Progress', detectedDate: '2026-09-24', detectedBy: 'Inspector Rahul', description: 'Multiple workers without safety vests near conveyor belt', evidence: true, lat: 23.7468, lng: 86.4148, workerId: 'W012', contractorId: 'C001', correctiveActionId: 'CA002' },
  { id: 'V003', mineId: 'M001', zone: 'Zone 3', category: 'Environmental', type: 'Dust Pollution Exceeded', severity: 'High', status: 'Open', detectedDate: '2026-09-23', detectedBy: 'Sensor Alert', description: 'PM10 levels exceeded permissible limit of 150 µg/m³', evidence: true, lat: 23.7460, lng: 86.4135, workerId: null, contractorId: null, correctiveActionId: 'CA003' },
  { id: 'V004', mineId: 'M001', zone: 'Zone 4', category: 'Safety', type: 'Unsafe Equipment Operation', severity: 'Critical', status: 'Open', detectedDate: '2026-09-22', detectedBy: 'Inspector Rahul', description: 'Heavy earthmover operated without proper safety guard', evidence: true, lat: 23.7472, lng: 86.4155, workerId: 'W018', contractorId: 'C003', correctiveActionId: 'CA004' },
  { id: 'V005', mineId: 'M004', zone: 'Zone 2', category: 'Safety', type: 'Roof Support Failure', severity: 'Critical', status: 'Open', detectedDate: '2026-09-20', detectedBy: 'Inspector Field Team', description: 'Multiple roof bolt failures detected in Gallery B section', evidence: true, lat: 23.6170, lng: 87.1315, workerId: null, contractorId: 'C005', correctiveActionId: 'CA005' },
  { id: 'V006', mineId: 'M004', zone: 'Zone 1', category: 'PPE', type: 'Missing Gloves', severity: 'Medium', status: 'Closed', detectedDate: '2026-09-18', detectedBy: 'AI Vision System', description: 'Worker handling coal without protective gloves', evidence: true, lat: 23.6168, lng: 87.1308, workerId: 'W045', contractorId: 'C005', correctiveActionId: 'CA006' },
  { id: 'V007', mineId: 'M004', zone: 'Zone 2', category: 'Safety', type: 'Gas Detection Alarm', severity: 'Critical', status: 'In Progress', detectedDate: '2026-09-19', detectedBy: 'Sensor Alert', description: 'Methane concentration exceeded 1.5% in Gallery B', evidence: true, lat: 23.6172, lng: 87.1320, workerId: null, contractorId: null, correctiveActionId: 'CA007' },
  { id: 'V008', mineId: 'M004', zone: 'Zone 3', category: 'Compliance', type: 'Expired Safety Audit', severity: 'High', status: 'Open', detectedDate: '2026-09-15', detectedBy: 'System Alert', description: 'Underground safety audit certificate has expired', evidence: false, lat: 23.6165, lng: 87.1305, workerId: null, contractorId: null, correctiveActionId: 'CA008' },
  { id: 'V009', mineId: 'M004', zone: 'Zone 1', category: 'Labour', type: 'Unauthorized Worker', severity: 'High', status: 'Open', detectedDate: '2026-09-17', detectedBy: 'Inspector Field Team', description: 'Unregistered worker found operating machinery', evidence: true, lat: 23.6163, lng: 87.1312, workerId: 'W052', contractorId: 'C006', correctiveActionId: 'CA009' },
  { id: 'V010', mineId: 'M004', zone: 'Zone 2', category: 'Operational', type: 'Ventilation Failure', severity: 'Critical', status: 'Open', detectedDate: '2026-09-16', detectedBy: 'Sensor Alert', description: 'Ventilation fan malfunction in Gallery B causing poor air flow', evidence: true, lat: 23.6174, lng: 87.1318, workerId: null, contractorId: null, correctiveActionId: 'CA010' },
  { id: 'V011', mineId: 'M009', zone: 'Zone 1', category: 'Safety', type: 'Electrical Hazard', severity: 'Critical', status: 'Open', detectedDate: '2026-09-21', detectedBy: 'Inspector Field Team', description: 'Exposed electrical wiring near water seepage area', evidence: true, lat: 23.7605, lng: 86.4305, workerId: null, contractorId: 'C008', correctiveActionId: 'CA011' },
  { id: 'V012', mineId: 'M009', zone: 'Zone 2', category: 'PPE', type: 'Missing Helmet', severity: 'High', status: 'Open', detectedDate: '2026-09-20', detectedBy: 'AI Vision System', description: 'Three workers without helmets in incline shaft area', evidence: true, lat: 23.7608, lng: 86.4310, workerId: 'W067', contractorId: 'C008', correctiveActionId: 'CA012' },
  { id: 'V013', mineId: 'M009', zone: 'Zone 1', category: 'Environmental', type: 'Water Contamination', severity: 'High', status: 'In Progress', detectedDate: '2026-09-19', detectedBy: 'Environmental Team', description: 'Mine water discharge pH level below permissible limit', evidence: true, lat: 23.7602, lng: 86.4302, workerId: null, contractorId: null, correctiveActionId: 'CA013' },
  { id: 'V014', mineId: 'M016', zone: 'Zone 1', category: 'Safety', type: 'Fire Hazard', severity: 'Critical', status: 'Open', detectedDate: '2026-09-22', detectedBy: 'Sensor Alert', description: 'Spontaneous combustion detected in deep gallery section', evidence: true, lat: 23.8005, lng: 86.4505, workerId: null, contractorId: null, correctiveActionId: 'CA014' },
  { id: 'V015', mineId: 'M016', zone: 'Zone 2', category: 'PPE', type: 'Missing Safety Goggles', severity: 'Medium', status: 'Open', detectedDate: '2026-09-21', detectedBy: 'Inspector Field Team', description: 'Workers cutting rock without safety goggles', evidence: true, lat: 23.8008, lng: 86.4508, workerId: 'W089', contractorId: 'C010', correctiveActionId: 'CA015' },
  // Recurring violations for Zone 4 M001
  { id: 'V016', mineId: 'M001', zone: 'Zone 4', category: 'PPE', type: 'Missing Helmet', severity: 'High', status: 'Closed', detectedDate: '2026-09-20', detectedBy: 'AI Vision System', description: 'Worker without helmet near loading area', evidence: true, lat: 23.7471, lng: 86.4152, workerId: 'W008', contractorId: 'C001', correctiveActionId: 'CA016' },
  { id: 'V017', mineId: 'M001', zone: 'Zone 4', category: 'PPE', type: 'Missing Helmet', severity: 'High', status: 'Closed', detectedDate: '2026-09-18', detectedBy: 'AI Vision System', description: 'PPE violation - no helmet detected', evidence: true, lat: 23.7469, lng: 86.4149, workerId: 'W015', contractorId: 'C001', correctiveActionId: 'CA017' },
  { id: 'V018', mineId: 'M001', zone: 'Zone 4', category: 'PPE', type: 'Missing Helmet', severity: 'High', status: 'Closed', detectedDate: '2026-09-15', detectedBy: 'Inspector Rahul', description: 'Helmet violation during loading operations', evidence: true, lat: 23.7473, lng: 86.4153, workerId: 'W005', contractorId: 'C001', correctiveActionId: 'CA018' },
  { id: 'V019', mineId: 'M001', zone: 'Zone 4', category: 'PPE', type: 'Missing Helmet', severity: 'High', status: 'Closed', detectedDate: '2026-09-10', detectedBy: 'AI Vision System', description: 'Repeated helmet non-compliance', evidence: true, lat: 23.7470, lng: 86.4151, workerId: 'W020', contractorId: 'C002', correctiveActionId: 'CA019' },
  { id: 'V020', mineId: 'M001', zone: 'Zone 4', category: 'PPE', type: 'Missing Helmet', severity: 'High', status: 'Closed', detectedDate: '2026-09-05', detectedBy: 'Inspector Rahul', description: 'Worker at loading bay without helmet', evidence: true, lat: 23.7474, lng: 86.4154, workerId: 'W022', contractorId: 'C002', correctiveActionId: 'CA020' },
  { id: 'V021', mineId: 'M001', zone: 'Zone 4', category: 'PPE', type: 'Missing Helmet', severity: 'High', status: 'Closed', detectedDate: '2026-08-28', detectedBy: 'AI Vision System', description: 'Helmet violation in excavation area', evidence: true, lat: 23.7472, lng: 86.4150, workerId: 'W005', contractorId: 'C001', correctiveActionId: 'CA021' },
  // More violations for other mines
  { id: 'V022', mineId: 'M006', zone: 'Zone 2', category: 'Environmental', type: 'Air Quality Violation', severity: 'Medium', status: 'In Progress', detectedDate: '2026-09-22', detectedBy: 'Sensor Alert', description: 'SPM levels slightly above permissible limits', evidence: true, lat: 24.1998, lng: 82.6648, workerId: null, contractorId: null, correctiveActionId: 'CA022' },
  { id: 'V023', mineId: 'M006', zone: 'Zone 3', category: 'PPE', type: 'Missing Safety Shoes', severity: 'Medium', status: 'Closed', detectedDate: '2026-09-18', detectedBy: 'Inspector Field Team', description: 'Worker wearing regular footwear instead of safety boots', evidence: true, lat: 24.1996, lng: 82.6650, workerId: 'W034', contractorId: 'C004', correctiveActionId: 'CA023' },
  { id: 'V024', mineId: 'M007', zone: 'Zone 1', category: 'Safety', type: 'Slope Stability Issue', severity: 'High', status: 'Open', detectedDate: '2026-09-23', detectedBy: 'Drone Survey', description: 'Bench stability issue detected in northern face', evidence: true, lat: 25.0548, lng: 87.8408, workerId: null, contractorId: null, correctiveActionId: 'CA024' },
  { id: 'V025', mineId: 'M007', zone: 'Zone 2', category: 'Operational', type: 'Overloading', severity: 'Medium', status: 'In Progress', detectedDate: '2026-09-20', detectedBy: 'Weighbridge Data', description: 'Consistent overloading of dump trucks beyond rated capacity', evidence: true, lat: 25.0550, lng: 87.8410, workerId: null, contractorId: 'C007', correctiveActionId: 'CA025' },
  { id: 'V026', mineId: 'M007', zone: 'Zone 3', category: 'PPE', type: 'Missing Helmet', severity: 'High', status: 'Closed', detectedDate: '2026-09-15', detectedBy: 'AI Vision System', description: 'Workers near blasting zone without helmets', evidence: true, lat: 25.0546, lng: 87.8406, workerId: 'W041', contractorId: 'C007', correctiveActionId: 'CA026' },
  { id: 'V027', mineId: 'M011', zone: 'Zone 1', category: 'Safety', type: 'Gas Accumulation', severity: 'Critical', status: 'In Progress', detectedDate: '2026-09-24', detectedBy: 'Sensor Alert', description: 'CO levels rising in abandoned gallery section', evidence: true, lat: 23.2105, lng: 82.3505, workerId: null, contractorId: null, correctiveActionId: 'CA027' },
  { id: 'V028', mineId: 'M011', zone: 'Zone 1', category: 'PPE', type: 'Missing Safety Vest', severity: 'Medium', status: 'Open', detectedDate: '2026-09-22', detectedBy: 'Inspector Field Team', description: 'Workers in low visibility area without reflective vests', evidence: true, lat: 23.2103, lng: 82.3503, workerId: 'W056', contractorId: 'C009', correctiveActionId: 'CA028' },
  { id: 'V029', mineId: 'M011', zone: 'Zone 2', category: 'Compliance', type: 'Expired Certificate', severity: 'High', status: 'Open', detectedDate: '2026-09-20', detectedBy: 'System Alert', description: 'Underground safety audit overdue by 3 months', evidence: false, lat: 23.2108, lng: 82.3508, workerId: null, contractorId: null, correctiveActionId: 'CA029' },
  { id: 'V030', mineId: 'M015', zone: 'Zone 2', category: 'Environmental', type: 'Water Pollution', severity: 'High', status: 'Open', detectedDate: '2026-09-21', detectedBy: 'Environmental Team', description: 'Mine water discharge exceeding TSS limits', evidence: true, lat: 20.6705, lng: 81.0812, workerId: null, contractorId: null, correctiveActionId: 'CA030' },
  // More violations
  { id: 'V031', mineId: 'M015', zone: 'Zone 1', category: 'PPE', type: 'Missing Gloves', severity: 'Medium', status: 'Closed', detectedDate: '2026-09-18', detectedBy: 'AI Vision System', description: 'Workers handling chemicals without gloves', evidence: true, lat: 20.6702, lng: 81.0808, workerId: 'W072', contractorId: 'C011', correctiveActionId: 'CA031' },
  { id: 'V032', mineId: 'M015', zone: 'Zone 3', category: 'Safety', type: 'Blasting Safety', severity: 'Critical', status: 'Closed', detectedDate: '2026-09-14', detectedBy: 'Inspector Field Team', description: 'Blasting conducted without proper clearance zone', evidence: true, lat: 20.6708, lng: 81.0815, workerId: null, contractorId: 'C011', correctiveActionId: 'CA032' },
  { id: 'V033', mineId: 'M016', zone: 'Zone 1', category: 'Safety', type: 'Roof Fall', severity: 'Critical', status: 'In Progress', detectedDate: '2026-09-20', detectedBy: 'Incident Report', description: 'Minor roof fall in deep gallery; no injuries', evidence: true, lat: 23.8003, lng: 86.4503, workerId: null, contractorId: null, correctiveActionId: 'CA033' },
  { id: 'V034', mineId: 'M016', zone: 'Zone 1', category: 'PPE', type: 'Missing Helmet', severity: 'High', status: 'Open', detectedDate: '2026-09-19', detectedBy: 'AI Vision System', description: 'Helmet compliance below 70% in deep gallery', evidence: true, lat: 23.8006, lng: 86.4506, workerId: 'W091', contractorId: 'C010', correctiveActionId: 'CA034' },
  { id: 'V035', mineId: 'M016', zone: 'Zone 2', category: 'Compliance', type: 'Missing Rescue Plan', severity: 'Critical', status: 'Open', detectedDate: '2026-09-18', detectedBy: 'System Alert', description: 'Mine rescue plan expired and not renewed', evidence: false, lat: 23.8010, lng: 86.4510, workerId: null, contractorId: null, correctiveActionId: 'CA035' },
  { id: 'V036', mineId: 'M002', zone: 'Zone 2', category: 'PPE', type: 'Missing Safety Vest', severity: 'Low', status: 'Closed', detectedDate: '2026-09-15', detectedBy: 'AI Vision System', description: 'Single worker without vest during break time', evidence: true, lat: 22.3598, lng: 82.7505, workerId: 'W029', contractorId: 'C003', correctiveActionId: 'CA036' },
  { id: 'V037', mineId: 'M008', zone: 'Zone 3', category: 'Operational', type: 'Equipment Maintenance', severity: 'Medium', status: 'Closed', detectedDate: '2026-09-19', detectedBy: 'Inspector Field Team', description: 'Excavator operated past scheduled maintenance date', evidence: true, lat: 21.8468, lng: 83.8610, workerId: null, contractorId: 'C012', correctiveActionId: 'CA037' },
  { id: 'V038', mineId: 'M013', zone: 'Zone 1', category: 'Safety', type: 'Haul Road Safety', severity: 'Medium', status: 'In Progress', detectedDate: '2026-09-21', detectedBy: 'Inspector Field Team', description: 'Speed breakers missing on main haul road', evidence: true, lat: 23.6805, lng: 87.0805, workerId: null, contractorId: null, correctiveActionId: 'CA038' },
  { id: 'V039', mineId: 'M013', zone: 'Zone 2', category: 'PPE', type: 'Missing Helmet', severity: 'High', status: 'Open', detectedDate: '2026-09-20', detectedBy: 'AI Vision System', description: 'Workers near crusher without helmets', evidence: true, lat: 23.6808, lng: 87.0808, workerId: 'W078', contractorId: 'C013', correctiveActionId: 'CA039' },
  { id: 'V040', mineId: 'M020', zone: 'Zone 1', category: 'Environmental', type: 'Noise Pollution', severity: 'Low', status: 'Closed', detectedDate: '2026-09-14', detectedBy: 'Environmental Team', description: 'Noise levels slightly above 85dB near residential area', evidence: true, lat: 24.0805, lng: 82.6005, workerId: null, contractorId: null, correctiveActionId: 'CA040' },
  { id: 'V041', mineId: 'M020', zone: 'Zone 2', category: 'PPE', type: 'Missing Safety Shoes', severity: 'Medium', status: 'Open', detectedDate: '2026-09-22', detectedBy: 'Inspector Field Team', description: 'Workers wearing sandals in active mining area', evidence: true, lat: 24.0808, lng: 82.6008, workerId: 'W095', contractorId: 'C014', correctiveActionId: 'CA041' },
  { id: 'V042', mineId: 'M009', zone: 'Zone 3', category: 'Safety', type: 'Emergency Exit Blocked', severity: 'Critical', status: 'Open', detectedDate: '2026-09-23', detectedBy: 'Inspector Field Team', description: 'Secondary emergency exit partially blocked by debris', evidence: true, lat: 23.7610, lng: 86.4315, workerId: null, contractorId: null, correctiveActionId: 'CA042' },
  { id: 'V043', mineId: 'M009', zone: 'Zone 1', category: 'PPE', type: 'Missing Self-Rescuer', severity: 'Critical', status: 'Open', detectedDate: '2026-09-22', detectedBy: 'Inspector Field Team', description: 'Workers entering underground without self-rescuer devices', evidence: true, lat: 23.7603, lng: 86.4303, workerId: 'W069', contractorId: 'C008', correctiveActionId: 'CA043' },
  { id: 'V044', mineId: 'M016', zone: 'Zone 1', category: 'Safety', type: 'Electrical Short Circuit', severity: 'Critical', status: 'Open', detectedDate: '2026-09-17', detectedBy: 'Sensor Alert', description: 'Electrical short circuit detected in pump room', evidence: true, lat: 23.8002, lng: 86.4502, workerId: null, contractorId: null, correctiveActionId: 'CA044' },
  { id: 'V045', mineId: 'M016', zone: 'Zone 2', category: 'PPE', type: 'Missing Safety Vest', severity: 'Medium', status: 'Open', detectedDate: '2026-09-16', detectedBy: 'AI Vision System', description: 'Low visibility compliance in underground area', evidence: true, lat: 23.8009, lng: 86.4509, workerId: 'W093', contractorId: 'C010', correctiveActionId: 'CA045' },
  { id: 'V046', mineId: 'M009', zone: 'Zone 2', category: 'Safety', type: 'Subsidence Risk', severity: 'Critical', status: 'In Progress', detectedDate: '2026-09-18', detectedBy: 'Survey Team', description: 'Ground subsidence signs observed above old workings', evidence: true, lat: 23.7607, lng: 86.4308, workerId: null, contractorId: null, correctiveActionId: 'CA046' },
  { id: 'V047', mineId: 'M009', zone: 'Zone 1', category: 'Labour', type: 'Child Labour Suspicion', severity: 'Critical', status: 'Open', detectedDate: '2026-09-15', detectedBy: 'Inspector Field Team', description: 'Underage worker suspected at entry point', evidence: true, lat: 23.7601, lng: 86.4301, workerId: 'W071', contractorId: 'C008', correctiveActionId: 'CA047' },
  { id: 'V048', mineId: 'M009', zone: 'Zone 3', category: 'Operational', type: 'Dewatering Failure', severity: 'High', status: 'Open', detectedDate: '2026-09-14', detectedBy: 'Sensor Alert', description: 'Dewatering pump failed causing water accumulation', evidence: true, lat: 23.7612, lng: 86.4318, workerId: null, contractorId: null, correctiveActionId: 'CA048' },
  { id: 'V049', mineId: 'M016', zone: 'Zone 1', category: 'Environmental', type: 'Smoke Emission', severity: 'High', status: 'In Progress', detectedDate: '2026-09-15', detectedBy: 'Environmental Team', description: 'Underground fire producing smoke near ventilation shaft', evidence: true, lat: 23.8004, lng: 86.4504, workerId: null, contractorId: null, correctiveActionId: 'CA049' },
  { id: 'V050', mineId: 'M016', zone: 'Zone 2', category: 'Safety', type: 'Flooding Risk', severity: 'Critical', status: 'Open', detectedDate: '2026-09-13', detectedBy: 'Sensor Alert', description: 'Water ingress rate exceeding pump capacity', evidence: true, lat: 23.8011, lng: 86.4511, workerId: null, contractorId: null, correctiveActionId: 'CA050' },
];

// ---- INSPECTIONS ----
export const inspections = [
  { id: 'INS001', mineId: 'M001', type: 'Safety', inspector: 'Rahul Verma', date: '2026-09-20', time: '09:30', lat: 23.7465, lng: 86.4142, status: 'Completed', findings: 'PPE compliance at 78%. Zone 4 has recurring helmet violations. Equipment safety guards need attention.', severity: 'High', recommendations: 'Increase PPE enforcement in Zone 4. Install helmet dispensers at zone entry.', violationsFound: 3 },
  { id: 'INS002', mineId: 'M001', type: 'Environmental', inspector: 'Environmental Team', date: '2026-09-18', time: '11:00', lat: 23.7460, lng: 86.4135, status: 'Completed', findings: 'Dust levels elevated in Zone 3. Water sprinkler system partially functional. Green belt plantation satisfactory.', severity: 'Medium', recommendations: 'Repair water sprinklers. Consider additional dust suppression measures.', violationsFound: 1 },
  { id: 'INS003', mineId: 'M004', type: 'Safety', inspector: 'Inspector Kumar', date: '2026-09-10', time: '10:00', lat: 23.6166, lng: 87.1310, status: 'Completed', findings: 'Critical issues in Gallery B. Roof support needs immediate attention. Ventilation inadequate. Gas detection system partially offline.', severity: 'Critical', recommendations: 'Immediately reinforce roof supports. Restore ventilation. Replace gas detectors.', violationsFound: 5 },
  { id: 'INS004', mineId: 'M002', type: 'Compliance', inspector: 'Compliance Team', date: '2026-09-22', time: '14:00', lat: 22.3595, lng: 82.7501, status: 'Completed', findings: 'All permits and licenses valid. Safety certificates current. Environmental clearance active.', severity: 'Low', recommendations: 'Continue maintaining current compliance standards.', violationsFound: 0 },
  { id: 'INS005', mineId: 'M003', type: 'Safety', inspector: 'Safety Team OD', date: '2026-09-18', time: '08:30', lat: 20.9517, lng: 85.2097, status: 'Completed', findings: 'Excellent safety compliance. PPE usage at 95%. Safety signs well maintained. Emergency procedures up to date.', severity: 'Low', recommendations: 'Maintain current safety standards. Consider safety excellence award nomination.', violationsFound: 0 },
  { id: 'INS006', mineId: 'M009', type: 'Safety', inspector: 'Inspector Mehta', date: '2026-09-08', time: '09:00', lat: 23.7600, lng: 86.4300, status: 'Completed', findings: 'Multiple critical safety hazards. Electrical wiring exposed. Emergency exits blocked. Water accumulation in galleries.', severity: 'Critical', recommendations: 'Immediate remediation required. Consider temporary closure of affected sections.', violationsFound: 7 },
  { id: 'INS007', mineId: 'M016', type: 'Safety', inspector: 'Inspector Singh', date: '2026-09-05', time: '10:30', lat: 23.8000, lng: 86.4500, status: 'Completed', findings: 'Fire hazard in deep gallery. Poor ventilation. PPE compliance very low. Rescue plan expired.', severity: 'Critical', recommendations: 'Urgent: Address fire hazard, restore ventilation, enforce PPE, renew rescue plan.', violationsFound: 8 },
  { id: 'INS008', mineId: 'M005', type: 'Compliance', inspector: 'Compliance Team CG', date: '2026-09-24', time: '11:00', lat: 22.3300, lng: 82.5700, status: 'Completed', findings: 'Exemplary compliance. All documents current. Safety protocols well implemented. Model mine for compliance.', severity: 'Low', recommendations: 'Share best practices with other mines in the region.', violationsFound: 0 },
  { id: 'INS009', mineId: 'M006', type: 'Environmental', inspector: 'Environmental Team MP', date: '2026-09-19', time: '13:00', lat: 24.1994, lng: 82.6644, status: 'Completed', findings: 'Air quality slightly above limits. Water management adequate. Plantation targets met.', severity: 'Medium', recommendations: 'Install additional air quality monitors. Increase water spraying frequency.', violationsFound: 1 },
  { id: 'INS010', mineId: 'M007', type: 'Safety', inspector: 'Inspector Jha', date: '2026-09-15', time: '09:00', lat: 25.0544, lng: 87.8405, status: 'Completed', findings: 'Bench stability concern on northern face. Overloading of trucks. Blasting protocols need review.', severity: 'High', recommendations: 'Geotechnical assessment needed. Enforce weight limits. Review blasting plan.', violationsFound: 3 },
  // Pending/Scheduled inspections
  { id: 'INS011', mineId: 'M001', type: 'Equipment', inspector: 'Equipment Team', date: '2026-10-01', time: '10:00', lat: 23.7465, lng: 86.4142, status: 'Scheduled', findings: '', severity: null, recommendations: '', violationsFound: 0 },
  { id: 'INS012', mineId: 'M004', type: 'Safety', inspector: 'Inspector Kumar', date: '2026-09-28', time: '09:00', lat: 23.6166, lng: 87.1310, status: 'Scheduled', findings: '', severity: null, recommendations: '', violationsFound: 0 },
  { id: 'INS013', mineId: 'M009', type: 'Safety', inspector: 'Inspector Mehta', date: '2026-09-30', time: '09:30', lat: 23.7600, lng: 86.4300, status: 'Scheduled', findings: '', severity: null, recommendations: '', violationsFound: 0 },
  { id: 'INS014', mineId: 'M016', type: 'Safety', inspector: 'Inspector Singh', date: '2026-09-29', time: '10:00', lat: 23.8000, lng: 86.4500, status: 'Scheduled', findings: '', severity: null, recommendations: '', violationsFound: 0 },
  { id: 'INS015', mineId: 'M011', type: 'Safety', inspector: 'Inspector Patel', date: '2026-10-02', time: '09:00', lat: 23.2100, lng: 82.3500, status: 'Scheduled', findings: '', severity: null, recommendations: '', violationsFound: 0 },
  { id: 'INS016', mineId: 'M006', type: 'Labour', inspector: 'Labour Team MP', date: '2026-10-03', time: '11:00', lat: 24.1994, lng: 82.6644, status: 'Scheduled', findings: '', severity: null, recommendations: '', violationsFound: 0 },
  { id: 'INS017', mineId: 'M013', type: 'Safety', inspector: 'Inspector Das', date: '2026-10-01', time: '08:30', lat: 23.6800, lng: 87.0800, status: 'Scheduled', findings: '', severity: null, recommendations: '', violationsFound: 0 },
  { id: 'INS018', mineId: 'M015', type: 'Environmental', inspector: 'Environmental Team CG', date: '2026-10-04', time: '10:30', lat: 20.6700, lng: 81.0800, status: 'Scheduled', findings: '', severity: null, recommendations: '', violationsFound: 0 },
  { id: 'INS019', mineId: 'M020', type: 'Compliance', inspector: 'Compliance Team MP', date: '2026-10-05', time: '14:00', lat: 24.0800, lng: 82.6000, status: 'Scheduled', findings: '', severity: null, recommendations: '', violationsFound: 0 },
  { id: 'INS020', mineId: 'M008', type: 'Safety', inspector: 'Safety Team OD', date: '2026-09-28', time: '09:00', lat: 21.8463, lng: 83.8604, status: 'Scheduled', findings: '', severity: null, recommendations: '', violationsFound: 0 },
  // Additional completed inspections
  { id: 'INS021', mineId: 'M010', type: 'Safety', inspector: 'Safety Team CG', date: '2026-09-23', time: '09:30', lat: 22.3450, lng: 82.6800, status: 'Completed', findings: 'Excellent safety standards. All equipment inspected and functional.', severity: 'Low', recommendations: 'Maintain current standards.', violationsFound: 0 },
  { id: 'INS022', mineId: 'M012', type: 'Compliance', inspector: 'Compliance Team OD', date: '2026-09-20', time: '10:00', lat: 21.7800, lng: 83.9200, status: 'Completed', findings: 'All permits valid. Minor documentation gap identified.', severity: 'Low', recommendations: 'Update documentation index.', violationsFound: 0 },
  { id: 'INS023', mineId: 'M014', type: 'Environmental', inspector: 'Environmental Team MP', date: '2026-09-19', time: '11:30', lat: 24.1200, lng: 82.7200, status: 'Completed', findings: 'Environmental parameters within limits. Green belt development progressing well.', severity: 'Low', recommendations: 'Continue plantation drive.', violationsFound: 0 },
  { id: 'INS024', mineId: 'M017', type: 'Safety', inspector: 'Safety Team OD', date: '2026-09-22', time: '08:00', lat: 22.1200, lng: 84.0300, status: 'Completed', findings: 'Good safety compliance. Minor PPE issue noted and immediately corrected.', severity: 'Low', recommendations: 'Reinforce PPE awareness among new workers.', violationsFound: 1 },
  { id: 'INS025', mineId: 'M018', type: 'Safety', inspector: 'Safety Team CG', date: '2026-09-25', time: '09:00', lat: 22.4000, lng: 82.5200, status: 'Completed', findings: 'Outstanding safety record. Zero violations. Emergency drills conducted regularly.', severity: 'Low', recommendations: 'Excellent. Nominate for safety award.', violationsFound: 0 },
  { id: 'INS026', mineId: 'M011', type: 'Safety', inspector: 'Inspector Patel', date: '2026-09-12', time: '10:00', lat: 23.2100, lng: 82.3500, status: 'Completed', findings: 'Gas accumulation risk. PPE compliance at 65%. Ventilation needs improvement.', severity: 'High', recommendations: 'Improve ventilation. Enforce PPE. Install gas monitoring system.', violationsFound: 4 },
  { id: 'INS027', mineId: 'M015', type: 'Safety', inspector: 'Inspector Roy', date: '2026-09-14', time: '11:00', lat: 20.6700, lng: 81.0800, status: 'Completed', findings: 'Blasting safety concern. Water discharge issue. PPE compliance moderate.', severity: 'High', recommendations: 'Review blasting protocols. Install effluent treatment plant upgrade.', violationsFound: 3 },
  { id: 'INS028', mineId: 'M020', type: 'Environmental', inspector: 'Environmental Team MP', date: '2026-09-16', time: '13:00', lat: 24.0800, lng: 82.6000, status: 'Completed', findings: 'Noise levels slightly elevated. Other environmental parameters acceptable.', severity: 'Low', recommendations: 'Install noise barriers near residential boundary.', violationsFound: 1 },
  { id: 'INS029', mineId: 'M013', type: 'Safety', inspector: 'Inspector Das', date: '2026-09-17', time: '09:00', lat: 23.6800, lng: 87.0800, status: 'Completed', findings: 'Haul road safety needs improvement. PPE compliance 80%. Crusher area requires attention.', severity: 'Medium', recommendations: 'Install speed breakers. Improve dust suppression at crusher.', violationsFound: 2 },
  { id: 'INS030', mineId: 'M019', type: 'Compliance', inspector: 'Compliance Team MH', date: '2026-08-30', time: '14:00', lat: 19.9500, lng: 79.2900, status: 'Completed', findings: 'Mine currently suspended. Multiple compliance documents expired. Site not secured.', severity: 'Critical', recommendations: 'Secure the site. Initiate closure procedures. Resolve compliance gaps before any resumption.', violationsFound: 4 },
];

// ---- CONTRACTORS ----
export const contractors = [
  { id: 'C001', name: 'Sharma Mining Services Pvt Ltd', mineId: 'M001', workers: 45, contractStart: '2025-01-15', contractEnd: '2027-01-15', compliance: 72, safetyViolations: 8, training: 'Completed', risk: 'High', contact: '+91-9876543210', license: 'CL/JH/2024/001' },
  { id: 'C002', name: 'Patel Earth Movers', mineId: 'M001', workers: 38, contractStart: '2024-06-01', contractEnd: '2026-12-01', compliance: 85, safetyViolations: 3, training: 'Completed', risk: 'Medium', contact: '+91-9876543211', license: 'CL/JH/2024/002' },
  { id: 'C003', name: 'National Heavy Equipment Corp', mineId: 'M002', workers: 52, contractStart: '2025-03-01', contractEnd: '2027-03-01', compliance: 91, safetyViolations: 1, training: 'Completed', risk: 'Low', contact: '+91-9876543212', license: 'CL/CG/2024/003' },
  { id: 'C004', name: 'Singh Transport & Logistics', mineId: 'M006', workers: 28, contractStart: '2025-07-01', contractEnd: '2027-07-01', compliance: 88, safetyViolations: 2, training: 'Completed', risk: 'Low', contact: '+91-9876543213', license: 'CL/MP/2024/004' },
  { id: 'C005', name: 'Bengal Mining Co-op', mineId: 'M004', workers: 34, contractStart: '2024-09-01', contractEnd: '2026-09-01', compliance: 58, safetyViolations: 12, training: 'Partial', risk: 'Critical', contact: '+91-9876543214', license: 'CL/WB/2024/005' },
  { id: 'C006', name: 'Gupta Manpower Solutions', mineId: 'M004', workers: 22, contractStart: '2025-04-01', contractEnd: '2027-04-01', compliance: 64, safetyViolations: 7, training: 'Partial', risk: 'High', contact: '+91-9876543215', license: 'CL/WB/2024/006' },
  { id: 'C007', name: 'Eastern Excavation Ltd', mineId: 'M007', workers: 41, contractStart: '2025-01-15', contractEnd: '2027-01-15', compliance: 76, safetyViolations: 5, training: 'Completed', risk: 'Medium', contact: '+91-9876543216', license: 'CL/JH/2024/007' },
  { id: 'C008', name: 'Kumar Underground Services', mineId: 'M009', workers: 35, contractStart: '2024-08-01', contractEnd: '2026-08-01', compliance: 52, safetyViolations: 14, training: 'Partial', risk: 'Critical', contact: '+91-9876543217', license: 'CL/JH/2024/008' },
  { id: 'C009', name: 'Central Tunneling Corp', mineId: 'M011', workers: 26, contractStart: '2025-02-01', contractEnd: '2027-02-01', compliance: 67, safetyViolations: 6, training: 'Completed', risk: 'High', contact: '+91-9876543218', license: 'CL/CG/2024/009' },
  { id: 'C010', name: 'Deep Mine Services Pvt Ltd', mineId: 'M016', workers: 30, contractStart: '2024-11-01', contractEnd: '2026-11-01', compliance: 48, safetyViolations: 16, training: 'Not Completed', risk: 'Critical', contact: '+91-9876543219', license: 'CL/JH/2024/010' },
  { id: 'C011', name: 'Rajhara Construction', mineId: 'M015', workers: 32, contractStart: '2025-06-01', contractEnd: '2027-06-01', compliance: 78, safetyViolations: 4, training: 'Completed', risk: 'Medium', contact: '+91-9876543220', license: 'CL/CG/2024/011' },
  { id: 'C012', name: 'Odisha Heavy Works', mineId: 'M008', workers: 44, contractStart: '2025-01-01', contractEnd: '2027-01-01', compliance: 89, safetyViolations: 2, training: 'Completed', risk: 'Low', contact: '+91-9876543221', license: 'CL/OD/2024/012' },
  { id: 'C013', name: 'Bengal Transport Services', mineId: 'M013', workers: 25, contractStart: '2025-05-01', contractEnd: '2027-05-01', compliance: 73, safetyViolations: 5, training: 'Completed', risk: 'Medium', contact: '+91-9876543222', license: 'CL/WB/2024/013' },
  { id: 'C014', name: 'MP Mining Services', mineId: 'M020', workers: 36, contractStart: '2025-08-01', contractEnd: '2027-08-01', compliance: 81, safetyViolations: 3, training: 'Completed', risk: 'Low', contact: '+91-9876543223', license: 'CL/MP/2024/014' },
  { id: 'C015', name: 'Talcher Equipment Rentals', mineId: 'M003', workers: 48, contractStart: '2024-11-10', contractEnd: '2026-11-10', compliance: 94, safetyViolations: 0, training: 'Completed', risk: 'Low', contact: '+91-9876543224', license: 'CL/OD/2024/015' },
  { id: 'C016', name: 'Gevra Transport Corp', mineId: 'M005', workers: 55, contractStart: '2025-04-01', contractEnd: '2027-04-01', compliance: 96, safetyViolations: 0, training: 'Completed', risk: 'Low', contact: '+91-9876543225', license: 'CL/CG/2024/016' },
  { id: 'C017', name: 'Kusmunda Heavy Movers', mineId: 'M010', workers: 42, contractStart: '2025-07-05', contractEnd: '2027-07-05', compliance: 92, safetyViolations: 1, training: 'Completed', risk: 'Low', contact: '+91-9876543226', license: 'CL/CG/2024/017' },
  { id: 'C018', name: 'Basundhara Mining Services', mineId: 'M017', workers: 33, contractStart: '2025-04-25', contractEnd: '2027-04-25', compliance: 87, safetyViolations: 2, training: 'Completed', risk: 'Low', contact: '+91-9876543227', license: 'CL/OD/2024/018' },
  { id: 'C019', name: 'Dipka Construction Ltd', mineId: 'M018', workers: 50, contractStart: '2025-01-01', contractEnd: '2027-01-01', compliance: 95, safetyViolations: 0, training: 'Completed', risk: 'Low', contact: '+91-9876543228', license: 'CL/CG/2024/019' },
  { id: 'C020', name: 'Jharia Underground Works', mineId: 'M009', workers: 18, contractStart: '2025-06-01', contractEnd: '2027-06-01', compliance: 55, safetyViolations: 9, training: 'Partial', risk: 'Critical', contact: '+91-9876543229', license: 'CL/JH/2024/020' },
  { id: 'C021', name: 'NCL Contract Services', mineId: 'M014', workers: 38, contractStart: '2025-05-18', contractEnd: '2027-05-18', compliance: 84, safetyViolations: 3, training: 'Completed', risk: 'Low', contact: '+91-9876543230', license: 'CL/MP/2024/021' },
  { id: 'C022', name: 'Lakhanpur Equipment Corp', mineId: 'M012', workers: 29, contractStart: '2025-03-10', contractEnd: '2027-03-10', compliance: 90, safetyViolations: 1, training: 'Completed', risk: 'Low', contact: '+91-9876543231', license: 'CL/OD/2024/022' },
  { id: 'C023', name: 'Sonepur Earth Moving', mineId: 'M013', workers: 20, contractStart: '2025-07-22', contractEnd: '2027-07-22', compliance: 75, safetyViolations: 4, training: 'Completed', risk: 'Medium', contact: '+91-9876543232', license: 'CL/WB/2024/023' },
  { id: 'C024', name: 'Korba Mine Services', mineId: 'M002', workers: 30, contractStart: '2025-07-20', contractEnd: '2027-07-20', compliance: 88, safetyViolations: 2, training: 'Completed', risk: 'Low', contact: '+91-9876543233', license: 'CL/CG/2024/024' },
  { id: 'C025', name: 'Raniganj Shaft Workers Co-op', mineId: 'M004', workers: 15, contractStart: '2025-10-01', contractEnd: '2027-10-01', compliance: 62, safetyViolations: 8, training: 'Not Completed', risk: 'High', contact: '+91-9876543234', license: 'CL/WB/2024/025' },
  { id: 'C026', name: 'Bhuli Deep Mining', mineId: 'M016', workers: 20, contractStart: '2025-09-10', contractEnd: '2027-09-10', compliance: 50, safetyViolations: 11, training: 'Not Completed', risk: 'Critical', contact: '+91-9876543235', license: 'CL/JH/2024/026' },
  { id: 'C027', name: 'Amrapali Excavation Ltd', mineId: 'M020', workers: 22, contractStart: '2025-06-18', contractEnd: '2027-06-18', compliance: 80, safetyViolations: 3, training: 'Completed', risk: 'Medium', contact: '+91-9876543236', license: 'CL/MP/2024/027' },
  { id: 'C028', name: 'Rajmahal Transport', mineId: 'M007', workers: 18, contractStart: '2025-01-15', contractEnd: '2027-01-15', compliance: 72, safetyViolations: 5, training: 'Completed', risk: 'Medium', contact: '+91-9876543237', license: 'CL/JH/2024/028' },
  { id: 'C029', name: 'Singrauli Power Mining', mineId: 'M006', workers: 40, contractStart: '2025-08-12', contractEnd: '2027-08-12', compliance: 86, safetyViolations: 2, training: 'Completed', risk: 'Low', contact: '+91-9876543238', license: 'CL/MP/2024/029' },
  { id: 'C030', name: 'Ib Valley Construction', mineId: 'M008', workers: 27, contractStart: '2025-06-20', contractEnd: '2027-06-20', compliance: 85, safetyViolations: 2, training: 'Completed', risk: 'Low', contact: '+91-9876543239', license: 'CL/OD/2024/030' },
];

// ---- WORKERS (100 workers) ----
const workerNames = ['Raju Kumar', 'Suresh Yadav', 'Manoj Singh', 'Dinesh Prasad', 'Ajay Mahto', 'Vikram Sharma', 'Sunil Tiwari', 'Ashok Oraon', 'Rajkumar Munda', 'Santosh Das', 'Bikash Hembram', 'Deepak Patel', 'Mukesh Verma', 'Ramesh Kujur', 'Gopal Sahu', 'Biren Mahato', 'Sanjay Dubey', 'Vijay Gupta', 'Anil Thakur', 'Kishore Nayak', 'Prakash Soren', 'Mohan Lakra', 'Ganesh Panda', 'Dilip Barik', 'Pappu Chauhan', 'Chandan Singh', 'Bablu Turi', 'Lakhan Paswan', 'Shiva Kumar', 'Ratan Murmu', 'Kamal Singh', 'Pawan Tiwari', 'Nagendra Mahto', 'Sonu Sharma', 'Babu Ram', 'Govind Prasad', 'Manish Kumar', 'Prem Chand', 'Rakesh Yadav', 'Umesh Mishra', 'Arvind Sahu', 'Bhola Nath', 'Santosh Mahato', 'Rajendra Singh', 'Vinod Kumar', 'Krishna Das', 'Sushil Yadav', 'Naresh Gupta', 'Devendra Prasad', 'Jugnu Oraon', 'Kailash Tiwari', 'Shyam Murmu', 'Jagdish Patel', 'Birju Mahto', 'Chotu Kumar', 'Mithun Soren', 'Pintu Verma', 'Guddu Singh', 'Tinku Yadav', 'Munna Prasad', 'Babua Ram', 'Lalji Mahto', 'Radhe Shyam', 'Parshuram Das', 'Kallu Kumar', 'Bappa Sahu', 'Nandu Tiwari', 'Chunnu Sharma', 'Makhan Singh', 'Jagmohan Yadav', 'Dhanraj Kumar', 'Balram Oraon', 'Sukhdev Munda', 'Hari Prasad', 'Tilak Raj', 'Janardhan Mahto', 'Sitaram Das', 'Baidyanath Soren', 'Fulchand Kumar', 'Ramvilas Paswan', 'Dashrath Singh', 'Indrajit Sharma', 'Mahendra Thakur', 'Yogendra Yadav', 'Chandreshwar Prasad', 'Tribhuwan Nath', 'Baldeo Kumar', 'Omprakash Tiwari', 'Kalicharan Mahto', 'Jamuna Prasad', 'Shankar Das', 'Gokul Chand', 'Phuldev Oraon', 'Ramnarayan Singh', 'Brijmohan Yadav', 'Vishwanath Kumar', 'Dharamveer Sharma', 'Devnandan Prasad', 'Satyendra Gupta', 'Udaybhan Singh'];

const roles = ['Machine Operator', 'Loader Operator', 'Driller', 'Blaster', 'Helper', 'Electrician', 'Mechanic', 'Supervisor', 'Driver', 'Fitter'];
const mineIds = ['M001', 'M001', 'M001', 'M002', 'M002', 'M003', 'M003', 'M004', 'M004', 'M004', 'M005', 'M005', 'M006', 'M006', 'M007', 'M007', 'M008', 'M008', 'M009', 'M009', 'M009', 'M010', 'M010', 'M011', 'M011', 'M012', 'M013', 'M014', 'M015', 'M015', 'M016', 'M016', 'M017', 'M018', 'M019', 'M020'];
const contractorIds = ['C001', 'C002', 'C001', 'C003', 'C024', 'C015', 'C015', 'C005', 'C006', 'C025', 'C016', 'C016', 'C004', 'C029', 'C007', 'C028', 'C012', 'C030', 'C008', 'C020', 'C008', 'C017', 'C017', 'C009', 'C009', 'C022', 'C013', 'C021', 'C011', 'C011', 'C010', 'C026', 'C018', 'C019', null, 'C014'];

export const workers = workerNames.map((name, i) => {
  const mIdx = i % mineIds.length;
  const ppeOk = Math.random() > 0.2;
  const vCount = Math.floor(Math.random() * 5);
  return {
    id: `W${String(i + 1).padStart(3, '0')}`,
    name,
    contractorId: contractorIds[mIdx],
    mineId: mineIds[mIdx],
    role: roles[i % roles.length],
    training: Math.random() > 0.15 ? 'Completed' : 'Pending',
    certification: Math.random() > 0.2 ? 'Valid' : 'Expired',
    ppeCompliance: ppeOk ? 'Compliant' : 'Non-Compliant',
    safetyViolations: vCount,
    joinDate: `202${Math.floor(Math.random() * 3) + 4}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
    age: Math.floor(Math.random() * 25) + 22,
    contact: `+91-${Math.floor(Math.random() * 9000000000) + 1000000000}`,
  };
});

// ---- CORRECTIVE ACTIONS ----
export const correctiveActions = [
  { id: 'CA001', violationId: 'V001', mineId: 'M001', responsible: 'Priya Singh', action: 'Issue warning to worker. Ensure helmet is provided. Conduct on-spot PPE awareness.', deadline: '2026-09-28', priority: 'High', status: 'Open', evidence: false, verification: null },
  { id: 'CA002', violationId: 'V002', mineId: 'M001', responsible: 'Contractor Sharma', action: 'Provide safety vests to all workers. Conduct safety briefing.', deadline: '2026-09-27', priority: 'Medium', status: 'In Progress', evidence: false, verification: null },
  { id: 'CA003', violationId: 'V003', mineId: 'M001', responsible: 'Rajesh Sharma', action: 'Activate dust suppression system. Increase water spraying frequency.', deadline: '2026-09-26', priority: 'High', status: 'In Progress', evidence: false, verification: null },
  { id: 'CA004', violationId: 'V004', mineId: 'M001', responsible: 'Safety Officer', action: 'Immediately install safety guards. Suspend equipment until repaired. Retrain operator.', deadline: '2026-09-25', priority: 'Critical', status: 'Open', evidence: false, verification: null },
  { id: 'CA005', violationId: 'V005', mineId: 'M004', responsible: 'Mine Manager WB', action: 'Emergency roof bolting. Evacuate affected section. Engage geotechnical expert.', deadline: '2026-09-23', priority: 'Critical', status: 'In Progress', evidence: true, verification: null },
  { id: 'CA006', violationId: 'V006', mineId: 'M004', responsible: 'Contractor Bengal', action: 'Provide gloves to worker. Issue written warning.', deadline: '2026-09-20', priority: 'Medium', status: 'Closed', evidence: true, verification: '2026-09-20' },
  { id: 'CA007', violationId: 'V007', mineId: 'M004', responsible: 'Safety Officer WB', action: 'Evacuate gallery. Check gas detectors. Improve ventilation.', deadline: '2026-09-22', priority: 'Critical', status: 'In Progress', evidence: true, verification: null },
  { id: 'CA008', violationId: 'V008', mineId: 'M004', responsible: 'Mine Manager WB', action: 'Schedule and complete underground safety audit immediately.', deadline: '2026-09-30', priority: 'High', status: 'Open', evidence: false, verification: null },
  { id: 'CA009', violationId: 'V009', mineId: 'M004', responsible: 'Contractor Gupta', action: 'Remove unauthorized worker. Submit proper documentation for all workers.', deadline: '2026-09-20', priority: 'High', status: 'In Progress', evidence: false, verification: null },
  { id: 'CA010', violationId: 'V010', mineId: 'M004', responsible: 'Mine Manager WB', action: 'Repair ventilation fan immediately. Deploy portable ventilation.', deadline: '2026-09-19', priority: 'Critical', status: 'In Progress', evidence: true, verification: null },
  { id: 'CA011', violationId: 'V011', mineId: 'M009', responsible: 'Mine Manager JH', action: 'Fix electrical wiring. Install waterproof conduits. Test all circuits.', deadline: '2026-09-25', priority: 'Critical', status: 'Open', evidence: false, verification: null },
  { id: 'CA012', violationId: 'V012', mineId: 'M009', responsible: 'Contractor Kumar', action: 'Enforce helmet rule. Suspend workers until compliance confirmed.', deadline: '2026-09-23', priority: 'High', status: 'Open', evidence: false, verification: null },
  { id: 'CA013', violationId: 'V013', mineId: 'M009', responsible: 'Environmental Officer', action: 'Adjust water treatment. Monitor discharge quality. Report to pollution board.', deadline: '2026-09-25', priority: 'High', status: 'In Progress', evidence: true, verification: null },
  { id: 'CA014', violationId: 'V014', mineId: 'M016', responsible: 'Mine Manager JH', action: 'Immediate fire suppression. Evacuate section. Engage rescue team.', deadline: '2026-09-23', priority: 'Critical', status: 'In Progress', evidence: true, verification: null },
  { id: 'CA015', violationId: 'V015', mineId: 'M016', responsible: 'Contractor Deep Mine', action: 'Provide safety goggles to all workers. Conduct awareness session.', deadline: '2026-09-24', priority: 'Medium', status: 'Open', evidence: false, verification: null },
  { id: 'CA016', violationId: 'V016', mineId: 'M001', responsible: 'Priya Singh', action: 'Helmet provided and warning issued.', deadline: '2026-09-22', priority: 'High', status: 'Closed', evidence: true, verification: '2026-09-22' },
  { id: 'CA017', violationId: 'V017', mineId: 'M001', responsible: 'Priya Singh', action: 'PPE compliance enforced. Worker counseled.', deadline: '2026-09-20', priority: 'High', status: 'Closed', evidence: true, verification: '2026-09-20' },
  { id: 'CA018', violationId: 'V018', mineId: 'M001', responsible: 'Rajesh Sharma', action: 'Helmet dispensed. Safety brief conducted for loading crew.', deadline: '2026-09-17', priority: 'High', status: 'Closed', evidence: true, verification: '2026-09-17' },
  { id: 'CA019', violationId: 'V019', mineId: 'M001', responsible: 'Priya Singh', action: 'Contractor Patel warned. Workers given helmets.', deadline: '2026-09-12', priority: 'High', status: 'Closed', evidence: true, verification: '2026-09-12' },
  { id: 'CA020', violationId: 'V020', mineId: 'M001', responsible: 'Rajesh Sharma', action: 'Helmet dispensers installed at Zone 4 entry.', deadline: '2026-09-07', priority: 'High', status: 'Closed', evidence: true, verification: '2026-09-08' },
  { id: 'CA021', violationId: 'V021', mineId: 'M001', responsible: 'Priya Singh', action: 'Worker suspended for repeated non-compliance. Safety retraining mandated.', deadline: '2026-08-30', priority: 'High', status: 'Closed', evidence: true, verification: '2026-09-01' },
  { id: 'CA022', violationId: 'V022', mineId: 'M006', responsible: 'Mine Manager MP', action: 'Deploy mobile dust suppression unit.', deadline: '2026-09-25', priority: 'Medium', status: 'In Progress', evidence: false, verification: null },
  { id: 'CA023', violationId: 'V023', mineId: 'M006', responsible: 'Contractor Singh', action: 'Safety shoes provided. Warning issued.', deadline: '2026-09-20', priority: 'Medium', status: 'Closed', evidence: true, verification: '2026-09-19' },
  { id: 'CA024', violationId: 'V024', mineId: 'M007', responsible: 'Mine Manager JH', action: 'Conduct geotechnical survey. Stabilize northern bench.', deadline: '2026-09-28', priority: 'High', status: 'Open', evidence: false, verification: null },
  { id: 'CA025', violationId: 'V025', mineId: 'M007', responsible: 'Contractor Eastern', action: 'Enforce weight limits. Install weighbridge at loading point.', deadline: '2026-09-25', priority: 'Medium', status: 'In Progress', evidence: false, verification: null },
  { id: 'CA026', violationId: 'V026', mineId: 'M007', responsible: 'Safety Officer JH', action: 'Helmets distributed. Safety briefing conducted.', deadline: '2026-09-17', priority: 'High', status: 'Closed', evidence: true, verification: '2026-09-17' },
  { id: 'CA027', violationId: 'V027', mineId: 'M011', responsible: 'Mine Manager CG', action: 'Seal abandoned gallery. Improve ventilation. Install CO monitors.', deadline: '2026-09-27', priority: 'Critical', status: 'In Progress', evidence: true, verification: null },
  { id: 'CA028', violationId: 'V028', mineId: 'M011', responsible: 'Contractor Central', action: 'Provide reflective safety vests to all underground workers.', deadline: '2026-09-25', priority: 'Medium', status: 'Open', evidence: false, verification: null },
  { id: 'CA029', violationId: 'V029', mineId: 'M011', responsible: 'Mine Manager CG', action: 'Initiate underground safety audit immediately.', deadline: '2026-10-01', priority: 'High', status: 'Open', evidence: false, verification: null },
  { id: 'CA030', violationId: 'V030', mineId: 'M015', responsible: 'Environmental Officer', action: 'Upgrade effluent treatment plant. Monitor discharge daily.', deadline: '2026-09-28', priority: 'High', status: 'Open', evidence: false, verification: null },
  // Additional corrective actions
  { id: 'CA031', violationId: 'V031', mineId: 'M015', responsible: 'Contractor Rajhara', action: 'Gloves provided. Chemical handling protocol reviewed.', deadline: '2026-09-20', priority: 'Medium', status: 'Closed', evidence: true, verification: '2026-09-20' },
  { id: 'CA032', violationId: 'V032', mineId: 'M015', responsible: 'Mine Manager CG', action: 'Blasting safety protocol updated. Clearance zone expanded.', deadline: '2026-09-18', priority: 'Critical', status: 'Closed', evidence: true, verification: '2026-09-18' },
  { id: 'CA033', violationId: 'V033', mineId: 'M016', responsible: 'Mine Manager JH', action: 'Engage roof support specialist. Reinforce gallery.', deadline: '2026-09-25', priority: 'Critical', status: 'In Progress', evidence: true, verification: null },
  { id: 'CA034', violationId: 'V034', mineId: 'M016', responsible: 'Contractor Deep Mine', action: 'Enforce strict helmet policy. Install helmet checks at gallery entry.', deadline: '2026-09-22', priority: 'High', status: 'Open', evidence: false, verification: null },
  { id: 'CA035', violationId: 'V035', mineId: 'M016', responsible: 'Mine Manager JH', action: 'Prepare and submit new mine rescue plan.', deadline: '2026-09-30', priority: 'Critical', status: 'Open', evidence: false, verification: null },
  { id: 'CA036', violationId: 'V036', mineId: 'M002', responsible: 'Contractor National', action: 'Vest provided. Verbal warning.', deadline: '2026-09-16', priority: 'Low', status: 'Closed', evidence: true, verification: '2026-09-16' },
  { id: 'CA037', violationId: 'V037', mineId: 'M008', responsible: 'Contractor Odisha Heavy', action: 'Complete equipment maintenance. Submit certification.', deadline: '2026-09-22', priority: 'Medium', status: 'Closed', evidence: true, verification: '2026-09-21' },
  { id: 'CA038', violationId: 'V038', mineId: 'M013', responsible: 'Mine Manager WB', action: 'Install speed breakers on haul road.', deadline: '2026-09-25', priority: 'Medium', status: 'In Progress', evidence: false, verification: null },
  { id: 'CA039', violationId: 'V039', mineId: 'M013', responsible: 'Contractor Bengal T', action: 'Enforce helmet compliance at crusher. Deploy safety officer.', deadline: '2026-09-23', priority: 'High', status: 'Open', evidence: false, verification: null },
  { id: 'CA040', violationId: 'V040', mineId: 'M020', responsible: 'Mine Manager MP', action: 'Install noise barriers. Monitor noise levels.', deadline: '2026-09-18', priority: 'Low', status: 'Closed', evidence: true, verification: '2026-09-18' },
  { id: 'CA041', violationId: 'V041', mineId: 'M020', responsible: 'Contractor MP Mining', action: 'Provide safety shoes. Ban entry without proper footwear.', deadline: '2026-09-25', priority: 'Medium', status: 'Open', evidence: false, verification: null },
  { id: 'CA042', violationId: 'V042', mineId: 'M009', responsible: 'Mine Manager JH', action: 'Clear debris from emergency exit. Install exit signage.', deadline: '2026-09-25', priority: 'Critical', status: 'Open', evidence: false, verification: null },
  { id: 'CA043', violationId: 'V043', mineId: 'M009', responsible: 'Contractor Kumar', action: 'Provide self-rescuers. Ban entry without the device.', deadline: '2026-09-24', priority: 'Critical', status: 'Open', evidence: false, verification: null },
  { id: 'CA044', violationId: 'V044', mineId: 'M016', responsible: 'Mine Manager JH', action: 'Isolate circuit. Engage electrician. Replace wiring.', deadline: '2026-09-20', priority: 'Critical', status: 'In Progress', evidence: true, verification: null },
  { id: 'CA045', violationId: 'V045', mineId: 'M016', responsible: 'Contractor Deep Mine', action: 'Provide reflective vests for all underground workers.', deadline: '2026-09-19', priority: 'Medium', status: 'Open', evidence: false, verification: null },
  { id: 'CA046', violationId: 'V046', mineId: 'M009', responsible: 'Mine Manager JH', action: 'Engage survey team. Monitor subsidence. Restrict surface activity.', deadline: '2026-09-22', priority: 'Critical', status: 'In Progress', evidence: true, verification: null },
  { id: 'CA047', violationId: 'V047', mineId: 'M009', responsible: 'Contractor Kumar', action: 'Verify worker age documents. Report to authorities if confirmed.', deadline: '2026-09-17', priority: 'Critical', status: 'Open', evidence: false, verification: null },
  { id: 'CA048', violationId: 'V048', mineId: 'M009', responsible: 'Mine Manager JH', action: 'Repair dewatering pump. Deploy backup pumps.', deadline: '2026-09-18', priority: 'High', status: 'Open', evidence: false, verification: null },
  { id: 'CA049', violationId: 'V049', mineId: 'M016', responsible: 'Mine Manager JH', action: 'Fire suppression measures. Seal fire area. Monitor gases.', deadline: '2026-09-18', priority: 'Critical', status: 'In Progress', evidence: true, verification: null },
  { id: 'CA050', violationId: 'V050', mineId: 'M016', responsible: 'Mine Manager JH', action: 'Install additional pumps. Identify water source. Seal ingress.', deadline: '2026-09-16', priority: 'Critical', status: 'Open', evidence: false, verification: null },
];

// ---- NOTIFICATIONS ----
export const notifications = [
  { id: 'N001', type: 'Critical', title: 'PPE Violation Detected', message: 'AI Vision detected missing helmet at Mine Jharia Block A, Zone 4', time: '2026-09-25T14:30:00', read: false, module: 'PPE Detection', mineId: 'M001' },
  { id: 'N002', type: 'Critical', title: 'Methane Alert', message: 'Methane concentration exceeds 1.5% in Raniganj Mine Gallery B', time: '2026-09-25T13:45:00', read: false, module: 'Sensor Alert', mineId: 'M004' },
  { id: 'N003', type: 'High', title: 'Permit Expiring', message: 'Explosives License for Jharia Block A expires on Sep 30, 2026', time: '2026-09-25T12:00:00', read: false, module: 'Compliance', mineId: 'M001' },
  { id: 'N004', type: 'Critical', title: 'Fire Hazard Detected', message: 'Spontaneous combustion detected in Bhuli Underground Deep Gallery', time: '2026-09-25T11:30:00', read: false, module: 'Sensor Alert', mineId: 'M016' },
  { id: 'N005', type: 'Warning', title: 'Corrective Action Overdue', message: 'CA004: Safety guard installation at Jharia Block A past deadline', time: '2026-09-25T11:00:00', read: false, module: 'Corrective Action', mineId: 'M001' },
  { id: 'N006', type: 'High', title: 'Risk Score Increased', message: 'Mine Jharia Block B risk score increased from 82 to 88', time: '2026-09-25T10:30:00', read: false, module: 'Risk Engine', mineId: 'M009' },
  { id: 'N007', type: 'Critical', title: 'Expired Safety Audit', message: 'Underground Safety Audit for Raniganj Mine has expired', time: '2026-09-25T10:00:00', read: true, module: 'Compliance', mineId: 'M004' },
  { id: 'N008', type: 'Warning', title: 'Recurring Violation', message: 'Helmet violations recurring 7 times in Jharia Block A Zone 4', time: '2026-09-25T09:30:00', read: true, module: 'Violation Engine', mineId: 'M001' },
  { id: 'N009', type: 'Information', title: 'Inspection Completed', message: 'Safety inspection completed at Gevra Mine with zero violations', time: '2026-09-24T16:00:00', read: true, module: 'Inspection', mineId: 'M005' },
  { id: 'N010', type: 'Resolved', title: 'Violation Resolved', message: 'PPE violation V006 at Raniganj Mine has been resolved', time: '2026-09-24T15:30:00', read: true, module: 'Violations', mineId: 'M004' },
  { id: 'N011', type: 'High', title: 'Boundary Alert', message: 'Possible unauthorized activity detected near Jharia Block A boundary', time: '2026-09-24T14:00:00', read: false, module: 'Boundary Monitor', mineId: 'M001' },
  { id: 'N012', type: 'Critical', title: 'Electrical Hazard', message: 'Exposed wiring near water seepage at Jharia Block B Underground', time: '2026-09-24T13:00:00', read: false, module: 'Safety', mineId: 'M009' },
  { id: 'N013', type: 'Warning', title: 'Pollution Alert', message: 'PM10 levels exceeded limits at Jharia Block A Zone 3', time: '2026-09-24T12:00:00', read: true, module: 'Environmental', mineId: 'M001' },
  { id: 'N014', type: 'Information', title: 'Report Generated', message: 'Monthly compliance report generated for Korba West Mine', time: '2026-09-24T11:00:00', read: true, module: 'Reports', mineId: 'M002' },
  { id: 'N015', type: 'High', title: 'Inspection Overdue', message: 'Safety inspection for Chirimiri Underground is overdue by 15 days', time: '2026-09-24T10:00:00', read: false, module: 'Inspection', mineId: 'M011' },
  // More notifications
  { id: 'N016', type: 'Critical', title: 'Emergency Exit Blocked', message: 'Secondary exit at Jharia Block B blocked by debris', time: '2026-09-23T16:00:00', read: false, module: 'Safety', mineId: 'M009' },
  { id: 'N017', type: 'Warning', title: 'Dispatch Anomaly', message: 'Unusual coal dispatch pattern detected at Rajmahal Mine', time: '2026-09-23T15:00:00', read: false, module: 'Coal Dispatch', mineId: 'M007' },
  { id: 'N018', type: 'High', title: 'Contractor Risk Alert', message: 'Contractor Deep Mine Services flagged as Critical risk', time: '2026-09-23T14:00:00', read: false, module: 'Contractors', mineId: 'M016' },
  { id: 'N019', type: 'Resolved', title: 'Corrective Action Closed', message: 'CA006: Gloves provided to workers at Raniganj Mine', time: '2026-09-23T13:00:00', read: true, module: 'Corrective Action', mineId: 'M004' },
  { id: 'N020', type: 'Information', title: 'Drone Survey Completed', message: 'Quarterly drone survey completed for Jharia Block A', time: '2026-09-23T12:00:00', read: true, module: 'Drone Survey', mineId: 'M001' },
  // Fill to ~100 notifications with generated data
  ...Array.from({ length: 80 }, (_, i) => {
    const types = ['Critical', 'High', 'Warning', 'Information', 'Resolved'];
    const titles = ['Sensor Alert', 'PPE Check', 'Inspection Reminder', 'Document Update', 'System Alert', 'Training Due', 'Shift Change', 'Equipment Alert', 'Weather Advisory', 'Worker Alert'];
    const mIds = mines.map(m => m.id);
    return {
      id: `N${String(21 + i).padStart(3, '0')}`,
      type: types[i % 5],
      title: titles[i % 10],
      message: `Automated system notification #${21 + i} for mine operations`,
      time: new Date(Date.now() - (i * 3600000 + 72000000)).toISOString(),
      read: i > 20,
      module: 'System',
      mineId: mIds[i % mIds.length],
    };
  }),
];

// ---- ENVIRONMENTAL DATA ----
export const environmentalData = [
  { id: 'ENV001', mineId: 'M001', zone: 'Zone 3', parameter: 'PM10', value: 185, unit: 'µg/m³', limit: 150, status: 'Critical', timestamp: '2026-09-25T14:00:00' },
  { id: 'ENV002', mineId: 'M001', zone: 'Zone 1', parameter: 'PM10', value: 120, unit: 'µg/m³', limit: 150, status: 'Normal', timestamp: '2026-09-25T14:00:00' },
  { id: 'ENV003', mineId: 'M001', zone: 'Zone 2', parameter: 'Noise', value: 78, unit: 'dB', limit: 85, status: 'Normal', timestamp: '2026-09-25T14:00:00' },
  { id: 'ENV004', mineId: 'M001', zone: 'Zone 4', parameter: 'Temperature', value: 38, unit: '°C', limit: 40, status: 'Warning', timestamp: '2026-09-25T14:00:00' },
  { id: 'ENV005', mineId: 'M004', zone: 'Zone 2', parameter: 'Methane', value: 1.8, unit: '%', limit: 1.5, status: 'Critical', timestamp: '2026-09-25T13:45:00' },
  { id: 'ENV006', mineId: 'M004', zone: 'Zone 1', parameter: 'CO', value: 35, unit: 'ppm', limit: 50, status: 'Normal', timestamp: '2026-09-25T13:45:00' },
  { id: 'ENV007', mineId: 'M004', zone: 'Zone 3', parameter: 'Humidity', value: 88, unit: '%', limit: 90, status: 'Warning', timestamp: '2026-09-25T13:45:00' },
  { id: 'ENV008', mineId: 'M009', zone: 'Zone 1', parameter: 'CO', value: 55, unit: 'ppm', limit: 50, status: 'Critical', timestamp: '2026-09-25T12:00:00' },
  { id: 'ENV009', mineId: 'M009', zone: 'Zone 2', parameter: 'Methane', value: 1.2, unit: '%', limit: 1.5, status: 'Warning', timestamp: '2026-09-25T12:00:00' },
  { id: 'ENV010', mineId: 'M016', zone: 'Zone 1', parameter: 'Temperature', value: 45, unit: '°C', limit: 40, status: 'Critical', timestamp: '2026-09-25T11:30:00' },
  { id: 'ENV011', mineId: 'M016', zone: 'Zone 1', parameter: 'CO', value: 72, unit: 'ppm', limit: 50, status: 'Critical', timestamp: '2026-09-25T11:30:00' },
  { id: 'ENV012', mineId: 'M016', zone: 'Zone 2', parameter: 'Methane', value: 0.8, unit: '%', limit: 1.5, status: 'Normal', timestamp: '2026-09-25T11:30:00' },
];

// ---- SENSOR DATA ----
export const sensorData = [
  { id: 'S001', mineId: 'M001', type: 'Gas', location: 'Zone 3', value: 'Normal', unit: 'ppm', reading: 25, threshold: 50 },
  { id: 'S002', mineId: 'M001', type: 'Temperature', location: 'Zone 4', value: 'Warning', unit: '°C', reading: 38, threshold: 40 },
  { id: 'S003', mineId: 'M001', type: 'Vibration', location: 'Zone 1', value: 'Normal', unit: 'mm/s', reading: 12, threshold: 25 },
  { id: 'S004', mineId: 'M001', type: 'Pollution', location: 'Zone 3', value: 'Critical', unit: 'µg/m³', reading: 185, threshold: 150 },
  { id: 'S005', mineId: 'M004', type: 'Gas', location: 'Zone 2', value: 'Critical', unit: '%CH4', reading: 1.8, threshold: 1.5 },
  { id: 'S006', mineId: 'M004', type: 'Temperature', location: 'Zone 1', value: 'Normal', unit: '°C', reading: 28, threshold: 40 },
  { id: 'S007', mineId: 'M009', type: 'Gas', location: 'Zone 1', value: 'Critical', unit: 'ppm CO', reading: 55, threshold: 50 },
  { id: 'S008', mineId: 'M009', type: 'Vibration', location: 'Zone 2', value: 'Warning', unit: 'mm/s', reading: 22, threshold: 25 },
  { id: 'S009', mineId: 'M016', type: 'Temperature', location: 'Zone 1', value: 'Critical', unit: '°C', reading: 45, threshold: 40 },
  { id: 'S010', mineId: 'M016', type: 'Gas', location: 'Zone 1', value: 'Critical', unit: 'ppm CO', reading: 72, threshold: 50 },
];

// ---- DRONE SURVEYS ----
export const droneSurveys = [
  { id: 'DS001', mineId: 'M001', date: '2026-09-23', zone: 'All Zones', status: 'Completed', boundaryChange: false, excavationChange: true, activityChange: false, notes: 'Slight excavation expansion in Zone 3. Within permitted limits.' },
  { id: 'DS002', mineId: 'M001', date: '2026-06-15', zone: 'All Zones', status: 'Completed', boundaryChange: false, excavationChange: false, activityChange: false, notes: 'No significant changes detected.' },
  { id: 'DS003', mineId: 'M004', date: '2026-09-05', zone: 'Surface Area', status: 'Completed', boundaryChange: false, excavationChange: false, activityChange: true, notes: 'New temporary structures detected near shaft entrance.' },
  { id: 'DS004', mineId: 'M007', date: '2026-09-10', zone: 'Northern Face', status: 'Completed', boundaryChange: true, excavationChange: true, activityChange: false, notes: 'Bench slope angle exceeds recommended limits on north face.' },
  { id: 'DS005', mineId: 'M001', date: '2026-03-20', zone: 'All Zones', status: 'Completed', boundaryChange: false, excavationChange: false, activityChange: false, notes: 'Routine survey. All within limits.' },
];

// ---- BOUNDARY EVENTS ----
export const boundaryEvents = [
  { id: 'BE001', mineId: 'M001', date: '2026-09-24', location: 'Zone B (Outside Boundary)', lat: 23.7520, lng: 86.4200, type: 'Unauthorized Activity', status: 'Under Investigation', description: 'Possible unauthorized excavation activity detected 500m outside permitted boundary', evidence: 'Drone imagery', detectedBy: 'Satellite/Drone Analysis' },
  { id: 'BE002', mineId: 'M007', date: '2026-09-18', location: 'Northern Boundary', lat: 25.0580, lng: 87.8430, type: 'Boundary Encroachment', status: 'Resolved', description: 'Mining activity approaching boundary limit on northern face', evidence: 'Survey data', detectedBy: 'Drone Survey' },
  { id: 'BE003', mineId: 'M009', date: '2026-09-12', location: 'Eastern Boundary', lat: 23.7650, lng: 86.4380, type: 'Unauthorized Activity', status: 'Under Investigation', description: 'Unidentified machinery movement detected near eastern boundary', evidence: 'Sensor data', detectedBy: 'GPS Monitoring' },
];

// ---- COAL DISPATCH ----
export const coalDispatch = [
  { id: 'CD001', mineId: 'M001', vehicleId: 'JH-04-AT-1234', date: '2026-09-25', time: '08:15', weight: 32.5, destination: 'NTPC Kahalgaon', status: 'Dispatched', anomaly: false },
  { id: 'CD002', mineId: 'M001', vehicleId: 'JH-04-BT-5678', date: '2026-09-25', time: '09:30', weight: 28.8, destination: 'DVC Bokaro', status: 'Dispatched', anomaly: false },
  { id: 'CD003', mineId: 'M001', vehicleId: 'JH-04-CT-9012', date: '2026-09-25', time: '10:45', weight: 45.2, destination: 'Tata Steel Jamshedpur', status: 'Dispatched', anomaly: true },
  { id: 'CD004', mineId: 'M001', vehicleId: 'JH-04-DT-3456', date: '2026-09-25', time: '11:00', weight: 31.0, destination: 'NTPC Kahalgaon', status: 'In Transit', anomaly: false },
  { id: 'CD005', mineId: 'M005', vehicleId: 'CG-07-ET-7890', date: '2026-09-25', time: '07:00', weight: 35.0, destination: 'CSEB Korba', status: 'Delivered', anomaly: false },
  { id: 'CD006', mineId: 'M005', vehicleId: 'CG-07-FT-1234', date: '2026-09-25', time: '08:30', weight: 33.5, destination: 'BALCO Korba', status: 'Delivered', anomaly: false },
  { id: 'CD007', mineId: 'M005', vehicleId: 'CG-07-GT-5678', date: '2026-09-25', time: '10:00', weight: 48.0, destination: 'NTPC Sipat', status: 'Dispatched', anomaly: true },
  { id: 'CD008', mineId: 'M003', vehicleId: 'OD-21-HT-9012', date: '2026-09-25', time: '06:30', weight: 34.0, destination: 'NTPC Talcher', status: 'Delivered', anomaly: false },
  { id: 'CD009', mineId: 'M003', vehicleId: 'OD-21-IT-3456', date: '2026-09-25', time: '08:00', weight: 30.5, destination: 'MCL Washery', status: 'Delivered', anomaly: false },
  { id: 'CD010', mineId: 'M007', vehicleId: 'JH-15-JT-7890', date: '2026-09-25', time: '09:00', weight: 42.5, destination: 'Farakka Power Plant', status: 'In Transit', anomaly: true },
];

// ---- RISK PREDICTIONS ----
export const riskPredictions = [
  { mineId: 'M001', current: 78, predicted30: 85, predicted60: 88, predicted90: 82, trend: 'Increasing', confidence: 78, factors: ['Recurring PPE violations in Zone 4', 'Overdue corrective actions', 'Expiring permits (Explosives License, Mining Lease)', 'Elevated dust levels'] },
  { mineId: 'M004', current: 82, predicted30: 88, predicted60: 90, predicted90: 85, trend: 'Increasing', confidence: 82, factors: ['Expired safety audit', 'Roof support failures in Gallery B', 'Methane accumulation', 'Ventilation issues'] },
  { mineId: 'M009', current: 88, predicted30: 92, predicted60: 94, predicted90: 90, trend: 'Increasing', confidence: 85, factors: ['Multiple critical safety hazards', 'Expired certificates', 'Emergency exits blocked', 'Water seepage and electrical hazards'] },
  { mineId: 'M016', current: 90, predicted30: 95, predicted60: 96, predicted90: 92, trend: 'Increasing', confidence: 88, factors: ['Active fire hazard', 'Expired rescue plan', 'Poor PPE compliance', 'Multiple critical violations'] },
  { mineId: 'M002', current: 35, predicted30: 32, predicted60: 30, predicted90: 28, trend: 'Decreasing', confidence: 75, factors: ['All permits valid', 'Low violation rate', 'Good compliance'] },
  { mineId: 'M003', current: 28, predicted30: 25, predicted60: 23, predicted90: 22, trend: 'Decreasing', confidence: 80, factors: ['Excellent safety record', 'Full compliance', 'Strong safety culture'] },
  { mineId: 'M005', current: 22, predicted30: 20, predicted60: 18, predicted90: 18, trend: 'Stable', confidence: 82, factors: ['Model mine', 'Zero violations', 'Full compliance', 'Regular inspections'] },
  { mineId: 'M011', current: 75, predicted30: 80, predicted60: 82, predicted90: 78, trend: 'Increasing', confidence: 72, factors: ['Gas accumulation risk', 'Expired safety audit', 'PPE compliance issues'] },
  { mineId: 'M006', current: 42, predicted30: 40, predicted60: 38, predicted90: 36, trend: 'Decreasing', confidence: 68, factors: ['Minor air quality issues being addressed', 'Good compliance'] },
  { mineId: 'M007', current: 55, predicted30: 58, predicted60: 55, predicted90: 52, trend: 'Stable', confidence: 65, factors: ['Slope stability concern', 'Overloading issues', 'Being addressed'] },
];

// ---- MINE HISTORY ----
export const mineHistory = [
  { mineId: 'M001', date: '2005-03-15', event: 'Mine Opening', description: 'Jharia Coalfield Block A commissioned under BCCL' },
  { mineId: 'M001', date: '2010-06-20', event: 'Boundary Change', description: 'Mining lease area expanded by 50 hectares' },
  { mineId: 'M001', date: '2015-08-12', event: 'Accident', description: 'Minor equipment accident. 2 injuries. Safety review conducted.' },
  { mineId: 'M001', date: '2018-03-01', event: 'Ownership Change', description: 'Transferred from direct BCCL to subsidiary management' },
  { mineId: 'M001', date: '2020-03-15', event: 'Permit Renewal', description: 'Mining Lease renewed for another 6 years' },
  { mineId: 'M001', date: '2022-11-10', event: 'Environmental Event', description: 'Dust pollution incident. Remediation measures implemented.' },
  { mineId: 'M001', date: '2024-01-15', event: 'Technology Upgrade', description: 'AI monitoring and CONETRAAL platform deployed' },
  { mineId: 'M001', date: '2025-06-20', event: 'Safety Improvement', description: 'New safety protocols and PPE detection system installed' },
  { mineId: 'M001', date: '2026-08-28', event: 'Recurring Violation', description: 'Recurring helmet violations identified in Zone 4' },
  { mineId: 'M001', date: '2026-09-20', event: 'Inspection', description: 'Safety inspection completed. 3 violations found.' },
  { mineId: 'M004', date: '1998-05-22', event: 'Mine Opening', description: 'Raniganj Coal Mine underground operations commenced' },
  { mineId: 'M004', date: '2008-07-15', event: 'Accident', description: 'Gallery collapse incident. 5 injuries. Major safety review.' },
  { mineId: 'M004', date: '2015-12-01', event: 'Production Reduction', description: 'Production reduced due to aging infrastructure' },
  { mineId: 'M004', date: '2020-09-10', event: 'Safety Alert', description: 'Gas accumulation warning issued for Gallery B' },
  { mineId: 'M004', date: '2026-09-10', event: 'Critical Inspection', description: 'Multiple critical issues identified. Immediate remediation required.' },
  { mineId: 'M009', date: '1995-02-28', event: 'Mine Opening', description: 'Jharia Block B Underground operations started' },
  { mineId: 'M009', date: '2005-04-15', event: 'Accident', description: 'Water inundation incident. Emergency evacuation.' },
  { mineId: 'M009', date: '2018-11-20', event: 'Subsidence Warning', description: 'Ground subsidence observed above old workings' },
  { mineId: 'M009', date: '2026-09-08', event: 'Critical Inspection', description: 'Multiple critical hazards identified by Inspector Mehta' },
  { mineId: 'M016', date: '1988-09-10', event: 'Mine Opening', description: 'Bhuli Underground mining commenced' },
  { mineId: 'M016', date: '2000-03-25', event: 'Fire Incident', description: 'Underground fire detected. Section sealed. No casualties.' },
  { mineId: 'M016', date: '2010-08-12', event: 'Production Reduction', description: 'Production capacity reduced. Mine classified as aging.' },
  { mineId: 'M016', date: '2026-09-05', event: 'Critical Inspection', description: 'Fire hazard, PPE issues, expired rescue plan. Urgent action needed.' },
];

// ---- AUDIT LOGS ----
export const auditLogs = [
  { id: 'AL001', user: 'Rahul Verma', action: 'Uploaded Evidence', date: '2026-09-25', time: '14:30', module: 'PPE Detection', record: 'V001', status: 'Success' },
  { id: 'AL002', user: 'AI Vision System', action: 'Detected PPE Violation', date: '2026-09-25', time: '14:28', module: 'Computer Vision', record: 'V001', status: 'Auto' },
  { id: 'AL003', user: 'Priya Singh', action: 'Created Corrective Action', date: '2026-09-25', time: '14:35', module: 'Violations', record: 'CA001', status: 'Success' },
  { id: 'AL004', user: 'System', action: 'Generated Alert', date: '2026-09-25', time: '14:30', module: 'Notifications', record: 'N001', status: 'Auto' },
  { id: 'AL005', user: 'Rajesh Sharma', action: 'Viewed Dashboard', date: '2026-09-25', time: '09:00', module: 'Dashboard', record: null, status: 'Success' },
  { id: 'AL006', user: 'Dr. Arvind Kumar', action: 'Generated Report', date: '2026-09-24', time: '16:00', module: 'Reports', record: 'RPT001', status: 'Success' },
  { id: 'AL007', user: 'Priya Singh', action: 'Closed Violation', date: '2026-09-20', time: '15:00', module: 'Violations', record: 'V006', status: 'Success' },
  { id: 'AL008', user: 'Rahul Verma', action: 'Completed Inspection', date: '2026-09-20', time: '12:30', module: 'Inspections', record: 'INS001', status: 'Success' },
  { id: 'AL009', user: 'System', action: 'Risk Score Updated', date: '2026-09-25', time: '10:30', module: 'Risk Engine', record: 'M009', status: 'Auto' },
  { id: 'AL010', user: 'AI Copilot', action: 'Query Answered', date: '2026-09-25', time: '11:00', module: 'AI Copilot', record: null, status: 'Auto' },
  ...Array.from({ length: 40 }, (_, i) => ({
    id: `AL${String(11 + i).padStart(3, '0')}`,
    user: users[i % users.length].name,
    action: ['Viewed Records', 'Updated Status', 'Ran Analysis', 'Exported Data', 'Login'][i % 5],
    date: `2026-09-${String(25 - Math.floor(i / 5)).padStart(2, '0')}`,
    time: `${String(8 + (i % 10)).padStart(2, '0')}:${String((i * 7) % 60).padStart(2, '0')}`,
    module: ['Dashboard', 'Compliance', 'Violations', 'Inspections', 'Risk Engine'][i % 5],
    record: null,
    status: 'Success',
  })),
];

// ---- HELPER FUNCTIONS ----
export function getMine(id) { return mines.find(m => m.id === id); }
export function getMineViolations(mineId) { return violations.filter(v => v.mineId === mineId); }
export function getMineCompliance(mineId) { return complianceRecords.filter(c => c.mineId === mineId); }
export function getMineInspections(mineId) { return inspections.filter(i => i.mineId === mineId); }
export function getMineContractors(mineId) { return contractors.filter(c => c.mineId === mineId); }
export function getMineWorkers(mineId) { return workers.filter(w => w.mineId === mineId); }
export function getMineCorrectiveActions(mineId) { return correctiveActions.filter(ca => ca.mineId === mineId); }
export function getMineZones(mineId) { return mineZones.filter(z => z.mineId === mineId); }
export function getMineHistory(mineId) { return mineHistory.filter(h => h.mineId === mineId); }
export function getMineEnvironmental(mineId) { return environmentalData.filter(e => e.mineId === mineId); }
export function getMineSensors(mineId) { return sensorData.filter(s => s.mineId === mineId); }

export function getStats() {
  const totalMines = mines.length;
  const activeMines = mines.filter(m => m.status === 'Active').length;
  const compliantMines = mines.filter(m => m.complianceScore >= 80).length;
  const nonCompliant = mines.filter(m => m.complianceScore < 70).length;
  const highRisk = mines.filter(m => m.riskScore >= 70).length;
  const criticalViolations = violations.filter(v => v.severity === 'Critical' && v.status !== 'Closed').length;
  const pendingInspections = inspections.filter(i => i.status === 'Scheduled').length;
  const expiringPermits = complianceRecords.filter(c => c.status === 'Expiring Soon' || c.status === 'Expired').length;
  const openCA = correctiveActions.filter(ca => ca.status !== 'Closed').length;
  const totalContractors = contractors.length;
  const totalWorkers = workers.length;
  return { totalMines, activeMines, compliantMines, nonCompliant, highRisk, criticalViolations, pendingInspections, expiringPermits, openCA, totalContractors, totalWorkers };
}
