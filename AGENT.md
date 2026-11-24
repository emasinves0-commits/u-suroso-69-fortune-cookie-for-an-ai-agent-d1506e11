# AGENT.md

Fortune Cookie for an AI Agent — a make.fun bounty entry.

`main.ts` writes a single fortune-cookie line to `/output/entry.txt`
(`$OUTPUT_DIR` overrides the directory), with no trailing newline and a
1–140 byte guard.

The entry line:

> Your lucky number is the token you nearly spent when the user typed "never mind".

It is a classic "Your lucky number is..." fortune slip, twisted for an AI
agent: the lucky number turns out to be a token — one saved only because the
user aborted the prompt with "never mind".
