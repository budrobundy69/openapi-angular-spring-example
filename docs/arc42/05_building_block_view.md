# 5. Building Block View

This section describes the static decomposition of the system into building blocks. Each block represents a logical unit such as a module, layer, or service.

---

## 5.1 Level 1: System Overview

The system is a full-stack application structured into two main subsystems:

- **Frontend** (Angular 19)
- **Backend** (Spring Boot WebFlux with OpenAPI)

  System
  ├── frontend/  (Angular 19 SPA)
  └── backend/   (Spring Boot WebFlux API)

---

## 5.2 Level 2: Backend Internal Structure

    backend/
    ├── controller/        → REST Controllers (e.g. GreetingController)
    ├── service/           → Reactive service logic (Mono/Flux based)
    ├── config/            → Spring/OpenAPI/Swagger config
    ├── model/             → DTOs used in REST communication
    └── Application.java   → Main Spring Boot entry point

| Module        | Responsibility                                         |
|---------------|--------------------------------------------------------|
| `controller`  | Handles HTTP endpoints and delegates to services       |
| `service`     | Business logic using reactive patterns (Mono/Flux)     |
| `config`      | Swagger UI, OpenAPI configuration, CORS, etc.          |
| `model`       | DTOs used in request/response objects                  |

---

## 5.3 Level 2: Frontend Internal Structure

    frontend/
    ├── src/app/
    │   ├── api/            → OpenAPI-generated TypeScript client
    │   ├── features/       → Feature modules (e.g., greeting form)
    │   ├── shared/         → Shared components, pipes, utilities
    │   ├── core/           → App-level services and config
    │   └── app.module.ts / app.component.ts

| Module        | Responsibility                                               |
|---------------|--------------------------------------------------------------|
| `api`         | Generated OpenAPI TS client from backend spec                |
| `features`    | Functional components grouped by use case                    |
| `shared`      | Reusable UI/utility code                                     |
| `core`        | HTTP interceptors, error handling, app-wide config           |

---

## 5.4 OpenAPI Client Generator

- Tool: [`openapi-typescript-codegen`](https://www.npmjs.com/package/openapi-typescript-codegen)
- Input: `http://localhost:8080/v3/api-docs`
- Output: Type-safe client under `src/app/api`

---

## 5.5 Build and Deployment Structure

    project-root/
    ├── backend/      → Spring Boot + WebFlux (Maven)
    ├── frontend/     → Angular 19 (Node 24.x)
    ├── docs/arc42/   → Architecture documentation (Markdown + PlantUML)
    └── .github/      → CI/CD workflows (GitHub Actions)

Each subproject can be tested and deployed independently, while OpenAPI keeps both sides in sync.

---

## Summary

This modular structure supports contract-first development, clear responsibilities, and scalable architecture. Every layer communicates via well-defined contracts (OpenAPI), and the repo is CI/CD-friendly.
