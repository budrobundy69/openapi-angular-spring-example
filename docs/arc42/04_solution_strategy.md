# 4. Solution Strategy

This section summarizes the key solution decisions and architectural strategies used in the OpenAPI Angular Spring Example project.

---

## 4.1 Architectural Style

- **Microservice-based**: Although only one service is currently implemented, the backend is designed with clear boundaries and modularity for microservice expansion.
- **Reactive**: Uses Spring WebFlux for non-blocking, event-driven REST services.
- **Contract-first**: API contracts are defined via OpenAPI and serve as a shared agreement between backend and frontend.

---

## 4.2 Technology Stack

| Layer         | Technology                          | Rationale                                                                 |
|---------------|--------------------------------------|---------------------------------------------------------------------------|
| Frontend      | Angular 19 with Signals & SignalStore| Modern and performant single-page frontend framework                      |
| Backend       | Spring Boot 3.x + WebFlux           | Reactive stack with strong ecosystem and testability                      |
| API Contract  | OpenAPI 3.1 (via springdoc-openapi) | Enables documentation, validation, and client generation                  |
| Client Gen    | `openapi-typescript-codegen`        | Automatic client generation for Angular                                   |
| Build/CI      | GitHub Actions                      | Automates build, test, and deploy workflows                               |
| Deployment    | Cloud Foundry                       | Cloud-native deployment environment with service bindings                 |

---

## 4.3 Modularity & Separation of Concerns

- **Backend and frontend in separate folders** under a monorepo structure
- **Backend exposes only REST APIs** using a reactive stack
- **Frontend consumes only OpenAPI-generated clients**, avoiding tight coupling

---

## 4.4 Development Strategy

- Feature development follows **API-first** and **test-first** workflows.
- Each backend change is validated against the OpenAPI contract.
- All commits trigger CI checks (build, lint, test, deployment).

---

## 4.5 Deployment & Operability

- The application is deployed to **Cloud Foundry** using environment-specific configurations.
- Logs and metrics are prepared for later integration with **Grafana** or **Loki**.
- Swagger UI is embedded for all environments to support debugging.

---

## 4.6 Justification of Key Decisions

| Decision                                | Justification                                                                 |
|----------------------------------------|------------------------------------------------------------------------------|
| Spring WebFlux                         | Asynchronous, scalable backend for reactive REST                             |
| OpenAPI 3.1                            | Enables a strong API contract and allows client/server code generation       |
| Angular 19 + Signals                   | Cutting-edge frontend architecture with reactivity support                   |
| GitHub Actions                         | Integrated CI/CD with GitHub ecosystem, secrets, and environments            |
| Arc42                                  | Provides a structured and extensible architectural documentation format      |
