export interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Exercise {
  title: string;
  statement: string;
  solution: string;
}

export interface ClassData {
  id: number;
  displayId?: string;
  title: string;
  description: string;
  content: string;
  quiz?: Question[];
  exercises?: Exercise[];
}

export interface CourseMetadata {
  title: string;
  code: string;
  subtitle: string;
}

export interface CourseData {
  course: CourseMetadata;
  classes: ClassData[];
}
