---
layout: page
app: bulk-issue-link-manager
title: Link Summary Panel
permalink: /apps/bulk-issue-link-manager/features/link-summary/
---

# Link Summary Panel

<p class="page-intro">See how many issues are linked per link type at a glance, directly in the Jira sidebar. No need to open any dialogs.</p>

## What it shows

The panel appears in the **right sidebar** of every Jira issue and shows:

- **Count of linked issues per link type** (e.g. "blocks: 12", "relates to: 5") — the main purpose of the panel
- **Total link count** in the header (e.g. "42 linked issues")
- Groups sorted alphabetically by link type
- When expanded, **issue keys** shown as a comma-separated list

---

## Expanding groups

Click **Show ▼** on any group to reveal the keys. Click **Hide ▲** to collapse it. Groups are independent, you can have multiple open at once.

---

## Refreshing

The panel loads automatically when you open an issue. After running a bulk link or unlink operation, click **↺ Refresh** in the panel header to reload without refreshing the whole page.

---

## Performance

The panel makes a single API call to load all link data. There is no per-issue detail fetching. It's designed to be fast even on issues with hundreds of links.
