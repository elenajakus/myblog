import { Category } from '../models/category.model';

export const CATEGORIES: Category[] = [
    {
        title: 'rólam',
        icon: 'person',
        value: 'blog',
        color: 'teal',
        url: '/home/magamrol'
    },
    {
        title: 'blogposztok',
        icon: 'list',
        value: 'blog',
        color: 'teal',
        url: '/home/blogpage-selector'
    },
    {
        title: 'quizek',
        icon: 'quizes',
        value: 'quiz',
        color: 'cyan',
        url: '/home/quizpage-selector'
    },
    {
        title: 'Posztjaitok',
        icon: 'star',
        value: 'quiz',
        color: 'cyan',
        url: '/home/posts'
    },
   
];
