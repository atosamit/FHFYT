const premiumAdjustments = [
  {
    id: "1",
    Comment: "Initial adjustment",
    Total_Borrower_Fees: 100.0,
    CU_Retail_Rate: 2.5,
    Protected_Loan_Amount: 50000.0,
    Pay_Rate: 2.2,
    Premium_Due: 200.0,
    Total_Amount: 50200.0
  }
];

const resolvers = {
  Query: {
    getPremiumAdjustment: (parent, args) => {
      return premiumAdjustments.find(pa => pa.id === args.id);
    },
  },
  Mutation: {
    editPremiumAdjustment: (parent, { input }) => {
      const index = premiumAdjustments.findIndex(pa => pa.id === input.id);
      if (index === -1) {
        throw new Error("Premium Adjustment not found");
      }
      const updatedPremiumAdjustment = {
        ...premiumAdjustments[index],
        ...input
      };
      premiumAdjustments[index] = updatedPremiumAdjustment;
      return updatedPremiumAdjustment;
    }
  }
};

export default resolvers;