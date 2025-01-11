interface Reference {
  groupKey: string;
  groupTitle: string;
  children?: {
    title: string;
    href: string;
  }[];
}

export const Reference: Reference[] = [
  {
    groupKey: "ui",
    groupTitle: "UI Components",
    children: [
      {
        title: "Table",
        href: "table",
      },
      {
        title: "Pagination",
        href: "pagination",
      },
      {
        title: "Toast",
        href: "toast",
      },
      {
        title: "Checkbox",
        href: "checkbox",
      },
      {
        title: "Dialog",
        href: "dialog",
      },
      {
        title: "Switch",
        href: "switch",
      },
      {
        title: "Tooltip",
        href: "tooltip",
      },
      {
        title: "Template",
        href: "template",
      },
    ],
  },
];
