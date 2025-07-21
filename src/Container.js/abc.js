export function Abc() {
  const css = [
    {
      color: "blue",
    },
  ];
  return (
    <>
      <h1 style={(css[0], { backgroundColor: "yellow" })}>hello</h1>
      <h1 style={css[0]}>ffff</h1>
    </>
  );
}
