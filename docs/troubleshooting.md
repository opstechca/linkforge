---
id: troubleshooting
title: Troubleshooting
sidebar_position: 3
---

# Troubleshooting

## Bulk Link Issues

### "Bulk Link Issues" doesn't appear in the `...` menu
- Confirm the app is installed: go to **Jira Settings → Apps → Manage apps**
- Hard-refresh the Jira page (Cmd+Shift+R / Ctrl+Shift+R)
- Check you're on the correct Jira site

### No link types in the dropdown
- The app requires `read:jira-work` permission — check it's listed in Manage apps
- Contact your Jira admin to confirm issue link types are configured in your instance

### JQL returns "No issues found" for a valid query
- Click **Preview** first to validate — if Jira returns 0 results, the query is syntactically valid but matches nothing
- Try running the same JQL in Jira's native issue search to verify
- Check project key casing (e.g. `KAN` not `kan`)

### JQL shows an error message
- The exact Jira validation error is displayed (e.g. *"Field 'abc' does not exist"*)
- Fix the query and try again

### "403 — No permission to link this issue"
- You don't have the **Link Issues** project permission for one or more of the target issues
- This is enforced by Jira — the app cannot bypass it
- Ask your Jira admin to grant you the Link Issues permission

### "Jira's issue link limit has been reached"
- Jira Cloud has a maximum number of links per issue
- This is a Jira platform limit and cannot be changed by the app
- Contact your Atlassian admin for guidance

### Some issues show as failed after linking
- Check the failure reason shown in the amber results section
- Use the **Retry failed** button to attempt those keys again
- If failures persist, the issue keys may not be accessible to your account

---

## Bulk Unlink Issues

### Keys show as "Not linked" but I can see the link in Jira
- Make sure you haven't selected a specific link type filter that doesn't match the actual link
- Leave the **Link type** filter blank to remove all link types between those issues

---

## Link Summary Panel

### Panel doesn't update after linking/unlinking
- Click **↺ Refresh** in the panel header — the panel doesn't auto-refresh when dialogs close
- If it still doesn't update, refresh the full Jira page

### Panel shows a spinner indefinitely
- The issue may have a very large number of links — wait a moment for the API response
- Try clicking **↺ Refresh**

---

## Still need help?

[Open an issue on GitHub](https://github.com/nag579/bulk-issue-linker-for-jira/issues) with a description of the problem and the error message you're seeing.
