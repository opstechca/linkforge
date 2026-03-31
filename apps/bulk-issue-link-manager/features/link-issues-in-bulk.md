---
layout: page
app: bulk-issue-link-manager
title: Link Issues in Bulk
permalink: /apps/bulk-issue-link-manager/features/link-issues-in-bulk/
---

# Link Issues in Bulk

<p class="page-intro">Link multiple Jira issues to the current issue in one operation. Available from the <strong>··· (More actions)</strong> menu on any Jira issue.</p>

## Opening the dialog

1. Open a Jira issue
2. Click **`···`** in the top-right action bar
3. Select **Link Issues in Bulk**

---

## Selecting a link type

All link types configured in your Jira instance are loaded automatically, for example:

- **blocks** / is blocked by
- **clones** / is cloned by
- **relates to**

The direction matters: selecting **"blocks"** means the *current issue* will block the issues you list.

---

## Paste Keys mode

Type or paste issue keys directly, separated by commas, spaces, or newlines.

```
KAN-1, KAN-2, KAN-3
PROJ-100 PROJ-101
```

As you type, a live preview shows how many valid keys were found. Duplicates and self-links are removed automatically. Invalid tokens (non-keys) are flagged as a warning so you can review them before linking.

For large batches, an **estimated completion time** is shown before you start.

<div class="callout callout-tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <strong>Pasting from a spreadsheet</strong>
    Copy a column of issue keys from Excel or Google Sheets and paste directly. One key per line works perfectly.
  </div>
</div>

---

## JQL mode

Switch to **JQL mode** to link all issues matching a Jira search query. No copy-pasting required.

**Example queries:**
```
project = KAN AND status = "In Progress"
assignee = currentUser() AND sprint in openSprints()
issueKey in (KAN-1, KAN-2, KAN-3)
```

### Preview before linking

Click **Preview** to see exactly which issues will be linked before committing. The preview shows the total count, a sample of keys, and an estimated time for large result sets.

### Max results

Use the **Max results** selector (50 / 100 / 200 / 500 / 1000) to control how many issues the JQL query returns. Default is 200.

<div class="callout callout-info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <strong>JQL is validated before running</strong>
    If your query has a syntax error, you'll see the exact Jira error message (e.g. <em>"Field 'abc' does not exist"</em>). Fix the query and try again. No partial runs.
  </div>
</div>

---

## Duplicate detection

Before linking starts, Bulk Issue Link Manager for Jira fetches the current issue's existing links and partitions your key list:

- **Already linked** issues are flagged immediately and counted as skipped. No API calls wasted.
- Only genuinely new links are sent to Jira

This means re-running a link operation on the same set of issues is safe and fast.

---

## Progress and cancellation

Once linking starts, a live counter shows real-time progress:

```
240 / 977 done · 238 linked, 2 skipped
```

Click **Cancel** at any time to stop. Issues already linked before cancel remain linked.

---

## Results

After completion, results are split into two clear sections:

- **Green:** successfully linked issues, plus any already-linked ones that were skipped
- **Amber:** failures, grouped by reason (e.g. permission denied, link limit reached)

If some issues failed, a **Retry failed** button pre-fills only those keys so you can try again without re-entering anything.

---

## Rate limiting

Requests are processed in batches with automatic rate-limit handling. HTTP 429 responses are retried silently with exponential backoff. You will not see rate limit errors in results under normal conditions.
