// eslint-disable-next-line react/prop-types
export function Layout({ children }) {
  return (
    <>
      <header></header>
      <main>
        {children}
      </main>
    </>
  );
}
