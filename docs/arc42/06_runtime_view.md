# 6. Runtime View

This section describes key runtime scenarios and how the components interact dynamically during execution.

---

## 6.1 Greeting Flow Scenario (Example)

This scenario illustrates the full user interaction flow where a user submits a name via the Angular UI, and the backend returns a greeting message.

---

### 🧩 Involved Components

- Web browser with Angular frontend
- OpenAPI-generated TypeScript client
- Spring Boot WebFlux backend
- Cloud Foundry runtime (target platform)

---

### 📦 Sequence of Events

1. The user enters their name in a web form.
2. Angular calls the generated OpenAPI TypeScript client.
3. The client sends a `GET /greet?name=...` request to the backend.
4. Spring Boot WebFlux processes the request reactively.
5. The backend returns a JSON greeting response.
6. Angular updates the UI with the received message.

---

### 📄 Diagram

See the PlantUML diagram:
[06_runtime_view.puml](assets/06_runtime_view.puml)
---

## 6.2 Notes

- The communication between frontend and backend is strictly **OpenAPI-based**, ensuring contract consistency.
- The backend is **non-blocking**, using `Mono` from Reactor.
- The frontend uses **Signals/SignalStore** to update the UI reactively after API response.

---

## Future Extensions

Additional runtime scenarios may include:

- Authentication (OAuth2)
- Form submission and validation
- Real-time data integration

