# 10. Quality Scenarios

This section describes specific scenarios to assess how well the architecture meets quality requirements.

---

## 10.1 Overview of Quality Goals

| Quality Attribute | Motivation                                                                 |
|-------------------|----------------------------------------------------------------------------|
| Maintainability   | Enable fast iteration, refactoring, and onboarding for dev teams          |
| Performance       | Ensure the backend can handle concurrent requests reactively              |
| Scalability       | Support Cloud Foundry's horizontal scaling of microservices               |
| Security          | Secure API endpoints via OAuth2/JWT and secure storage of secrets         |
| Testability       | Support automated unit, integration, and e2e testing (both frontend/backend) |
| Usability         | Responsive and intuitive Angular UI based on modern patterns (Signals)    |

---

## 10.2 Concrete Quality Scenarios

### 🛠 Maintainability

- **Scenario:** A new developer joins the team and must add a new REST endpoint.
- **Response:** Arc42 docs, OpenAPI contract, and modular folder structure make it easy to onboard and extend.

---

### ⚡ Performance

- **Scenario:** 500 clients concurrently call the `/greet` endpoint.
- **Response:** WebFlux backend handles requests asynchronously via reactive streams (`Mono`), ensuring non-blocking throughput.

---

### 🧪 Testability

- **Scenario:** A CI pipeline should detect regressions in frontend and backend.
- **Response:** GitHub Actions run tests (Jest, JUnit) and lint checks on every push.

---

### 🔒 Security

- **Scenario:** An unauthenticated user tries to access a protected endpoint.
- **Response:** Spring Security rejects the request with HTTP 401. Secrets are loaded from GitHub/CredHub securely.

---

### 🌍 Usability

- **Scenario:** A user on a mobile device accesses the app.
- **Response:** Angular layout adapts via responsive design; Signal-based UI updates give smooth experience.

---

## 10.3 Summary

Each scenario validates a key architecture quality attribute. These are tested regularly via code reviews, CI checks, and acceptance tests.
