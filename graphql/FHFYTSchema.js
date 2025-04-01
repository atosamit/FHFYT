import { gql } from 'apollo-server';

const typeDefs = `
  type PremiumAdjustment {
    id: ID!
    Comment: String!
    Total_Borrower_Fees: Float!
    CU_Retail_Rate: Float
    Protected_Loan_Amount: Float!
    Pay_Rate: Float
    Premium_Due: Float
    Total_Amount: Float
  }

  input PremiumAdjustmentInput {
    id: ID!
    Comment: String!
    Total_Borrower_Fees: Float!
    CU_Retail_Rate: Float
    Protected_Loan_Amount: Float!
    Pay_Rate: Float
    Premium_Due: Float
    Total_Amount: Float
  }

  type Query {
    getPremiumAdjustment(id: ID!): PremiumAdjustment
  }

  type Mutation {
    editPremiumAdjustment(input: PremiumAdjustmentInput!): PremiumAdjustment
  }
`

export default typeDefs;