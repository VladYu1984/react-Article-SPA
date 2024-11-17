import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

export interface ArticleDetailsComentsSchema extends EntityState<Comment> {
    isLoading?: boolean;
    error?: string;
}
