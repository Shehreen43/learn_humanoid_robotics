---

description: "Task list for AI-Native Physical AI & Humanoid Robotics Book Project"
---

# Tasks: AI-Native Physical AI & Humanoid Robotics Book Project

**Input**: Design documents from `/specs/001-ai-robotics-book/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Tests**: Tests are OPTIONAL - only include them if explicitly requested in the feature specification. (For this project, tests are explicitly part of the plan and quality validation, so they will be included.)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume a Docusaurus project with a separate backend.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create core project directory structure: `frontend/`, `backend/`, `docs/`, `src/components/`, `src/theme/`
- [ ] T002 Initialize Docusaurus project in `frontend/` directory (or repo root, assuming `docs` is part of it)
- [ ] T003 [P] Configure linting and formatting tools for JavaScript/React/MDX in `frontend/.eslintrc.js`, `frontend/.prettierrc.js`
- [ ] T004 Initialize Python backend project for APIs in `backend/`
- [ ] T005 [P] Configure linting and formatting tools for Python in `backend/.pylintrc`, `backend/.flake8`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T006 Setup BetterAuth integration for user signup/signin in `backend/auth_service/` and `frontend/src/components/BetterAuth.jsx`
- [ ] T007 Setup Qdrant vector database instance and configuration in `backend/qdrant_service/`
- [ ] T008 Implement embedding model integration for book content in `backend/embedding_service/`
- [ ] T009 Implement initial rule-based personalized learning path service in `backend/learning_path_service/`
- [ ] T010 Configure Docusaurus build and deployment pipeline (GitHub Pages/Vercel) in .github/workflows/deploy.yml
**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Personalized Learning Path (Priority: P1) 🎯 MVP

**Goal**: As a student, I want to sign up and provide my software and hardware background so that the book can offer a personalized learning path tailored to my knowledge and resources.
**Independent Test**: User can sign up, provide background, and receive a customized set of recommended chapters/sections.

### Tests for User Story 1 (REQUIRED) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T011 [P] [US1] Unit test `User Profile` data model in `backend/tests/models/test_user.py`
- [ ] T012 [P] [US1] Unit test `Personalized Learning Path` algorithm in `backend/tests/learning_path_service/test_recommendation.py`
- [ ] T013 [US1] Integration test `BetterAuth` and `Learning Path Engine` API for signup and path generation in `backend/tests/integration/test_auth_learning_path.py`
- [ ] T014 [US1] End-to-end test frontend signup, background capture, and learning path display in `frontend/tests/e2e/test_personalized_learning.spec.js`

### Implementation for User Story 1

- [ ] T015 [P] [US1] Define `User Profile` data model (authID, softwareBackground, hardwareBackground, completedChapters, progressData) in `backend/models/user.py`
- [ ] T016 [P] [US1] Implement frontend UI for user signup/signin with background capture in `frontend/src/components/PersonalizationControls.jsx`
- [ ] T017 [US1] Implement `Learning Path Engine API` to generate recommendations based on user profile in `backend/api/learning_path.py` (depends on T015)
- [ ] T018 [US1] Integrate personalized learning path display into Docusaurus frontend (e.g., `frontend/src/theme/Navbar/index.js` or `frontend/src/components/LearningPathDisplay.jsx`) (depends on T017)

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Contextual Q&A Chatbot (Priority: P1)

**Goal**: As a reader, I want to ask questions about the book content and receive accurate, context-aware answers from a RAG-based chatbot, so I can clarify concepts and understand code examples better.
**Independent Test**: User can highlight text in a chapter, ask a question, and receive a relevant answer from the chatbot.

### Tests for User Story 2 (REQUIRED) ⚠️

- [ ] T019 [P] [US2] Unit test `Chatbot Query` data model in `backend/tests/models/test_chatbot.py`
- [ ] T020 [P] [US2] Unit test embedding generation logic in `backend/tests/embedding_service/test_embedding.py`
- [ ] T021 [P] [US2] Unit test Qdrant interaction logic (context retrieval) in `backend/tests/qdrant_service/test_qdrant_client.py`
- [ ] T022 [US2] Integration test RAG Chatbot API with LLM for response generation in `backend/tests/integration/test_chatbot_rag.py`
- [ ] T023 [US2] End-to-end test frontend contextual Q&A flow in `frontend/tests/e2e/test_chatbot.spec.js`

### Implementation for User Story 2

- [ ] T024 [P] [US2] Define `Chatbot Query` data model (userQuestion, selectedContext) in `backend/models/chatbot.py`
- [ ] T025 [US2] Implement `RAG Chatbot API` to process user queries and retrieve context in `backend/api/chatbot.py` (depends on T007, T008, T024)
- [ ] T026 [US2] Integrate LLM (Claude/Gemini/Open-Source) with `RAG chatbot` for response generation in `backend/services/llm_service.py` (depends on T025)
- [ ] T027 [P] [US2] Develop frontend UI for contextual Q&A (text highlighting, question input, response display) in `frontend/src/components/Chatbot.jsx` (depends on T025)

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Interactive Chapter Content (Priority: P2)

**Goal**: As a reader, I want to interact with MDX components like live code examples, quizzes, and dynamic summaries within each chapter to enhance my learning experience.
**Independent Test**: User can interact with an embedded MDX component, like a code sandbox, and see the output or answer a quiz question.

### Tests for User Story 3 (REQUIRED) ⚠️

- [ ] T028 [P] [US3] Unit test `Quiz MDX component` functionality in `frontend/src/components/tests/Quiz.test.js`
- [ ] T029 [P] [US3] Unit test `Code Sandbox MDX component` functionality in `frontend/src/components/tests/CodeSandbox.test.js`
- [ ] T030 [P] [US3] Unit test `Dynamic Diagram MDX component` functionality in `frontend/src/components/tests/Diagram.test.js`
- [ ] T031 [US3] Integration test MDX components rendering within a Docusaurus chapter in `frontend/tests/integration/test_mdx_components.spec.js`

### Implementation for User Story 3

- [ ] T032 [P] [US3] Develop `MDX Quiz component` in `frontend/src/components/Quiz.jsx`
- [ ] T033 [P] [US3] Develop `MDX Code Sandbox component` for live code execution in `frontend/src/components/CodeSandbox.jsx`
- [ ] T034 [P] [US3] Develop `MDX Dynamic Diagram component` for interactive visualizations in `frontend/src/components/Diagram.jsx`
- [ ] T035 [US3] Integrate `MDX components` into sample chapter content (e.g., `docs/ros2/fundamentals.mdx`)

**Checkpoint**: All interactive MDX components should be functional and testable.

---

## Phase 6: User Story 5 - Intuitive Book Layout (Priority: P2)

**Goal**: As a reader, I want the book layout to be intuitive, with a clear sidebar, consistent sectioning, and easy navigation between chapters.
**Independent Test**: User can navigate from chapter to chapter, see prerequisites, objectives, examples, and exercises in the expected order.

### Tests for User Story 5 (REQUIRED) ⚠️

- [ ] T036 [P] [US5] Visual regression test for Docusaurus theme consistency in `frontend/tests/visual/test_layout_consistency.spec.js`
- [ ] T037 [US5] End-to-end test navigation between chapters and section display in `frontend/tests/e2e/test_navigation.spec.js`

### Implementation for User Story 5

- [ ] T038 [P] [US5] Define consistent chapter folder layout and `_category_.json` files in `docs/` for ROS 2 module (`docs/ros2/`, etc.)
- [ ] T039 [P] [US5] Configure Docusaurus theme for consistent typography, spacing, and visual structure in `frontend/docusaurus.config.js` and `frontend/src/css/custom.css`
- [ ] T040 [US5] Implement chapter structure (Prerequisites, Learning Objectives, Theory, Examples, Diagrams, Exercises, Summary, Bibliography) for sample chapters (e.g., `docs/ros2/fundamentals.mdx`)

**Checkpoint**: The book layout should be intuitive and consistently structured.

---

## Phase 7: User Story 4 - Multi-language Content (Priority: P3) - Bonus Objective

**Goal**: As an Urdu-speaking reader, I want to be able to translate the content into Urdu to better understand the concepts in my native language.
**Independent Test**: User can select a language option and see the chapter content translated into Urdu.

### Tests for User Story 4 (REQUIRED) ⚠️

- [ ] T041 [P] [US4] Unit test `Translation Toggle` component in `frontend/src/components/tests/TranslationToggle.test.js`
- [ ] T042 [P] [US4] Unit test backend translation service in `backend/tests/translation_service/test_translation.py`
- [ ] T043 [US4] End-to-end test Urdu translation functionality in `frontend/tests/e2e/test_urdu_translation.spec.js`

### Implementation for User Story 4

- [ ] T044 [P] [US4] Develop frontend UI for Urdu translation toggle in `frontend/src/components/TranslationToggle.jsx`
- [ ] T045 [US4] Implement backend service for machine translation (e.g., Google Cloud Translation AI or LLM-based) in `backend/services/translation_service.py`
- [ ] T046 [US4] Integrate translation service with Docusaurus content rendering for Urdu display in `frontend/docusaurus.config.js` and relevant theme files

**Checkpoint**: Urdu translation functionality should be implemented and testable.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T047 [P] Implement automated plagiarism checks for content using a script in `tools/content_qa/plagiarism_checker.py`
- [ ] T048 [P] Implement automated readability analysis (Flesch-Kincaid) for content using a script in `tools/content_qa/readability_analyzer.py`
- [ ] T049 [P] Implement automated `Source Log` completeness verification using a script in `tools/content_qa/source_log_validator.py`
- [ ] T050 [P] Create comprehensive test suite for all remaining MDX components (Jest/RTL)
- [ ] T051 [P] Create comprehensive test suite for remaining RAG backend modules (Pytest)
- [ ] T052 [P] Create end-to-end integration tests for remaining Auth + Learning Path flows (Cypress/Playwright)
- [ ] T053 [P] Create end-to-end integration tests for remaining Chatbot flows (Cypress/Playwright)
- [ ] T054 [P] Create reproducibility test suite for all code examples in `tests/reproducibility/`
- [ ] T055 [P] Implement failure mode tests for chatbot (out-of-context) and signup (incomplete data) in `tests/failure_modes/`
- [ ] T056 Code cleanup and refactoring across all `frontend/` and `backend/` modules
- [ ] T057 Performance optimization (chatbot responsiveness, page load times) for `frontend/` and `backend/`
- [ ] T058 Develop runbooks for common operational tasks (chatbot maintenance, user management) in `docs/operations/`

## Phase 9: Landing Page UI (Priority: P1 - High Visibility)

**Goal**: Create a modern, responsive, and visually engaging landing page for the AI Robotics Book, inspired by RoboLearn UI. Focus on header/footer, key sections, animations, typography, colors, and responsiveness.

**Independent Test**: User can access landing page, navigate between sections via header/footer, experience smooth animations, and view content correctly across devices.

---

### Tests for Landing Page (REQUIRED) ⚠️

- [ ] T060 [P] [UI] Unit test layout rendering for header, hero, sections, and footer in `frontend/tests/components/test_landing_page_layout.js`
- [ ] T061 [P] [UI] Unit test animations and interactive elements in `frontend/tests/components/test_landing_page_animations.js`
- [ ] T062 [P] [UI] End-to-end test landing page navigation and responsiveness in `frontend/tests/e2e/test_landing_page.spec.js`

---

### Implementation for Landing Page

#### Header

- [ ] T063 [P] [UI] Implement header with book title/logo, navigation links to sections, and CTA buttons in `frontend/src/components/Header.jsx`
- [ ] T064 [P] [UI] Add sticky behavior and smooth scroll to sections

#### Hero Section

- [ ] T065 [P] [UI] Create hero section with book title, tagline, primary CTA, and background image/illustration in `frontend/src/components/Hero.jsx`
- [ ] T066 [P] [UI] Add subtle entrance animations for hero text and buttons

#### Key Sections

- [ ] T067 [P] [UI] Implement "Modules/Chapters Overview" section highlighting book content in `frontend/src/components/ModulesOverview.jsx`
- [ ] T068 [P] [UI] Implement "Key Features/Benefits" section in `frontend/src/components/Features.jsx`
- [ ] T069 [P] [UI] Implement "How to Get Started / Next Steps" section in `frontend/src/components/GetStarted.jsx`
- [ ] T070 [P] [UI] Add hover/scroll animations for section elements to enhance engagement

#### Typography & Colors

- [ ] T071 [P] [UI] Apply modern typography with readable fonts (headings, body, code) in `frontend/src/css/typography.css`
- [ ] T072 [P] [UI] Apply cohesive color palette (primary, secondary, accent, neutral) in `frontend/src/css/colors.css`
- [ ] T073 [P] [UI] Ensure high contrast and accessibility compliance (WCAG 2.1 AA)

#### Footer

- [ ] T074 [P] [UI] Implement footer with navigation links, contact info, and copyright in `frontend/src/components/Footer.jsx`
- [ ] T075 [P] [UI] Add optional animations for footer elements (fade-in, hover effects)

#### Responsiveness

- [ ] T076 [P] [UI] Ensure responsive design for mobile, tablet, and desktop using Tailwind CSS or custom media queries
- [ ] T077 [P] [UI] Test landing page across devices and browsers for layout, animations, and functionality

---

### Checkpoint

- At this point, the landing page should be fully functional, visually appealing, and independently testable.
- Ensure animations are smooth, colors and typography are consistent, header/footer navigation works, and page is responsive.
- Reference RoboLearn UI for design inspiration: https://mjunaidca.github.io/robolearn/


---

## Dependencies & Execution Order

### Phase Dependencies

-   **Setup (Phase 1)**: No dependencies - can start immediately
-   **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
-   **User Stories (Phases 3-7)**: All depend on Foundational phase completion
    -   User stories can then proceed in parallel (if staffed)
    -   Or sequentially in priority order (P1 → P2 → P3)
-   **Polish (Phase 8)**: Depends on all desired user stories being complete

### User Story Dependencies

-   **User Story 1 (P1 - Personalized Learning Path)**: Can start after Foundational (Phase 2) - No dependencies on other stories
-   **User Story 2 (P1 - Contextual Q&A Chatbot)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
-   **User Story 3 (P2 - Interactive Chapter Content)**: Can start after Foundational (Phase 2) - No dependencies on other stories
-   **User Story 5 (P2 - Intuitive Book Layout)**: Can start after Foundational (Phase 2) - No dependencies on other stories
-   **User Story 4 (P3 - Multi-language Content)**: Can start after Foundational (Phase 2) - No dependencies on other stories

### Within Each User Story

-   Tests MUST be written and FAIL before implementation
-   Models/Data Models before Services
-   Services before APIs/Frontend Integration
-   Core implementation before integration with other story components
-   Story complete before moving to next priority

### Parallel Opportunities

-   All Setup tasks marked [P] can run in parallel
-   All Foundational tasks marked [P] can run in parallel (within Phase 2)
-   Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
-   All tests for a user story marked [P] can run in parallel
-   Frontend UI tasks marked [P] can run in parallel with backend implementation for a story
-   Different user stories can be worked on in parallel by different team members
-   All Polish & Cross-Cutting Concerns tasks marked [P] can run in parallel

---

## Parallel Example: User Story 1

```bash
# Launch unit tests for US1 together:
Task: "Unit test User Profile data model in backend/tests/models/test_user.py"
Task: "Unit test Personalized Learning Path algorithm in backend/tests/learning_path_service/test_recommendation.py"

# Launch implementation tasks for US1 frontend/backend components together:
Task: "Define User Profile data model (authID, softwareBackground, hardwareBackground, completedChapters, progressData) in backend/models/user.py"
Task: "Implement frontend UI for user signup/signin with background capture in frontend/src/components/PersonalizationControls.jsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1.  Complete Phase 1: Setup
2.  Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3.  Complete Phase 3: User Story 1 (Personalized Learning Path)
4.  **STOP and VALIDATE**: Test User Story 1 independently
5.  Deploy/demo if ready

### Incremental Delivery

1.  Complete Setup + Foundational → Foundation ready
2.  Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3.  Add User Story 2 → Test independently → Deploy/Demo
4.  Add User Story 3 → Test independently → Deploy/Demo
5.  Add User Story 5 → Test independently → Deploy/Demo
6.  Add User Story 4 → Test independently → Deploy/Demo
7.  Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1.  Team completes Setup + Foundational together
2.  Once Foundational is done:
    *   Developer A: User Story 1
    *   Developer B: User Story 2
    *   Developer C: User Story 3
    *   Developer D: User Story 5
    *   Developer E: User Story 4
3.  Stories complete and integrate independently

---

## Notes

-   [P] tasks = different files, no dependencies
-   [Story] label maps task to specific user story for traceability
-   Each user story should be independently completable and testable
-   Verify tests fail before implementing
-   Commit after each task or logical group
-   Stop at any checkpoint to validate story independently
-   Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
-   Every factual claim or technical description in task deliverables MUST cite sources per the constitution (APA format, 50% peer-reviewed, min 15 unique sources).
-   Code examples in tasks MUST be reproducible, version-pinned, and tested for correctness and safety.
-   Chapter content tasks MUST adhere to the defined structure (Introduction, Theory, Examples/Case-Studies, Implementation Notes, Summary/Key Takeaways, Bibliography).
-   Tasks involving text content should consider readability (Flesch-Kincaid 10-12) and ensure 0% flagged plagiarism.