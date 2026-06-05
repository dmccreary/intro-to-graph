# Claude Code Welcome Message (MOTD) Log

## Overview

The file `motd.txt` in the project root serves as the **Message of the Day** (MOTD) for Claude Code sessions. It is displayed verbatim at the start of every new conversation, configured via the `CLAUDE.md` startup instructions.

## What Changed

- **Created `motd.txt`** in the project root with a structured welcome message
- **Added startup instructions** to `CLAUDE.md` so Claude Code reads and displays `motd.txt` at the beginning of each session

## Contents of the Welcome Message

The MOTD includes:

1. **Project header** - Project name and published site URL
2. **Relevant Skills** - Organized into four categories:
   - **Textbook Lifecycle** - Skills for the full book creation pipeline (course description through metrics)
   - **MicroSims & Visualizations** - Skills for creating interactive educational simulations
   - **Publishing & Outreach** - Skills for README, LinkedIn announcements, reports, and presentations
   - **Infrastructure** - Skills for installing templates and managing custom skills
3. **Quick Commands** - Frequently used shell commands (`mkdocs serve`, `mkdocs gh-deploy`, graph validation)

## How to Update

To change the welcome message displayed at the start of Claude Code sessions:

1. Edit `motd.txt` in the project root
2. The updated message will appear automatically in the next new conversation

Use this to highlight current priorities, new skills, or project status updates.

## Design Rationale

- Modeled after the UNIX `/etc/motd` convention
- Keeps the welcome message in a separate file (`motd.txt`) rather than inline in `CLAUDE.md`, making it easy to update without touching project configuration
- Provides a quick reference so users don't need to remember skill names or common commands
