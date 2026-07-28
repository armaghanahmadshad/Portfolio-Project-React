import React from 'react';

/**
 * A tiny, dependency-free Markdown-ish renderer.
 * Supports just enough for blog posts written from the admin dashboard:
 *   ## Heading        -> <h2>
 *   ### Heading       -> <h3>
 *   - list item       -> <ul><li>
 *   ```code```        -> <pre><code>  (fenced blocks, own line before/after)
 *   `inline code`     -> <code>
 *   **bold**          -> <strong>
 *   blank line        -> new paragraph
 * Anything unrecognized is rendered as a plain paragraph.
 */
export function renderMarkdownLite(source = '') {
  const lines = source.replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let i = 0;
  let listBuffer = [];

  const flushList = () => {
    if (listBuffer.length) {
      blocks.push(
        <ul key={`ul-${blocks.length}`}>
          {listBuffer.map((item, idx) => (
            <li key={idx}>{inline(item)}</li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  };

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim().startsWith('```')) {
      flushList();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing fence
      blocks.push(
        <pre key={`pre-${blocks.length}`}>
          <code>{codeLines.join('\n')}</code>
        </pre>
      );
      continue;
    }

    if (line.startsWith('### ')) {
      flushList();
      blocks.push(<h3 key={`h3-${blocks.length}`}>{inline(line.slice(4))}</h3>);
      i++;
      continue;
    }

    if (line.startsWith('## ')) {
      flushList();
      blocks.push(<h2 key={`h2-${blocks.length}`}>{inline(line.slice(3))}</h2>);
      i++;
      continue;
    }

    if (line.trim().startsWith('- ')) {
      listBuffer.push(line.trim().slice(2));
      i++;
      continue;
    }

    if (line.trim() === '') {
      flushList();
      i++;
      continue;
    }

    // Collect a paragraph (consecutive non-blank, non-special lines)
    flushList();
    const paraLines = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].startsWith('## ') &&
      !lines[i].startsWith('### ') &&
      !lines[i].trim().startsWith('- ') &&
      !lines[i].trim().startsWith('```')
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push(<p key={`p-${blocks.length}`}>{inline(paraLines.join(' '))}</p>);
  }
  flushList();

  return blocks;
}

// Handles **bold** and `inline code` within a line of text.
function inline(text) {
  const parts = [];
  const regex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('**')) {
      parts.push(<strong key={key++}>{token.slice(2, -2)}</strong>);
    } else {
      parts.push(<code key={key++}>{token.slice(1, -1)}</code>);
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}
