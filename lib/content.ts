import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import type {
  BioContent,
  ContentBlock,
  InterestsContent,
  InterestSection,
  PersonalDetail,
  TimelineContent,
  TimelineEntry,
} from "@/types/content";

const contentDirectory = join(process.cwd(), "content");

function readContentFile(filename: string) {
  return readFileSync(join(contentDirectory, filename), "utf8").replace(/\r\n/g, "\n");
}

function getSection(markdown: string, heading: string) {
  const sections = markdown.split(/^## /m).slice(1);
  const section = sections.find((item) => item.startsWith(`${heading}\n`));

  if (!section) {
    throw new Error(`Missing required content section: ${heading}`);
  }

  return section.slice(heading.length).trim();
}

function parseBlocks(section: string): ContentBlock[] {
  return section
    .split(/^### /m)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      const [heading, ...body] = block.split("\n");
      const paragraphs = body.join("\n").split(/\n\s*\n/).map((item) => item.trim()).filter(Boolean);

      if (!heading || paragraphs.length === 0) {
        throw new Error("Every bio content block requires a heading and body text.");
      }

      return { heading, paragraphs };
    });
}

function parseDetails(section: string): PersonalDetail[] {
  return section
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => {
      const separator = line.indexOf("：");

      if (separator === -1) {
        throw new Error(`Invalid personal detail: ${line}`);
      }

      return {
        label: line.slice(2, separator).trim(),
        value: line.slice(separator + 1).trim(),
      };
    });
}

export function getBioContent(): BioContent {
  const markdown = readContentFile("bio.md");
  const title = markdown.match(/^# (.+)$/m)?.[1];

  if (!title) {
    throw new Error("Bio content requires a level-one title.");
  }

  return {
    title,
    statement: parseBlocks(getSection(markdown, "个人介绍")),
    philosophy: parseBlocks(getSection(markdown, "个人理念")),
    details: parseDetails(getSection(markdown, "基础信息")),
  };
}

function parseTimelineEntry(block: string): TimelineEntry {
  const [title, ...lines] = block.split("\n");
  const fields = new Map(
    lines
      .map((line) => line.trim())
      .filter((line) => line.startsWith("- "))
      .map((line) => {
        const separator = line.indexOf("：");

        if (separator === -1) {
          throw new Error(`Invalid timeline field: ${line}`);
        }

        return [line.slice(2, separator).trim(), line.slice(separator + 1).trim()];
      }),
  );
  const year = fields.get("年份");
  const location = fields.get("地点");
  const description = fields.get("描述");

  if (!title || !year || !location || !description) {
    throw new Error(`Timeline entry is missing required fields: ${title ?? "untitled"}`);
  }

  return { year, location, title: title.trim(), description };
}

export function getTimelineContent(): TimelineContent {
  const markdown = readContentFile("timeline.md");
  const title = markdown.match(/^# (.+)$/m)?.[1];

  if (!title) {
    throw new Error("Timeline content requires a level-one title.");
  }

  const stages = markdown
    .split(/^## /m)
    .slice(1)
    .map((section) => {
      const [name, ...body] = section.split("\n");
      const entries = body
        .join("\n")
        .split(/^### /m)
        .map((entry) => entry.trim())
        .filter(Boolean)
        .map(parseTimelineEntry);

      if (!name || entries.length === 0) {
        throw new Error(`Timeline stage requires a name and entries: ${name ?? "unnamed"}`);
      }

      return { name: name.trim(), entries };
    });

  if (stages.length === 0) {
    throw new Error("Timeline content requires at least one stage.");
  }

  return { title, stages };
}

function parseInterestSection(section: string): InterestSection {
  const [category, ...lines] = section.split("\n");
  const fields = new Map(
    lines
      .map((line) => line.trim())
      .filter((line) => line.startsWith("- "))
      .map((line) => {
        const separator = line.indexOf("：");

        if (separator === -1) {
          throw new Error(`Invalid interest field: ${line}`);
        }

        return [line.slice(2, separator).trim(), line.slice(separator + 1).trim()];
      }),
  );
  const title = fields.get("标题");
  const description = fields.get("描述");
  const itemField = fields.get("条目");

  if (!category || !title || !description) {
    throw new Error(`Interest section is missing required fields: ${category ?? "uncategorized"}`);
  }

  return {
    category: category.trim(),
    title,
    description,
    items: itemField ? itemField.split("；").map((item) => item.trim()).filter(Boolean) : [],
  };
}

export function getInterestsContent(): InterestsContent {
  const markdown = readContentFile("interests.md");
  const title = markdown.match(/^# (.+)$/m)?.[1];

  if (!title) {
    throw new Error("Interests content requires a level-one title.");
  }

  const sections = markdown
    .split(/^## /m)
    .slice(1)
    .map((section) => section.trim())
    .filter(Boolean)
    .map(parseInterestSection);

  if (sections.length === 0) {
    throw new Error("Interests content requires at least one section.");
  }

  return { title, sections };
}
