# ⛏️ CONETRAAL — AI-Powered Smart Mine Governance & Compliance System

<div align="center">

![Project Status](https://img.shields.io/badge/Status-Production--Ready-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Leaflet](https://img.shields.io/badge/GIS-Leaflet%20Maps-199900?style=for-the-badge&logo=leaflet&logoColor=white)
![DGMS Compliant](https://img.shields.io/badge/Regulatory-DGMS%20%7C%20CMR%202017-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**Next-Generation Unified Governance, Safety Intelligence & Statutory Compliance Engine for Open-Cast & Underground Coal Mines**

[Key Features](#-key-features--capabilities) • [Role-Based Access](#-role-based-dashboards-rbac) • [Quick Start](#-getting-started) • [Evaluator Walkthrough](#-evaluator-presentation-guide) • [Architecture](#-system-architecture--tech-stack)

</div>

---

## 📌 Executive Summary

**CONETRAAL** is an enterprise-grade, centralized mining governance, statutory compliance monitoring, and predictive safety intelligence platform tailored for open-cast and underground coal mines across India. Built for regulatory bodies (*Ministry of Coal, DGMS, State Mining Departments*) and colliery management, CONETRAAL unifies:

- **Statutory DGMS Compliance Tracking** (Mines Act 1952, Coal Mines Regulations 2017)
- **Edge-AI Computer Vision PPE Detection** (Real-time helmet, vest, footwear violation logs)
- **Commercial & P&L Governance** (Revenue realization, avoidable downtime loss prevention, DMF & Royalty tracking)
- **Predictive Risk & Hazard Forecasting** (Slope stability, methane influx, hazard index)
- **Interactive GIS Mapping** (Satellite and street layers, GPS coordinates, colliery boundary overlays)
- **IoT Environmental Telemetry** ($CH_4, CO, O_2, PM_{2.5}, PM_{10}$, seismographs)
- **Voice & NLP Incident Reporting** (Multilingual dictation in Hindi and English)
- **Coal Dispatch & Weighbridge Reconciliation** (e-Transit Pass tracking and pilferage mitigation)

---

## 🌟 Key Features & Capabilities

### 1. 🛡️ Statutory & DGMS Compliance Engine
- Automated compliance monitoring configured against the **Mines Act 1952**, **Coal Mines Regulations (CMR) 2017**, and DGMS circulars.
- Clearances, Environmental Clearances (EC), Forest Clearances (FC), and Explosives Licenses expiration calendar.
- Automated generation of statutory audit logs and ready-to-export DGMS Form IV documentation.

### 2. 👁️ Computer Vision & Edge AI PPE Tracking
- Continuous camera feed analysis monitoring critical safety gear:
  - Hardhats / Safety Helmets
  - High-Visibility Fluorescent Vests
  - Safety Footwear / Steel-Toe Boots
  - Dust Respirators & Protective Eye Wear
- Real-time violation flagging with confidence ratings, bounding box coordinates, and automatic inspector ticketing.

### 3. 💰 Commercial Governance & Profit & Loss (P&L) Analytics
- Real-time financial telemetry tracking **Gross Revenue (₹ Cr)**, **Operating Costs**, and **Net Profit Margins**.
- **Avoidable Loss Analytics**: Identifies financial bleed caused by:
  - Unscheduled production halts & Section 22 stop-work orders
  - DGMS violation fines & statutory non-compliance surcharges
  - Heavy Earth Moving Machinery (HEMM) breakdown idling
  - Transit dispatch spillage and weighbridge discrepancies
- **AI Loss Prevention Metric**: Calculates saved capital realized through early-warning AI interventions.
- Statutory deductions breakdown including **14% State Royalty** and **30% District Mineral Foundation (DMF)** contributions.

### 4. 🗺️ Real-World GIS & Satellite Fleet Mapping
- Interactive Leaflet-powered GIS mapping with dual-layer mode (*Esri World Imagery Satellite* and *CartoDB Clean Street* tiles).
- Interactive markers for active mines with live compliance badges, active alarms, and coordinates.
- Geofencing overlays to detect boundary breaches and unauthorized extraction beyond sanctioned lease perimeters.

### 5. 📡 IoT Telemetry & Environmental Gas Monitoring
- Real-time telemetry ingest for open-cast and underground environments:
  - **Toxic & Combustible Gases**: Methane ($CH_4$), Carbon Monoxide ($CO$), Oxygen ($O_2$) depletion.
  - **Air Quality Indices**: Particulate Matter ($PM_{2.5}, PM_{10}$), $NO_x, SO_2$.
  - **Geotechnical Sensors**: Slope inclinometers, seismographic ground vibration, water table depth.
- Automatic audible/visual siren escalation when readings approach Permissible Exposure Limits (PEL).

### 6. 🎙️ Multilingual Voice & NLP Incident Reporting
- Hands-free voice dictation enabling field workers and supervisors to record incident reports on-site in Hindi and English.
- Natural Language Processing (NLP) extracts entity tags: Hazard Nature, Location Zone, Severity Rating, and Responsible Personnel.
- Converts speech directly into structured incident tickets with instant dispatch to area engineers.

### 7. 🤖 CONETRAAL AI Compliance Copilot
- Intelligent conversational assistant grounded in Indian Mining Law and statutory case precedents.
- Instant retrieval of relevant legal sections, recommended corrective actions (CAPA), penalty estimation, and audit checklists.

### 8. 📋 Closed-Loop CAPA & Immutable Audit Trail
- Complete lifecycle management from hazard identification $\rightarrow$ root cause analysis $\rightarrow$ contractor notification $\rightarrow$ photo proof upload $\rightarrow$ statutory sign-off.
- Tamper-proof activity ledger documenting all inspections, overrides, and approvals.

---

## 👥 Role-Based Dashboards (RBAC)

CONETRAAL provides tailored views engineered for specific operational responsibilities:

| Role | Target Persona | Primary Responsibilities |
| :--- | :--- | :--- |
| **🏛️ Government / Regulatory Officer** | DGMS Director, MoC Inspector | National oversight, cross-mine compliance rankings, statutory stop-work notices, environmental quota auditing. |
| **🏭 Colliery General Manager** | Mine Manager, Agent | Resource scheduling, production vs. compliance balancing, P&L financial governance, coal dispatch sign-offs. |
| **🦺 Mine Safety Officer** | Safety Manager, DGMS Liaison | PPE computer vision monitoring, IoT gas sensor alarms, CAPA remediation enforcement, emergency protocol drilldowns. |
| **📋 Field Inspector** | Junior Mining Engineer, Area Auditor | Mobile-first checklist interface, GPS-stamped photo evidence capture, voice-to-text safety observation logging. |

*Switch between any persona instantly using the interactive role selector in the top navigation bar.*

---

## 🎯 Evaluator Presentation Guide

When demonstrating CONETRAAL to judges or evaluators, use the built-in **⚡ Quick Actions** bar at the top of the screen:

1. **Quick Login**: Use any of the pre-configured role shortcuts on the login screen, or create a new inspector account.
2. **Launch Quick Actions Panel**: Click the **⚡ Quick Actions** button on the navbar:
   - **Action 1: Detect PPE Violation** — Jumps to the Computer Vision module with live bounding-box identification.
   - **Action 2: Generate Violation Ticket** — Triggers immediate automated incident creation with statutory citations.
   - **Action 3: Geo-tagged Evidence** — Pans to the exact GPS coordinates on the interactive GIS satellite map.
   - **Action 4: AI Risk Prediction** — Evaluates high-risk collieries using multi-variable hazard forecasting.
   - **Action 5: Permit Expiration Notice** — Simulates an urgent explosives handling clearance reminder.
   - **Action 6: AI Compliance Copilot** — Opens the floating assistant with ready-to-test statutory queries.
   - **Action 7: P&L Commercial Governance** — Highlights avoidable losses vs. profits and royalty distribution.
   - **Action 8: Generate Statutory Audit Report** — Generates complete DGMS Form IV documentation.

---

## 🛠️ System Architecture & Tech Stack

```
CONETRAAL Architecture
├── Presentation Layer
│   ├── React 19 (Component Hierarchy & Hooks)
│   ├── Lucide React (Clean Industrial Iconography)
│   ├── Custom Enterprise CSS Design System (High-contrast white theme)
│   └── Recharts (Telemetry, Compliance & Financial Trend Visualizations)
├── Spatial & Mapping Layer
│   ├── Leaflet & React-Leaflet
│   ├── Esri World Imagery (High-Resolution Satellite Orthomosaics)
│   └── CartoDB Positron / Voyager Tile Integrations
├── Intelligence & Simulation Engine
│   ├── Edge-AI Computer Vision PPE Detection Model
│   ├── Predictive Hazard & Slope Failure Estimator
│   ├── Multilingual Speech Recognition & NLP Parser
│   └── Statutory Law Knowledge Base (Mines Act 1952 / CMR 2017)
└── Data & State Architecture
    ├── In-Memory Database with Mock REST Operations
    ├── React Context State Management
    └── LocalStorage Session Persistence
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation & Local Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sanikarewde05/Conetraal.git
   cd Conetraal
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to **`http://localhost:5173/`**.

4. **Build for Production**:
   ```bash
   npm run build
   ```
   The production build outputs to the `dist/` directory.

---

## 📁 Repository Structure

```
connetral/
├── public/                 # Static assets and icons
├── src/
│   ├── assets/             # Images and design resources
│   ├── components/         # Reusable UI components & navigation
│   ├── data/
│   │   └── database.js     # Master dataset (Mines, Violations, Financials, Sensors, IoT)
│   ├── App.jsx             # Core application router, page views & role dashboards
│   ├── index.css           # Modern enterprise CSS design system & micro-animations
│   └── main.jsx            # Application entry point
├── index.html              # HTML shell with responsive viewport & meta tags
├── package.json            # Scripts & project dependencies
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

---

## ⚖️ Statutory & Legal Framework

CONETRAAL is designed in alignment with Indian mining statutory provisions:
- **Mines Act, 1952** (Act No. 35 of 1952)
- **Coal Mines Regulations (CMR), 2017** (G.S.R. 1449(E))
- **Directorate General of Mines Safety (DGMS)** Technical Circulars & Standing Orders
- **Air (Prevention and Control of Pollution) Act, 1981**
- **Water (Prevention and Control of Pollution) Act, 1974**
- **Environment (Protection) Act, 1986**
- **Mines and Minerals (Development and Regulation) Act (MMDR), 1957**

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Built with precision for National Mining Safety & Regulatory Excellence.</sub>
</div>
