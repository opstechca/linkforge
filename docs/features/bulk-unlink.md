---
id: bulk-unlink
title: Bulk Unlink Issues
sidebar_position: 2
---

# Bulk Unlink Issues

Remove links between the current issue and multiple other issues in one operation. Available from the **`...` (More actions)** menu on any issue.

## Opening the dialog

1. Open a Jira issue
2. Click **`...`** in the top-right action bar
3. Select **Bulk Unlink Issues**

## Viewing existing links

When the dialog opens, the **Currently linked** section shows all issues currently linked to this issue, grouped by link type. Click **Show ▼** on any group to see the individual keys.

This helps you confirm what's linked before making changes.

## Filtering by link type (optional)

Use the **Link type** dropdown to remove only a specific type of link. For example:

- Select **"blocks"** to only remove "blocks" links, leaving all other link types intact
- Leave it blank to remove **all** link types between the listed issues and the current issue

## Entering issue keys to unlink

Paste the issue keys you want to unlink — separated by commas, spaces, or newlines.

As you type, a live preview shows how many valid keys were found.

## Running the operation

Click **Remove Links**. The app will:

1. Fetch the current links for this issue
2. Match each key against existing links (filtered by link type if selected)
3. Delete matched links in batches
4. Show results immediately

## Results

Results are shown in two sections:

- **Green** — links successfully removed, listed as comma-separated keys
- **Amber** — keys that couldn't be unlinked, grouped by reason:

| Reason | Meaning |
|---|---|
| `Not linked to KAN-1 with link type "blocks"` | The issue exists but doesn't have that specific link type |
| `Not linked to KAN-1` | No link of any type was found between these issues |

## Progress and cancellation

For large operations, a live counter shows progress. Click **Cancel** to stop mid-way — links already deleted remain deleted.

## After unlinking

Click **Unlink more** to run another operation, or **Close** to dismiss the dialog. Use **↺ Refresh** on the Link Summary panel to see the updated link count.
