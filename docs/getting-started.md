---
id: getting-started
title: Getting Started
sidebar_position: 1
slug: /getting-started
---

# Getting Started

**LinkForge – Bulk Issue Link Manager for Jira** is a Jira Cloud app that lets you link or unlink multiple issues at once, directly from any issue's action menu.

## Installation

1. Go to the [Atlassian Marketplace listing](#) for LinkForge
2. Click **Get it now**
3. Select your Jira Cloud site and click **Install**
4. A 30-day free trial starts automatically — no credit card required

Once installed, two new actions appear in the **`...` (More actions)** menu on every Jira issue:
- **Bulk Link Issues**
- **Bulk Unlink Issues**

A **Link Summary** panel also appears in the right sidebar of each issue.

## Permissions

LinkForge runs entirely within your Atlassian infrastructure — no data leaves your Jira site.

| Permission | Why it's needed |
|---|---|
| `read:jira-work` | Read issue links and link types |
| `write:jira-work` | Create and delete issue links |

All actions are performed as the **currently logged-in user**. Users without Jira's native **Link Issues** project permission will receive a permission error — the app cannot bypass Jira's security model.

## Quick Start

### Link issues from the `...` menu

1. Open any Jira issue
2. Click **`...`** → **Bulk Link Issues**
3. Select a **link type** (e.g. "blocks", "relates to")
4. Paste issue keys or enter a JQL query
5. Click **Link Issues**

### View linked issues

The **Link Summary** panel in the right sidebar shows all linked issues grouped by type. Click any group to expand and see the keys. Use **↺ Refresh** after bulk operations.

### Unlink issues

1. Open any Jira issue
2. Click **`...`** → **Bulk Unlink Issues**
3. Optionally filter by link type
4. Paste the issue keys to unlink
5. Click **Remove Links**
