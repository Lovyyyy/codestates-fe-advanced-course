import styled from "styled-components";

const Footer = () => {
  const Footers = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* background-color: red; */
    position: absolute;
    margin-bottom: 20px;
    bottom: 0;

    /* transform: translateY(-100%); */
    div {
      margin: 0 20px 0 20px;
      font-size: 11px;
    }
  `;

  // const div = styled.div`
  //   margin: 0 20px 0 20px;
  // `;
  return (
    <Footers>
      <div> 개인정보처리방침 </div>
      <div> 이용 약관 </div>
      <div> 고객센터</div>
      <div> 비공개 요청 </div>

      {/* <Routes>
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes> */}
    </Footers>
  );
};

export default Footer;
