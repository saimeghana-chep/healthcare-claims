# Healthcare Claims Processing Prototype

This repository contains a front-end prototype for a healthcare claims processing command center. The project is based on an enterprise claims workflow involving claims intake, member eligibility verification, adjudication review, audit tracking, reporting, and AI-assisted reviewer summaries.

Live demo: https://saimeghana-chep.github.io/healthcare-claims/

## Recorded Demo

<video src="./assets/healthcare-claims-demo.mp4" controls width="100%">
  Your browser does not support the video tag.
</video>

The recorded walkthrough shows the claims dashboard, status filtering, selected claim details, processing timeline, Kafka pipeline health, and PHI-safe audit summary workflow.

## Project Overview

The prototype represents a healthcare payer claims operations dashboard for medical, dental, and pharmacy claims. It shows how claim records move through intake, eligibility validation, adjudication review, audit processing, and payment advice generation.

The goal of the project is to demonstrate how a modern .NET full-stack healthcare platform can support high-volume claims processing while maintaining security, compliance, accessibility, and operational visibility.

## Key Features

- Claims worklist with status filtering for review, blocked, and ready claims.
- Selected claim detail view with EDI source, FHIR resources, and risk flags.
- Claims processing timeline from intake through payment advice.
- Event-driven pipeline health view for intake, FHIR mapping, rules processing, and audit writing.
- PHI-safe AI audit assistance panel for reviewer summaries.
- Responsive layout for desktop and mobile review.

## How I Implemented This Project

This prototype was implemented as a static web application using HTML, CSS, and JavaScript so it can be deployed easily with GitHub Pages.

The UI is designed to represent a real enterprise healthcare claims platform:

- The claims dashboard models operational workflows used by payer teams.
- The selected claim panel shows how claim context can be grouped for reviewers.
- The processing timeline represents backend workflow stages such as intake normalization, eligibility verification, adjudication, and 835 payment advice generation.
- The Kafka pipeline section represents asynchronous event processing across distributed services.
- The AI audit assist section demonstrates how Azure OpenAI-style summarization could support reviewers while keeping PHI handling controlled.

In a production implementation, this front end would connect to secure APIs built with ASP.NET Core, .NET 8 microservices, Entity Framework Core, SQL Server, Redis, Kafka, Azure API Management, Azure Key Vault, and Azure Application Insights.

## Architecture Represented

```text
User Interface
  -> Claims Dashboard
  -> Eligibility Review
  -> Adjudication Worklist
  -> Audit Summary

API Layer
  -> ASP.NET Core Web APIs
  -> Azure API Management
  -> OAuth 2.0 / OpenID Connect / JWT

Service Layer
  -> Claims Intake Service
  -> Eligibility Service
  -> FHIR Mapping Service
  -> Adjudication Rules Service
  -> Audit Service

Messaging Layer
  -> Apache Kafka Consumer Groups
  -> Dead-letter handling
  -> Event-driven claim status updates

Data Layer
  -> SQL Server
  -> Redis Cache
  -> Elasticsearch
  -> Azure Blob Storage
```

## Healthcare Standards And Integrations

This project concept follows common healthcare interoperability and claims standards:

- **FHIR R4** for healthcare resource exchange such as Claim, Coverage, Patient, Practitioner, and ExplanationOfBenefit.
- **HL7 v2.x** for healthcare system integration and message exchange.
- **EDI X12 837** for healthcare claim submission.
- **EDI X12 835** for payment and remittance advice.
- **EDI X12 270/271** for eligibility inquiry and response workflows.

## Compliance And Security Standards

The project is designed around healthcare and enterprise security expectations:

- **HIPAA**: Protects patient health information through secure access, encryption, data masking, and audit controls.
- **PHI Handling**: Limits exposure of protected health information in dashboards, logs, summaries, and reviewer workflows.
- **OAuth 2.0 / OpenID Connect**: Supports secure authentication and authorization.
- **JWT-based API Security**: Protects API access between frontend and backend services.
- **Role-Based Access Control**: Restricts claims, audit, and reporting actions based on user roles.
- **Azure Key Vault / Managed Identity**: Protects secrets and service credentials in cloud environments.
- **Audit Logging**: Tracks claim review activity, system events, and compliance-relevant actions.
- **WCAG 2.1 AA / Section 508**: Supports accessible user experiences for keyboard navigation, contrast, and screen reader compatibility.

## Production Technology Stack

The prototype UI is static, but it represents a production-ready enterprise stack:

- **Frontend**: Angular, Blazor, TypeScript, HTML5, CSS3, SCSS
- **Backend**: C#, .NET 8, ASP.NET Core Web API, Microservices
- **Data Access**: Entity Framework Core, SQL Server, T-SQL, Redis
- **Messaging**: Apache Kafka, consumer groups, retry handling, dead-letter queues
- **Cloud**: Azure App Services, Azure API Management, Azure Key Vault, Azure Blob Storage
- **Observability**: Azure Application Insights, Dynatrace, structured logging
- **DevOps**: Azure DevOps, CI/CD pipelines, blue-green deployments
- **Testing**: xUnit, bUnit, Jasmine, Karma

## Running Locally

Clone the repository and open `index.html` in a browser:

```bash
git clone https://github.com/saimeghana-chep/healthcare-claims.git
cd healthcare-claims
```

Then open:

```text
index.html
```

No build step is required.

## Deployment

This project is deployed with GitHub Pages.

GitHub Pages settings:

- Source: Deploy from a branch
- Branch: main
- Folder: /root

Live URL:

```text
https://saimeghana-chep.github.io/healthcare-claims/
```

## Project Purpose

This prototype is intended to demonstrate experience with healthcare claims workflows, secure enterprise architecture, compliance-aware design, event-driven processing, and modern full-stack development patterns.
