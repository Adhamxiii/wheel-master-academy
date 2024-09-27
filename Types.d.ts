import { ReactNode } from "react"

export type WrapperProps = {
    children: ReactNode
    className?: string
}

export type NavLink = {
    label: string
    path: string
}

export type CountUpProps = {
    start: number
    end: number
    duration: number
}

export type CountUpItemProps = {
    id: number
    number: number
    text: string
}

export type ServiceProps = {
    id: number
    title: string
    icon: React.ReactNode
    description: string
}

export type GalleryProps = {
    id: number
    name: string
    desc: string
}

export type ContactsProps = {
    id: number
    title: string
    text: string
}

export type Question = {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number;
}
export type TestContextType = {
    currentQuestion: number;
    selectedAnswers: number[];
    timeRemaining: number;
    questions: Question[];
    handleAnswerSelection: (answer: number) => void;
    handleNextQuestion: () => void;
    handlePreviousQuestion: () => void;
    handleSubmit: () => void;
}

export interface Lesson {
    id: string;
    title: string;
    difficulty?: "beginner" | "intermediate" | "advanced";
    description: string;
    content: string | string[];
}
