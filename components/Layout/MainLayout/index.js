const MainLayout = (props) => {
  return (
    <main className="bgLight px-10 dark:bg-gray-900 dark:bg-none md:px-20 lg:px-40">
      {props.children}
    </main>
  );
};

export default MainLayout;
