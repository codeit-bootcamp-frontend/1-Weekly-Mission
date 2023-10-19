import Loading from "components/Loading";

function manageStatus({ isLoading, isError }: Status) {
  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <span>데이터를 가져오지 못했습니다 😭</span>;
  }
}

export default manageStatus;
