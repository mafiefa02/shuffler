import { ShufflerResultActions } from "./actions";
import { ShufflerResultContent } from "./content";
import { ShufflerResultProvider } from "./context";
import { ShufflerResultDescription } from "./description";
import { ShufflerResultHeader } from "./header";
import { ShufflerResultMeta } from "./meta";

export const ShufflerResult = {
  Provider: ShufflerResultProvider,
  Actions: ShufflerResultActions,
  Content: ShufflerResultContent,
  Header: ShufflerResultHeader,
  Description: ShufflerResultDescription,
  Meta: ShufflerResultMeta,
};
