const OP_AVY_URL = "https://api-dev.avy.vn/api/v1";
const APP_BORROWER_URL = "https://api-dev.avy.vn/api/v1";

const defaultLoan = {
  id: null,
  uuid: "",
  amount: 5000000,
  duration: 90,
  monthlyPayment: 0,
  insuranceFee: 0,
  disbursementMethod: "bank",
  disbursementBank: {
    serviceProviderName: "",
    serviceProviderCode: "",
    accountOwner: "",
    accountNumber: ""
  },
  disbursementWallet: {
    serviceProviderName: "",
    serviceProviderCode: "",
    accountOwner: "",
    accountNumber: ""
  },
  idCardFrontImage: {},
  idCardBackImage: {},
  portraitWithIDCardPhoto: {},
  socialSecurityNumber: "",
  laborContractFirstImage: {},
  laborContractLastImage: {},
  bankStatementImages: [],
  province: {},
  district: {},
  commune: {},
  address: "",
  referenceCode: ""
};

module.exports = {
  OP_AVY_URL,
  APP_BORROWER_URL,
  defaultLoan
};
