---
sidebar_label: "Advanced Git Commands"
sidebar_position: 3
tags: [Git, Github, Linux, VS Code, HBO]
---

## Git Shortcuts

Her is a small list of Git shortcuts that developers use daily.

- `git add .` - Adds all files in the working directory. Only use this command if you know exactly what you are adding.
  - If you are unsure what you are adding, run `git status`.
- `git commit -am "<enter commit message"` - If you already have files previously tracked and commited, running this command combines the `git add` and `git commit` commands.
- `git checkout -b <enter-branch-name>` - This command combines the `git branch "<enter-branch-name>` and `git checkout <enter-branch-name>` commands.

## Best Practices

The last section of the Git Commands collection is Best Practices. While the list is not exhaustive, it does contain some commonm best practices when working with Git.

### General

1. Frequently check the status and branch. As projects become complex it is easy to update the wrong branch or be working on a branch that isn't current.
1. When working on projects with multiple contributors, it is a good practice to run `git pull` on the `master` branch before creating a new branch and making updates. This helps eliminate merge conflicts.
1. Write good commit messages. Writing a good commit message can help you and other contributors quickly scan commit messages to identify where a bug or issue was introduced. It can also help maintainers correctly assign reviewers.

### Branching

1. When working with branches, it is importantant to delete your branches after they have been fully merged to the `master` branch. By design, branches are not always up to date with the `master` branch. So, to avoid future merge conflicts be sure to delete your merged branches.

   - Delete both the remote (Github) branch and the local branch `git branch -d <branch-name>`. Note: You can't delete a branch you are currently on.

2. Categorize your branches. If you have code-based updates and text-based updates, seperate them into multiple branches. This makes it easier to review and you will likely run into situations where one commit is approved and one is rejected due to an error.

   - One exception is if the text-based updates require the code-based updates to render properly. If this occurs, be sure to communicate this with the developer responsible for merging updates.
