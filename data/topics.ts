import {
  BadgeCheck,
  BookOpen,
  Braces,
  Brain,
  ChartBar,
  Code,
  CodeXml,
  Coffee,
  Cpu,
  Database,
  FileCode,
  Gem,
  Hash,
  Library,
  Palette,
  PenTool,
  Share2,
  Shield,
  Terminal,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface Topic {
  name: string;
  icon: LucideIcon;
}

export const topics: Topic[] = [
  { name: "Data Analysis", icon: ChartBar },
  { name: "CSS", icon: Palette },
  { name: "Computer Science", icon: Cpu },
  { name: "C#", icon: Hash },
  { name: "Digital Literacy", icon: BookOpen },
  { name: "Development Tools", icon: Wrench },
  { name: "Design", icon: PenTool },
  { name: "Databases", icon: Database },
  { name: "Java", icon: Coffee },
  { name: "HTML", icon: CodeXml },
  { name: "Go", icon: Code },
  { name: "EDI", icon: Share2 },
  { name: "PHP", icon: FileCode },
  { name: "Machine Learning", icon: Brain },
  { name: "Learning Resources", icon: Library },
  { name: "JavaScript", icon: Braces },
  { name: "Security", icon: Shield },
  { name: "Ruby", icon: Gem },
  { name: "Quality Assurance", icon: BadgeCheck },
  { name: "Python", icon: Terminal },
];
