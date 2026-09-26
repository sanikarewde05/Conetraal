# ⛏️ CONETRAAL — AI-Powered Smart Mine Governance & Compliance System

> **Smart India Hackathon 2026** | **Problem Statement ID:** SIH26024  
> **Theme:** Smart Automation | **Category:** Software  
> **Target Sector:** Ministry of Coal / DGMS (Directorate General of Mines Safety) / State Mining Departments

---

## 📌 Executive Summary

**CONETRAAL** is an enterprise-grade, AI-driven centralized governance, compliance monitoring, and predictive safety intelligence platform tailored for open-cast and underground coal mines across India. Built in response to **SIH26024**, CONETRAAL unifies statutory compliance, environmental monitoring, worker safety, computer vision PPE tracking, IoT telemetry, drone volumetric analysis, and regulatory audit workflows into a singular real-time command dashboard.

---

## 🌟 Key Capabilities & Architectural Pillars

### 1. 🛡️ Statutory & DGMS Compliance Engine
- Pre-configured with the **Mines Act 1952**, **Coal Mines Regulations (CMR) 2017**, and **DGMS Circulars**.
- Automated tracking of statutory clearances, Environmental Clearances (EC), Forest Clearances (FC), and Explosives Licenses.
- Dynamic calendar tracking renewal deadlines, statutory filing dates, and mandatory inspection milestones.

### 2. 👁️ Computer Vision & Real-time AI PPE Detection
- Simulated edge-AI computer vision feed detecting PPE violations in real time:
  - Safety Hardhats / Helmets
  - High-Visibility Vests
  - Safety Footwear / Steel-Toe Boots
  - Dust Respirator Masks & Eye Protection
- Automated violation logging with bounding-box coordinates, confidence ratings, and time-stamped visual evidence.

### 3. 🔮 Predictive Risk Intelligence & Accident Forecasting
- Multi-parameter risk scoring engine calculating real-time safety indices for each mine site (0–100 scale).
- Predictive modeling forecasting probability of slope failure, methane accumulation, and safety incidents over 7–30 day horizons.
- Actionable early-warning recommendations to mitigate identified hazards before incidents occur.

### 4. 🛰️ Geofencing, Drone Surveys & Boundary Monitoring
- Satellite and GIS-integrated map plotting open-cast lease boundaries and mining leases.
- Drone orthomosaic data processing for volumetric extraction tracking, overburden dump monitoring, and illegal mining encroachment detection.
- Automated geofence breach alerts triggered when machinery or extraction moves outside approved boundary zones.

### 5. 📡 IoT Telemetry & Environmental Sensor Dashboard
- Real-time ingestion and threshold alerting for critical environmental parameters:
  - Mine gases: Methane ($CH_4$), Carbon Monoxide ($CO$), Oxygen ($O_2$) depletion.
  - Air quality: $PM_{2.5}$, $PM_{10}$, $NO_x$, $SO_2$.
  - Geotechnical sensors: Seismographs, slope inclinometers, vibration monitors.
- Automated siren/ventilation warnings when toxic gas thresholds approach permissible exposure limits (PEL).

### 6. 🎙️ Multilingual Voice & NLP Incident Reporting
- Hands-free voice reporting module enabling field supervisors to dictate safety observation logs in Hindi and English.
- Natural Language Processing (NLP) extracts key entities (Zone, Severity, Nature of Hazard) and compiles structured incident tickets automatically.
- AI PDF analysis parses legacy DGMS notices, safety violation reports, and audit certificates.

### 7. 🚛 Coal Dispatch & Weighbridge Reconciliation
- Digital Transit Pass (e-TP) verification and automated RFID weighbridge reconciliations.
- Detection of transit anomalies, weight discrepancies, and route deviations to prevent illegal coal diversion.

### 8. 🤖 CONETRAAL AI Compliance Copilot
- Always-accessible conversational assistant specialized in Indian mining law and compliance guidance.
- Generates instant legal citations, recommended corrective actions, penalty estimations, and DGMS inspection preparation checklists.

### 9. 📋 Corrective Action Tracking (CAPA) & Immutable Audit Trail
- Closed-loop workflow from violation discovery $\rightarrow$ CAPA assignment $\rightarrow$ photographic evidence upload $\rightarrow$ statutory sign-off.
- Tamper-proof, immutable chronological log recording all inspector edits, approvals, overrides, and status transitions.

---

## 👥 Role-Based Access Control (RBAC)

| Role | Target Persona | Primary Permissions |
| :--- | :--- | :--- |
| **Government / Regulatory Officer** | DGMS Director, MoC Inspector | National overview, cross-mine benchmarking, permit revocation, statutory audit oversight |
| **Mine Manager** | Colliery General Manager, Agent | Full mine control, resource allocation, dispatch sign-offs, production vs. compliance balancing |
| **Safety Officer** | Mine Safety Manager, DGMS Liaison | PPE monitoring, IoT telemetry thresholds, CAPA lifecycle management, hazard escalation |
| **Field Inspector** | Junior Mining Engineer, Area Auditor | Mobile-optimized field inspection mode, voice memo logging, GPS-stamped photo capture |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0.0 or later recommended)
- **npm** (v9.0.0 or later)

### Installation & Launch

1. **Clone the repository and enter the directory**:
   ```bash
   cd connetral
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   The application will launch at **`http://localhost:5173/`**.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated in the `dist/` directory.

---

## 🎯 Evaluator Presentation Guide (SIH Submission)

When presenting the platform to judges or evaluators:
1. Log in using the **Quick Login** buttons on the login screen (choose any of the 4 roles).
2. Click the **⚡ Quick Actions** button in the top navigation bar to open the **Evaluator Quick Actions Panel**:
   - **Action 1: Detect PPE Violation** — Jumps to the AI Computer Vision feed showing active bounding box detections.
   - **Action 2: Generate Violation Ticket** — Triggers end-to-end evidence capture and statutory citation.
   - **Action 3: Geo-tagged Evidence** — Interactively shows the violation coordinates mapped on the GIS module.
   - **Action 4: AI Risk Prediction** — Triggers the predictive hazard model forecasting risks for high-hazard mines.
   - **Action 5: Permit Alert** — Simulates an expiring DGMS explosive clearance notice.
   - **Action 6: AI Compliance Copilot** — Opens the floating assistant with ready-to-ask compliance queries.
   - **Action 7: Generate Compliance Report** — Produces ready-to-export DGMS Form IV compliance documentation.
   - **Action 8: High-Risk Mine Drilldown** — Navigates directly to deep-dive analytics for high-risk colliery assets.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 19, TypeScript / Modern ES2024
- **Build Tool**: Vite 8 (Ultra-fast HMR and optimized production bundling)
- **Styling Architecture**: Custom responsive design system with CSS custom properties, dark-mode glassmorphism, dynamic glowing accents, and micro-animations
- **Mapping & GIS**: Leaflet-compatible interactive spatial projection coordinates with layer filters
- **State Architecture**: React Context API with persistent session simulation and reactive event streams

---

## 📄 Compliance & Regulatory References

- **Mines Act, 1952** (Act No. 35 of 1952)
- **Coal Mines Regulations, 2017** (G.S.R. 1449(E))
- **Directorate General of Mines Safety (DGMS)** Tech Circulars
- **Air (Prevention and Control of Pollution) Act, 1981**
- **Water (Prevention and Control of Pollution) Act, 1974**
- **Environment (Protection) Act, 1986**

---

*Designed and Developed for the **Smart India Hackathon 2026** (SIH26024).*
