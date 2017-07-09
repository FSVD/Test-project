import {
  stringifyType,
  getReviewData,
  addReview,
} from './review.connectors';

export const resolvers = {
  Query: {
    reviewById: (obj, args, context, info) => getReviewData(obj, args, context, info),
    reviews: (obj, args, context, info) => getReviewData(obj, args, context, info),
    reviewEvaluations: (obj, args, context, info) => getReviewData(obj, args, context, info),
    reviewEvaluationsByReviewId: (obj, args, context, info) => getReviewData(obj, args, context, info),
  },

  Mutation: {
    addReview: (obj, args, context, info) => addReview(obj, args, context, info),
  },

  Review: {},

  ReviewEvaluation: {
    stringifiedType: (obj, args, context, info) => stringifyType(obj, args, context, info),
  },

  ReviewRatingCriterionValue: {},
};
