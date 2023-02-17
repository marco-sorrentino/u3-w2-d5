const City = (props) => {
  return (
    <>
      <h1 className="mt-4 city">
        {props.city} , {props.temp} ° C
      </h1>
    </>
  );
};

export default City;
