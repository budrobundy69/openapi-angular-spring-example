# 11. Technical Risks

This section documents key risks and potential problems that could affect system success — including known technical debt.

---

## 11.1 Identified Risks

| Risk ID | Description | Likelihood | Impact | Mitigation |
|--------|-------------|------------|--------|------------|
| R1 | Complexity of maintaining OpenAPI sync (backend/frontend) | Medium | High | Automate code generation in CI, validate spec |
| R2 | WebFlux learning curve for developers unfamiliar with reactive programming | High | Medium | Code reviews, training, isolated testing |
| R3 | Cloud Foundry deployment misconfiguration (env, buildpacks) | Medium | High | Deployment scripts + cf manifest testing |
| R4 | CI/CD pipeline instability due to self-written workflows | Medium | Medium | Use official GitHub Actions, pin versions |
| R5 | API security gaps (e.g. missing OAuth) | High | High | Enforce authentication, use test coverage |
| R6 | Frontend state management misuse (Signals misuse, overuse) | Low | Medium | Use best practices, enforce patterns via lint |
| R7 | Developer onboarding takes too long | Medium | Medium | Arc42 docs, clean repo structure, code examples |

---

## 11.2 Mitigation Strategy

- All risks are reviewed regularly in team syncs.
- High-impact risks are monitored in the GitHub project as dedicated issues.
- Deployment and API risks are tested via automated workflows.
- Documentation (README + Arc42) supports onboarding and knowledge transfer.

---

## 11.3 Open Questions

- Will the final deployment platform always be Cloud Foundry, or is Kubernetes expected later?
- Will authentication be fully integrated (OAuth2) or handled by a gateway?
- How is OpenAPI versioning across releases managed?

---

## 11.4 Known Technical Debt

| ID | Description | Reason | Planned Resolution |
|----|-------------|--------|---------------------|
| TD1 | Full OAuth2/JWT security not implemented yet | Prioritized MVP and public endpoints | Implement before protected resource rollout (M2) |
| TD2 | Manual OpenAPI → TS client generation | CI automation pending | Integrate generator into GitHub Actions workflow |
| TD3 | No API versioning strategy defined yet | API is still unstable in MVP | Introduce `/v1` base path and semantic versioning policy |
| TD4 | Cloud Foundry buildpack behavior is not fully documented | Early focus was on local deploys | Improve deployment notes and automation scripts |
| TD5 | SignalStore logic is not unit tested | UI flows not fully decoupled yet | Add Jest unit tests in frontend M2 |
| TD6 | No CI-based OpenAPI spec validation | MVP deadline prioritization | Add validation job in GitHub Actions |

---

### Label Suggestions (if tracked in GitHub)

- `💸 tech-debt`
- `🧪 missing-tests`
- `⚠️ security`
- `🔧 refactor-needed`
