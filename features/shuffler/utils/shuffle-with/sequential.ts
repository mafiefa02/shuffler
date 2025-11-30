import { shuffleArray } from "../shuffle-array";

export const performSequentialDistribution = (
  itemsToDistribute: string[],
  recipients: string[],
): Map<string, string[]> => {
  const result: Map<string, string[]> = new Map();

  if (recipients.length === 0) return result;

  const shuffledRecipients = shuffleArray(recipients);
  shuffledRecipients.forEach((recipient) => result.set(recipient, []));

  if (itemsToDistribute.length === 0) return result;

  const shuffledItems = shuffleArray(itemsToDistribute);

  // calculate ideal chunk size to distribute evenly
  const chunkSize = Math.ceil(shuffledItems.length / shuffledRecipients.length);

  shuffledRecipients.forEach((recipient, index) => {
    const start = index * chunkSize;
    const end = start + chunkSize;
    const chunk = shuffledItems.slice(start, end);

    // assign the entire slice to this recipient
    result.set(recipient, chunk);
  });

  return result;
};
