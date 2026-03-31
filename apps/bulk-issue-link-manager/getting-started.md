---
layout: page
app: bulk-issue-link-manager
title: Getting Started
permalink: /apps/bulk-issue-link-manager/getting-started/
---

# Getting Started

<p class="page-intro">Get Bulk Issue Link Manager for Jira installed and start bulk linking Jira issues in under a minute. No admin setup or configuration needed.</p>

## Installation

<ul class="steps">
  <li class="step-item">
    <div class="step-num">1</div>
    <div class="step-content">Go to the <a href="https://marketplace.atlassian.com">Atlassian Marketplace</a> listing for <strong>Bulk Issue Link Manager for Jira</strong> and click <strong>Get it now</strong>.</div>
  </li>
  <li class="step-item">
    <div class="step-num">2</div>
    <div class="step-content">Select your <strong>Jira Cloud site</strong> from the dropdown and click <strong>Install</strong>.</div>
  </li>
  <li class="step-item">
    <div class="step-num">3</div>
    <div class="step-content">A <strong>30-day free trial</strong> starts automatically. No credit card required.</div>
  </li>
  <li class="step-item">
    <div class="step-num">4</div>
    <div class="step-content">Open any Jira issue. You'll see <strong>Link Issues in Bulk</strong> and <strong>Unlink Issues in Bulk</strong> in the <strong>··· (More actions)</strong> menu, plus a <strong>Link Summary</strong> panel in the right sidebar.</div>
  </li>
</ul>

<div class="callout callout-info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <strong>Don't see the menu items?</strong>
    Hard-refresh the page (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows) after installation. If they still don't appear, confirm the app is installed under <strong>Jira Settings → Apps → Manage apps</strong>.
  </div>
</div>

---

## Permissions

Bulk Issue Link Manager for Jira requests the minimum permissions needed to do its job. All operations run as the currently logged-in user. The app cannot do anything the user couldn't do manually.

| Permission | Why it's needed |
|---|---|
| `read:jira-work` | Read issue links, link types, and issue details |
| `write:jira-work` | Create and delete issue links |

<div class="callout callout-tip">
  <span class="callout-icon">🔒</span>
  <div class="callout-body">
    <strong>Jira permissions are fully respected</strong>
    If a user doesn't have the <em>Link Issues</em> project permission for a given issue, they'll see a 403 error for that issue, just as they would trying to link it manually. The app cannot bypass Jira's security model.
  </div>
</div>

---

## Quick Start

### Link issues in bulk

1. Open any Jira issue
2. Click **`···`** → **Link Issues in Bulk**
3. Select a **link type** (e.g. "blocks", "relates to", "clones")
4. Paste issue keys, or switch to **JQL mode** and enter a query
5. Click **Link Issues** and watch the live progress counter

Already-linked issues are detected upfront and skipped instantly. Failed issues are shown in amber with the exact reason, and you can retry them in one click.

### Unlink issues in bulk

1. Open any Jira issue
2. Click **`···`** → **Unlink Issues in Bulk**
3. Optionally select a **link type** to limit which links are removed
4. Paste the issue keys to unlink
5. Click **Remove Links**

### View all links at a glance

The **Link Summary** panel in the right sidebar shows all linked issues grouped by link type. Click any group to expand it and see the keys. Use **↺ Refresh** after bulk operations to reload without a full page refresh.

---

## Next steps

- [Link Issues in Bulk: full feature guide →](/apps/bulk-issue-link-manager/features/link-issues-in-bulk/)
- [Unlink Issues in Bulk: full feature guide →](/apps/bulk-issue-link-manager/features/unlink-issues-in-bulk/)
- [Link Summary Panel →](/apps/bulk-issue-link-manager/features/link-summary/)
- [Troubleshooting →](/apps/bulk-issue-link-manager/troubleshooting/)
