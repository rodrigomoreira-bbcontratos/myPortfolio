export type StackGroup = {
  title: string;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    title: "Frontend",
    items: ["Angular", "React", "Next.js", "TypeScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "NestJS", "Java", "Spring Boot"],
  },
  {
    title: "Data",
    items: ["SQL Server", "Prisma"],
  },
  {
    title: "Engineering",
    items: ["Docker", "Git", "Jest", "Cypress", "REST APIs"],
  },
];
