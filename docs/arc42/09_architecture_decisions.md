# 9. Architecture Decisions

This section captures important design and technology decisions that have lasting impact on the architecture.

---

## 9.1 Contract-First API Design with OpenAPI

**Decision:** Use OpenAPI 3.1 to define API schema first and generate client/server code.

- ✅ Enables strong typing and consistency between frontend/backend
- ✅ Simplifies documentation with Swagger UI
- ✅ Supports contract testing and CI validation
- 🔧 Requires careful spec versioning

---

## 9.2 Reactive Backend (Spring WebFlux)

**Decision:** Use Spring Boot WebFlux instead of traditional MVC.

- ✅ Supports high concurrency and non-blocking IO
- ✅ Native support for reactive streams (Mono, Flux)
- 🔧 Requires different mindset for blocking operations
- 🔧 Incompatible with some older Spring libraries

---

## 9.3 Frontend with Angular 19 and Signals

**Decision:** Use Angular 19 with Signal/SignalStore state management.

- ✅ Reactive UI updates with fine-grained control
- ✅ Better performance compared to older patterns
- 🔧 Newer paradigm — fewer community examples

---

## 9.4 Client Code Generation

**Decision:** Use [`openapi-typescript-codegen`](https://www.npmjs.com/package/openapi-typescript-codegen)

- ✅ Eliminates boilerplate in HTTP calls
- ✅ Auto-synced with backend spec
