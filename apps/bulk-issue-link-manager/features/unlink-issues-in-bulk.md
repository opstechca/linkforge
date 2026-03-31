---
layout: page
app: bulk-issue-link-manager
title: Unlink Issues in Bulk
permalink: /apps/bulk-issue-link-manager/features/unlink-issues-in-bulk/
---

# Unlink Issues in Bulk

<p class="page-intro">Remove links between the current issue and multiple other issues in one operation. Available from the <strong>··· (More actions)</strong> menu on any Jira issue.</p>

## Opening the dialog

1. Open a Jira issue
2. Click **`···`** in the top-right action bar
3. Select **Unlink Issues in Bulk**

---

## Viewing existing links

When the dialog opens, the **Currently linked** section shows all issues currently linked to this one, grouped by link type. Click **Show ▼** on any group to expand and see the individual keys before you start.

---

## Filtering by link type (optional)

Use the **Link type** dropdown to remove only a specific type of link.

| Setting | Behaviour |
|---|---|
| Link type selected (e.g. "blocks") | Only removes "blocks" links; all other link types are left intact |
| Left blank | Removes **all** link types between the listed issues and the current issue |

<div class="callout callout-warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <strong>Leaving the filter blank removes all link types</strong>
    If an issue has both a "blocks" and a "relates to" link, both will be removed unless you select a specific link type.
  </div>
</div>

---

## Entering issue keys to unlink

Paste the issue keys you want to unlink, separated by commas, spaces, or newlines.

```
KAN-1, KAN-2, KAN-3
PROJ-100 PROJ-101
```

---

## Results

Results are shown in two colour-coded sections:

- **Green** — links successfully removed
- **Amber** — keys that couldn't be unlinked, grouped by reason

| Reason | What it means |
|---|---|
| `Not linked to KAN-1 with link type "blocks"` | The issue exists but doesn't have that specific link type to the current issue |
| `Not linked to KAN-1` | No link of any type was found between these two issues |

---

## Progress and cancellation

For large operations, a live counter shows progress. Click **Cancel** to stop mid-way — links already deleted at the point of cancel remain deleted.

---

## After unlinking

Click **Unlink more** to run another operation on the same issue, or **Close** to dismiss the dialog. Use **↺ Refresh** on the Link Summary panel to see the updated link count without reloading the full page.
