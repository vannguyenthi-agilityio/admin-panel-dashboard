interface INotFound {
  message?: string;
}

const NotFound = ({ message="Not Found" }: INotFound) => {
  return (
    <div className="flex items-center justify-center w-full min-h-[calc(100vh - 8rem)]">
      <p className="text-red-500 text-xl font-bold">{message}</p>
    </div>
  );
}

export default NotFound;
