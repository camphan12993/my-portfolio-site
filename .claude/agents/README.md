# Project subagents

Custom subagents for this project go here as Markdown files with frontmatter:

```markdown
---
name: agent-name
description: When Claude should use this agent, and for what.
tools: Read, Grep, Glob
model: sonnet
---

System prompt / instructions for the agent.
```

No project-specific subagents are defined yet. Add one when a recurring task
(e.g. reviewing content copy, auditing accessibility) would benefit from a
dedicated agent with a narrower toolset or prompt.
