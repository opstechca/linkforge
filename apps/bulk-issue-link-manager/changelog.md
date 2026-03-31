---
layout: page
app: bulk-issue-link-manager
title: Changelog
permalink: /apps/bulk-issue-link-manager/changelog/
---

# Changelog

## Latest

### New features
- **Duplicate detection**: existing links are pre-checked before linking; already-linked issues are skipped instantly
- **JQL validation**: invalid queries show the exact Jira error message
- **Grouped results**: failures grouped by reason for easier reading
- **Split result colours**: successes always green, failures always amber
- **Cancel button**: stop bulk operations mid-way at any time
- **Estimated time**: shown for large batches in both Paste Keys and JQL modes
- **Existing links preview**: Bulk Unlink shows currently linked issues before you start

### Improvements
- Friendlier error message for Jira's issue link limit
- Auto-retry for rate-limited requests: no rate limit errors shown to users
- Link Summary panel loads all links with no display cap
- Faster result rendering with early exit for already-linked / not-linked keys

---

## Initial release

- Link Issues in Bulk: paste keys and JQL modes
- Unlink Issues in Bulk: with optional link type filter
- Link Summary Panel: collapsible groups by link type
