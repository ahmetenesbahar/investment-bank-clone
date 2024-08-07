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
      : { TRY: 0 };

  const convertToCurrency = (
    amount: number,
    fromCurrency: string,
    toCurrency: string
  ): number => {
    const conversionRates: ConversionRates = {
      TRY: 1,
      USD: 30,
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

  const totalCurrencyInTRY = Object.entries(groupedByCurrency).reduce(
    (acc: number, [currency, amount]: [string, number]) => {
      return (
        acc +
        (currency === "TRY"
          ? amount
          : convertToCurrency(amount, currency, "TRY"))
      );
    },
    0
  );

  return totalCurrencyInTRY;
};

export default useCurrency;
