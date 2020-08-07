import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, setPagination } from "../../redux/actions/users.actions";
import UsersList from "../../components/UsersList/UsersList";
import PageContainer from "../../components/Page/PageContainer/PageContainer";
import PageLoading from "../../components/Page/PageLoading/PageLoading";
import PageTitle from "../../components/Page/PageTitle/PageTitle";
import Paginator from "../../components/Paginator/Paginator";

const HomePage = () => {
  const dispatch = useDispatch();
  const { isLoading, usersList, fetchInfo, pagination } = useSelector((state) => state.users);
  useEffect(() => {
    if (!isLoading && usersList.length === 0) {
      dispatch(fetchUsers(fetchInfo));
    }
  });
  const goToNextPage = (page) => {
    if (usersList[page - 1]) {
      return dispatch(
        setPagination({
          page,
        }),
      );
    }
    return dispatch(fetchUsers(fetchInfo));
  };
  const goToPrevPage = (page) => {
    dispatch(
      setPagination({
        page,
      }),
    );
  };
  const goToPage = (page) => {
    dispatch(
      setPagination({
        page,
      }),
    );
  };
  return (
    <PageContainer>
      <PageTitle title="USERS LIST" />
      {isLoading || usersList.length === 0 ? (
        <PageLoading loadingText="Loading users..." />
      ) : (
        <div>
          <UsersList users={usersList[pagination.currentPage - 1]} />
          <Paginator
            onNextAction={(page) => goToNextPage(page)}
            onPrevAction={(page) => goToPrevPage(page)}
            onPageAction={(page) => goToPage(page)}
            count={usersList.length}
            currentPage={pagination.currentPage}
          />
        </div>
      )}
    </PageContainer>
  );
};

export default HomePage;
