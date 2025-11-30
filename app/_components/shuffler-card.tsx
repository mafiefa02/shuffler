import { ShufflerManager } from "@/features/shuffler/components/shuffler-manager";
import { ShufflerType } from "@/features/shuffler/types";

interface ShufflerCardProps {
  title: string;
  name: ShufflerType;
  description: string;
  placeholder: string;
}

export const ShufflerCard = ({
  title,
  name,
  description,
  placeholder,
}: ShufflerCardProps) => {
  return (
    <ShufflerManager.Card
      name={title}
      description={description}
    >
      <ShufflerManager.Provider type={name}>
        <ShufflerManager.Control>
          <ShufflerManager.NewInput placeholder={placeholder} />
          <ShufflerManager.AddButton />
        </ShufflerManager.Control>
        <ShufflerManager.ItemList />
      </ShufflerManager.Provider>
    </ShufflerManager.Card>
  );
};
