import { UserInfo, UserProducts, Setting } from "./components/memberComponents";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const User = ({ Data, setData }) => {
  const [bodyComponant, serBodyComponant] = useState(0);
  return (
    <>
      <Helmet>
        <title>Kongregate | Account</title>
        <meta name="description" content="Kongregate | Account" />
      </Helmet>
      <UserInfo rowData={Data} serBodyComponant={serBodyComponant} />
      {bodyComponant === 0 ? (
        <UserProducts rowData={Data} />
      ) : (
        <Setting
          rowData={Data}
          setData={setData}
          serBodyComponant={serBodyComponant}
        />
      )}
    </>
  );
};

export default User;
