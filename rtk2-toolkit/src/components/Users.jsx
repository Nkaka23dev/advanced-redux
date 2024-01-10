export default function Users() {
  return (
    <div>
      <h1 className="text-lg text-gray-900">
        These are all users in the system
      </h1>
      <div>
        {[1, 2, 3, 4, 5].map((value, index) => {
          return (
            <div key={index} className="mt-4 space-y-1">
              <h1>Eric Nkaka</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
