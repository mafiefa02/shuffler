import { ShufflerItem, ShuffleStrategy } from "../../types";

export const shuffleWith = (
  strategy: ShuffleStrategy,
  items: ShufflerItem[],
  recipients: ShufflerItem[],
) => strategy(items, recipients);
