export const ShufflerManagerItemListEmpty = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-1 py-8 text-muted-foreground opacity-40 transition-opacity hover:opacity-100">
      <h1 className="text-lg font-semibold">oops, it&apos;s still empty!</h1>
      <p className="text-sm font-light">add some to get started</p>
    </div>
  );
};
