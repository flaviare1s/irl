export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
      <div className="w-16 h-16 border-t-4 border-primary border-solid rounded-full animate-spin"></div>
    </div>
  );
};
