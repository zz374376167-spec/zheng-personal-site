export interface ContentBlock {
  heading: string;
  paragraphs: readonly string[];
}

export interface PersonalDetail {
  label: string;
  value: string;
}

export interface BioContent {
  title: string;
  statement: readonly ContentBlock[];
  philosophy: readonly ContentBlock[];
  details: readonly PersonalDetail[];
}

export interface TimelineEntry {
  year: string;
  location: string;
  title: string;
  description: string;
}

export interface TimelineStage {
  name: string;
  entries: readonly TimelineEntry[];
}

export interface TimelineContent {
  title: string;
  stages: readonly TimelineStage[];
}

export interface InterestSection {
  category: string;
  title: string;
  description: string;
  items: readonly string[];
}

export interface InterestsContent {
  title: string;
  sections: readonly InterestSection[];
}
