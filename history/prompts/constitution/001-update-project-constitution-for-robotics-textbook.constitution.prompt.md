---
id: 001
title: Update Project Constitution for Robotics Textbook
stage: constitution
date: 2025-12-05
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: main
user: unknown
command: /sp.constitution
labels: ["constitution", "project-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md (modified)
tests:
---

## Prompt

```text
Project: Textbook for Teaching Physical AI & Humanoid Robotics Course

Purpose:
  Develop a high-quality, academically rigorous textbook for a Physical AI & Humanoid Robotics course. The textbook will be authored using Spec-Kit Plus + Claude Code, compiled via Docusaurus, and published (e.g. via GitHub Pages), with a final output as a PDF (with embedded citations).

Core Principles:
  1. Accuracy through primary-source verification
  2. Clarity appropriate for an academic audience with computer science background
  3. Reproducibility — all claims must be traceable and verifiable
  4. Rigor — preference for peer-reviewed sources; strong scientific and technical grounding

Key Standards:
  - Every factual claim, definition, algorithm, theorem or empirical claim must cite a source.
  - Citation style: APA format (author, year, title, journal/conference/book, page numbers when applicable).
  - At least 50% of all cited sources must be peer-reviewed journal articles or conference papers.
  - Minimum total number of distinct sources: 15.
  - Plagiarism tolerance: 0%. All content must be original or properly quoted/paraphrased with citations.
  - Writing readability: Target a Flesch-Kincaid grade level between 10 and 12 (suitable for advanced undergraduates/graduate-level readers).
  - Structure: Chapters must include – Introduction, Theory, Examples/Case-Studies, Implementation Notes (if relevant), Summary / Key Takeaways, Bibliography.
  - Figures, diagrams, pseudocode or real code samples: allowed and encouraged — but any diagram or figure must be original or properly credited, and code samples must be syntactically correct and tested (if runnable).

Constraints:
  - Word count per chapter (or module) when outputting initial draft: between 5,000 and 7,000 words.
  - Overall book must reference at least 15 unique sources (with 50% peer-reviewed).
  - Output formats:
      * Primary: Markdown/MDX (via Docusaurus) with inline citations or bibliography reference.
      * Final compiled: PDF with embedded citations (for printing/distribution).

Quality Assurance & Validation:
  - Before adding text to the manuscript, run a plagiarism check — no overlaps with existing published content permitted, except properly quoted and cited content.
  - After completion of a draft chapter: run a fact-checking review to confirm each claim is supported by its source; flag any ambiguous or weakly supported statements.
  - Maintain a “Source Log” (metadata file) listing: source ID, type (peer-reviewed, preprint, book, web article), full bibliographic info, access date or DOI/URL.
  - For empirical claims or data: if using a dataset, link to original dataset or paper, and (if possible) include code to reproduce results.
  - For code examples: include working code snippets (in Python/JS/other relevant language), and test results or sample outputs for reproducibility.

Success Criteria:
  - Every factual or technical claim in the chapter is backed by at least one valid source.
  - At least 50% of sources across the chapter are peer-reviewed academic publications.
  - The chapter passes plagiarism scan with 0% flagged overlap (other than properly quoted & cited content).
  - Writing readability target achieved (Flesch-Kincaid grade 10–12).
  - The compiled book (PDF) includes properly formatted citations/bibliography and is layout-consistent.
  - Code or pseudocode (if present) is syntactically correct, testable, and reproducible as per instructions.

Workflow Guidelines:
  1. Use Spec-Kit Plus + Claude Code to generate initial draft in MDX/Markdown.
  2. After generation, run automated plagiarism detection.
     - If any flagged sections: revise until clean before proceeding.
  3. Collect and log all sources into the Source Log metadata file.
  4. Validate every factual/empirical claim against the source; annotate or discard unverified claims.
  5. Peer-review: optionally have a second human reviewer with domain knowledge check technical accuracy.
  6. Once a chapter passes validation, commit to the main branch.
  7. After all chapters done: build with Docusaurus and produce final PDF.
  8. Run final QA — check formatting, citations, readability, reproducibility.
  9. Publish (e.g. GitHub Pages), and optionally distribute PDF.

Ethical & Attribution Guidelines:
  - Respect copyright: do not copy large text blocks from sources — paraphrase or quote with citation.
  - For code borrowed or inspired from public repos/papers: include attribution, license notes, and ensure license compliance.
  - Ensure fairness, neutrality, and clarity — avoid speculative claims without evidence; distinguish clearly between theory, hypothesis and empirical fact.

Meta-Data & Version Control:
  - Maintain per-chapter metadata: version, date, authorship, status (draft / reviewed / final).
  - Maintain global changelog — record changes, updates to sources, corrections, peer-review notes
```

## Response snapshot

The project constitution has been successfully updated to version 1.0.0. A Sync Impact Report has been embedded in the constitution file, outlining required updates to other templates. A Prompt History Record (PHR) has been created for this change.

## Outcome

- ✅ Impact: Successfully updated the project constitution and identified dependent template updates.
- 🧪 Tests: N/A
- 📁 Files: Updated .specify/memory/constitution.md
- 🔁 Next prompts: Update dependent templates (plan-template.md, spec-template.md, tasks-template.md, README.md, sp.phr.md if it needs to be created)
- 🧠 Reflection: Initial constitution successfully created. Identified follow-up tasks for template consistency.

## Evaluation notes (flywheel)

- Failure modes observed: sp.phr.md was not found during consistency check.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment: Ensure sp.phr.md command file exists and functions correctly.