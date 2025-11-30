import { shuffleArray } from "../shuffle-array";

/**
 * A generic function that distributes items into recipient buckets.
 *
 * @param itemsToDistribute - The array that will be shuffled and dealt out.
 * @param recipients - The array that will serve as keys (buckets) in the result map.
 */
export const performRoundRobin = (
  itemsToDistribute: string[],
  recipients: string[],
): Map<string, string[]> => {
  const result: Map<string, string[]> = new Map();

  // if we have no recipients (keys), we can't assign anything.
  if (recipients.length === 0) {
    return result;
  }

  const shuffledRecipients = shuffleArray(recipients);

  // Initialize map based on shuffled recipients
  shuffledRecipients.forEach((recipient) => result.set(recipient, []));

  // if no items to distribute, return the empty buckets
  if (itemsToDistribute.length === 0) {
    return result;
  }

  const shuffledItems = shuffleArray(itemsToDistribute);
  let recipientIndex = 0;

  shuffledItems.forEach((item) => {
    const currentRecipient = shuffledRecipients[recipientIndex];
    result.get(currentRecipient)?.push(item);

    recipientIndex = (recipientIndex + 1) % shuffledRecipients.length;
  });

  return result;
};
