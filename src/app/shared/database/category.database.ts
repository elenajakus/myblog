import { Category } from '../models/category.model';

export const CATEGORIES: Category[] = [
    {
        title: 'blogposztok',
        icon: 'list',
        value: 'blog',
        color: 'teal',
        url: '/home/blogpages'
    },
    {
        title: 'Quizek',
        icon: 'quizes',
        value: 'Quiz',
        color: 'cyan',
        url: '/home/quizes'
    }
];
