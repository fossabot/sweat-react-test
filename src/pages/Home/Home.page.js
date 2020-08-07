import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/actions/users.actions";
import UsersList from "../../components/UsersList/UsersList";

const HomePage = () => {
  const dispatch = useDispatch();
  const { isLoading, usersList, fetchInfo } = useSelector((state) => state.users);
  useEffect(() => {
    if (!isLoading && usersList.length === 0) {
      dispatch(fetchUsers(fetchInfo));
    }
  });
  if (isLoading || usersList.length === 0) {
    return (
      <div>
        <p>Loading users...</p>
      </div>
    )
  }
  console.log(isLoading, usersList, fetchInfo)
  return (
    <div>
      <UsersList users={usersList[fetchInfo.page -1]} />
    </div>
  );
};

export default HomePage;
