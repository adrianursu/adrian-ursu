const Card = (props) => {
  return (
    <div className="text-center shadow-2xl p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
      {props.children}
    </div>
  );
};

export default Card;
