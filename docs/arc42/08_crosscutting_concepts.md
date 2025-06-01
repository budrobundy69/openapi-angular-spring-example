# 8. Crosscutting Concepts

This section describes design and implementation concepts that are used across the system and are not tied to a single component or module.

---

## 8.1 Error Handling

- **Backend:** Global error handler with Spring WebFlux `@ControllerAdvice` and `ExceptionHandler`.
- **Frontend:** Angular `HttpInterceptor` for handling API errors and showing user notifications.
- Standardized error responses based on OpenAPI error schema (planned).

---

## 8.2 Validation

- Input validation is done on the backend using `javax.validation` annotations.
- Frontend form validation uses Angular Reactive Forms with custom validators.

---

## 8.3 Configuration

- Uses Spring Boot's `application.yml` and environment variables (Cloud Foundry).
- Frontend uses environment-specific config files (Angular's `environment.ts` mechanism).
- Secrets injected via Cloud Foundry service bindings or GitHub Actions secrets.

---

## 8.4 Logging & Monitoring

- **Backend:** SLF4J + Logback. Structured logs to support Splunk / ELK later.
- **Front**
