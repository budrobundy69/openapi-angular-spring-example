# 2. Architecture Constraints

## 2.1 Technical Constraints

| Constraint                     | Explanation                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| Spring Boot 3.x               | Use of the latest Spring Boot version for reactive, modular backend        |
| Java OpenJDK 24               | All code must be compatible with the latest stable OpenJDK                 |
| Angular 19                    | Frontend built with Angular 19 and Signals/SignalStore                     |
| OpenAPI Specification (v3.1)  | API contract must be defined and exposed through OpenAPI (Swagger UI)      |
| WebFlux                       | Backend is reactive and non-blocking                                       |
| Cloud Foundry                 | Must be deployable to Cloud Foundry                                        |
| GitHub Actions                | CI/CD pipeline must be fully automated using GitHub Actions                |

## 2.2 Organizational Constraints

| Constraint                     | Explanation                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| GitHub-based DevOps           | Source code, issues, boards, and automation all managed via GitHub         |
| Arc42 Documentation           | Architecture must be documented using Arc42 in Markdown                    |
| Public Repository             | Repository is public (or optionally internal), requires high code quality  |
| Remote Collaboration          | Team members contribute asynchronously via PRs and reviews                 |

## 2.3 Regulatory Constraints

| Constraint                     | Explanation                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| GDPR Compliance (if needed)   | No personal data processing unless explicitly declared and justified       |
| Logging Rules                 | Logs should not include PII or credentials                                 |
