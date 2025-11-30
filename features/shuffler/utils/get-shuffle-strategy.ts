import { ShuffleStrategy, ShuffleStrategyType } from "../types";
import { performGreedyDistribution } from "./shuffle-with/greedy";
import { performRandomDistribution } from "./shuffle-with/pure-random";
import { performRoundRobin } from "./shuffle-with/round-robin";
import { performSequentialDistribution } from "./shuffle-with/sequential";

const STRATEGIES: Record<ShuffleStrategyType, ShuffleStrategy> = {
  "round-robin": performRoundRobin,
  random: performRandomDistribution,
  greedy: performGreedyDistribution,
  sequential: performSequentialDistribution,
};

export const getShuffleStrategy = (type: ShuffleStrategyType) =>
  STRATEGIES[type];
