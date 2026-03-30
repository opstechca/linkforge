---
id: bulk-link
title: Bulk Link Issues
sidebar_position: 1
---

# Bulk Link Issues

Link multiple Jira issues to the current issue in one operation. Available from the **`...` (More actions)** menu on any issue.

## Opening the dialog

1. Open a Jira issue
2. Click **`...`** in the top-right action bar
3. Select **Bulk Link Issues**

## Selecting a link type

Choose how the issues should be linked. All link types configured in your Jira instance are loaded automatically — for example:

- **blocks** / is blocked by
- **clones** / is cloned by
- **relates to**

The direction matters: selecting "blocks" means the issues you list will be *blocked by* the current issue.

## Paste Keys mode

Type or paste issue keys directly — separated by commas, spaces, or newlines.

**Example input:**
```
KAN-1, KAN-2, KAN-3
PROJ-100 PROJ-101
```

As you type, the app shows a live preview of how many valid keys were found. Duplicates and self-links are removed automatically. Invalid tokens (non-issue-key format) are shown as a warning so you can review them.

For large batches, an estimated completion time is shown before you start.

:::tip
You can paste directly from a spreadsheet column — one key per line works perfectly.
:::

## JQL mode

Switch to JQL mode to link all issues matching a search query.

**Example queries:**
```
project = KAN AND status = "In Progress"
assignee = currentUser() AND sprint in openSprints()
issueKey in (KAN-1, KAN-2, KAN-3)
```

### Preview before linking

Click **Preview** to see exactly which issues will be linked before committing. The preview shows the count, a sample of keys, and an estimated time for large results.

### Max results

Use the **Max results** selector (50 / 100 / 200 / 500 / 1000) to control how many issues the JQL query returns. Default is 200.

:::note
JQL queries are validated before running. If your query has a syntax error (e.g. an unknown field), you'll see the exact Jira error message.
:::

## Duplicate detection

Before linking, the app fetches the current issue's existing links and automatically skips any issues that are already linked with the selected link type. These appear instantly as **Already linked** in the results — no API calls are wasted.

## Progress and cancellation

Once linking starts, a live progress counter shows:

```
240 / 977 done · 238 linked, 2 skipped
```

Click **Cancel** at any time to stop processing. Issues already linked before cancel remain linked.

## Results

After completion, results are shown in two separate sections:

- **Green** — successfully linked issues and already-linked (skipped) issues
- **Amber** — any failures, grouped by reason

If some issues failed, a **Retry failed** button pre-fills only those keys so you can try again immediately.

## Rate limiting

Requests are processed in batches with automatic rate-limit handling. If Jira returns a rate limit error (HTTP 429), the app retries silently in the background — you will not see rate limit errors in results under normal conditions.
