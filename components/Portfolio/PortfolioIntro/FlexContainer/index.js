const FlexContainer = (props) => {
  return (
    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
      {props.children}
    </div>
  );
};

export default FlexContainer;
