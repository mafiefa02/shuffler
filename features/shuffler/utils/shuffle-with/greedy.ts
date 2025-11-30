import { shuffleArray } from "../shuffle-array";

export const performGreedyDistribution = (
  itemsToDistribute: string[],
  recipients: string[],
): Map<string, string[]> => {
  const result: Map<string, string[]> = new Map();

  if (recipients.length === 0) return result;

  // shuffle recipients to avoid bias when "least filled" ties occur
  const shuffledRecipients = shuffleArray(recipients);
  shuffledRecipients.forEach((recipient) => result.set(recipient, []));

  if (itemsToDistribute.length === 0) return result;

  const shuffledItems = shuffleArray(itemsToDistribute);

  shuffledItems.forEach((item) => {
    // find the recipient with the minimum number of items currently
    let targetRecipient = shuffledRecipients[0];
    let minCount = result.get(targetRecipient)!.length;

    for (let i = 1; i < shuffledRecipients.length; i++) {
      const recipient = shuffledRecipients[i];
      const count = result.get(recipient)!.length;

      if (count < minCount) {
        targetRecipient = recipient;
        minCount = count;
      }
    }

    result.get(targetRecipient)?.push(item);
  });

  return result;
};
