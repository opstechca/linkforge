---
layout: page
app: bulk-issue-link-manager
title: Troubleshooting
permalink: /apps/bulk-issue-link-manager/troubleshooting/
---

# Troubleshooting

---

## Link Issues in Bulk

### "Link Issues in Bulk" doesn't appear in the `...` menu
- Confirm the app is installed: **Jira Settings → Apps → Manage apps**
- Hard-refresh the page (Cmd+Shift+R / Ctrl+Shift+R)
- Check you're on the correct Jira site

### No link types in the dropdown
- The app requires `read:jira-work` permission
- Contact your Jira admin to confirm issue link types are configured in your instance

### JQL returns "No issues found" for a valid query
- Click **Preview** first — if Jira returns 0 results, the query is syntactically valid but matches nothing
- Try the same JQL in Jira's native issue search to verify
- Check project key casing (`KAN` not `kan`)

### JQL shows an error message
- The exact Jira validation error is displayed (e.g. *"Field 'abc' does not exist"*)
- Fix the query and try again

### "403 — No permission to link this issue"
- You don't have the **Link Issues** project permission for one or more target issues
- This is enforced by Jira — the app cannot bypass it
- Ask your Jira admin to grant you the Link Issues permission

### "Jira's issue link limit has been reached"
- Jira Cloud has a maximum number of links per issue — this is a platform limit
- Contact your Atlassian admin for guidance

---

## Unlink Issues in Bulk

### Keys show as "Not linked" but I can see the link in Jira
- Make sure you haven't selected a link type filter that doesn't match the actual link
- Leave the **Link type** filter blank to remove all link types between those issues

---

## Link Summary Panel

### Panel doesn't update after linking/unlinking
- Click **↺ Refresh** in the panel header
- If it still doesn't update, refresh the full Jira page

### Panel shows a spinner indefinitely
- The issue may have a very large number of links — wait a moment
- Try clicking **↺ Refresh**

---

## Still need help?

[Open an issue on GitHub](https://github.com/opstechca/apps/bulk-issue-link-manager/issues) with a description of the problem and the error message you're seeing.
