import { User } from "@/types/api";

interface GroupedByCurrency {
  [currency: string]: number;
}

interface ConversionRates {
  [currency: string]: number;
}

const useCurrency = (user: User): number => {
  const groupedByCurrency: GroupedByCurrency =
    user && user.accounts
      ? user.accounts.reduce((acc: GroupedByCurrency, account) => {
          if (!acc[account.currency]) {
            acc[account.currency] = 0;
          }
          acc[account.currency] += account.balance;
          return acc;
        }, {} as GroupedByCurrency)
      : { TL: 0 };

  const convertToCurrency = (
    amount: number,
    fromCurrency: string,
    toCurrency: string
  ): number => {
    const conversionRates: ConversionRates = {
      TL: 1,
      USD: 30,
      GR: 2000,
    };
    if (!conversionRates[fromCurrency] || !conversionRates[toCurrency]) {
      throw new Error(
        `Conversion rate for ${fromCurrency} to ${toCurrency} not available.`
      );
    }
    return (
      (amount * conversionRates[fromCurrency]) / conversionRates[toCurrency]
    );
  };

  const totalCurrencyInTL = Object.entries(groupedByCurrency).reduce(
    (acc: number, [currency, amount]: [string, number]) => {
      return (
        acc +
        (currency === "TL" ? amount : convertToCurrency(amount, currency, "TL"))
      );
    },
    0
  );

  return totalCurrencyInTL;
};

export default useCurrency;
