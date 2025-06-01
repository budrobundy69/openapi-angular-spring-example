# 3. System Scope and Context

---

## 3.1 Business Context

### System Name

**OpenAPI Angular Spring Example**

This system is a cloud-deployable, reactive microservice architecture with an Angular 19 frontend and Spring Boot WebFlux backend. It uses OpenAPI as a contract for communication between frontend and backend. The entire project is managed and automated through GitHub and deployed to Cloud Foundry.

### Business Goals

- Demonstrate a modern contract-first approach using OpenAPI
- Enable frontend-backend integration via generated clients
- Provide clear architecture and documentation
- Automate testing and deployment with CI/CD

### External Actors

| Actor                | Role                                | Interaction Description                              |
|----------------------|-------------------------------------|------------------------------------------------------|
| Developer            | Maintainer and contributor          | Builds and evolves the frontend and backend systems  |
| Web User             | End-user                            | Interacts via the Angular frontend                   |
| API Consumer         | External system or team             | Uses the OpenAPI endpoints directly                  |
| CI/CD Pipeline       | GitHub Actions                      | Runs tests and deploys services                      |
| Cloud Foundry        | Runtime environment                 | Hosts deployed backend application                   |

See: [03_system_scope_and_context.puml](assets/03_system_scope_and_context.puml)
---

## 3.2 Technical Context

### System Boundary Diagram

```text
+------------------------+           +------------------------------+
|    Angular Frontend    |  <--->    | Spring Boot WebFlux Backend |
|      (Angular 19)      |           |  (Java 24 + OpenAPI 3.1)    |
+------------------------+           +------------------------------+
           |                                    |
           |        REST over HTTP              |
           |                                    v
           |                    +------------------------------+
           +------------------> | Swagger UI / v3/api-docs     |
                                | OpenAPI TS Client Generator  |
                                +------------------------------+
```
---

### External Interfaces

| Interface               | Type     | Description                                                   |
|-------------------------|----------|---------------------------------------------------------------|
| `/greet`                | REST API | Example endpoint returning greeting message                   |
| `/v3/api-docs`          | REST API | Raw OpenAPI JSON spec, used by frontend and Swagger UI        |
| `/swagger-ui/index.html`| Web UI   | Developer-facing API browser generated from OpenAPI           |
| GitHub Actions          | Service  | Automates build, test, and deploy pipelines                   |
| Cloud Foundry CLI/API   | CLI/API  | Used to deploy the application in containerized environments  |

---

### Communication and Protocols

- HTTP/HTTPS (REST APIs)
- OAuth 2.0 (planned for secure endpoints)
- Webpack development server or NGINX (for Angular deployment)

---

## Summary

This project operates at the intersection of reactive backend design, frontend automation, and DevOps. OpenAPI serves as the central contract, driving both documentation and development. GitHub and Cloud Foundry provide the runtime and operational glue.
