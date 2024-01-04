import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/usersSlice";
import { useEffect } from "react";

export default function Users() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(users.users);

  return (
    <div className="px-10 space-y-3 mt-5 border-t-2 ">
      <h1 className="text-2xl font-semibold pt-10">List Of all Clients</h1>
      <div>{users.loading && <p>Loading...</p>}</div>
      <div>{users.error && <p>{users.error}</p>}</div>
      <div>
        {!users.loading && users.users.length && (
          <div>
            {users.users.map((user) => {
              return (
                <div key={user.id}>
                  <p>{user.name}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
