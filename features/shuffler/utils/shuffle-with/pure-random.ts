export const performRandomDistribution = (
  itemsToDistribute: string[],
  recipients: string[],
): Map<string, string[]> => {
  const result: Map<string, string[]> = new Map();

  if (recipients.length === 0) return result;

  // we don't necessarily need to shuffle recipients here, but we initialize keys
  recipients.forEach((recipient) => result.set(recipient, []));

  if (itemsToDistribute.length === 0) return result;

  // we loop through items and pick a random winner for each
  itemsToDistribute.forEach((item) => {
    const randomIndex = Math.floor(Math.random() * recipients.length);
    const randomRecipient = recipients[randomIndex];
    result.get(randomRecipient)?.push(item);
  });

  return result;
};
