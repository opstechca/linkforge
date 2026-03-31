---
title: Security Policy
permalink: /apps/bulk-issue-link-manager/security/
layout: none
---

# Security Policy

*Last updated: March 2026*

## Architecture

Bulk Issue Link Manager for Jira is built on **Atlassian Forge**, Atlassian's serverless app runtime. The app runs entirely within Atlassian's infrastructure. There are no external servers, no third-party services, and no data routing outside of your Atlassian site.

## Data Handling

- The app reads and writes issue links via standard Jira REST APIs using the permissions of the currently logged-in user.
- No end-user data is stored by the app. Issue keys and link types are processed in memory and discarded after each operation.
- No data is sent to any third-party service or external endpoint.

## Permissions

The app requests the minimum permissions required:

- `read:jira-work` - read issue details and existing links
- `write:jira-work` - create and remove issue links

No admin-level or organisation-level scopes are requested.

## Reporting a Security Issue

If you discover a security vulnerability, please [submit a ticket](https://github.com/opstechca/App-Docs/issues/new/choose). Do not report security issues via Marketplace reviews.

We will acknowledge your report within 2 business days and aim to resolve confirmed issues within 14 days.

## Atlassian Marketplace

This app is published on the Atlassian Marketplace and subject to Atlassian's security review process. Forge apps are sandboxed and cannot access resources outside the Atlassian platform without explicit manifest declarations and user consent.
