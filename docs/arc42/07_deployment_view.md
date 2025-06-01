# 7. Deployment View

This section describes how the application is deployed across environments (development, CI/CD, production). It covers technical nodes, artifacts, and infrastructure relationships.

---

## 7.1 Infrastructure Nodes

| Node                    | Description                                                   |
|-------------------------|---------------------------------------------------------------|
| Developer Workstation   | Local environment using IntelliJ, WebStorm, Angular CLI       |
| GitHub Actions          | CI/CD pipeline for test, build, and deployment                |
| Cloud Foundry Runtime   | Target platform for backend and frontend deployment           |

---

## 7.2 Backend Deployment (Spring Boot WebFlux)

- The backend is built using Maven as a `fat jar`:
    - Output: `target/backend-<version>.jar`
- Deployment to Cloud Foundry via `cf push`
- Environment variables provided via CF services (e.g., DB, secrets)
- Swagger UI and OpenAPI specs are included in the running service

---

## 7.3 Frontend Deployment (Angular 19)

- Built using Angular CLI:
    - Output: `dist/frontend/`
- Can be:
    - Served by a static file server (e.g., Cloud Foundry's staticfile buildpack)
    - Or bundled inside Spring Boot (not preferred in this setup)

---

## 7.4 CI/CD with GitHub Actions

- Push to `main` triggers:
    - Lint → Test → Build (Angular + Spring)
    - Deploy backend and frontend to Cloud Foundry
- Secrets and credentials are stored in GitHub Actions environment or CredHub

---

## 7.5 Environment Variants

| Environment | Characteristics                                 |
|-------------|-------------------------------------------------|
| Local Dev   | Runs Angular via `ng serve`, backend via IDE    |
| Staging     | Automatic deploy via GitHub Actions to CF dev org |
| Production  | Manual approval or promotion from staging        |

---

## 7.6 Deployment Diagram

See: [07_deployment_view.puml](assets/07_deployment_view.puml) 
