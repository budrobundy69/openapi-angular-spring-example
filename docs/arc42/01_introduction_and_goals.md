# 1. Introduction and Goals

## 1.1 Requirements Overview

This project demonstrates a full-stack microservice architecture using:
- Spring Boot 3 (Reactive WebFlux)
- OpenAPI contract-first development
- Angular 19 frontend
- GitHub Actions CI/CD
- Cloud Foundry deployment

## 1.2 Quality Goals

| Quality Attribute | Explanation |
|-------------------|-------------|
| Modifiability     | Easy extension of REST APIs via OpenAPI contract |
| Testability       | Automated tests from contract and CI pipeline |
| Scalability       | Based on reactive Spring WebFlux |
| Developer UX      | Integrated docs, boards, and automation via GitHub Projects |

## 1.3 Stakeholders

| Role        | Name/Group        | Interests |
|-------------|-------------------|-----------|
| Developer   | Project team       | Clarity, testability |
| Architect   | You                | Maintainable, clean design |
| DevOps      | GitHub workflows   | Automated builds and deploys |
| Users       | Future consumers   | Predictable API and UI |
