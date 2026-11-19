# Lexus · personal website

Personal portfolio for [dr-lexus-dr](https://github.com/dr-lexus-dr), with a monochrome visual style inspired by [fourtexec](https://fourtexec.site/).

Static HTML, CSS, and JavaScript. No build step or remote runtime dependencies. Includes dark and light themes, local technology logos, and locally served Unbounded and Onest fonts.

## Preview

From this repository's root:

```sh
python3 -m http.server 8000
```

In the design workspace, use `python3 -m http.server 8000 --directory site`.

## Files

- `index.html`: biography, projects, affiliations, and links.
- `styles.css`: design tokens, both themes, and responsive layouts.
- `app.js`: theme preference and footer year.
- `assets/`: avatar and technology logos, with the Devicon license.
- `fonts/`: Unbounded and Onest, with their SIL Open Font Licenses.

The existing `CNAME` is preserved: `dr-lexus-dr.musorum.com`.
