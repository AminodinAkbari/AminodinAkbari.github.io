---
name: blog-writing
description: Create, edit, and validate personal blog posts in the project's Markdown format, including YAML front matter, headings, paragraphs, tables, code samples, links, and reading time.
compatibility: opencode
---

# Personal Blog Writing Skill

Use this skill whenever creating, editing, or validating a blog post in this project.

## 1. Blog file format

Every blog post is a Markdown (`.md`) file and must start with YAML front matter.

Use this exact field structure:

```yaml
---
title: "Short, clear title"
date: "YYYY-MM-DD"
description: "Concise explanation of what the post is about, why it was written, and who it is for."
tags: ["Tag1", "Tag2"]
coverImage: "/path/to/image.png"
featured: false
readingTime: 5
---
```

### Front matter rules

- `title`
  - Keep it short and clear.
  - Prefer no more than 15 words unless a longer title is clearly justified.
  - It should describe the actual topic of the post.

- `date`
  - Use `YYYY-MM-DD`.
  - Do not use another date format.

- `description`
  - Keep it concise.
  - Explain what the post is about.
  - Explain the purpose or reason for writing it.
  - Identify the intended audience when relevant.
  - Do not turn it into a long summary.

- `tags`
  - Use a Markdown/YAML array of strings.
  - Include only tags genuinely relevant to the post.
  - Prefer a small set of useful tags over many generic tags.

- `coverImage`
  - Use a project-relative public asset path such as `/projects/example/cover.png`.
  - Do not invent an image path when the project does not contain the referenced asset.

- `featured`
  - Must be a boolean: `true` or `false`.

- `readingTime`
  - Must be an integer representing the approximate reading time in minutes.
  - Estimate it from the final body length.
  - Do not add units such as `min` or `minutes`.

## 2. Body structure

The body is normal Markdown and may contain:

- Paragraphs
- Bold and italic emphasis
- Links
- Tables
- Ordered and unordered lists
- Fenced code blocks with a language identifier
- Headings

Use headings to make the article easy to scan.

The observed project convention is:

- `##` for major sections
- `###` for subsections inside a major section
- Paragraphs can be used before the first major section when an introductory opening is useful

Do not force a heading before every paragraph. Use headings only when they improve structure.

## 3. Code blocks

Use fenced code blocks and specify the language whenever possible.

Example:

```typescript
const result = await fetchData();
```

Keep code examples focused on the point being explained.

When a code block needs explanation, explain the important part immediately before or after it rather than putting long explanations inside comments.

## 4. Tables

Use standard Markdown tables when comparing technologies, options, features, or structured information.

Example:

```md
| Layer | Technology | Purpose |
| ----- | ---------- | ------- |
| API   | FastAPI    | Backend |
| DB    | PostgreSQL | Storage |
```

Keep table columns concise and readable.

## 5. Links

Use normal Markdown links:

```md
[GitHub repository](https://github.com/example/repo)
```

Do not create broken or duplicated Markdown link syntax.

## 6. Writing style

The blog is personal and technical.

Prefer:

- Clear, direct technical writing
- Practical explanations
- Concrete examples
- Short-to-medium paragraphs
- Honest statements about what was actually built or tested
- First-person language when describing personal experience, decisions, or projects

Avoid:

- Generic filler introductions
- Repeating the same point in multiple sections
- Artificially formal or academic language unless the topic requires it
- Claims that are not supported by the author's experience, project files, or an explicitly provided source
- Invented metrics, adoption numbers, benchmarks, user counts, or community feedback

Do not make a personal project sound more successful or widely used than the available evidence supports.

## 7. When creating a new post

Follow this workflow:

1. Inspect existing blog posts when available to match the project's established formatting and tone.
2. Determine the actual topic, audience, and purpose of the new post.
3. Create valid YAML front matter with all required fields.
4. Write the article using the Markdown conventions above.
5. Add tables, lists, links, or code blocks only when they improve the explanation.
6. Estimate `readingTime` from the completed article.
7. Validate the final Markdown structure before finishing.
8. Preserve the project's existing conventions instead of introducing a new format unnecessarily.

## 8. When editing an existing post

- Preserve the existing front matter field names and overall file structure.
- Do not remove front matter fields unless explicitly requested.
- Keep the author's original meaning and claims unless the user asks for factual/content changes.
- Improve structure and readability without rewriting the article into a completely different voice.
- Recalculate `readingTime` when the body changes substantially.
- Do not silently change `date`, `featured`, `coverImage`, or tags unless the user asks for it or the change is necessary to fix an explicit formatting problem.

## 9. Validation checklist

Before considering a blog post complete, verify:

- The file is Markdown.
- YAML front matter is present and valid.
- All seven required fields are present:
  `title`, `date`, `description`, `tags`, `coverImage`, `featured`, `readingTime`.
- `date` uses `YYYY-MM-DD`.
- `featured` is a boolean.
- `readingTime` is an integer.
- Markdown headings are logically ordered.
- Code fences are closed and have an appropriate language when possible.
- Tables use valid Markdown syntax.
- Links use valid Markdown syntax.
- No obviously invented facts or project details were introduced.
