---
id: changelog
title: Changelog
sidebar_position: 4
---

# Changelog

## Latest

### New features
- **Duplicate detection** — existing links are pre-checked before linking; already-linked issues are skipped instantly without making API calls
- **JQL validation** — invalid JQL queries now show the exact Jira error message instead of "No issues found"
- **Grouped results** — failures are grouped by reason for easier reading
- **Split result colours** — successes always shown in green, failures in amber, even when mixed
- **Cancel button** — stop bulk operations mid-way at any time
- **Estimated time** — shown for large batches in both Paste Keys and JQL modes
- **Existing links preview** — Bulk Unlink shows all currently linked issues before you start

### Improvements
- Friendlier error messages for Jira's issue link limit
- Auto-retry for rate-limited requests — customers no longer see rate limit errors
- Link Summary panel loads all links (no display cap)
- Faster result rendering with early exit for already-linked/not-linked keys

---

## Initial release
- Bulk Link Issues — paste keys and JQL modes
- Bulk Unlink Issues — with optional link type filter
- Link Summary Panel — collapsible groups by link type
