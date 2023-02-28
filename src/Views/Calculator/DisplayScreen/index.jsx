const DisplayScreen = ({result,calc}) => {


    return <div className="display-screen">
    {calc || 0} <br />
    {result ? <span>({result})</span> : " "}
  </div>


};

export default DisplayScreen;