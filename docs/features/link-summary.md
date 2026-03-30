---
id: link-summary
title: Link Summary Panel
sidebar_position: 3
---

# Link Summary Panel

The Link Summary panel appears in the **right sidebar** of every Jira issue and gives you a quick overview of all linked issues without opening any dialogs.

## What it shows

- **Total link count** in the header (e.g. "42 linked issues")
- Links **grouped by type** (blocks, relates to, clones, etc.) sorted alphabetically
- Each group shows its **count** and can be independently expanded
- When expanded, the **issue keys** are shown as a comma-separated list

## Expanding groups

Click **Show ▼** on any group to reveal the keys. Click **Hide ▲** to collapse it again. Groups are independent — you can have multiple open at once.

## Refreshing

The panel loads automatically when you open an issue. After running a bulk link or unlink operation, click **↺ Refresh** in the panel header to reload the latest links without refreshing the whole page.

## Performance

The panel makes a single API call to load all link data — there is no per-issue detail fetching. It's designed to be fast even on issues with hundreds of links.
