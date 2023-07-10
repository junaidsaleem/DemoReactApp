
function Heading({userObj, color}) {
  return (
    <div>
      <p style={{
        color: color,
        fontSize: "50px"
      }}>{userObj.name}</p>
      <p style={{
        color: color,
        fontSize: "50px"
      }}>{userObj.username}</p>
      <p style={{
        color: color,
        fontSize: "50px"
      }}>{userObj.email}</p>
    </div>
  );
}

export default Heading;
