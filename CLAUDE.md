# Nuveau Plastic Surgery – Instagram workspace

This repo holds the Instagram Agent skills (`.claude/skills/ig-*`) and the
practice's Instagram files (`instagram/`).

- The skills read and write `~/.claude/instagram/`. In cloud sessions the
  environment's setup script links that path to this repo's `instagram/`
  folder. If `~/.claude/instagram` is missing at the start of a session, run:
  `mkdir -p ~/.claude && ln -sfn "$PWD/instagram" ~/.claude/instagram`
  from the repo root.
- `instagram/voice.md` is the brand voice. Follow it for every script, caption,
  comment, reply and DM, and always say which team member is speaking.
- Cloud sessions are temporary. When a skill writes or changes a file in
  `instagram/` (voice.md, plan.md, swipe.md, log.md), commit and push it so
  it's there next time.
- The user is new to Claude Code and works from an iPad. Keep explanations
  plain and avoid jargon.
