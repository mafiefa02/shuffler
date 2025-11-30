import { ShufflerManagerAddButton } from "./add-button";
import { ShufflerManagerCard } from "./card";
import { ShufflerManagerProvider } from "./context";
import { ShufflerManagerControl } from "./control/control";
import { ShufflerManagerItemList } from "./list";
import { ShufflerManagerNewInput } from "./new-input";

export const ShufflerManager = {
  Provider: ShufflerManagerProvider,
  Card: ShufflerManagerCard,
  Control: ShufflerManagerControl,
  NewInput: ShufflerManagerNewInput,
  AddButton: ShufflerManagerAddButton,
  ItemList: ShufflerManagerItemList,
};
